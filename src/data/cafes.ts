export interface Cafe {
  id: string;
  name: string;
  location: string;
  city: "Dakar" | "Thiès";
  rating: number;
  wifi: number;
  outlets: number;
  ambiance: number;
  price: number;
  priceRange: string;
  hours: string;
  type: "calm" | "open" | "hybrid";
  label?: "Bronze" | "Silver" | "Gold" | "Platinum";
  image: string;
  description: string;
  features: string[];
}

export const cafes: Cafe[] = [
  {
    id: "press-cafe",
    name: "Press Café",
    location: "Mermoz",
    city: "Dakar",
    rating: 4.5,
    wifi: 5,
    outlets: 5,
    ambiance: 4,
    price: 4,
    priceRange: "2000-4000FCFA",
    hours: "7h-22h",
    type: "calm",
    label: "Gold",
    image: "/images/press-cafe.jpg",
    description: "Chaine populaire avec WiFi stable et nombreuses prises. Ambiance calme, ideal pour sessions longues.",
    features: ["WiFi Fiable", "Nombreuses Prises", "Climatise", "Espace Calme"]
  },
  {
    id: "mamamia",
    name: "Mamamia",
    location: "Almadies",
    city: "Dakar",
    rating: 4.3,
    wifi: 4,
    outlets: 4,
    ambiance: 5,
    price: 4,
    priceRange: "2500-5000FCFA",
    hours: "8h-23h",
    type: "hybrid",
    label: "Silver",
    image: "/images/mamamia.jpg",
    description: "Restaurant-cafe avec terrasse, vue mer possible. Bon WiFi, ambiance decontractee.",
    features: ["Vue Mer", "Terrasse", "Bonne Nourriture", "WiFi Correct"]
  },
  {
    id: "brioches-dorees",
    name: "Les Brioches Dolees",
    location: "Plateau, Sacred-Coeur",
    city: "Dakar",
    rating: 4.0,
    wifi: 4,
    outlets: 3,
    ambiance: 3,
    price: 5,
    priceRange: "1500-3000FCFA",
    hours: "6h30-21h",
    type: "calm",
    label: "Bronze",
    image: "/images/brioches.jpg",
    description: "Boulangerie-patisserie abordable avec WiFi gratuit. Peut etre bruyant aux heures de pointe.",
    features: ["Tres Abordable", "WiFi Gratuit", "Ouverture Tot", "Patisseries"]
  },
  {
    id: "layu-cafe",
    name: "Layu Cafe",
    location: "Ouakam",
    city: "Dakar",
    rating: 3.5,
    wifi: 3,
    outlets: 4,
    ambiance: 3,
    price: 3,
    priceRange: "2000-4000FCFA",
    hours: "8h-20h",
    type: "hybrid",
    image: "/images/layu.jpg",
    description: "Mix cafe-coworking, mais service irregulier. Parfois bruyant, WiFi variable.",
    features: ["Espace Coworking", "Prises Disponibles", "Service Variable"]
  },
  {
    id: "cabane-surfeur",
    name: "La Cabane du Surfeur",
    location: "Ngor",
    city: "Dakar",
    rating: 4.8,
    wifi: 3,
    outlets: 3,
    ambiance: 5,
    price: 4,
    priceRange: "2500-5000FCFA",
    hours: "9h-21h",
    type: "open",
    label: "Platinum",
    image: "/images/cabane.jpg",
    description: "Vue ocean exceptionnelle, ambiance surf. WiFi correct, ideal pour inspiration creative.",
    features: ["Vue Ocean", "Ambiance Surf", "Espace Ouvert", "Inspirant"]
  },
  {
    id: "kotao-coffee",
    name: "Kotao Coffee",
    location: "Point E",
    city: "Dakar",
    rating: 4.6,
    wifi: 5,
    outlets: 5,
    ambiance: 4,
    price: 4,
    priceRange: "2000-4500FCFA",
    hours: "7h30-22h",
    type: "calm",
    label: "Gold",
    image: "/images/kotao.jpg",
    description: "Coffee shop moderne, WiFi excellent. Parfait pour les nomades digitaux.",
    features: ["WiFi Excellent", "Moderne", "Prises Partout", "Cafe de Qualite"]
  },
  {
    id: "lulu-senegal",
    name: "Lulu Senegal",
    location: "Almadies",
    city: "Dakar",
    rating: 4.4,
    wifi: 4,
    outlets: 4,
    ambiance: 4,
    price: 4,
    priceRange: "2500-4500FCFA",
    hours: "8h-22h",
    type: "hybrid",
    label: "Silver",
    image: "/images/lulu.jpg",
    description: "Ambiance branchee, clientele jeune. Bon equilibre travail-detente.",
    features: ["Ambiance Jeune", "WiFi Stable", "Espace Social", "Menu Varie"]
  },
  {
    id: "original-drip",
    name: "Original Drip Coffee Shop",
    location: "Fann",
    city: "Dakar",
    rating: 4.7,
    wifi: 5,
    outlets: 5,
    ambiance: 4,
    price: 4,
    priceRange: "2500-5000FCFA",
    hours: "8h-21h",
    type: "calm",
    label: "Gold",
    image: "/images/drip.jpg",
    description: "Specialiste cafe de specialite. Excellent pour concentration, WiFi rapide.",
    features: ["Cafe Specialite", "WiFi Rapide", "Calme", "Design Moderne"]
  }
];

export const cities = ["Dakar", "Thies"] as const;
export const types = {
  calm: "Calme & Ferme",
  open: "Ouvert & Inspirant",
  hybrid: "Hybride & Social"
} as const;

export const labels = {
  Bronze: { color: "hsl(30 60% 50%)", description: "Basics WiFi & Prises" },
  Silver: { color: "hsl(0 0% 70%)", description: "Horaires Etendus & Service" },
  Gold: { color: "hsl(45 100% 50%)", description: "Excellence Nomade" },
  Platinum: { color: "hsl(210 60% 60%)", description: "Premium + Events" }
} as const;
