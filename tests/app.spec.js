// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});


test.describe('Hotels List', () => {
  test('should be able to see hotels', async ({ page }) => {
    await expect(page.locator('[data-testid="hotel-card"]')).toHaveCount(5);
  });

  test('should be able to see sort selector', async ({ page }) => {
    await expect(page.locator('#select')).toHaveCount(1);
  });

  test('should be able to sort hotels', async ({ page }) => {
    await page.selectOption('#select', 'ascending-offer.displayPrice.amount');
    await expect(page.locator('[data-testid="price"]').nth(0)).toHaveText(/227/);
    await expect(page.locator('[data-testid="price"]').nth(1)).toHaveText(/295/);
    await expect(page.locator('[data-testid="price"]').nth(2)).toHaveText(/329/);
    await expect(page.locator('[data-testid="price"]').nth(3)).toHaveText(/375/);
    await expect(page.locator('[data-testid="price"]').nth(4)).toHaveText(/535/);

    await page.selectOption('#select', 'descending-offer.displayPrice.amount');
    await expect(page.locator('[data-testid="price"]').nth(0)).toHaveText(/535/);
    await expect(page.locator('[data-testid="price"]').nth(1)).toHaveText(/375/);
    await expect(page.locator('[data-testid="price"]').nth(2)).toHaveText(/329/);
    await expect(page.locator('[data-testid="price"]').nth(3)).toHaveText(/295/);
    await expect(page.locator('[data-testid="price"]').nth(4)).toHaveText(/227/);
  });
});

