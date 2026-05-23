import { SITE } from "@/lib/utils";
import { SERVICE_AREA } from "@/content/service-area";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    // Plumber is a subtype of LocalBusiness, so this satisfies both.
    "@type": "Plumber",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    image: `${SITE.url}/og.jpg`,
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
