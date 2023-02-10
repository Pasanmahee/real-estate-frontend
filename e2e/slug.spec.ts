import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('select[name="location"]').selectOption('Deering Bay Drive, Coral Gables, FL 33156, USA');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('select[name="type"]').selectOption('Villa');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('select[name="location"]').selectOption('Pinecrest, Miami-Dade County, Florida');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'For Sale Single Home at Florida 5, Pinecrest 5500 Sq ft Pinecrest, Miami-Dade County, Florida Single 580000 LKR' }).click();
  await page.getByRole('link', { name: 'For Sale Villa in Coral Gables 3500 Sq ft Deering Bay Drive, Coral Gables, FL 33156, USA Villa 825000 LKR' }).click();
});