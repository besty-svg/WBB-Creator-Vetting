const CATEGORIES = [
  "Lifestyle",
  "Beauty/Fashion",
  "Health/Fitness",
  "Food/Beverage",
  "Tech/Digital",
  "Jewelry/Luxury",
  "Finance/Business"
];

const RATES_SINGLE = [
  { fol: "10K-50K", er: "3-6%", views: "5k-15k", r: { "Lifestyle": [100, 150], "Beauty/Fashion": [120, 170], "Health/Fitness": [120, 170], "Food/Beverage": [120, 170], "Tech/Digital": [150, 200], "Jewelry/Luxury": [170, 220], "Finance/Business": [170, 220] } },
  { fol: "10K-50K", er: "6-10%", views: "10k-30k", r: { "Lifestyle": [150, 220], "Beauty/Fashion": [170, 250], "Health/Fitness": [180, 260], "Food/Beverage": [180, 260], "Tech/Digital": [200, 280], "Jewelry/Luxury": [220, 300], "Finance/Business": [220, 300] } },
  { fol: "10K-50K", er: "10%+", views: "20k+", r: { "Lifestyle": [220, 300], "Beauty/Fashion": [250, 320], "Health/Fitness": [260, 340], "Food/Beverage": [260, 340], "Tech/Digital": [280, 360], "Jewelry/Luxury": [300, 380], "Finance/Business": [300, 380] } },
  { fol: "50K-250K", er: "3-6%", views: "20k-50k", r: { "Lifestyle": [200, 300], "Beauty/Fashion": [230, 330], "Health/Fitness": [250, 350], "Food/Beverage": [250, 350], "Tech/Digital": [280, 380], "Jewelry/Luxury": [320, 420], "Finance/Business": [320, 420] } },
  { fol: "50K-250K", er: "6-10%", views: "40k-100k", r: { "Lifestyle": [300, 420], "Beauty/Fashion": [330, 480], "Health/Fitness": [360, 520], "Food/Beverage": [360, 520], "Tech/Digital": [420, 580], "Jewelry/Luxury": [480, 650], "Finance/Business": [480, 650] } },
  { fol: "50K-250K", er: "10%+", views: "75k+", r: { "Lifestyle": [420, 550], "Beauty/Fashion": [480, 620], "Health/Fitness": [520, 680], "Food/Beverage": [520, 680], "Tech/Digital": [580, 750], "Jewelry/Luxury": [650, 850], "Finance/Business": [650, 850] } },
  { fol: "250K-500K", er: "3-6%", views: "80k-200k", r: { "Lifestyle": [350, 500], "Beauty/Fashion": [400, 550], "Health/Fitness": [430, 600], "Food/Beverage": [430, 600], "Tech/Digital": [500, 700], "Jewelry/Luxury": [580, 800], "Finance/Business": [580, 800] } },
  { fol: "250K-500K", er: "6-10%", views: "150k-350k", r: { "Lifestyle": [500, 700], "Beauty/Fashion": [550, 780], "Health/Fitness": [600, 850], "Food/Beverage": [600, 850], "Tech/Digital": [700, 950], "Jewelry/Luxury": [800, 1100], "Finance/Business": [800, 1100] } },
  { fol: "250K-500K", er: "10%+", views: "250k+", r: { "Lifestyle": [700, 900], "Beauty/Fashion": [780, 1050], "Health/Fitness": [850, 1150], "Food/Beverage": [850, 1150], "Tech/Digital": [950, 1300], "Jewelry/Luxury": [1100, 1500], "Finance/Business": [1100, 1500] } },
  { fol: "500K-1M", er: "3-6%", views: "150k-400k", r: { "Lifestyle": [500, 750], "Beauty/Fashion": [600, 850], "Health/Fitness": [650, 900], "Food/Beverage": [650, 900], "Tech/Digital": [750, 1050], "Jewelry/Luxury": [900, 1200], "Finance/Business": [900, 1200] } },
  { fol: "500K-1M", er: "6-10%", views: "300k-700k", r: { "Lifestyle": [750, 1050], "Beauty/Fashion": [850, 1200], "Health/Fitness": [900, 1300], "Food/Beverage": [900, 1300], "Tech/Digital": [1050, 1450], "Jewelry/Luxury": [1200, 1650], "Finance/Business": [1200, 1650] } },
  { fol: "500K-1M", er: "10%+", views: "500k+", r: { "Lifestyle": [1050, 1400], "Beauty/Fashion": [1200, 1600], "Health/Fitness": [1300, 1800], "Food/Beverage": [1300, 1800], "Tech/Digital": [1450, 2000], "Jewelry/Luxury": [1700, 2400], "Finance/Business": [1700, 2400] } },
  { fol: "1M-2M", er: "3-6%", views: "300k-800k", r: { "Lifestyle": [1200, 1700], "Beauty/Fashion": [1400, 1900], "Health/Fitness": [1500, 2100], "Food/Beverage": [1500, 2100], "Tech/Digital": [1700, 2300], "Jewelry/Luxury": [2000, 2800], "Finance/Business": [2000, 2800] } },
  { fol: "1M-2M", er: "6-10%", views: "600k-1.2M", r: { "Lifestyle": [1700, 2300], "Beauty/Fashion": [1900, 2600], "Health/Fitness": [2100, 2900], "Food/Beverage": [2100, 2900], "Tech/Digital": [2300, 3100], "Jewelry/Luxury": [2800, 3800], "Finance/Business": [2800, 3800] } },
  { fol: "1M-2M", er: "10%+", views: "1M+", r: { "Lifestyle": [2300, 3000], "Beauty/Fashion": [2600, 3400], "Health/Fitness": [2900, 3800], "Food/Beverage": [2900, 3800], "Tech/Digital": [3100, 4200], "Jewelry/Luxury": [3800, 5200], "Finance/Business": [3800, 5200] } },
  { fol: "2M-3M", er: "3-6%", views: "500k-1.2M", r: { "Lifestyle": [1800, 2500], "Beauty/Fashion": [2100, 2800], "Health/Fitness": [2300, 3100], "Food/Beverage": [2300, 3100], "Tech/Digital": [2600, 3500], "Jewelry/Luxury": [3000, 4200], "Finance/Business": [3000, 4200] } },
  { fol: "2M-3M", er: "6-10%", views: "900k-1.8M", r: { "Lifestyle": [2500, 3400], "Beauty/Fashion": [2800, 3800], "Health/Fitness": [3100, 4200], "Food/Beverage": [3100, 4200], "Tech/Digital": [3500, 4700], "Jewelry/Luxury": [4200, 5800], "Finance/Business": [4200, 5800] } },
  { fol: "2M-3M", er: "10%+", views: "1.5M+", r: { "Lifestyle": [3400, 4500], "Beauty/Fashion": [3800, 5000], "Health/Fitness": [4200, 5600], "Food/Beverage": [4200, 5600], "Tech/Digital": [4700, 6200], "Jewelry/Luxury": [5800, 7800], "Finance/Business": [5800, 7800] } },
  { fol: "3M-4M", er: "3-6%", views: "700k-1.8M", r: { "Lifestyle": [2600, 3500], "Beauty/Fashion": [3000, 4000], "Health/Fitness": [3300, 4400], "Food/Beverage": [3300, 4400], "Tech/Digital": [3800, 5000], "Jewelry/Luxury": [4500, 6000], "Finance/Business": [4500, 6000] } },
  { fol: "3M-4M", er: "6-10%", views: "1.2M-2.5M", r: { "Lifestyle": [3500, 4700], "Beauty/Fashion": [4000, 5400], "Health/Fitness": [4400, 6000], "Food/Beverage": [4400, 6000], "Tech/Digital": [5000, 6800], "Jewelry/Luxury": [6000, 8200], "Finance/Business": [6000, 8200] } },
  { fol: "3M-4M", er: "10%+", views: "2M+", r: { "Lifestyle": [4700, 6200], "Beauty/Fashion": [5400, 7200], "Health/Fitness": [6000, 8000], "Food/Beverage": [6000, 8000], "Tech/Digital": [6800, 9000], "Jewelry/Luxury": [8200, 11000], "Finance/Business": [8200, 11000] } },
  { fol: "5M+", er: "3-6%", views: "1M-3M", r: { "Lifestyle": [4000, 5500], "Beauty/Fashion": [4500, 6000], "Health/Fitness": [5000, 6800], "Food/Beverage": [5000, 6800], "Tech/Digital": [5800, 7800], "Jewelry/Luxury": [7000, 9500], "Finance/Business": [7000, 9500] } },
  { fol: "5M+", er: "6-10%", views: "2M-5M", r: { "Lifestyle": [5500, 7500], "Beauty/Fashion": [6000, 8200], "Health/Fitness": [6800, 9200], "Food/Beverage": [6800, 9200], "Tech/Digital": [7800, 10500], "Jewelry/Luxury": [9500, 13000], "Finance/Business": [9500, 13000] } },
  { fol: "5M+", er: "10%+", views: "3M+", r: { "Lifestyle": [7500, 10000], "Beauty/Fashion": [8200, 11000], "Health/Fitness": [9200, 12500], "Food/Beverage": [9200, 12500], "Tech/Digital": [10500, 14000], "Jewelry/Luxury": [13000, 18000], "Finance/Business": [13000, 18000] } }
];

const RATES_AMBASSADOR = [
  { fol: "10K-50K", er: "3-6%", est: false, r: { "Lifestyle": [300, 420], "Beauty/Fashion": [350, 480], "Health/Fitness": [380, 520], "Food/Beverage": [380, 520], "Tech/Digital": [420, 580], "Jewelry/Luxury": [480, 650], "Finance/Business": [480, 650] } },
  { fol: "10K-50K", er: "6-10%", est: false, r: { "Lifestyle": [420, 580], "Beauty/Fashion": [480, 650], "Health/Fitness": [520, 700], "Food/Beverage": [520, 700], "Tech/Digital": [580, 780], "Jewelry/Luxury": [650, 850], "Finance/Business": [650, 850] } },
  { fol: "10K-50K", er: "10%+", est: false, r: { "Lifestyle": [580, 750], "Beauty/Fashion": [650, 850], "Health/Fitness": [700, 900], "Food/Beverage": [700, 900], "Tech/Digital": [780, 1000], "Jewelry/Luxury": [850, 1100], "Finance/Business": [850, 1100] } },
  { fol: "50K-250K", er: "3-6%", est: false, r: { "Lifestyle": [650, 850], "Beauty/Fashion": [750, 1000], "Health/Fitness": [800, 1100], "Food/Beverage": [800, 1100], "Tech/Digital": [900, 1200], "Jewelry/Luxury": [1000, 1350], "Finance/Business": [1000, 1350] } },
  { fol: "50K-250K", er: "6-10%", est: false, r: { "Lifestyle": [850, 1100], "Beauty/Fashion": [1000, 1300], "Health/Fitness": [1100, 1450], "Food/Beverage": [1100, 1450], "Tech/Digital": [1200, 1600], "Jewelry/Luxury": [1350, 1800], "Finance/Business": [1350, 1800] } },
  { fol: "50K-250K", er: "10%+", est: false, r: { "Lifestyle": [1100, 1400], "Beauty/Fashion": [1300, 1650], "Health/Fitness": [1450, 1850], "Food/Beverage": [1450, 1850], "Tech/Digital": [1600, 2000], "Jewelry/Luxury": [1850, 2400], "Finance/Business": [1850, 2400] } },
  { fol: "250K-500K", er: "3-6%", est: false, r: { "Lifestyle": [1000, 1300], "Beauty/Fashion": [1200, 1550], "Health/Fitness": [1300, 1700], "Food/Beverage": [1300, 1700], "Tech/Digital": [1500, 1900], "Jewelry/Luxury": [1700, 2200], "Finance/Business": [1700, 2200] } },
  { fol: "250K-500K", er: "6-10%", est: false, r: { "Lifestyle": [1300, 1700], "Beauty/Fashion": [1550, 2000], "Health/Fitness": [1700, 2200], "Food/Beverage": [1700, 2200], "Tech/Digital": [1900, 2500], "Jewelry/Luxury": [2200, 2900], "Finance/Business": [2200, 2900] } },
  { fol: "250K-500K", er: "10%+", est: false, r: { "Lifestyle": [1700, 2200], "Beauty/Fashion": [2000, 2600], "Health/Fitness": [2200, 2800], "Food/Beverage": [2200, 2800], "Tech/Digital": [2500, 3200], "Jewelry/Luxury": [2900, 3800], "Finance/Business": [2900, 3800] } },
  { fol: "500K-1M", er: "3-6%", est: false, r: { "Lifestyle": [1400, 1800], "Beauty/Fashion": [1700, 2200], "Health/Fitness": [1800, 2400], "Food/Beverage": [1800, 2400], "Tech/Digital": [2100, 2700], "Jewelry/Luxury": [2400, 3200], "Finance/Business": [2400, 3200] } },
  { fol: "500K-1M", er: "6-10%", est: false, r: { "Lifestyle": [1800, 2400], "Beauty/Fashion": [2200, 2900], "Health/Fitness": [2400, 3200], "Food/Beverage": [2400, 3200], "Tech/Digital": [2700, 3500], "Jewelry/Luxury": [3200, 4200], "Finance/Business": [3200, 4200] } },
  { fol: "500K-1M", er: "10%+", est: false, r: { "Lifestyle": [2400, 3200], "Beauty/Fashion": [2900, 3800], "Health/Fitness": [3200, 4200], "Food/Beverage": [3200, 4200], "Tech/Digital": [3500, 4500], "Jewelry/Luxury": [4200, 5500], "Finance/Business": [4200, 5500] } },
  { fol: "1M-2M", er: "3-6%", est: true, r: { "Lifestyle": [2750, 3900], "Beauty/Fashion": [3200, 4400], "Health/Fitness": [3450, 4850], "Food/Beverage": [3450, 4850], "Tech/Digital": [3900, 5300], "Jewelry/Luxury": [4600, 6450], "Finance/Business": [4600, 6450] } },
  { fol: "1M-2M", er: "6-10%", est: true, r: { "Lifestyle": [3900, 5300], "Beauty/Fashion": [4400, 6000], "Health/Fitness": [4850, 6650], "Food/Beverage": [4850, 6650], "Tech/Digital": [5300, 7150], "Jewelry/Luxury": [6450, 8750], "Finance/Business": [6450, 8750] } },
  { fol: "1M-2M", er: "10%+", est: true, r: { "Lifestyle": [5300, 6900], "Beauty/Fashion": [6000, 7800], "Health/Fitness": [6650, 8750], "Food/Beverage": [6650, 8750], "Tech/Digital": [7150, 9650], "Jewelry/Luxury": [8750, 11950], "Finance/Business": [8750, 11950] } },
  { fol: "2M-3M", er: "3-6%", est: true, r: { "Lifestyle": [3950, 5500], "Beauty/Fashion": [4600, 6150], "Health/Fitness": [5050, 6800], "Food/Beverage": [5050, 6800], "Tech/Digital": [5700, 7700], "Jewelry/Luxury": [6600, 9250], "Finance/Business": [6600, 9250] } },
  { fol: "2M-3M", er: "6-10%", est: true, r: { "Lifestyle": [5500, 7500], "Beauty/Fashion": [6150, 8350], "Health/Fitness": [6800, 9250], "Food/Beverage": [6800, 9250], "Tech/Digital": [7700, 10350], "Jewelry/Luxury": [9250, 12750], "Finance/Business": [9250, 12750] } },
  { fol: "2M-3M", er: "10%+", est: true, r: { "Lifestyle": [7500, 9900], "Beauty/Fashion": [8350, 11000], "Health/Fitness": [9250, 12300], "Food/Beverage": [9250, 12300], "Tech/Digital": [10350, 13650], "Jewelry/Luxury": [12750, 17150], "Finance/Business": [12750, 17150] } },
  { fol: "3M-4M", er: "3-6%", est: true, r: { "Lifestyle": [5450, 7350], "Beauty/Fashion": [6300, 8400], "Health/Fitness": [6950, 9250], "Food/Beverage": [6950, 9250], "Tech/Digital": [7980, 10500], "Jewelry/Luxury": [9450, 12600], "Finance/Business": [9450, 12600] } },
  { fol: "3M-4M", er: "6-10%", est: true, r: { "Lifestyle": [7350, 9870], "Beauty/Fashion": [8400, 11340], "Health/Fitness": [9250, 12600], "Food/Beverage": [9250, 12600], "Tech/Digital": [10500, 14280], "Jewelry/Luxury": [12600, 17220], "Finance/Business": [12600, 17220] } },
  { fol: "3M-4M", er: "10%+", est: true, r: { "Lifestyle": [9870, 13020], "Beauty/Fashion": [11340, 15120], "Health/Fitness": [12600, 16800], "Food/Beverage": [12600, 16800], "Tech/Digital": [14280, 18900], "Jewelry/Luxury": [17220, 23100], "Finance/Business": [17220, 23100] } },
  { fol: "5M+", er: "3-6%", est: true, r: { "Lifestyle": [8000, 11000], "Beauty/Fashion": [9000, 12000], "Health/Fitness": [10000, 13600], "Food/Beverage": [10000, 13600], "Tech/Digital": [11600, 15600], "Jewelry/Luxury": [14000, 19000], "Finance/Business": [14000, 19000] } },
  { fol: "5M+", er: "6-10%", est: true, r: { "Lifestyle": [11000, 15000], "Beauty/Fashion": [12000, 16400], "Health/Fitness": [13600, 18400], "Food/Beverage": [13600, 18400], "Tech/Digital": [15600, 21000], "Jewelry/Luxury": [19000, 26000], "Finance/Business": [19000, 26000] } },
  { fol: "5M+", er: "10%+", est: true, r: { "Lifestyle": [15000, 20000], "Beauty/Fashion": [16400, 22000], "Health/Fitness": [18400, 25000], "Food/Beverage": [18400, 25000], "Tech/Digital": [21000, 28000], "Jewelry/Luxury": [26000, 36000], "Finance/Business": [26000, 36000] } }
];

const SCRIPT_CATEGORIES = [
  "Printify General",
  "Side Hustle",
  "Digital Nomads"
];

const DEFAULT_SCRIPT_CATEGORY = "Printify General";

const SCRIPT_TEMPLATES = {
  "Printify General": `Hi {creator},

Thanks so much for getting back to me!

The idea is simple. We'd love you to show your audience how they can turn basic ideas into sellable products using {brand}, without handling inventory or shipping, in a way that feels natural to your content style.

There's no need to show a physical product. We actually prefer that you highlight the on-screen creation process, such as designing, uploading to {brand}, and showcasing the product digitally. The goal is to clearly walk your audience through how it works in a simple and engaging way.

We're looking at {videoLabel} featuring {brand}, and based on our current campaign budget, engagement, and overall fit, we're happy to offer {offer} for this collaboration.

We see this as a starting point and would love to build something long term if the performance aligns well.

If this works for you, I'll send over the full brief and next steps right away. Excited to potentially collaborate!

Warm regards,
{senderName}`,
  "Side Hustle": `Hi {creator},

Thanks so much for getting back to me!

I'm really excited to share more details about this opportunity, because I genuinely think it fits well with what your audience cares about.

Here's the idea: we'd love for you to show your followers how anyone can build a real income stream using {brand}. Turning simple ideas into sellable products with zero upfront investment and no inventory to manage. No shipping. No warehousing. Just a smart, accessible side hustle that works around their current life.

The focus doesn't need to be on a physical product at all. We actually prefer that you spotlight the on-screen creation experience. Designing a product, setting it up on {brand}, and showing how it goes live. Simple, visual, and naturally engaging for an audience that's already thinking about their next income move.

For the deliverable, we're looking at {videoLabel} featuring {brand}. Based on your engagement, content fit, and our current campaign budget, we'd love to offer {offer} for this collaboration. This would be without usage rights, whitelisting, or exclusivity.

Attached below is the campaign brief. This covers the full video structure, suggested hooks, talking points, do's and don'ts, and ad examples, so you have everything you need before you hit record.

We see this as a starting point. If the performance is strong, we'd love to keep building together long-term.

If you're in, just reply and I'll get the formal agreement and next steps over to you right away. Looking forward to this!

Warm regards,
{senderName}`,
  "Digital Nomads": `Hi {creator},

Thanks so much for getting back to me!

I'm genuinely excited to share the details, because this campaign feels like a natural fit for the lifestyle your content is all about.

Here's the concept: we'd love for you to show your audience how they can build an income stream that travels with them, using {brand} to turn creative ideas into real products they can sell online, with no inventory, no upfront costs, and no shipping to deal with.

We prefer the focus stays on the on-screen process: the designing, the uploading, and the product coming to life, so it feels real, accessible, and relevant no matter where you're filming from.

For the deliverable, we're looking at {videoLabel} featuring {brand}. Based on your engagement, content fit, and our current campaign budget, we're happy to offer {offer} for this collaboration.

Attached below is the campaign brief. This covers the full video structure, suggested hooks, talking points, do's and don'ts, and ad examples, so you have everything you need before you hit record.

We really see this as the beginning of something ongoing. If the content performs well, we'd love to explore a longer-term partnership with you.

If this sounds good, just reply and I'll send over the formal agreement and all the next steps right away. Can't wait to work together!

Warm regards,
{senderName}`
};

const DEFAULT_TEMPLATE = SCRIPT_TEMPLATES[DEFAULT_SCRIPT_CATEGORY];
const DEFAULT_SUBJECT = "Collaboration with {brand} - {offer} offer for {videoLabel}";
const STORAGE_BRANDS = "local_creator_fee_brands_v1";
const STORAGE_SELECTED = "local_creator_fee_selected_brand_v1";
const STORAGE_SCRIPT_OVERRIDES = "local_creator_fee_script_overrides_v2";
const STORAGE_SUBJECT_OVERRIDES = "local_creator_fee_subject_overrides_v2";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

let brands = loadBrands();
let selectedBrandIndex = Math.min(loadNumber(STORAGE_SELECTED, 0), Math.max(brands.length - 1, 0));
let selectedPackage = "single";
let selectedScriptCategory = DEFAULT_SCRIPT_CATEGORY;
let scriptOverrides = loadObject(STORAGE_SCRIPT_OVERRIDES, {});
let subjectOverrides = loadObject(STORAGE_SUBJECT_OVERRIDES, {});
let currentResult = null;
let editingBrandIndex = -1;
let bulkRows = [];

function loadNumber(key, fallback) {
  const value = Number(localStorage.getItem(key));
  return Number.isFinite(value) ? value : fallback;
}

function loadObject(key, fallback) {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || "null");
    return stored && typeof stored === "object" && !Array.isArray(stored) ? stored : fallback;
  } catch (error) {
    return fallback;
  }
}

function defaultBrand() {
  return {
    name: "Printify",
    description: "Printify helps creators turn ideas into products without handling inventory, shipping, or fulfillment.",
    senderName: "Dun",
    senderRole: "Influencer Specialist at Work Beyond Borders",
    usage: "90 days"
  };
}

function loadBrands() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_BRANDS) || "null");
    if (Array.isArray(stored) && stored.length) {
      if (stored.length === 1 && stored[0] && stored[0].name === "Pets + People") return [defaultBrand()];
      return stored;
    }
  } catch (error) {
    // Keep default brand when stored JSON is corrupt.
  }
  return [defaultBrand()];
}

function saveBrands() {
  localStorage.setItem(STORAGE_BRANDS, JSON.stringify(brands));
  localStorage.setItem(STORAGE_SELECTED, String(selectedBrandIndex));
}

function formatMoney(value) {
  if (!Number.isFinite(Number(value))) return "--";
  return "$" + Math.round(Number(value)).toLocaleString();
}

function formatCpm(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  return "$" + number.toLocaleString(undefined, {
    minimumFractionDigits: Number.isInteger(number) ? 0 : 2,
    maximumFractionDigits: 2
  });
}

function parseNumber(value) {
  if (value === undefined || value === null) return 0;
  const raw = String(value).trim().toUpperCase().replace(/,/g, "");
  const match = raw.match(/^([0-9]+(?:\.[0-9]+)?)([KMB])?/);
  if (!match) return 0;
  let number = Number(match[1]);
  if (match[2] === "K") number *= 1000;
  if (match[2] === "M") number *= 1000000;
  if (match[2] === "B") number *= 1000000000;
  return Number.isFinite(number) ? number : 0;
}

function parseViewCounts(value) {
  const matches = String(value || "").match(/[0-9][0-9,]*(?:\.[0-9]+)?\s*[KMB]?/gi) || [];
  return matches.map(parseNumber).filter((number) => number > 0).slice(0, 10);
}

function average(numbers) {
  if (!numbers.length) return 0;
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}

function setProfileStatus(message, type = "") {
  const status = $("#profile-status");
  status.textContent = message;
  status.classList.toggle("success", type === "success");
  status.classList.toggle("error", type === "error");
}

function applyAverageViews(value, sourceLabel, count) {
  const rounded = Math.round(value);
  $("#views").value = String(rounded);
  setProfileStatus(sourceLabel + ": " + rounded.toLocaleString() + " average views from " + count + " videos.", "success");
  updateSingle();
}

function normalizeVideoCount(value, fallback) {
  const count = Math.floor(parseNumber(value));
  return count >= 1 ? count : fallback;
}

function videoText(count) {
  return count + " " + (count === 1 ? "video" : "videos");
}

function platformDeliverable(platform) {
  if (platform === "Instagram") return "IG Reel";
  if (platform === "TikTok") return "TikTok video";
  if (platform === "YouTube") return "YouTube video";
  return "video";
}

function pluralizeDeliverable(deliverable, count) {
  if (count === 1) return deliverable;
  if (deliverable === "IG Reel") return "IG Reels";
  return deliverable + "s";
}

function deliverableText(platform, count, packageType) {
  const deliverable = pluralizeDeliverable(platformDeliverable(platform), count);
  const label = count + " " + deliverable;
  return packageType === "ambassador" ? label + " per month" : label;
}

function normalizeScriptCategory(value) {
  const normalized = String(value || "").trim().toLowerCase();
  return SCRIPT_CATEGORIES.find((category) => category.toLowerCase() === normalized) || DEFAULT_SCRIPT_CATEGORY;
}

function isScriptCategory(value) {
  const normalized = String(value || "").trim().toLowerCase();
  return SCRIPT_CATEGORIES.some((category) => category.toLowerCase() === normalized);
}

function getScriptTemplate(category) {
  const normalized = normalizeScriptCategory(category);
  return scriptOverrides[normalized] || SCRIPT_TEMPLATES[normalized] || DEFAULT_TEMPLATE;
}

function getSubjectTemplate(category) {
  const normalized = normalizeScriptCategory(category);
  return subjectOverrides[normalized] || DEFAULT_SUBJECT;
}

function saveScriptOverrides() {
  localStorage.setItem(STORAGE_SCRIPT_OVERRIDES, JSON.stringify(scriptOverrides));
  localStorage.setItem(STORAGE_SUBJECT_OVERRIDES, JSON.stringify(subjectOverrides));
}

function populateCategorySelect() {
  const select = $("#category");
  const selected = normalizeScriptCategory(select.value);
  selectedScriptCategory = selected;
  select.innerHTML = "";
  SCRIPT_CATEGORIES.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    select.append(option);
  });
  select.value = selected;
}

function refreshTemplateEditor() {
  $("#category").value = selectedScriptCategory;
  $("#subject-template").value = getSubjectTemplate(selectedScriptCategory);
  $("#message-template").value = getScriptTemplate(selectedScriptCategory);
}

function handleCategoryChange(event) {
  selectedScriptCategory = normalizeScriptCategory(event && event.target ? event.target.value : $("#category").value);
  refreshTemplateEditor();
  updateSingle();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function applyManualAverageViews() {
  const viewCounts = parseViewCounts($("#manual-view-counts").value);
  if (!viewCounts.length) {
    setProfileStatus("Add at least one view count.", "error");
    return;
  }

  applyAverageViews(average(viewCounts), "Manual", viewCounts.length);
}

function followerTier(followers) {
  if (followers < 10000) return { tier: "<10K", lookup: "10K-50K", flag: "Below minimum tier - using 10K floor rate." };
  if (followers < 50000) return { tier: "10K-50K", lookup: "10K-50K" };
  if (followers < 250000) return { tier: "50K-250K", lookup: "50K-250K" };
  if (followers < 500000) return { tier: "250K-500K", lookup: "250K-500K" };
  if (followers < 1000000) return { tier: "500K-1M", lookup: "500K-1M" };
  if (followers < 2000000) return { tier: "1M-2M", lookup: "1M-2M" };
  if (followers < 3000000) return { tier: "2M-3M", lookup: "2M-3M" };
  if (followers < 4000000) return { tier: "3M-4M", lookup: "3M-4M" };
  return { tier: "5M+", lookup: "5M+" };
}

function engagementTier(rate) {
  if (rate < 3) return { tier: "3-6%", flag: "Engagement below 3% - using floor tier." };
  if (rate < 6) return { tier: "3-6%" };
  if (rate < 10) return { tier: "6-10%" };
  return { tier: "10%+" };
}

function viewsTierLabel(views) {
  if (!views) return "";
  if (views < 5000) return "<5k";
  if (views < 15000) return "5k-15k";
  if (views < 30000) return "15k-30k";
  if (views < 50000) return "30k-50k";
  if (views < 100000) return "50k-100k";
  if (views < 200000) return "100k-200k";
  if (views < 400000) return "200k-400k";
  if (views < 800000) return "400k-800k";
  if (views < 1500000) return "800k-1.5M";
  if (views < 3000000) return "1.5M-3M";
  return "3M+";
}

function calculateRate(followers, engagementRate, category, table) {
  const follower = followerTier(followers);
  const engagement = engagementTier(engagementRate);
  const row = table.find((entry) => entry.fol === follower.lookup && entry.er === engagement.tier);
  if (!row) return null;

  const range = row.r[category] || row.r.Lifestyle;
  const flags = [follower.flag, engagement.flag].filter(Boolean);
  return {
    followerTier: follower.tier,
    engagementTier: engagement.tier,
    range,
    offer: range[0],
    max: range[1],
    estimated: Boolean(row.est),
    flags
  };
}

function scaleRate(rate, videoCount, baseVideoCount) {
  if (!rate) return null;
  const multiplier = videoCount / baseVideoCount;
  return {
    ...rate,
    baseOffer: rate.offer,
    baseRange: rate.range,
    baseMax: rate.max,
    baseVideoCount,
    videoCount,
    range: rate.range.map((value) => value * multiplier),
    offer: rate.offer * multiplier,
    max: rate.max * multiplier
  };
}

function calculateCpmRate(views, baselineCpm, videoCount) {
  const perVideoOffer = (views / 1000) * baselineCpm;
  const offer = perVideoOffer * videoCount;
  return {
    followerTier: "",
    engagementTier: "",
    range: [offer, offer],
    offer,
    max: offer,
    perVideoOffer,
    baselineCpm,
    views,
    videoCount,
    estimated: false,
    flags: []
  };
}

function formatCpmFormula(views, baselineCpm, videoCount) {
  const viewUnits = views / 1000;
  const formattedViews = Number.isInteger(viewUnits)
    ? viewUnits.toLocaleString()
    : viewUnits.toLocaleString(undefined, { maximumFractionDigits: 2 });
  return formattedViews + " x " + formatCpm(baselineCpm) + " x " + videoCount;
}

function templateVars(creator, platform, offer, packageType, brand, videoCount, category) {
  const ambassador = packageType === "ambassador";
  const count = normalizeVideoCount(videoCount, ambassador ? 4 : 1);
  const platformName = platform || "TikTok";
  return {
    creator: creator || "@creator",
    brand: brand && brand.name ? brand.name : "the brand",
    brandDescription: brand && brand.description ? brand.description : "",
    offer: formatMoney(offer),
    platform: platformName,
    category: normalizeScriptCategory(category),
    deliverable: platformDeliverable(platformName),
    deliverableLabel: deliverableText(platformName, count, packageType),
    videoCount: String(count),
    videoLabel: deliverableText(platformName, count, packageType),
    firstOrPackage: ambassador ? "package" : count === 1 ? "first video" : "video package",
    usage: brand && brand.usage ? brand.usage : "90 days",
    senderName: brand && brand.senderName ? brand.senderName : "Team",
    senderRole: brand && brand.senderRole ? brand.senderRole : "Influencer Specialist"
  };
}

function renderTemplate(template, vars) {
  return Object.keys(vars).reduce((output, key) => {
    return output.replaceAll("{" + key + "}", vars[key]);
  }, template);
}

function activeBrand() {
  return brands[selectedBrandIndex] || brands[0] || null;
}

function refreshBrandSelect() {
  const select = $("#brand-select");
  select.innerHTML = "";
  if (!brands.length) {
    const option = document.createElement("option");
    option.textContent = "(No brands)";
    select.append(option);
    return;
  }

  brands.forEach((brand, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = brand.name;
    select.append(option);
  });
  selectedBrandIndex = Math.min(selectedBrandIndex, brands.length - 1);
  select.value = String(selectedBrandIndex);
}

function setSelectedPackage(packageType) {
  selectedPackage = packageType;
  $("#package-type").value = packageType;
  $("#offer-card").classList.toggle("single-rate", packageType === "single");
  $("#offer-card").classList.toggle("ambassador-rate", packageType === "ambassador");
  $("#offer-package-title").textContent = packageType === "ambassador" ? "Ambassador offer" : "Standard offer";
  $("#video-count-label").textContent = packageType === "ambassador" ? "Videos / month" : "Videos";
  updateSingle();
}

function updateSingle() {
  const views = parseNumber($("#views").value);
  const baselineCpm = parseFloat($("#baseline-cpm").value);
  const category = selectedScriptCategory;
  const videoCount = normalizeVideoCount($("#video-count").value, selectedPackage === "ambassador" ? 4 : 1);
  $("#offer-video-label").textContent = selectedPackage === "ambassador" ? videoText(videoCount) + " / month" : videoText(videoCount);

  if (!views || !Number.isFinite(baselineCpm) || baselineCpm <= 0) {
    currentResult = null;
    resetResultCards();
    $("#signal-row").innerHTML = `<span class="pill">Script: <strong>${escapeHtml(category)}</strong></span>`;
    $("#notice-list").innerHTML = "";
    $("#summary-chip").textContent = "Ready";
    updateMessage();
    return;
  }

  currentResult = calculateCpmRate(views, baselineCpm, videoCount);
  $("#offer-total").textContent = formatMoney(currentResult.offer);
  $("#offer-per-video").textContent = formatMoney(currentResult.perVideoOffer);
  $("#offer-formula").textContent = formatCpmFormula(views, baselineCpm, currentResult.videoCount);

  const pills = [
    ["Views", viewsTierLabel(views)],
    ["CPM", formatCpm(baselineCpm)],
    ["Script", category]
  ].filter((item) => item[1]).map((item) => `<span class="pill">${escapeHtml(item[0])}: <strong>${escapeHtml(item[1])}</strong></span>`);

  $("#signal-row").innerHTML = pills.join("");

  const flags = new Set(currentResult ? currentResult.flags : []);
  $("#notice-list").innerHTML = Array.from(flags).map((flag) => `<span class="notice">${escapeHtml(flag)}</span>`).join("");
  $("#summary-chip").textContent = "Offer " + formatMoney(currentResult.offer);
  updateMessage();
}

function resetResultCards() {
  ["offer-total", "offer-per-video", "offer-formula"].forEach((id) => {
    $("#" + id).textContent = "--";
  });
}

function updateMessage() {
  const result = currentResult;
  const brand = activeBrand();
  const panel = $("#message-panel");
  const category = selectedScriptCategory;

  if (!brand) {
    panel.classList.remove("show");
    return;
  }

  const fallbackCount = normalizeVideoCount($("#video-count").value, selectedPackage === "ambassador" ? 4 : 1);
  const vars = templateVars(
    $("#creator-handle").value.trim(),
    $("#platform").value,
    result ? result.offer : undefined,
    selectedPackage,
    brand,
    result ? result.videoCount : fallbackCount,
    category
  );
  const subject = renderTemplate(getSubjectTemplate(category), vars);
  const body = renderTemplate(getScriptTemplate(category), vars);
  $("#script-category-line").textContent = "Using script: " + category;
  $("#subject-line").innerHTML = "<strong>Subject:</strong> " + escapeHtml(subject);
  $("#message-output").textContent = body;
  panel.classList.add("show");
}

function parseBulkRow(line) {
  const parts = line.split(/[\t,]/).map((part) => part.trim());
  if (parts.filter(Boolean).length < 4) return null;
  const usesFullLegacyFormat = isScriptCategory(parts[6]);
  const usesLegacyNoCpmFormat = isScriptCategory(parts[5]);
  const usesSimpleNoCpmFormat = isScriptCategory(parts[3]);
  const baselineCpm = parseFloat($("#baseline-cpm").value);
  const platformIndex = usesFullLegacyFormat || usesLegacyNoCpmFormat ? 2 : 1;
  const viewsIndex = usesFullLegacyFormat || usesLegacyNoCpmFormat ? 3 : 2;
  const cpmIndex = usesFullLegacyFormat ? 4 : usesLegacyNoCpmFormat || usesSimpleNoCpmFormat ? null : 3;
  const categoryIndex = usesFullLegacyFormat ? 6 : usesLegacyNoCpmFormat ? 5 : usesSimpleNoCpmFormat ? 3 : 4;
  const videoIndex = categoryIndex + 1;
  const cpm = cpmIndex === null ? baselineCpm : parseFloat(String(parts[cpmIndex] || "").replace(/[^\d.]/g, ""));
  const parsedVideoCount = normalizeVideoCount(parts[videoIndex], 0);
  const hasVideoCount = parsedVideoCount > 0;
  const packageIndex = hasVideoCount ? videoIndex + 1 : videoIndex;
  const packageType = (parts[packageIndex] || "both").toLowerCase();
  return {
    creator: parts[0] || "@creator",
    platform: parts[platformIndex] || "TikTok",
    views: parseNumber(parts[viewsIndex]),
    baselineCpm: cpm,
    category: normalizeScriptCategory(parts[categoryIndex]),
    videoCount: hasVideoCount ? parsedVideoCount : null,
    packageType: ["single", "ambassador", "both"].includes(packageType) ? packageType : "both",
    email: parts[hasVideoCount ? packageIndex + 1 : packageIndex + 1] || ""
  };
}

function calculateBulk() {
  const brand = activeBrand();
  const lines = $("#bulk-input").value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  bulkRows = lines.map(parseBulkRow).filter((row) => row && row.views && Number.isFinite(row.baselineCpm) && row.baselineCpm > 0).map((input) => {
    const singleCount = input.videoCount || 1;
    const ambassadorCount = input.videoCount || 4;
    const single = ["single", "both"].includes(input.packageType) ? calculateCpmRate(input.views, input.baselineCpm, singleCount) : null;
    const ambassador = ["ambassador", "both"].includes(input.packageType) ? calculateCpmRate(input.views, input.baselineCpm, ambassadorCount) : null;
    const primaryPackage = input.packageType === "ambassador" ? "ambassador" : "single";
    const primary = primaryPackage === "ambassador" ? ambassador : single;
    const vars = primary ? templateVars(input.creator, input.platform, primary.offer, primaryPackage, brand, primary.videoCount, input.category) : {};
    return {
      input,
      single,
      ambassador,
      primaryPackage,
      subject: primary ? renderTemplate(getSubjectTemplate(input.category), vars) : "",
      message: primary ? renderTemplate(getScriptTemplate(input.category), vars) : ""
    };
  });

  renderBulkTable();
  $("#summary-chip").textContent = bulkRows.length ? bulkRows.length + " rows" : "No rows";
}

function renderBulkTable() {
  if (!bulkRows.length) {
    $("#bulk-output").innerHTML = "<p class=\"muted\">No valid rows found.</p>";
    return;
  }

  const rows = bulkRows.map((row, index) => {
    const videoCell = row.input.videoCount
      ? videoText(row.input.videoCount)
      : row.input.packageType === "single"
        ? "1 video"
        : row.input.packageType === "ambassador"
          ? "4 videos / mo"
          : "1 single / 4 amb";
    const singleCell = row.single
      ? `<span class="offer-single">${formatMoney(row.single.offer)}</span><br><span class="muted">Per video ${formatMoney(row.single.perVideoOffer)}</span>`
      : `<span class="muted">-</span>`;
    const ambassadorCell = row.ambassador
      ? `<span class="offer-ambassador">${formatMoney(row.ambassador.offer)}</span><br><span class="muted">Per video ${formatMoney(row.ambassador.perVideoOffer)}</span>`
      : `<span class="muted">-</span>`;

    return `<tr>
      <td>${escapeHtml(row.input.creator)}</td>
      <td>${escapeHtml(row.input.email || "-")}</td>
      <td>${escapeHtml(row.input.platform)}</td>
      <td>${Math.round(row.input.views).toLocaleString()}</td>
      <td>${formatCpm(row.input.baselineCpm)}</td>
      <td>${escapeHtml(row.input.category)}</td>
      <td>${escapeHtml(row.input.packageType)}</td>
      <td>${escapeHtml(videoCell)}</td>
      <td>${singleCell}</td>
      <td>${ambassadorCell}</td>
      <td><button type="button" data-copy-row="${index}">Copy message</button></td>
    </tr>`;
  }).join("");

  $("#bulk-output").innerHTML = `<div class="table-wrap"><table>
    <thead><tr>
      <th>Creator</th><th>Email</th><th>Platform</th><th>Avg Views</th><th>CPM</th><th>Script</th><th>Package</th><th>Videos</th><th>Single</th><th>Ambassador</th><th>Message</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table></div>`;

  $$("[data-copy-row]").forEach((button) => {
    button.addEventListener("click", () => {
      const row = bulkRows[Number(button.dataset.copyRow)];
      copyText(row && row.message ? row.message : "");
    });
  });
}

function copyBulkTsv() {
  if (!bulkRows.length) return;
  const header = ["Creator", "Email", "Platform", "Avg Views", "CPM", "Script", "Package", "Single Videos", "Ambassador Videos", "Single Per Video", "Single Offer", "Ambassador Per Video", "Ambassador Offer", "Subject", "Message"];
  const rows = bulkRows.map((row) => [
    row.input.creator,
    row.input.email,
    row.input.platform,
    Math.round(row.input.views),
    formatCpm(row.input.baselineCpm),
    row.input.category,
    row.input.packageType,
    row.single ? row.single.videoCount : "",
    row.ambassador ? row.ambassador.videoCount : "",
    row.single ? formatMoney(row.single.perVideoOffer) : "",
    row.single ? formatMoney(row.single.offer) : "",
    row.ambassador ? formatMoney(row.ambassador.perVideoOffer) : "",
    row.ambassador ? formatMoney(row.ambassador.offer) : "",
    row.subject,
    row.message.replace(/\r?\n/g, " \\n ")
  ]);
  copyText([header, ...rows].map((row) => row.join("\t")).join("\n"));
}

function copyText(text) {
  if (!text) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast("Copied to clipboard"));
    return;
  }

  const temp = document.createElement("textarea");
  temp.value = text;
  document.body.append(temp);
  temp.select();
  document.execCommand("copy");
  temp.remove();
  showToast("Copied to clipboard");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 1700);
}

function openBrandModal(index) {
  editingBrandIndex = index;
  const blankBrand = { name: "", description: "", senderName: "", senderRole: "", usage: "90 days" };
  const brand = index >= 0 && brands[index] ? brands[index] : blankBrand;
  $("#brand-modal-title").textContent = index >= 0 ? "Edit brand" : "New brand";
  $("#brand-name").value = brand.name || "";
  $("#brand-description").value = brand.description || "";
  $("#sender-name").value = brand.senderName || "";
  $("#sender-role").value = brand.senderRole || "";
  $("#usage-rights").value = brand.usage || "90 days";
  $("#brand-modal").classList.add("show");
  $("#brand-modal").setAttribute("aria-hidden", "false");
  $("#brand-name").focus();
}

function closeBrandModal() {
  $("#brand-modal").classList.remove("show");
  $("#brand-modal").setAttribute("aria-hidden", "true");
  editingBrandIndex = -1;
}

function saveBrandFromModal() {
  const brand = {
    name: $("#brand-name").value.trim(),
    description: $("#brand-description").value.trim(),
    senderName: $("#sender-name").value.trim(),
    senderRole: $("#sender-role").value.trim(),
    usage: $("#usage-rights").value.trim() || "90 days"
  };

  if (!brand.name) {
    showToast("Brand name is required");
    return;
  }

  if (editingBrandIndex >= 0) {
    brands[editingBrandIndex] = brand;
  } else {
    brands.push(brand);
    selectedBrandIndex = brands.length - 1;
  }
  saveBrands();
  refreshBrandSelect();
  closeBrandModal();
  updateMessage();
}

function renderRatesTable(table, targetId, withViews, withEstimate) {
  const headers = ["Followers", "ER", ...(withViews ? ["Avg Views"] : []), ...CATEGORIES];
  const head = headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("");
  const body = table.map((row) => {
    const estimate = withEstimate && row.est;
    const categoryCells = CATEGORIES.map((category) => `<td>${formatMoney(row.r[category][0])}-${formatMoney(row.r[category][1])}</td>`).join("");
    return `<tr>
      <td>${escapeHtml(row.fol)}${estimate ? ' <span class="estimate-mark">est</span>' : ""}</td>
      <td>${escapeHtml(row.er)}</td>
      ${withViews ? `<td>${escapeHtml(row.views || "-")}</td>` : ""}
      ${categoryCells}
    </tr>`;
  }).join("");

  $("#" + targetId).innerHTML = `<thead><tr>${head}</tr></thead><tbody>${body}</tbody>`;
}

function bindEvents() {
  $("#brand-select").addEventListener("change", (event) => {
    selectedBrandIndex = Number(event.target.value);
    saveBrands();
    updateMessage();
  });

  $("#brand-add").addEventListener("click", () => openBrandModal(-1));
  $("#brand-edit").addEventListener("click", () => {
    if (!brands.length) {
      openBrandModal(-1);
      return;
    }
    openBrandModal(selectedBrandIndex);
  });
  $("#brand-delete").addEventListener("click", () => {
    if (!brands.length) return;
    if (!confirm("Delete brand \"" + brands[selectedBrandIndex].name + "\"?")) return;
    brands.splice(selectedBrandIndex, 1);
    selectedBrandIndex = Math.max(0, Math.min(selectedBrandIndex, brands.length - 1));
    saveBrands();
    refreshBrandSelect();
    updateMessage();
  });

  $("#brand-cancel").addEventListener("click", closeBrandModal);
  $("#brand-save").addEventListener("click", saveBrandFromModal);
  $("#brand-modal").addEventListener("click", (event) => {
    if (event.target.id === "brand-modal") closeBrandModal();
  });

  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".tab").forEach((item) => item.classList.remove("active"));
      $$(".panel").forEach((panel) => panel.classList.remove("active"));
      tab.classList.add("active");
      $("#" + tab.dataset.target).classList.add("active");
    });
  });

  $("#apply-manual-views").addEventListener("click", applyManualAverageViews);

  $("#package-type").addEventListener("change", (event) => setSelectedPackage(event.target.value));

  ["creator-handle", "platform", "views", "baseline-cpm", "video-count"].forEach((id) => {
    $("#" + id).addEventListener("input", updateSingle);
    $("#" + id).addEventListener("change", updateSingle);
  });
  $("#category").addEventListener("input", handleCategoryChange);
  $("#category").addEventListener("change", handleCategoryChange);

  $("#copy-message").addEventListener("click", () => copyText($("#message-output").textContent));
  $("#copy-email").addEventListener("click", () => copyText($("#subject-line").textContent.replace(/^Subject:\s*/, "Subject: ") + "\n\n" + $("#message-output").textContent));
  $("#bulk-calculate").addEventListener("click", calculateBulk);
  $("#bulk-copy").addEventListener("click", copyBulkTsv);
  $("#bulk-clear").addEventListener("click", () => {
    $("#bulk-input").value = "";
    $("#bulk-output").innerHTML = "";
    bulkRows = [];
    $("#summary-chip").textContent = "Ready";
  });

  $("#save-template").addEventListener("click", () => {
    const category = selectedScriptCategory;
    subjectOverrides[category] = $("#subject-template").value;
    scriptOverrides[category] = $("#message-template").value;
    saveScriptOverrides();
    updateMessage();
    showToast(category + " script saved");
  });

  $("#reset-template").addEventListener("click", () => {
    const category = selectedScriptCategory;
    if (!confirm("Reset " + category + " script to default?")) return;
    delete subjectOverrides[category];
    delete scriptOverrides[category];
    saveScriptOverrides();
    refreshTemplateEditor();
    updateMessage();
  });
}

function init() {
  populateCategorySelect();
  refreshBrandSelect();
  refreshTemplateEditor();
  bindEvents();
  setSelectedPackage("single");
  updateSingle();
  window.addEventListener("pageshow", updateSingle);
  window.setTimeout(updateSingle, 0);
}

init();
