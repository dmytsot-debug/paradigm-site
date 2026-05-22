export type ServiceCity = {
  name: string;
  /** Normalized 0-1 position on the schematic Lower-Mainland SVG (origin top-left). */
  x: number;
  y: number;
};

export const SERVICE_AREA: ServiceCity[] = [
  { name: "Squamish", x: 0.18, y: 0.05 },
  { name: "Whistler", x: 0.1, y: 0.0 },
  { name: "West Vancouver", x: 0.22, y: 0.28 },
  { name: "North Vancouver", x: 0.32, y: 0.3 },
  { name: "Vancouver", x: 0.26, y: 0.46 },
  { name: "Burnaby", x: 0.42, y: 0.48 },
  { name: "New Westminster", x: 0.5, y: 0.58 },
  { name: "Port Moody", x: 0.54, y: 0.4 },
  { name: "Coquitlam", x: 0.6, y: 0.46 },
  { name: "Port Coquitlam", x: 0.66, y: 0.5 },
  { name: "Pitt Meadows", x: 0.74, y: 0.52 },
  { name: "Maple Ridge", x: 0.82, y: 0.5 },
  { name: "Surrey", x: 0.58, y: 0.72 },
  { name: "Langley", x: 0.78, y: 0.78 },
];
