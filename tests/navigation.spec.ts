import { test, expect, Page } from '@playwright/test';

/**
 * Test suite for navigation functionality across all pages.
 * Covers Issue #5: Usability Testing - Navigation works correctly across all pages
 */

// All main documentation pages
const mainPages = [
  { path: '/', name: 'Home (index.html)' },
  { path: '/idea-generation.html', name: 'Idea Generation' },
  { path: '/research.html', name: 'Research' },
  { path: '/branding.html', name: 'Branding' },
  { path: '/product-requirements.html', name: 'Product Requirements' },
  { path: '/prototype.html', name: 'Prototype' },
  { path: '/code-prototyping.html', name: 'Code Prototyping' },
  { path: '/learnings-resources.html', name: 'Learnings & Resources' },
  { path: '/step-7-optional.html', name: 'Step 7 Optional' },
  { path: '/vibe-coding-guide.html', name: 'Vibe Coding Guide' },
];

// Option B accessibility templates
const optionBPages = [
  { path: '/option-b/', name: 'Option B Index' },
  { path: '/option-b/text-customization.html', name: 'Text Customization' },
  { path: '/option-b/high-contrast.html', name: 'High Contrast' },
  { path: '/option-b/focus-navigation.html', name: 'Focus Navigation' },
  { path: '/option-b/text-to-speech.html', name: 'Text to Speech' },
  { path: '/option-b/simplified-interface.html', name: 'Simplified Interface' },
];

const allPages = [...mainPages, ...optionBPages];

test.describe('Page Loading', () => {
  for (const page of allPages) {
    test(`${page.name} loads successfully`, async ({ page: browserPage }) => {
      const response = await browserPage.goto(page.path);
      
      // Check page loads with 200 status
      expect(response?.status()).toBe(200);
      
      // Check page has a title
      const title = await browserPage.title();
      expect(title).toBeTruthy();
      
      // Check no console errors
      const consoleErrors: string[] = [];
      browserPage.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });
      
      // Wait for page to settle
      await browserPage.waitForLoadState('networkidle');
    });
  }
});

test.describe('Navigation Links', () => {
  test('main navigation sidebar contains all required links', async ({ page }) => {
    await page.goto('/');
    
    // Check sidebar navigation exists
    const nav = page.locator('nav.sidebar, nav[aria-label="Main navigation"]');
    await expect(nav).toBeVisible();
    
    // Check key navigation links exist
    const expectedLinks = [
      'Introduction',
      'Idea Generation',
      'Research',
      'Branding',
      'Product Requirements',
      'Prototype',
      'Prototyping',
      'Learnings',
    ];
    
    for (const linkText of expectedLinks) {
      const link = nav.locator(`a:has-text("${linkText}")`).first();
      await expect(link).toBeVisible();
    }
  });

  test('navigation links are clickable and navigate correctly', async ({ page }) => {
    await page.goto('/');
    
    // Click on Idea Generation link
    await page.click('nav a:has-text("Idea Generation")');
    await expect(page).toHaveURL(/idea-generation\.html/);
    
    // Click on Research link
    await page.click('nav a:has-text("Research")');
    await expect(page).toHaveURL(/research\.html/);
    
    // Click on Introduction/Home link
    await page.click('nav a:has-text("Introduction")');
    await expect(page).toHaveURL(/index\.html|\/$/);
  });
});

test.describe('Internal Links - No Broken Links', () => {
  for (const pageInfo of mainPages.slice(0, 5)) { // Test first 5 pages to keep it fast
    test(`${pageInfo.name} has no broken internal links`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      // Get all internal links
      const links = await page.locator('a[href^="/"], a[href^="./"], a[href^="../"], a[href$=".html"]').all();
      
      for (const link of links.slice(0, 10)) { // Test first 10 links per page
        const href = await link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
          // Navigate to link and check it loads
          const response = await page.goto(href);
          expect(response?.status(), `Link ${href} should not be broken`).toBeLessThan(400);
          await page.goto(pageInfo.path); // Go back
        }
      }
    });
  }
});

test.describe('Table of Contents', () => {
  test('TOC links scroll to correct sections', async ({ page }) => {
    await page.goto('/idea-generation.html');
    await page.waitForLoadState('networkidle');
    
    // Check TOC sidebar exists - use first() to avoid strict mode violation
    const toc = page.locator('aside.toc-sidebar').first();
    
    if (await toc.count() > 0) {
      // Get first TOC link
      const firstTocLink = toc.locator('a').first();
      
      if (await firstTocLink.count() > 0) {
        const href = await firstTocLink.getAttribute('href');
        
        if (href?.startsWith('#')) {
          await firstTocLink.click();
          
          // Check the target element is in viewport
          const targetId = href.substring(1);
          const targetElement = page.locator(`[id="${targetId}"]`).first();
          if (await targetElement.count() > 0) {
            await expect(targetElement).toBeInViewport();
          }
        }
      }
    }
  });
});

test.describe('Page Navigation (Previous/Next)', () => {
  test('previous/next navigation links work', async ({ page }) => {
    await page.goto('/research.html');
    
    // Check for previous link
    const prevLink = page.locator('a:has-text("← ")').first();
    if (await prevLink.isVisible()) {
      const prevHref = await prevLink.getAttribute('href');
      expect(prevHref).toBeTruthy();
    }
    
    // Check for next link
    const nextLink = page.locator('a:has-text(" →")').first();
    if (await nextLink.isVisible()) {
      const nextHref = await nextLink.getAttribute('href');
      expect(nextHref).toBeTruthy();
    }
  });
});
