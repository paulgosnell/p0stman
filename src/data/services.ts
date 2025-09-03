import { Bot, BookOpen, Globe, Users, Headphones, Smartphone, DollarSign, Database, Shield, Cloud } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  link: string;
  bgColor: string;
  iconBg: string;
  features?: string[];
  techStack?: string[]; // Added tech stack field
}

export const services: Service[] = [
  {
    icon: Users,
    title: "Fractional Product Leadership",
    description: "Hands-on product direction, leadership, and team support when you need extra firepower.",
    price: "From $10,000/mo",
    link: "/fractional-product-leadership",
    bgColor: "bg-blue-600",
    iconBg: "bg-blue-100",
    features: [
      "Product Strategy",
      "Team Leadership", 
      "Stakeholder Management",
      "Go-to-Market"
    ],
    techStack: [
      "Product Strategy", 
      "Team Leadership", 
      "Stakeholder Management",
      "Go-to-Market Planning"
    ]
  },
  {
    icon: Bot,
    title: "MVP Launches",
    description: "Fast, focused builds that validate your idea and get you to market in weeks, not months.",
    price: "From $15,000",
    link: "/mvp-launches",
    bgColor: "bg-purple-600",
    iconBg: "bg-purple-100",
    features: [
      "Prototypes",
      "Proof-of-Concepts", 
      "Beta Launches",
      "Market Validation"
    ],
    techStack: [
      "React", 
      "Node.js", 
      "AI Integration", 
      "Rapid Prototyping"
    ]
  },
  {
    icon: Globe,
    title: "Websites & Apps",
    description: "End-to-end design and delivery of digital products that scale.",
    price: "From $10,000",
    link: "/websites-apps",
    bgColor: "bg-green-600",
    iconBg: "bg-green-100",
    features: [
      "Websites",
      "Mobile Apps",
      "Platforms", 
      "SaaS"
    ],
    techStack: [
      "React", 
      "React Native", 
      "Tailwind CSS", 
      "Supabase"
    ]
  },
  {
    icon: Smartphone,
    title: "Creative Prototypes",
    description: "Live, interactive demos that win pitches, unlock budget, and excite stakeholders.",
    price: "From $5,000",
    link: "/creative-prototypes",
    bgColor: "bg-orange-600",
    iconBg: "bg-orange-100",
    features: [
      "Campaign Mockups",
      "Pitch Support",
      "Innovation Labs",
      "Interactive Demos"
    ],
    techStack: [
      "Interactive Prototypes", 
      "Demo Development", 
      "Pitch Presentations"
    ]
  }
];