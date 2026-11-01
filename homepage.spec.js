import { test, expect } from '@playwright/test';
test.describe('MODULE 2 - HOMEPAGE', () => {

    test('TC_06 - Verify homepage UI', async ({ page }) => {

        await page.goto('https://newme.asia/');

        await expect(page.locator('body')).toBeVisible();

        // Scroll from top to bottom
        await page.mouse.wheel(0, 10000);

        await expect(page.locator('body')).toBeVisible();
    });


    test('TC_07 - Verify promotional banner', async ({ page, context }) => {

        await page.goto('https://newme.asia/');

        // Promotional banner (opens in a new tab)
        const banner = page.locator('a').filter({ has: page.locator('img') }).first();

        await expect(banner).toBeVisible();

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            banner.click(),
        ]);

        await expect(newPage).not.toHaveURL('https://newme.asia/');
    });


    test('TC_08 - Verify Denim shortcut', async ({ page }) => {

        await page.goto('https://newme.asia/');

        await page.getByText('Denim', { exact: true }).click();

        await expect(page).not.toHaveURL('https://newme.asia/');
    });


    test('TC_09 - Verify Bottoms shortcut', async ({ page }) => {

        await page.goto('https://newme.asia/');

        await page.getByText('Bottoms', { exact: true }).click();

        await expect(page).not.toHaveURL('https://newme.asia/');
    });


    test('TC_10 - Verify Tops shortcut', async ({ page }) => {

        await page.goto('https://newme.asia/');

        await page.getByText('Tops', { exact: true }).click();

        await expect(page).not.toHaveURL('https://newme.asia/');
    });

});
