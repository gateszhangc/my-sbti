const fallbackSiteUrl = "https://my-sbti.lol";

const rawSiteUrl = process.env.NEXT_PUBLIC_WEB_URL?.trim();
const siteUrl = rawSiteUrl ? rawSiteUrl.replace(/\/+$/, "") : fallbackSiteUrl;

export const siteConfig = {
  name: "My SBTI",
  domain: "my-sbti.lol",
  url: siteUrl,
  description:
    "My SBTI is a sharper guide to SBTI and the Science Based Targets initiative: what science-based targets are, how validation works, and where companies usually get stuck.",
  ogDescription:
    "A concise editorial guide to SBTI, science-based targets, validation, and net-zero planning.",
  keywords: [
    "SBTI",
    "SBTi",
    "science based targets",
    "science based targets initiative",
    "science-based targets initiative",
    "SBTI validation",
    "net zero target",
    "emissions target",
  ],
  socialImage: "/brand/my-sbti-mark-1024.png",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "",
  clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() || "",
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
