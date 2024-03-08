import { expect, test } from '@playwright/test';

test('test banner', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: 'sun moon Toggle theme' }).click();
	await page.getByRole('button', { name: 'sun moon Toggle theme' }).click();
	await page.getByRole('link', { name: 'Dev Tools' }).click();
	expect(page.url()).toContain("/")
	await page.getByRole('link', { name: 'MoSCoW' }).click();
	expect(page.url()).toContain("/apps/moscow")
	await page.getByRole('link', { name: 'Sprint-Review' }).click();
	expect(page.url()).toContain("/apps/sprintreview")
	await page.getByRole('link', { name: 'Dev Tools' }).click();
	expect(page.url()).toContain("/")
	await expect(page.getByRole('banner')).toContainText('Sprint-Review');
	await expect(page.getByRole('banner')).toContainText('MoSCoW');
});