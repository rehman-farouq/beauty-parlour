import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Anabia's",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#1a0510",
    theme_color: "#1a0510",
    icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }],
  };
}
