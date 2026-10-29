const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE = {
  name: "Anabia's Beauty Parlour",
  tagline: "Enhancing Beauty, Boosting Confidence",
  // Production domain: set NEXT_PUBLIC_SITE_URL in .env / hosting dashboard
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  phone: "+923456920533",
  phoneDisplay: "+92 345 6920533",
  address: {
    street: "House #373, Black Gate, Near Ada",
    locality: "Tapiala",
    region: "Punjab",
    country: "PK",
  },
  // Same hours as shown on the site (VisitUs.tsx) — update both together
  hours: { opens: "09:00", closes: "12:00" },
  description:
    "Anabia's Beauty Parlour in Tapiala — bridal & party makeup, hair styling, skin care and nail art for ladies only. Hygienic salon, premium products, experienced staff.",
  keywords: [
    "beauty parlour in Tapiala",
    "bridal makeup Tapiala",
    "ladies beauty salon",
    "Pakistani bridal makeup",
    "HD makeup",
    "hair styling",
    "facial and skin care",
    "nail art",
    "party makeup",
    "Kharian beauty parlour",
    "Gujrat beauty salon",
    "Anabia's Beauty Parlour",
  ],
} as const;

export const SERVICE_NAMES = [
  "Bridal Makeup",
  "Hair Styling",
  "Skin Care",
  "Makeup & Skincare",
  "Nail Art",
  "Party & Event Makeup",
  "Body Treatments",
] as const;

export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();
