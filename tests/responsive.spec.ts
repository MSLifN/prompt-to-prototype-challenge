import { test, expect } from '@playwright/test';

/**
 * Test suite for responsive design.
 * Covers Issue #5: Site is responsive on mobile, tablet, and desktop
 */

const pagesToTest = [
  { path: '/', name: 'Home' },
  { path: '/idea-generation.html', name: 'Idea Generation' },
  { path: '/code-prototyping.html', name: 'Code Prototyping' },
  { path: '/option-b/', name: 'Option B Index' },
];

test.describe('Desktop Layout', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  for (const pageInfo of pagesToTest) {
    test(`${pageInfo.name} displays correctly on desktop`, async ({ page }) => {
      await page.goto(pageInfo.path);
      await page.waitForLoadState('networkidle');
      
      // Main content element should exist
      const main = page.locator('main, #main-content, .main-content');
      const mainCount = await main.count();
      expect(mainCount, 'Should have main content element').toBeGreaterThan(0);
      
      // Check no horizontal scroll
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalScroll, 'Should not have horizontal scroll on desktop').toBe(false);
    });
  }
});

test.describe('Tablet Layout', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  for (const pageInfo of pagesToTest) {
    test(`${pageInfo.name} displays correctly on tablet`, async ({ page }) => {
      await page.goto(pageInfo.path);
      await page.waitForLoadState('networkidle');
      
      // Main content element should exist
      const main = page.locator('main, #main-content, .main-content');
      const mainCount = await main.count();
      expect(mainCount, 'Should have main content element').toBeGreaterThan(0);
      
      // Content should be readable (check font size is reasonable)
      const fontSize = await page.evaluate(() => {
        const body = document.body;
        return parseInt(window.getComputedStyle(body).fontSize);
      });
      expect(fontSize).toBeGreaterThanOrEqual(14);
      
      // Check no horizontal scroll
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalScroll, 'Should not have horizontal scroll on tablet').toBe(false);
    });
  }
});

test.describe('Mobile Layout', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE

  for (const pageInfo of pagesToTest) {
    test(`${pageInfo.name} displays correctly on mobile`, async ({ page }) => {
      await page.goto(pageInfo.path);
      await page.waitForLoadState('networkidle');
      
      // Main content element should exist
      const main = page.locator('main, #main-content, .main-content');
      const mainCount = await main.count();
      expect(mainCount, 'Should have main content element').toBeGreaterThan(0);
      
      // Text should be readable
      const fontSize = await page.evaluate(() => {
        const body = document.body;
        return parseInt(window.getComputedStyle(body).fontSize);
      });
      expect(fontSize).toBeGreaterThanOrEqual(14);
      
      // Check no significant horizontal scroll (allow small margin)
      const scrollDiff = await page.evaluate(() => {
        return document.documentElement.scrollWidth - document.documentElement.clientWidth;
      });
      expect(scrollDiff, 'Should not have significant horizontal scroll on mobile').toBeLessThan(20);
    });
  }

  test('navigation is accessible on mobile', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Either sidebar exists or there's a menu button
    const sidebar = page.locator('nav.sidebar, .sidebar');
    const menuButton = page.locator('[aria-label*="menu"], [aria-label*="Menu"], .menu-toggle, .hamburger');
    
    const sidebarExists = await sidebar.count() > 0;
    const menuButtonExists = await menuButton.count() > 0;
    
    // At least one navigation method should be available
    expect(sidebarExists || menuButtonExists, 
      'Navigation should be accessible on mobile (sidebar or menu button)'
    ).toBe(true);
  });
});

test.describe('Content Readability', () => {
  test('text has sufficient line height', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const lineHeight = await page.evaluate(() => {
      const p = document.querySelector('p');
      if (!p) return 1.5;
      const style = window.getComputedStyle(p);
      const fontSize = parseFloat(style.fontSize);
      const lh = parseFloat(style.lineHeight);
      return lh / fontSize;
    });
    
    expect(lineHeight).toBeGreaterThanOrEqual(1.2);
  });

  test('content containers exist with reasonable structure', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Main content element should exist
    const main = await page.evaluate(() => {
      const mainEl = document.querySelector('main, .main-content, article');
      return mainEl !== null;
    });
    
    expect(main, 'Should have main content container').toBe(true);
  });
});

test.describe('Images and Media', () => {
  test('images are responsive', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < Math.min(count, 5); i++) {
      const img = images.nth(i);
      
      // Check image has max-width or is contained
      const isResponsive = await img.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return style.maxWidth !== 'none' || 
               el.style.width?.includes('%') ||
               el.hasAttribute('width');
      });
      
      // Images should handle responsiveness somehow
      const width = await img.evaluate(el => el.getBoundingClientRect().width);
      const viewportWidth = await page.evaluate(() => window.innerWidth);
      
      expect(width, `Image ${i} should not exceed viewport`).toBeLessThanOrEqual(viewportWidth);
    }
  });
});

test.describe('Touch Targets', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('buttons and links have adequate touch target size', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const interactiveElements = page.locator('a, button');
    const count = await interactiveElements.count();
    
    let smallTargets = 0;
    for (let i = 0; i < Math.min(count, 20); i++) {
      const element = interactiveElements.nth(i);
      
      if (await element.isVisible()) {
        const box = await element.boundingBox();
        if (box) {
          // WCAG recommends 44x44px minimum touch target
          // We'll use 24px as minimum (allowing for inline links)
          if (box.width < 24 || box.height < 24) {
            smallTargets++;
          }
        }
      }
    }
    
    // Allow some small targets (inline links) but flag if too many
    expect(smallTargets, 'Too many small touch targets').toBeLessThan(10);
  });
});
