import {
  Flame,
  Droplets,
  Wrench,
  ShowerHead,
  Siren,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string[];
  included: string[];
  scenarios: string[];
  faq: { q: string; a: string }[];
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "water-heaters",
    title: "Water Heater Service & Installation",
    short:
      "No hot water? Professional water heater repair, replacement, and installation with fast response times and dependable workmanship.",
    long: [
      "A failing water heater rarely chooses a convenient time. We diagnose the root cause — pilot, thermocouple, sediment buildup, anode rod, or tank failure — and give you a clear repair or replacement recommendation up front.",
      "We service and install tank, tankless, gas, and electric units from major manufacturers. Every install is permitted where required and finished to manufacturer and code spec.",
    ],
    included: [
      "Same-week scheduling for non-emergency replacements",
      "Full removal and haul-away of the old unit",
      "Expansion tank, T&P valve, and venting checked on every install",
      "Permit pulled where required",
      "Workmanship warranty on installation",
    ],
    scenarios: [
      "No hot water or lukewarm water only",
      "Rusty, discolored, or smelly hot water",
      "Leaking tank or fittings",
      "Tank older than 10–12 years and due for replacement",
      "Upgrade from tank to tankless",
    ],
    faq: [
      {
        q: "Tank or tankless — which is right for me?",
        a: "Tankless costs more up front but lasts roughly twice as long and never runs out. Tanks are cheaper to install and easier to service. We'll size whichever you choose to your household demand and venting situation.",
      },
      {
        q: "How long does a replacement take?",
        a: "Most tank-for-tank swaps are 3–4 hours. Tankless conversions take longer because of gas, vent, and water-line changes — typically a full day.",
      },
      {
        q: "Do I need a permit?",
        a: "Most municipalities in Metro Vancouver require a gas permit for any gas water heater work. We pull it.",
      },
    ],
    icon: Flame,
  },
  {
    slug: "plumbing",
    title: "General Plumbing",
    short:
      "Leak repairs, fixture installations, pipe repairs, and general plumbing maintenance for homes and businesses.",
    long: [
      "From a dripping faucet to a re-pipe, we handle the everyday plumbing that keeps your home running. We work on copper, PEX, ABS, and cast iron, and we leave the worksite cleaner than we found it.",
      "We're equally comfortable in a strata building, a heritage home, or a new build — and we'll tell you honestly when a repair makes more sense than a replacement.",
    ],
    included: [
      "Leak detection and repair",
      "Faucet, sink, toilet, and fixture installs",
      "Shut-off valve replacement",
      "Pipe repair and re-piping (copper / PEX)",
      "Pressure regulator and expansion tank service",
    ],
    scenarios: [
      "Dripping faucet or running toilet",
      "Low water pressure or banging pipes",
      "Visible leak under a sink or behind a wall",
      "Renovation rough-in or fixture replacement",
      "Strata-wide pipe repair",
    ],
    faq: [
      {
        q: "Do you give estimates over the phone?",
        a: "For simple jobs (fixture swaps, common repairs) we can give a range. For anything we haven't seen we'll come out, look, and give you a written estimate before any work starts.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. Licensed plumbers, gas fitters, and full liability insurance.",
      },
      {
        q: "Do you warranty your work?",
        a: "Yes. Workmanship is warranted on every job — ask about the term when you book.",
      },
    ],
    icon: Wrench,
  },
  {
    slug: "gas-fitting",
    title: "Gas Fitting",
    short:
      "Gas line installations, repairs, appliance connections, and leak detection for homes and businesses.",
    long: [
      "Gas work is not the place for shortcuts. Our certified gas fitters install, repair, and inspect gas lines for furnaces, fireplaces, ranges, BBQs, water heaters, and outdoor heaters.",
      "If you smell gas, leave the building and call us — and your gas utility — immediately.",
    ],
    included: [
      "New gas line runs (indoor and outdoor)",
      "Appliance hook-ups (range, dryer, BBQ, fireplace, heater)",
      "Gas leak detection and repair",
      "Pressure testing and certification",
      "Permit pulled on every install",
    ],
    scenarios: [
      "Adding a gas range or outdoor BBQ line",
      "Installing or relocating a fireplace",
      "Suspected leak (smell of gas)",
      "Disconnecting a gas appliance for sale or renovation",
    ],
    faq: [
      {
        q: "Do I need a permit for a new gas line?",
        a: "Yes. A gas permit is required for any new line or appliance hook-up in BC. We pull it as part of the job.",
      },
      {
        q: "I smell gas — what do I do?",
        a: "Leave the building, open windows on the way out if it's safe, do not flip light switches, and call your gas utility. Then call us.",
      },
      {
        q: "Can you certify an existing line for a new appliance?",
        a: "Yes — we'll pressure-test the line and confirm it's safe to bring the new appliance online.",
      },
    ],
    icon: Flame,
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    short:
      "Drain cleaning, rooter service, and hydro jetting to restore flow and help prevent costly damage.",
    long: [
      "Slow drains and backups are usually warning signs. We clear the blockage, then camera the line so you know exactly what caused it — roots, grease, scale, or a broken section of pipe.",
      "For tough blockages and full-line cleaning we use hydro jetting. For routine clogs we snake. Either way we don't leave until water moves the way it should.",
    ],
    included: [
      "Sink, tub, shower, and toilet drain clearing",
      "Main line clearing (snake or hydro jet)",
      "Camera inspection of the line",
      "Locate-and-mark for any breaks or bellies",
      "Recommendations on repair vs. replacement",
    ],
    scenarios: [
      "Multiple drains slow or backing up at once",
      "Sewer smell in the basement or yard",
      "Gurgling toilets",
      "Recurring blockages — likely roots or a broken line",
    ],
    faq: [
      {
        q: "Snake vs. hydro jet — what's the difference?",
        a: "A snake punches a hole through the blockage. A hydro jet scours the inside of the pipe with high-pressure water and removes the buildup that caused the blockage in the first place. We recommend jetting for recurring problems and grease lines.",
      },
      {
        q: "Will a camera inspection damage my pipe?",
        a: "No — it's a small, flexible camera on a fiberglass push rod. It's how we confirm the line is clear and find the cause.",
      },
      {
        q: "Roots in the line — do I need to replace it?",
        a: "Not always. We'll cut the roots, camera the joint, and tell you whether a spot repair or a full reline is the right call.",
      },
    ],
    icon: Droplets,
  },
  {
    slug: "emergency",
    title: "Emergency Plumbing",
    short:
      "Fast response for leaks, burst pipes, clogged drains, and urgent plumbing issues to protect your home or business.",
    long: [
      "Burst pipes, flooded basements, sewer backups — we answer the phone 24/7 and roll a truck as fast as we can. The first job is always to stop the water; the second is to fix what broke.",
      "If you can, shut off the main water valve before we arrive. We'll talk you through it on the phone.",
    ],
    included: [
      "24/7 phone line answered by a real person",
      "Same-night dispatch for active leaks and floods",
      "Temporary fixes to stop damage immediately",
      "Permanent repair scheduled as soon as parts are available",
      "Insurance-ready documentation on request",
    ],
    scenarios: [
      "Burst pipe or active leak",
      "Flooded basement",
      "Sewer backup",
      "No hot water in winter",
      "Gas smell (also call your utility)",
    ],
    faq: [
      {
        q: "What counts as an emergency?",
        a: "Anything actively damaging the property — water you can't stop, sewage backing up into the home, no heat in freezing weather, or a suspected gas leak.",
      },
      {
        q: "Is there an emergency call-out fee?",
        a: "Yes — after-hours work carries a premium. We'll tell you the rate before we dispatch.",
      },
      {
        q: "Where's the main shut-off?",
        a: "Usually in the basement, garage, or crawlspace near where the supply enters the home, or at the street curb-stop. We'll talk you through finding it on the phone.",
      },
    ],
    icon: Siren,
  },
  {
    slug: "electrical",
    title: "Electrical Services",
    short:
      "Residential electrical work: outlets, lighting, panel changes, EV chargers, and troubleshooting by licensed electricians.",
    long: [
      "We handle residential electrical alongside our plumbing and gas work, so if you're renovating a kitchen or a bathroom we can keep the trades coordinated under one roof.",
      "From a single new outlet to a panel upgrade, every job is permitted where required and inspected to BC Electrical Code.",
    ],
    included: [
      "Outlets, switches, lighting, and ceiling fans",
      "Panel changes and service upgrades",
      "EV charger installation",
      "Troubleshooting tripped breakers and dead circuits",
      "Coordination with plumbing/gas trades on renovations",
    ],
    scenarios: [
      "Adding a 240V outlet for a dryer or EV charger",
      "Recurring tripped breakers",
      "Renovation lighting and outlet rough-in",
      "Outdated panel or knob-and-tube concerns",
    ],
    faq: [
      {
        q: "Do you do panel upgrades?",
        a: "Yes — 100A to 200A service upgrades are common, especially before adding an EV charger or heat pump.",
      },
      {
        q: "EV charger — what do I need?",
        a: "A dedicated 240V circuit sized to the charger (typically 40–60A) and a panel with room. We'll confirm both before quoting.",
      },
      {
        q: "Are you licensed?",
        a: "Yes — licensed and insured. Every job is permitted where required.",
      },
    ],
    icon: Zap,
  },
];

export const SERVICES_GRID = [
  SERVICES.find((s) => s.slug === "water-heaters")!,
  SERVICES.find((s) => s.slug === "plumbing")!,
  SERVICES.find((s) => s.slug === "gas-fitting")!,
  SERVICES.find((s) => s.slug === "emergency")!,
  SERVICES.find((s) => s.slug === "drain-cleaning")!,
];

export const SERVICE_ICON_OVERRIDES: Record<string, LucideIcon> = {
  plumbing: Wrench,
  "drain-cleaning": ShowerHead,
};
