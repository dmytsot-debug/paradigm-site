import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { TIPS } from "@/content/tips";
import { SITE } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/about", "/services", "/contact", "/tips"];
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  const tipRoutes = TIPS.map((t) => `/tips/${t.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...tipRoutes].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency:
      path === "" ? "weekly" : path.startsWith("/tips") ? "monthly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
