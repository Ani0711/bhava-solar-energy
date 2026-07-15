export type Project = {
  slug: string;
  name: string;
  client: string;
  location: string;
  capacity: string;
  category: "Residential" | "Commercial" | "Industrial" | "Government" | "Utility Scale" | "Battery Storage" | "Solar Pump";
  technology: string;
  year: number;
  generation: string;
  co2: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  { slug: "sanjeevani-textiles", name: "Sanjeevani Textiles Rooftop", client: "Sanjeevani Textiles Pvt. Ltd.", location: "Surat, Gujarat", capacity: "2.4 MWp", category: "Industrial", technology: "Bifacial TopCon + Sungrow inverters", year: 2024, generation: "3.6 GWh/yr", co2: "2,880 tCO₂/yr", description: "Turnkey rooftop plant across 12 sheds with net-metering under Gujarat solar policy.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80" },
  { slug: "aster-hospital", name: "Aster Hospital Solar+BESS", client: "Aster DM Healthcare", location: "Bengaluru, Karnataka", capacity: "1.2 MWp + 800 kWh BESS", category: "Commercial", technology: "Mono PERC + LFP Battery", year: 2024, generation: "1.8 GWh/yr", co2: "1,440 tCO₂/yr", description: "Hybrid solar + battery ensuring critical load uptime for 400-bed hospital.", image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80" },
  { slug: "rajasthan-utility", name: "Rajasthan Utility Plant", client: "State DISCOM Consortium", location: "Bikaner, Rajasthan", capacity: "50 MWp", category: "Utility Scale", technology: "Bifacial Tracker + Central Inverter", year: 2023, generation: "95 GWh/yr", co2: "76,000 tCO₂/yr", description: "Ground-mounted utility plant with single-axis trackers under 25-yr PPA.", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80" },
  { slug: "tirupati-temple", name: "Tirupati Temple Trust", client: "TTD Board", location: "Tirupati, AP", capacity: "5 MWp", category: "Government", technology: "Mono PERC + String Inverters", year: 2023, generation: "8.4 GWh/yr", co2: "6,700 tCO₂/yr", description: "Ground-mount plant powering pilgrim facilities & administrative blocks.", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80" },
  { slug: "hyd-datacenter", name: "Hyderabad Data Center", client: "CloudNine Hyperscale", location: "Hyderabad, Telangana", capacity: "3 MWp + 4 MWh BESS", category: "Battery Storage", technology: "TopCon + LFP + PCS", year: 2024, generation: "4.5 GWh/yr", co2: "3,600 tCO₂/yr", description: "24×7 clean power with BESS for Tier-IV data center — SLA 99.995%.", image: "https://images.unsplash.com/photo-1621243804936-775306a8f2e3?auto=format&fit=crop&w=1200&q=80" },
  { slug: "punjab-solar-pump", name: "Punjab Solar Pump Cluster", client: "PEDA", location: "Bathinda, Punjab", capacity: "1,200 pumps", category: "Solar Pump", technology: "5 HP–10 HP AC/DC pumps", year: 2023, generation: "N/A", co2: "12,000 tCO₂/yr", description: "PM-KUSUM Component B — 1,200 farmer beneficiaries.", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80" },
  { slug: "villa-luxora", name: "Villa Luxora Residence", client: "Private Villa Owner", location: "Whitefield, Bengaluru", capacity: "20 kWp", category: "Residential", technology: "Bifacial + Hybrid Inverter + 30 kWh Battery", year: 2024, generation: "30 MWh/yr", co2: "24 tCO₂/yr", description: "Off-grid ready luxury villa with EV charger integration.", image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1200&q=80" },
  { slug: "chennai-airport", name: "Chennai Airport Canopy", client: "AAI Chennai", location: "Chennai, Tamil Nadu", capacity: "8 MWp", category: "Government", technology: "Bifacial Canopy Structures", year: 2023, generation: "12.8 GWh/yr", co2: "10,240 tCO₂/yr", description: "Parking canopy + terminal rooftop — largest airport solar in South India.", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80" },
  { slug: "mumbai-warehouse", name: "DP World Warehouse", client: "DP World India", location: "Nhava Sheva, Maharashtra", capacity: "6.5 MWp", category: "Industrial", technology: "Mono PERC + String Inverters", year: 2024, generation: "9.8 GWh/yr", co2: "7,840 tCO₂/yr", description: "Massive logistics warehouse rooftop — 42,000 m² coverage.", image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=1200&q=80" },
  { slug: "kochi-hotel", name: "Marriott Kochi Rooftop", client: "Marriott International", location: "Kochi, Kerala", capacity: "450 kWp", category: "Commercial", technology: "Mono PERC + Micro-Inverters", year: 2023, generation: "670 MWh/yr", co2: "540 tCO₂/yr", description: "Luxury hotel rooftop with aesthetic module layout preserving skyline.", image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80" },
  { slug: "delhi-govt-complex", name: "Delhi Secretariat", client: "Govt. of NCT Delhi", location: "New Delhi", capacity: "3.2 MWp", category: "Government", technology: "Bifacial + Central Inverter", year: 2024, generation: "4.8 GWh/yr", co2: "3,840 tCO₂/yr", description: "Rooftop + carport solar for administrative complex.", image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80" },
  { slug: "gujarat-bess", name: "Gujarat Grid-Scale BESS", client: "GSECL", location: "Kutch, Gujarat", capacity: "20 MW / 40 MWh", category: "Battery Storage", technology: "LFP Containers + 33 kV PCS", year: 2024, generation: "N/A", co2: "18,000 tCO₂/yr", description: "Standalone BESS for grid ancillary services & renewable firming.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80" },
];

export const categories = ["All", "Residential", "Commercial", "Industrial", "Government", "Utility Scale", "Battery Storage", "Solar Pump"] as const;
