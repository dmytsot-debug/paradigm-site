"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useTheme } from "next-themes";
import { SERVICE_AREA, SERVICE_AREA_VIEW } from "@/content/service-area";

const LIGHT_TILES =
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
const DARK_TILES =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>';

/** Branded orange marker rendered via CSS divIcon — keeps us off Leaflet's
 *  default PNG asset pipeline (which webpack can't resolve cleanly). */
function brandMarker(): L.DivIcon {
  return L.divIcon({
    className: "paradigm-marker",
    html: `<span class="paradigm-marker-pulse"></span><span class="paradigm-marker-dot"></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

export default function LeafletServiceMap({
  activeCity,
}: {
  activeCity: string | null;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const tileRef = useRef<L.TileLayer | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const { resolvedTheme } = useTheme();

  // Initialise once.
  useEffect(() => {
    if (!wrapRef.current || mapRef.current) return;

    const map = L.map(wrapRef.current, {
      center: [SERVICE_AREA_VIEW.centerLat, SERVICE_AREA_VIEW.centerLng],
      zoom: SERVICE_AREA_VIEW.zoom,
      scrollWheelZoom: false,
      attributionControl: true,
      zoomControl: true,
    });
    mapRef.current = map;

    tileRef.current = L.tileLayer(LIGHT_TILES, {
      attribution: ATTRIBUTION,
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    SERVICE_AREA.forEach((c) => {
      const m = L.marker([c.lat, c.lng], { icon: brandMarker(), title: c.name })
        .addTo(map)
        .bindTooltip(c.name, {
          permanent: false,
          direction: "top",
          offset: [0, -8],
          className: "paradigm-tooltip",
        });
      markersRef.current[c.name] = m;
    });

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
  }, []);

  // Swap tiles on theme change.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !tileRef.current) return;
    const url = resolvedTheme === "dark" ? DARK_TILES : LIGHT_TILES;
    tileRef.current.setUrl(url);
  }, [resolvedTheme]);

  // Pan to / highlight the active city when hovered in the list.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    Object.entries(markersRef.current).forEach(([name, marker]) => {
      const el = marker.getElement();
      if (!el) return;
      if (name === activeCity) {
        el.classList.add("paradigm-marker--active");
        marker.openTooltip();
      } else {
        el.classList.remove("paradigm-marker--active");
        marker.closeTooltip();
      }
    });
    if (activeCity && markersRef.current[activeCity]) {
      map.panTo(markersRef.current[activeCity].getLatLng(), {
        animate: true,
        duration: 0.5,
      });
    }
  }, [activeCity]);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 rounded-2xl overflow-hidden"
      aria-label="Interactive map of Paradigm Services service area in Metro Vancouver"
      role="img"
    />
  );
}
