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
  /** Direct deep link to the business listing with the Reviews tab open.
   *  Uses the full Google-issued URL (with !9m1!1b1 opening reviews). */
  googleReviews:
    "https://www.google.com/maps/place/Paradigm+Services+and+Installations+LTD./@49.2772,-122.7559498,17z/data=!4m8!3m7!1s0x2dad9f1ee17df36f:0x2889add9bb73e764!8m2!3d49.2771965!4d-122.7533749!9m1!1b1!16s%2Fg%2F11q8g60tnv?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
  url: "https://paradigmservices.ca",
  description:
    "Plumbing, gas fitting, drain cleaning, water heaters, and electrical services across Metro Vancouver. 24/7 emergency response.",
  hours: "Mon–Sun · 24/7 Emergency Service",
} as const;
