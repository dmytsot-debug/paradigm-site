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
  google:
    "https://www.google.ca/maps/place/Paradigm+Services+and+Installations+LTD./@49.2968047,-122.8089641,15z",
  url: "https://paradigmservices.ca",
  description:
    "Plumbing, gas fitting, drain cleaning, water heaters, and electrical services across Metro Vancouver. 24/7 emergency response.",
  hours: "Mon–Sun · 24/7 Emergency Service",
} as const;
