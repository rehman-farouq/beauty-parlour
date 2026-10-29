import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE, SERVICE_NAMES, absoluteUrl } from "@/lib/site";

const playfair = localFont({
  src: [
    { path: "./fonts/playfair-display-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/playfair-display-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = localFont({
  src: "./fonts/great-vibes-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "./fonts/poppins-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/poppins-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/poppins-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1a0510",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Anabia's Beauty Parlour | Bridal Makeup & Ladies Salon",
    template: "%s | Anabia's Beauty Parlour",
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: false },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "/",
    siteName: SITE.name,
    title: "Anabia's Beauty Parlour | Enhancing Beauty, Boosting Confidence",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Anabia's Beauty Parlour | Bridal Makeup & Ladies Salon",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const salonJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": absoluteUrl("/#salon"),
  name: SITE.name,
  slogan: SITE.tagline,
  description: SITE.description,
  url: absoluteUrl("/"),
  image: absoluteUrl("/opengraph-image.jpg"),
  logo: absoluteUrl("/images/icon.webp"),
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: SITE.hours.opens,
    closes: SITE.hours.closes,
  },
  audience: { "@type": "PeopleAudience", suggestedGender: "female" },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(`${SITE.address.street}, ${SITE.address.locality}, Pakistan`),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Beauty Services",
    itemListElement: SERVICE_NAMES.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${greatVibes.variable} ${poppins.variable} font-body bg-wine-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(salonJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider>
          <ScrollProgress />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
