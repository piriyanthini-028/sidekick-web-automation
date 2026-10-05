import { test, expect } from '@playwright/test';

// Sample smoke test for sidekick-web.
// Run the sidekick-web app first (npm run dev in the app folder) so it is
// reachable at the baseURL, or set BASE_URL to a deployed environment.
test('home page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/.+/); // page has a non-empty title
});
