import { test, expect } from '@playwright/test';

test.describe('MODULE 1 - LOGIN & REGISTRATION', () => {

    test('TC_001 - Login attempt and Register new user', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
        await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
        await expect(page.locator('body')).toBeVisible();

        // Click Log in
        await page.locator('a.ico-login').click();
        await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
        await expect(page.locator('#Email')).toBeVisible();

        // Enter email and password
        var email = 'testuser123@example.com';
        await page.locator('#Email').fill(email);
        await page.locator('#Password').fill('Test@12345');

        // Click login button (fails because email is new)
        await page.locator('input.login-button').click();

        // Click Register
        await page.locator('a.ico-register').click();
        await expect(page).toHaveURL('https://demowebshop.tricentis.com/register');
        await expect(page.locator('#FirstName')).toBeVisible();
        console.log('Clicked Register button');

        // Fill registration form
        await page.locator('#gender-female').check();
        await page.locator('#FirstName').fill('janhavi');
        await page.locator('#LastName').fill('patil');
        await page.locator('#Email').fill(email);
        await page.locator('#Password').fill('Test@12345');
        await page.locator('#ConfirmPassword').fill('Test@12345');

        // Submit registration
        await page.locator('#register-button').click();
    })
})