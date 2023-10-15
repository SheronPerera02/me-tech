import { test } from "@playwright/test";

test("Display house info", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.waitForSelector(".house-info");

  const productList = await page.$(".house-info");

  if (productList) {
    console.log("House info displayed");
  } else {
    console.error("House info not displayed");
  }
});
