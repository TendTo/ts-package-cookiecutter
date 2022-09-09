import { test, expect } from '@playwright/test';

test('the button changes the content afte being clicked', async function ({ page }) {
  await page.goto('/');

  await page.evaluate(() => new {{cookiecutter.package_export}}.Test('#testButton'));

  await expect(page).toHaveTitle(/Test/);

  await page.locator('#testButton').click();

  await expect(page.locator('#testButton')).toHaveText(/Fest/);
});
