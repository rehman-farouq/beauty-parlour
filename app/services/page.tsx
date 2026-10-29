import type { Metadata } from "next";
import ServicesView from "@/components/ServicesView";
import { SITE, SERVICE_NAMES, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beauty Services — Bridal Makeup, Hair, Skin & Nails",
  description:
    "Explore bridal makeup, party makeup, hair styling, facials & skin care, nail art and body treatments at Anabia's Beauty Parlour, Tapiala. Ladies only.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Beauty Services | Anabia's Beauty Parlour",
    description:
      "Bridal makeup, hair styling, skin care, nail art and more — crafted for women.",
    url: "/services",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
      ],
    },
    {
      "@type": "ItemList",
      name: `${SITE.name} — Services`,
      itemListElement: SERVICE_NAMES.map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Service", name, provider: { "@id": absoluteUrl("/#salon") } },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ServicesView />
    </>
  );
}
