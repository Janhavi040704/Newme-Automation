import { test, expect } from '@playwright/test';

test.describe('MODULE 3 - search', () => {
test('TC_038 - Search valid keyword', async ({ page }) => {

    await page.goto('https://newme.asia/');
    await page.locator('(//button[@class="customButton customButton--noScale customButton--transparent p-0"])[1]').click();
    const searchBox = page.locator('//input[@type="search"]');
    await searchBox.fill('dress');
    await searchBox.press('Enter');

});
test('TC_039 - Search invalid keyword', async ({ page }) => {

    await page.goto('https://newme.asia/');
    await page.locator('(//button[@class="customButton customButton--noScale customButton--transparent p-0"])[1]').click();
    const searchBox = page.locator('//input[@type="search"]');
    await searchBox.fill('xyzqwerty987654321555555');
    await searchBox.press('Enter');

});

test('TC_040 - Search blank keyword', async ({ page }) => {

    await page.goto('https://newme.asia/');
    await page.locator('(//button[@class="customButton customButton--noScale customButton--transparent p-0"])[1]').click();
    const searchBox = page.locator('//input[@type="search"]');
    await searchBox.fill('');
    await searchBox.press('Enter');

});
test('TC_041 - Search partial keyword', async ({ page }) => {

    await page.goto('https://newme.asia/');
    await page.locator('(//button[@class="customButton customButton--noScale customButton--transparent p-0"])[1]').click();
    const searchBox = page.locator('//input[@type="search"]');
    await searchBox.fill('dre');
    await searchBox.press('Enter');

});



test('TC_042 - Clear Search Keyword', async ({ page }) => {

    await page.goto('https://newme.asia/');

    await page.locator('(//button[@class="customButton customButton--noScale customButton--transparent p-0"])[1]').click();
    const searchBox = page.locator('//input[@type="search"]');
    await searchBox.fill('SHORTS');
    await searchBox.press('Enter');
    await page.goBack();

});
});