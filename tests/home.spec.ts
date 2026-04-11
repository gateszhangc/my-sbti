import { expect, test } from "@playwright/test";

test("homepage renders the SBTI editorial landing experience", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/My SBTI/i);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /SBTI, decoded for teams that need targets that hold up/i,
    }),
  ).toBeVisible();
  await expect(page.getByText("What SBTI means")).toBeVisible();
  await expect(
    page.getByRole("img", { name: /My SBTI logo/i }),
  ).toBeVisible();
  await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
    "href",
    "https://my-sbti.lol",
  );
  await expect(page.locator("meta[name='description']")).toHaveAttribute(
    "content",
    /Science Based Targets initiative/i,
  );
  const jsonLd = await page
    .locator("script[type='application/ld+json']")
    .first()
    .textContent();
  expect(jsonLd).toContain("Science Based Targets initiative");
});

test("faq accordion opens and reveals the primary SBTI definition", async ({
  page,
}) => {
  await page.goto("/");

  const trigger = page.getByRole("button", {
    name: /What does SBTI stand for\?/i,
  });
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");

  await expect(
    page.locator("[data-slot='accordion-content']").first(),
  ).toContainText(/SBTI stands for the Science Based Targets initiative/i);
});

test("technical seo routes are reachable", async ({ request }) => {
  const robotsResponse = await request.get("/robots.txt");
  expect(robotsResponse.ok()).toBeTruthy();
  await expect(await robotsResponse.text()).toContain(
    "Sitemap: https://my-sbti.lol/sitemap.xml",
  );

  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBeTruthy();
  await expect(await sitemapResponse.text()).toContain(
    "<loc>https://my-sbti.lol/</loc>",
  );
});
