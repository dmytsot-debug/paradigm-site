import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Paradigm Services and Installations LTD",
  shortName: "Paradigm Services",
  owner: "Jon",
  phone: "778-938-5311",
  phoneHref: "tel:7789385311",
  email: "info@paradigmplumbinggas.com",
  emailHref: "mailto:info@paradigmplumbinggas.com",
  instagram: "https://www.instagram.com/paradigmservices.ca/",
  /** Canonical "open in Google Maps" URL — uses the documented Maps URL
   *  scheme that always resolves to the matching business listing.
   *  Docs: https://developers.google.com/maps/documentation/urls/get-started */
  google:
    "https://www.google.com/maps/search/?api=1&query=Paradigm+Services+and+Installations+LTD+Coquitlam+BC",
  /** Direct "Read reviews" deep link — same query, opens the reviews tab. */
  googleReviews:
    "https://search.google.com/local/reviews?q=Paradigm+Services+and+Installations+LTD",
  url: "https://paradigmservices.ca",
  description:
    "Plumbing, gas fitting, drain cleaning, water heaters, and electrical services across Metro Vancouver. 24/7 emergency response.",
  hours: "Mon–Sun · 24/7 Emergency Service",
} as const;
