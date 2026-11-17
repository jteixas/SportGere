import { expect, test } from "@playwright/test";

test("abre a página inicial da SportGere", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/SportGere/);
  await expect(
    page.getByRole("heading", { level: 1, name: "SportGere" }),
  ).toBeVisible();
});
