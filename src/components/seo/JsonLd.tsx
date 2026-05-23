import { SITE } from "@/lib/utils";
import { SERVICE_AREA } from "@/content/service-area";
import type { Service } from "@/content/services";
import type { Tip } from "@/content/tips";

/** Generic JSON-LD renderer. Pass a single schema object or an array (which
 *  will be wrapped in an @graph). Safe against `</script>` content via
 *  string replace. */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : data;
  // Avoid breaking the <script> tag if user-supplied content contains a
  // closing tag (defensive — none of our data does today).
  const json = JSON.stringify(payload).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

// ─── Schema factories ───────────────────────────────────────────────────

const BUSINESS_ID = `${SITE.url}/#business`;

/** Plumber (subtype of LocalBusiness). Single source of truth — referenced
 *  by Service, FAQPage, etc. via @id. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": BUSINESS_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    image: `${SITE.url}/opengraph-image`,
    logo: `${SITE.url}/opengraph-image`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.lat,
      longitude: SITE.address.lng,
    },
    areaServed: SERVICE_AREA.map((c) => ({
      "@type": "City",
      name: c.name,
    })),
    sameAs: [SITE.instagram, SITE.google],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      reviewCount: "6",
    },
  };
}

/** Website-level identity, lets Google know how the site is named in
 *  search results. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.shortName,
    url: SITE.url,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-CA",
  };
}

/** Per-service schema linked to the parent business. */
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${service.slug}#service`,
    name: service.title,
    description: service.short,
    serviceType: service.title,
    provider: { "@id": BUSINESS_ID },
    areaServed: SERVICE_AREA.map((c) => ({
      "@type": "City",
      name: c.name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} — what's included`,
      itemListElement: service.included.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      })),
    },
  };
}

/** FAQPage from a service's FAQ array. */
export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

/** BlogPosting for a tip article. */
export function blogPostingSchema(tip: Tip, urlPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE.url}${urlPath}#post`,
    headline: tip.title,
    description: tip.excerpt,
    image: `${SITE.url}/opengraph-image`,
    datePublished: tip.date,
    dateModified: tip.date,
    inLanguage: "en-CA",
    articleSection: tip.category,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: { "@id": BUSINESS_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}${urlPath}`,
    },
  };
}

/** Breadcrumb trail. Pass items in order, root first. The first item is
 *  treated as the canonical home. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

/** ItemList — used on the services index to flag the list of offerings. */
export function servicesItemListSchema(services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/services/${s.slug}`,
      name: s.title,
    })),
  };
}
