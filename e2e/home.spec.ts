import { expect, test } from "@playwright/test";

test("home page shows getting started heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /to get started/i }),
  ).toBeVisible();
});
