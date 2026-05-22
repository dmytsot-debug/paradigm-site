export type ServiceCity = {
  name: string;
  /** Real-world latitude (decimal degrees). */
  lat: number;
  /** Real-world longitude (decimal degrees). */
  lng: number;
};

/** Cities we cover, ordered roughly NW → SE for the legend list. */
export const SERVICE_AREA: ServiceCity[] = [
  { name: "Whistler", lat: 50.1163, lng: -122.9574 },
  { name: "Squamish", lat: 49.7016, lng: -123.1558 },
  { name: "West Vancouver", lat: 49.3286, lng: -123.1592 },
  { name: "North Vancouver", lat: 49.3163, lng: -123.0747 },
  { name: "Vancouver", lat: 49.2827, lng: -123.1207 },
  { name: "Burnaby", lat: 49.2488, lng: -122.9805 },
  { name: "Port Moody", lat: 49.2849, lng: -122.8313 },
  { name: "Coquitlam", lat: 49.2838, lng: -122.7932 },
  { name: "New Westminster", lat: 49.2057, lng: -122.911 },
  { name: "Port Coquitlam", lat: 49.2628, lng: -122.7811 },
  { name: "Pitt Meadows", lat: 49.2335, lng: -122.6896 },
  { name: "Maple Ridge", lat: 49.2193, lng: -122.6019 },
  { name: "Surrey", lat: 49.1913, lng: -122.849 },
  { name: "Langley", lat: 49.1042, lng: -122.6604 },
];

/** Reasonable centre/zoom for fitting the whole service area in a desktop tile. */
export const SERVICE_AREA_VIEW = {
  centerLat: 49.45,
  centerLng: -122.85,
  zoom: 9,
} as const;
