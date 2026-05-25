/* ============================================================
   AUREUM — Dummy data
   Realistic luxury real estate content (Dubai / Miami / NYC etc)
   ============================================================ */

export type Property = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  city: string;
  country: string;
  coords: { lat: number; lng: number };
  price: number;
  type: "Penthouse" | "Villa" | "Apartment" | "Estate" | "Townhouse";
  status: "For Sale" | "For Rent" | "Off Market";
  beds: number;
  baths: number;
  area: number; // sqft
  year: number;
  featured: boolean;
  hero: string;
  gallery: string[];
  description: string;
  amenities: string[];
  agent: string; // agent id
};

export const PROPERTIES: Property[] = [
  {
    id: "p01",
    slug: "celestia-penthouse",
    name: "Celestia Penthouse",
    tagline: "A sky-bound sanctuary above Palm Jumeirah.",
    location: "Palm Jumeirah, Crescent East",
    city: "Dubai",
    country: "UAE",
    coords: { lat: 25.1124, lng: 55.139 },
    price: 24500000,
    type: "Penthouse",
    status: "For Sale",
    beds: 5,
    baths: 7,
    area: 12480,
    year: 2024,
    featured: true,
    hero: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2000&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=85",
    ],
    description:
      "Suspended 47 floors above the Arabian Gulf, Celestia is a private four-storey residence sculpted from bronze, travertine and onyx. Floor-to-ceiling glass frames a 270° panorama of the Palm and the open sea. A private cinema, infinity-edge sky pool, and a 28-seat dining pavilion complete the experience.",
    amenities: [
      "Private Sky Pool",
      "Helipad Access",
      "Wine Cellar (1,800 bottles)",
      "Private Cinema",
      "Wellness Spa & Hammam",
      "Smart Home (KNX)",
      "24/7 Concierge",
      "Five-Car Vault",
    ],
    agent: "a01",
  },
  {
    id: "p02",
    slug: "noir-villa-emirates-hills",
    name: "Villa Noir",
    tagline: "Brutalist geometry, gold-lit interiors.",
    location: "Emirates Hills, Sector W",
    city: "Dubai",
    country: "UAE",
    coords: { lat: 25.064, lng: 55.169 },
    price: 38900000,
    type: "Villa",
    status: "For Sale",
    beds: 8,
    baths: 11,
    area: 26400,
    year: 2023,
    featured: true,
    hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=85",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=2000&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2000&q=85",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=2000&q=85",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=2000&q=85",
    ],
    description:
      "A sculptural composition of cantilevered volumes wrapped in black basalt and brushed bronze. Villa Noir opens onto a 60-metre reflecting pool and a sunken garden of ancient olive trees imported from Tuscany.",
    amenities: [
      "Reflecting Pool 60m",
      "Private Hammam",
      "Olive Garden",
      "Cigar Lounge",
      "Indoor Squash Court",
      "Staff Quarters (6 rooms)",
      "Italian Kitchen",
      "Underground Garage (12 cars)",
    ],
    agent: "a02",
  },
  {
    id: "p03",
    slug: "obsidian-residence-cap-ferrat",
    name: "Obsidian Residence",
    tagline: "Mediterranean horizon, captured in stone.",
    location: "Cap Ferrat, Côte d'Azur",
    city: "Saint-Jean-Cap-Ferrat",
    country: "France",
    coords: { lat: 43.687, lng: 7.331 },
    price: 65000000,
    type: "Estate",
    status: "For Sale",
    beds: 9,
    baths: 12,
    area: 32100,
    year: 2022,
    featured: true,
    hero: "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?w=2400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?w=2000&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&q=85",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=2000&q=85",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=2000&q=85",
    ],
    description:
      "Set on a 1.8-hectare promontory above the Mediterranean, this estate was designed in collaboration with the late Tadao Ando. Hand-poured concrete, custom Murano sconces, and a private deepwater berth.",
    amenities: [
      "Private Beach",
      "Deepwater Berth",
      "Tadao Ando Architecture",
      "Wine Cave (3,200 bottles)",
      "Heliport",
      "Botanical Conservatory",
      "Recording Studio",
      "Pétanque Court",
    ],
    agent: "a03",
  },
  {
    id: "p04",
    slug: "mirage-tower-67",
    name: "Mirage Tower · Floor 67",
    tagline: "A vertical estate in the heart of Downtown.",
    location: "Downtown Dubai, Burj District",
    city: "Dubai",
    country: "UAE",
    coords: { lat: 25.197, lng: 55.274 },
    price: 18250000,
    type: "Apartment",
    status: "For Sale",
    beds: 4,
    baths: 5,
    area: 7820,
    year: 2025,
    featured: false,
    hero: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=2400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=2000&q=85",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=2000&q=85",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=2000&q=85",
    ],
    description:
      "A full-floor residence facing the Burj Khalifa, finished in book-matched Calacatta Viola, bronze inlays, and silk-wrapped wall panels by Hermès Maison.",
    amenities: [
      "Burj Khalifa View",
      "Private Elevator",
      "Hermès-Finished Interiors",
      "Climate-Controlled Wardrobe",
      "Private Gym",
      "Smart Glass Walls",
    ],
    agent: "a01",
  },
  {
    id: "p05",
    slug: "kalon-house-aspen",
    name: "Kalon House",
    tagline: "Alpine geometry. Untamed views.",
    location: "Red Mountain, Aspen",
    city: "Aspen",
    country: "USA",
    coords: { lat: 39.198, lng: -106.823 },
    price: 42800000,
    type: "Estate",
    status: "For Sale",
    beds: 7,
    baths: 9,
    area: 21500,
    year: 2024,
    featured: false,
    hero: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=2400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=2000&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=2000&q=85",
      "https://images.unsplash.com/photo-1600566753051-6057b6e0c9b6?w=2000&q=85",
    ],
    description:
      "Glass, blackened steel and reclaimed timber compose this contemporary mountain retreat with ski-in access and a year-round outdoor pool carved from the granite slope.",
    amenities: [
      "Ski-In / Ski-Out",
      "Year-Round Outdoor Pool",
      "Cedar Sauna",
      "Boot-Heating Mudroom",
      "Wine Tasting Room",
      "Heated Driveway",
    ],
    agent: "a02",
  },
  {
    id: "p06",
    slug: "atelier-loft-soho",
    name: "Atelier Loft",
    tagline: "Cast-iron heritage, gallery-white interior.",
    location: "Greene Street, SoHo",
    city: "New York",
    country: "USA",
    coords: { lat: 40.7233, lng: -73.998 },
    price: 12600000,
    type: "Apartment",
    status: "For Sale",
    beds: 3,
    baths: 4,
    area: 5400,
    year: 2021,
    featured: false,
    hero: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2000&q=85",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=2000&q=85",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=2000&q=85",
    ],
    description:
      "A double-height cast-iron landmark restored as a private gallery-residence with 14-foot ceilings, a hidden screening room, and a rooftop sculpture terrace.",
    amenities: [
      "14-ft Ceilings",
      "Rooftop Sculpture Terrace",
      "Private Screening Room",
      "Restored 1882 Cast-Iron Facade",
      "Custom Steel Kitchen",
    ],
    agent: "a03",
  },
  {
    id: "p07",
    slug: "azura-bay-residence",
    name: "Azura Bay Residence",
    tagline: "Turquoise water at every threshold.",
    location: "Marasi Bay, Business Bay",
    city: "Dubai",
    country: "UAE",
    coords: { lat: 25.187, lng: 55.262 },
    price: 9800000,
    type: "Townhouse",
    status: "For Sale",
    beds: 4,
    baths: 5,
    area: 6100,
    year: 2024,
    featured: false,
    hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2000&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=85",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=2000&q=85",
    ],
    description:
      "Four-storey waterfront townhouse with private mooring, indoor-outdoor reflecting pool, and curated landscaping by Piet Oudolf.",
    amenities: [
      "Private Mooring",
      "Indoor-Outdoor Pool",
      "Piet Oudolf Garden",
      "Wellness Floor",
      "Private Lift",
    ],
    agent: "a01",
  },
  {
    id: "p08",
    slug: "monaco-skyhaus",
    name: "Monaco SkyHaus",
    tagline: "Where the principality meets the sea.",
    location: "Avenue Princesse Grace, Monte-Carlo",
    city: "Monaco",
    country: "Monaco",
    coords: { lat: 43.747, lng: 7.43 },
    price: 88500000,
    type: "Penthouse",
    status: "Off Market",
    beds: 6,
    baths: 8,
    area: 14200,
    year: 2023,
    featured: true,
    hero: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2000&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=85",
    ],
    description:
      "Triplex penthouse overlooking the Grand Prix circuit and Port Hercule. Direct elevator from a private garage, hammered-bronze ceilings, and a 380-square-metre terrace with sunken jacuzzi.",
    amenities: [
      "Grand Prix Circuit View",
      "Triplex Layout",
      "Hammered Bronze Ceilings",
      "Private Garage Elevator",
      "Sunken Terrace Jacuzzi",
      "Onyx-Lit Library",
    ],
    agent: "a02",
  },
  {
    id: "p09",
    slug: "halcyon-villa-mykonos",
    name: "Halcyon Villa",
    tagline: "Cycladic minimalism overlooking the Aegean.",
    location: "Agios Lazaros, Mykonos",
    city: "Mykonos",
    country: "Greece",
    coords: { lat: 37.43, lng: 25.349 },
    price: 19400000,
    type: "Villa",
    status: "For Sale",
    beds: 7,
    baths: 9,
    area: 9800,
    year: 2022,
    featured: false,
    hero: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=2400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=2000&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=85",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=2000&q=85",
    ],
    description:
      "Stark white stucco volumes cascade down a private cliff, terminating in a cantilevered infinity pool above the Aegean. Sunset over Delos from every room.",
    amenities: [
      "Cantilevered Infinity Pool",
      "Sunset Delos View",
      "Private Cove Access",
      "Outdoor Cinema",
      "Cycladic Stone Spa",
    ],
    agent: "a03",
  },
];

export type Agent = {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  email: string;
  phone: string;
  languages: string[];
  deals: number;
  volume: string;
};

export const AGENTS: Agent[] = [
  {
    id: "a01",
    name: "Anastasia Voss",
    title: "Director, Private Client",
    bio: "Fifteen years brokering trophy assets across the Gulf and Riviera. Former head of acquisitions at a Geneva family office.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=85",
    email: "a.voss@aureum.estate",
    phone: "+971 4 555 0188",
    languages: ["English", "French", "Russian"],
    deals: 142,
    volume: "$3.8B",
  },
  {
    id: "a02",
    name: "Rashid Al-Mansoori",
    title: "Senior Partner, MENA",
    bio: "Born in Dubai, trained at Sotheby's London. Specialises in off-market residences and ultra-prime new developments.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=85",
    email: "r.almansoori@aureum.estate",
    phone: "+971 4 555 0142",
    languages: ["Arabic", "English", "Italian"],
    deals: 98,
    volume: "$2.4B",
  },
  {
    id: "a03",
    name: "Camille Beaumont",
    title: "Director, Europe & Americas",
    bio: "Curator-turned-broker. Connects collectors and architects with the homes that match their inner world.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85",
    email: "c.beaumont@aureum.estate",
    phone: "+33 1 8555 0190",
    languages: ["French", "English", "Spanish", "Mandarin"],
    deals: 76,
    volume: "$1.9B",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  property: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t01",
    quote:
      "Aureum did not sell us a home — they curated a chapter of our life. The dossier they prepared on Celestia rivalled an art catalogue.",
    name: "H.E. Mariam Al-Suwaidi",
    role: "Principal, Sirat Holdings",
    property: "Celestia Penthouse, Dubai",
  },
  {
    id: "t02",
    quote:
      "Discretion of a Swiss bank, taste of a Parisian gallerist. We were introduced to Obsidian three months before it ever surfaced.",
    name: "Lukas Reinhart",
    role: "Founder, Reinhart Capital",
    property: "Obsidian Residence, Cap Ferrat",
  },
  {
    id: "t03",
    quote:
      "Six languages. Four time zones. One coordinated transaction closed in eleven days. Aureum operates at a level I had not seen before.",
    name: "Ji-Won Park",
    role: "Family Office Principal, Seoul",
    property: "Mirage Tower, Dubai",
  },
  {
    id: "t04",
    quote:
      "Their team flew to Aspen, walked the property at dawn, and had a structural engineer on site by noon. That is what bespoke means.",
    name: "Eleanor Whitfield",
    role: "Author & Philanthropist",
    property: "Kalon House, Aspen",
  },
];

export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: "s01",
    number: "01",
    title: "Private Brokerage",
    summary:
      "Bespoke acquisition and disposition of ultra-prime residences with absolute discretion.",
    detail:
      "Our private brokerage practice operates entirely off-market. Each engagement is led by a senior partner and supported by a research analyst, a legal advisor, and a dedicated transaction coordinator.",
    features: [
      "Off-market deal flow",
      "Senior-led engagement",
      "Dedicated transaction team",
      "Cross-border coordination",
    ],
  },
  {
    id: "s02",
    number: "02",
    title: "Architectural Curation",
    summary:
      "We commission, vet, and steward signature residences with the world's leading architects.",
    detail:
      "From a Tadao Ando concrete poem to a Foreign Office Architects sculptural tower, we partner clients with the right architect, contractor and consultant — and oversee the build end-to-end.",
    features: [
      "Architect matchmaking",
      "Land assemblage",
      "Construction oversight",
      "Interior commission",
    ],
  },
  {
    id: "s03",
    number: "03",
    title: "Portfolio Strategy",
    summary:
      "Multi-jurisdiction holding strategy, yield optimisation, and legacy structuring.",
    detail:
      "We work alongside your tax advisor and family office to construct a coherent global property portfolio — from yield-producing trophy rentals to single-family legacy estates.",
    features: [
      "Jurisdictional analysis",
      "Holding structure design",
      "Yield modelling",
      "Succession planning",
    ],
  },
  {
    id: "s04",
    number: "04",
    title: "Concierge Residency",
    summary:
      "Once you own it, we run it. A single point of contact for everything inside the walls.",
    detail:
      "Aureum Concierge operates household teams across our markets — maintenance, security, fleet, hospitality, garden, art handling and seasonal opening.",
    features: [
      "Household staffing",
      "24/7 security oversight",
      "Art & wine logistics",
      "Seasonal opening",
    ],
  },
  {
    id: "s05",
    number: "05",
    title: "Yacht & Aviation Liaison",
    summary:
      "Coordinated berth-to-bedroom logistics for clients who arrive by air or sea.",
    detail:
      "We work with select aviation and yachting partners to ensure that arrival at your Aureum residence is uninterrupted — from helipad clearance to crewed transfer.",
    features: [
      "Berth coordination",
      "Helipad clearance",
      "Crewed transfer",
      "Customs liaison",
    ],
  },
  {
    id: "s06",
    number: "06",
    title: "Investment Advisory",
    summary:
      "Pre-launch access to new developments with institutional-grade underwriting.",
    detail:
      "We hold pre-construction allocations across the world's most anticipated towers. Each opportunity is independently underwritten before it is shown.",
    features: [
      "Pre-launch allocation",
      "Independent underwriting",
      "Exit modelling",
      "LP / co-invest structures",
    ],
  },
];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: "Architecture" | "Markets" | "Design" | "Lifestyle" | "Insight";
  author: string;
  date: string;
  readTime: string;
  cover: string;
  featured?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b01",
    slug: "the-new-vertical-luxury",
    title: "The New Vertical Luxury",
    excerpt:
      "Why the next generation of trophy assets is being built not outward, but upward — and what it means for ultra-prime buyers.",
    body: "For four decades, the centre of gravity in luxury residential lived along the coast. The villa, the estate, the compound — these were the templates of arrival. Today, in the world's most ambitious cities, that template is being inverted. We are watching the rise of the vertical estate.\n\nA vertical estate is not an apartment. It is a multi-floor residence stacked inside a single tower, often comprising 12,000 to 30,000 square feet, with private elevator arrival, dedicated mechanical systems, and a household plan as complex as any villa. In Dubai, Hong Kong, New York and São Paulo, these residences now command higher prices per square foot than the trophy estates they once stood in the shadow of.\n\nThree forces are driving the shift. Security is the first — vertical estates concentrate risk to a single, screened threshold. Convenience is the second — proximity to schools, offices, and air links is unmatched. The third, less discussed, is curation: the architect, the developer, the operator, and the neighbours are all chosen long before the first wall rises.",
    category: "Architecture",
    author: "Anastasia Voss",
    date: "May 12, 2026",
    readTime: "8 min",
    cover:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=2000&q=85",
    featured: true,
  },
  {
    id: "b02",
    slug: "dubai-second-renaissance",
    title: "Dubai's Second Renaissance",
    excerpt:
      "The emirate is no longer a market of speculation. A new generation of architecture is rewriting the skyline.",
    body: "Dubai is entering its second renaissance. The first was about scale. The second is about subtlety.",
    category: "Markets",
    author: "Rashid Al-Mansoori",
    date: "Apr 28, 2026",
    readTime: "6 min",
    cover:
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?w=2000&q=85",
  },
  {
    id: "b03",
    slug: "designing-for-permanence",
    title: "Designing for Permanence",
    excerpt:
      "A conversation with three architects on materials that age beautifully — and the ones that simply age.",
    body: "We sat down with three architects across Milan, Tokyo and Lisbon to discuss what permanence means in residential design today.",
    category: "Design",
    author: "Camille Beaumont",
    date: "Apr 14, 2026",
    readTime: "11 min",
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=85",
  },
  {
    id: "b04",
    slug: "the-quiet-economy-of-the-mediterranean",
    title: "The Quiet Economy of the Mediterranean",
    excerpt:
      "Cap Ferrat. Porto Cervo. Mykonos. Why the Med's quietest harbours are seeing the loudest demand.",
    body: "There is a quieter economy underway across the Mediterranean — one measured not in arrivals but in absences.",
    category: "Markets",
    author: "Camille Beaumont",
    date: "Mar 30, 2026",
    readTime: "7 min",
    cover:
      "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?w=2000&q=85",
  },
  {
    id: "b05",
    slug: "the-art-of-the-private-cinema",
    title: "The Art of the Private Cinema",
    excerpt:
      "Acoustics, sightlines, leather, light. The five rooms our clients always rebuild.",
    body: "The private cinema is the single most rebuilt room in the homes we sell.",
    category: "Lifestyle",
    author: "Anastasia Voss",
    date: "Mar 18, 2026",
    readTime: "5 min",
    cover:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=2000&q=85",
  },
  {
    id: "b06",
    slug: "off-market-the-new-default",
    title: "Off-Market: The New Default",
    excerpt:
      "Why upwards of 60% of trophy transactions never reach a listing portal — and why that suits everyone.",
    body: "When we ran the numbers across our last forty closings, the result was startling: only fourteen of them were ever publicly listed.",
    category: "Insight",
    author: "Rashid Al-Mansoori",
    date: "Mar 02, 2026",
    readTime: "9 min",
    cover:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=85",
  },
];

export const OFFICES = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Burj District 17, Downtown, Dubai",
    phone: "+971 4 555 0100",
    hours: "Sun–Thu · 09:00 – 19:00 GST",
    coords: { lat: 25.197, lng: 55.274 },
  },
  {
    city: "Monaco",
    country: "Principality of Monaco",
    address: "Avenue de la Costa 7, Monte-Carlo",
    phone: "+377 9 855 0100",
    hours: "Mon–Fri · 09:00 – 18:00 CET",
    coords: { lat: 43.7384, lng: 7.4246 },
  },
  {
    city: "New York",
    country: "United States",
    address: "Tribeca, 122 Hudson Street, NY 10013",
    phone: "+1 212 555 0100",
    hours: "Mon–Fri · 09:00 – 19:00 EST",
    coords: { lat: 40.7204, lng: -74.0094 },
  },
];

export const STATS = [
  { value: 3.8, suffix: "B", prefix: "$", label: "Volume Closed · 2025" },
  { value: 42, suffix: "", prefix: "", label: "Markets Active" },
  { value: 98, suffix: "%", prefix: "", label: "Off-Market Origination" },
  { value: 11, suffix: "", prefix: "", label: "Languages Spoken" },
];
