import { test, expect } from '@playwright/test';

test('verify about page content and learn removal', async ({ page }) => {
  await page.goto('http://localhost:3006');

  // Verify LEARN is not in the navbar
  const nav = page.locator('nav');
  await expect(nav).not.toContainText('LEARN');

  // Navigate to ABOUT - using a more specific selector
  const aboutButton = page.locator('button').filter({ hasText: /^ABOUT$/ });
  await aboutButton.click();

  // Verify heading - "Forgotten Knowledge" is in an h3
  const aboutHeading = page.locator('h3').filter({ hasText: 'Forgotten Knowledge' });
  await expect(aboutHeading).toBeVisible();

  // Verify text content
  const aboutSection = page.locator('div').filter({ hasText: 'This is the museum of inventions' }).first();
  await expect(aboutSection).toContainText('Forgotten Knowledge');
  await expect(aboutSection).toContainText('Efe Baylan');
  await expect(aboutSection).toContainText('tought it would be a good idea');
  await expect(aboutSection).toContainText('belive that believe that');
  await expect(aboutSection).toContainText('The past is never dead');
  await expect(aboutSection).toContainText('Socrates');

  // Check images - they are in the About component
  const images = page.locator('img[alt="Forgotten Knowledge"], img[alt="Socrates"]');
  await expect(images).toHaveCount(2);

  // Take a full page screenshot
  await page.screenshot({ path: '/home/jules/verification/about_section_verified.png', fullPage: true });
});
