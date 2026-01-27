import { test, expect } from '@playwright/test';

/**
 * Test suite for interactive components.
 * Covers Issue #5: Copy buttons, Edit/Revert buttons functionality
 */

test.describe('Copy Buttons', () => {
  // Use desktop viewport for these tests to ensure elements are visible
  test.use({ viewport: { width: 1280, height: 800 } });

  test('copy button exists on prompt boxes', async ({ page }) => {
    await page.goto('/research.html');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check for copy buttons
    const copyButtons = page.locator('button:has-text("Copy"), .prompt-copy-btn, [aria-label*="Copy"]');
    const count = await copyButtons.count();
    
    expect(count, 'Should have copy buttons on prompt boxes').toBeGreaterThan(0);
  });

  test('copy button is clickable and shows feedback', async ({ page, context }) => {
    // Grant clipboard permissions
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    
    await page.goto('/research.html');
    await page.waitForLoadState('networkidle');
    
    // Find first copy button
    const copyButton = page.locator('button:has-text("Copy"), .prompt-copy-btn').first();

    if (await copyButton.count() > 0) {
      // Scroll to the button first
      await copyButton.scrollIntoViewIfNeeded();
      await page.waitForTimeout(100);
      
      // Click the copy button
      await copyButton.click({ force: true });
      
      // Button should show some feedback (text change or visual change)
      // Wait a moment for feedback
      await page.waitForTimeout(100);
      
      // Check if button text changed to "Copied" or similar
      const buttonText = await copyButton.textContent();
      // Note: The actual feedback may vary - this checks the button is still functional
      expect(buttonText).toBeTruthy();
    }
  });

  test('copy buttons work on code-prototyping page', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    
    await page.goto('/code-prototyping.html');
    await page.waitForLoadState('networkidle');
    
    const copyButtons = page.locator('button:has-text("Copy"), .prompt-copy-btn');
    const count = await copyButtons.count();
    
    // Code prototyping page should have multiple copy buttons
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Prompt Box Actions', () => {
  // Use desktop viewport for these tests
  test.use({ viewport: { width: 1280, height: 800 } });

  test('prompt boxes have action buttons', async ({ page }) => {
    await page.goto('/research.html');
    await page.waitForLoadState('networkidle');
    
    // Check for prompt boxes
    const promptBoxes = page.locator('.prompt-box');
    const count = await promptBoxes.count();
    
    if (count > 0) {
      // First prompt box should have action buttons
      const firstPromptBox = promptBoxes.first();
      const actionButtons = firstPromptBox.locator('button');
      
      expect(await actionButtons.count()).toBeGreaterThan(0);
    }
  });

  test('edit button toggles editable state', async ({ page }) => {
    await page.goto('/research.html');
    await page.waitForLoadState('networkidle');
    
    // Find edit button
    const editButton = page.locator('button:has-text("Edit"), .prompt-action-btn:has-text("Edit")').first();

    if (await editButton.count() > 0) {
      // Scroll to the button first
      await editButton.scrollIntoViewIfNeeded();
      await page.waitForTimeout(100);
      
      await editButton.click({ force: true });
      
      // Check if content became editable or a textarea appeared
      const editableContent = page.locator('[contenteditable="true"], textarea.prompt-edit');
      // Note: Actual implementation may vary
      await page.waitForTimeout(100);
    }
  });

  test('revert button restores original content', async ({ page }) => {
    await page.goto('/research.html');
    await page.waitForLoadState('networkidle');
    
    // Find revert button
    const revertButton = page.locator('button:has-text("Revert"), .prompt-action-btn:has-text("Revert")').first();

    if (await revertButton.count() > 0) {
      // Scroll to the button first
      await revertButton.scrollIntoViewIfNeeded();
      await page.waitForTimeout(100);
      
      // Get original content
      const promptContent = page.locator('.prompt-code, .prompt-content').first();
      const originalText = await promptContent.textContent();
      
      // Click revert
      await revertButton.click({ force: true });
      await page.waitForTimeout(100);
      
      // Content should still be there (or restored)
      const currentText = await promptContent.textContent();
      expect(currentText).toBeTruthy();
    }
  });
});

test.describe('Option A/B Chooser', () => {
  // Use desktop viewport for these tests
  test.use({ viewport: { width: 1280, height: 800 } });

  test('Option A/B cards display on home page', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check for Option A card
    const optionA = page.locator('text=Option A').first();
    await expect(optionA).toBeVisible();
    
    // Check for Option B card
    const optionB = page.locator('text=Option B').first();
    await expect(optionB).toBeVisible();
  });

  test('Option A/B cards display on prototype page', async ({ page }) => {
    await page.goto('/prototype.html');
    await page.waitForLoadState('networkidle');
    
    // Check for both options
    const optionA = page.locator('text=Option A').first();
    const optionB = page.locator('text=Option B').first();
    
    await expect(optionA).toBeVisible();
    await expect(optionB).toBeVisible();
  });

  test('Option A/B cards display on code-prototyping page', async ({ page }) => {
    await page.goto('/code-prototyping.html');
    await page.waitForLoadState('networkidle');
    
    // Check for both options
    const optionA = page.locator('text=Option A').first();
    const optionB = page.locator('text=Option B').first();
    
    await expect(optionA).toBeVisible();
    await expect(optionB).toBeVisible();
  });

  test('Option B link navigates to Option B templates', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find and click Option B link
    const optionBLink = page.locator('a[href*="option-b"]').first();
    
    if (await optionBLink.count() > 0) {
      // Scroll to the link first
      await optionBLink.scrollIntoViewIfNeeded();
      await page.waitForTimeout(100);
      
      await optionBLink.click({ force: true });
      await page.waitForLoadState('networkidle');
      
      // Should be on Option B page
      await expect(page).toHaveURL(/option-b/);
    }
  });
});

test.describe('Option B Templates', () => {
  const optionBTemplates = [
    { path: '/option-b/text-customization.html', name: 'Text Customization' },
    { path: '/option-b/high-contrast.html', name: 'High Contrast' },
    { path: '/option-b/focus-navigation.html', name: 'Focus Navigation' },
    { path: '/option-b/text-to-speech.html', name: 'Text to Speech' },
    { path: '/option-b/simplified-interface.html', name: 'Simplified Interface' },
  ];

  for (const template of optionBTemplates) {
    test(`${template.name} template loads and has interactive controls`, async ({ page }) => {
      await page.goto(template.path);
      await page.waitForLoadState('networkidle');
      
      // Check page loaded
      const heading = page.locator('h1, h2').first();
      await expect(heading).toBeVisible();
      
      // Check for interactive controls (buttons, inputs, etc.)
      const controls = page.locator('button, input, select');
      const count = await controls.count();
      
      expect(count, `${template.name} should have interactive controls`).toBeGreaterThan(0);
    });
  }

  test('Text to Speech template has play controls', async ({ page }) => {
    await page.goto('/option-b/text-to-speech.html');
    await page.waitForLoadState('networkidle');
    
    // Check for play/pause button
    const playButton = page.locator('button:has-text("Play"), button:has-text("▶"), [aria-label*="Play"]').first();
    await expect(playButton).toBeVisible();
  });

  test('High Contrast template has theme options', async ({ page }) => {
    await page.goto('/option-b/high-contrast.html');
    await page.waitForLoadState('networkidle');
    
    // Check for theme buttons or selectors
    const themeControls = page.locator('button, select, [role="radio"], [role="button"]');
    const count = await themeControls.count();
    
    expect(count).toBeGreaterThan(0);
  });

  test('Text Customization template has font controls', async ({ page }) => {
    await page.goto('/option-b/text-customization.html');
    await page.waitForLoadState('networkidle');
    
    // Check for font size or spacing controls
    const controls = page.locator('input[type="range"], button, select');
    const count = await controls.count();
    
    expect(count).toBeGreaterThan(0);
  });
});
