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
  {
    slug: "jhansi-residential-5kw",
    name: "Residential On-Grid Solar Installation",
    client: "Homeowner",
    location: "Jhansi, Uttar Pradesh",
    capacity: "5 kWp",
    category: "Residential",
    technology: "Mono PERC Solar Panels + String Inverter",
    year: 2025,
    generation: "7,200 kWh/yr",
    co2: "5.8 tCO₂/yr",
    description: "Complete EPC solution including design, installation, net metering, and PM Surya Ghar subsidy assistance.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "jhansi-villa-10kw",
    name: "Villa Rooftop Solar Project",
    client: "Private Residence",
    location: "Jhansi, Uttar Pradesh",
    capacity: "10 kWp",
    category: "Residential",
    technology: "TopCon Solar Modules + Grid-Tied Inverter",
    year: 2025,
    generation: "14,400 kWh/yr",
    co2: "11.5 tCO₂/yr",
    description: "High-efficiency rooftop system with complete EPC execution and subsidy support.",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "mathura-commercial-10kw",
    name: "Commercial Rooftop Solar",
    client: "Retail Business",
    location: "Mathura, Uttar Pradesh",
    capacity: "10 kWp",
    category: "Commercial",
    technology: "TopCon Solar Panels + Smart Monitoring",
    year: 2025,
    generation: "14,500 kWh/yr",
    co2: "11.6 tCO₂/yr",
    description: "Turnkey commercial rooftop solar installation with remote performance monitoring.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "vrindavan-home-5kw",
    name: "Residential Solar System",
    client: "Homeowner",
    location: "Vrindavan, Uttar Pradesh",
    capacity: "5 kWp",
    category: "Residential",
    technology: "Mono PERC Panels + Net Metering",
    year: 2025,
    generation: "7,300 kWh/yr",
    co2: "5.9 tCO₂/yr",
    description: "Complete rooftop solar project with government subsidy and professional installation.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "lalitpur-farmhouse-7kw",
    name: "Farmhouse Solar Installation",
    client: "Farm Owner",
    location: "Lalitpur, Uttar Pradesh",
    capacity: "7 kWp",
    category: "Residential",
    technology: "TopCon Modules + Grid-Tied Inverter",
    year: 2025,
    generation: "10,100 kWh/yr",
    co2: "8.1 tCO₂/yr",
    description: "Reliable solar solution designed for farmhouse energy requirements.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "jhansi-commercial-office",
    name: "Office Rooftop Solar",
    client: "Business Office",
    location: "Jhansi, Uttar Pradesh",
    capacity: "8 kWp",
    category: "Commercial",
    technology: "TopCon Panels + Wi-Fi Monitoring",
    year: 2025,
    generation: "11,500 kWh/yr",
    co2: "9.2 tCO₂/yr",
    description: "Energy-efficient rooftop installation reducing operational electricity costs.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "mathura-villa-6kw",
    name: "Independent House Solar Project",
    client: "Homeowner",
    location: "Mathura, Uttar Pradesh",
    capacity: "6 kWp",
    category: "Residential",
    technology: "Mono PERC + String Inverter",
    year: 2025,
    generation: "8,700 kWh/yr",
    co2: "7.0 tCO₂/yr",
    description: "Residential rooftop solar with complete documentation and subsidy assistance.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "vrindavan-commercial-8kw",
    name: "Retail Shop Solar Installation",
    client: "Retail Business",
    location: "Vrindavan, Uttar Pradesh",
    capacity: "8 kWp",
    category: "Commercial",
    technology: "TopCon Solar Panels",
    year: 2025,
    generation: "11,400 kWh/yr",
    co2: "9.1 tCO₂/yr",
    description: "Commercial rooftop system delivering significant electricity savings.",
    image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=1200&q=80",
  }
];

export const categories = ["All", "Residential", "Commercial", "Industrial", "Government", "Utility Scale", "Battery Storage", "Solar Pump"] as const;
