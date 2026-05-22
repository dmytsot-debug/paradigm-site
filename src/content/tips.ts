export type Tip = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  body: string[];
};

export const TIPS: Tip[] = [
  {
    slug: "find-your-main-water-shutoff",
    title: "How to find — and test — your main water shut-off",
    excerpt:
      "If a pipe bursts, you have minutes, not hours. Here's where to look and how to make sure the valve actually closes.",
    category: "Emergency prep",
    readTime: "3 min",
    date: "2026-04-12",
    body: [
      "Most homes have a single shut-off valve where the water main enters the building. In Metro Vancouver, that's usually in a basement utility room, a crawl space, or near the hot water tank. Townhomes and condos sometimes route it through a closet.",
      "Once you find it, turn it off — then turn it back on. If the handle is stiff or won't close fully, call us before you need it in an emergency. A seized shut-off is the difference between a wet floor and a flooded home.",
      "Also locate your curb-stop at the property line. It's usually under a small metal lid in the lawn or sidewalk. The city can shut water there if your interior valve fails.",
    ],
  },
  {
    slug: "tank-vs-tankless-water-heater",
    title: "Tank vs. tankless: which water heater is right for you?",
    excerpt:
      "A practical comparison without the marketing — cost, lifespan, hot water availability, and venting.",
    category: "Water heaters",
    readTime: "5 min",
    date: "2026-03-04",
    body: [
      "Tank water heaters are cheaper up front and easier to service. They store hot water in an insulated tank, so you can take a long shower right up until the tank runs out. Average lifespan in BC water conditions: 8–12 years.",
      "Tankless units cost more up front and require more venting and gas-line work, but they last roughly twice as long and never run out of hot water. They're a better fit for households that take back-to-back showers or run laundry and a dishwasher in parallel.",
      "If you're staying in your home long-term, tankless usually wins on lifetime cost. If you're moving in five years, a high-efficiency tank is the safer choice. We'll size either one to your household and venting situation before quoting.",
    ],
  },
  {
    slug: "what-to-do-before-the-plumber-arrives",
    title: "What to do before the plumber arrives",
    excerpt:
      "Five things that make every service call faster, cleaner, and cheaper.",
    category: "How we work",
    readTime: "2 min",
    date: "2026-02-08",
    body: [
      "Shut off the water at the closest valve you can find. If it's a fixture (toilet, sink, water heater), there's usually a stop valve right next to it. If you can't isolate it, shut the main.",
      "Move anything fragile out from under the affected area. Towels under a slow leak buy you time.",
      "Take a photo of the problem before you start mopping. It helps us diagnose over the phone and document for insurance if needed.",
      "Know your address, gate code, and any building entry instructions. For stratas, let the building manager know we're coming.",
      "Have a payment method ready — we accept e-transfer, credit card, and cheque.",
    ],
  },
];
