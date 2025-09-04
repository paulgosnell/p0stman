import { Bot, BookOpen, Globe, Users, Headphones, Smartphone, DollarSign, Database, Shield, Cloud, Zap } from 'lucide-react';
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
    link: "/fractional-cpo",
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
    link: "/contact",
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
    title: "Websites",
    description: "Modern, responsive websites that convert visitors into customers.",
    price: "From $8,000",
    link: "/website",
    bgColor: "bg-green-600",
    iconBg: "bg-green-100",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "CMS Integration", 
      "Performance Focused"
    ],
    techStack: [
      "React", 
      "Next.js", 
      "Tailwind CSS", 
      "Supabase"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native-quality mobile apps built with modern cross-platform technology.",
    price: "From $12,000",
    link: "/mobile-app",
    bgColor: "bg-indigo-600",
    iconBg: "bg-indigo-100",
    features: [
      "iOS & Android",
      "Native Performance",
      "Push Notifications", 
      "Offline Support"
    ],
    techStack: [
      "React Native", 
      "Expo", 
      "TypeScript", 
      "Firebase"
    ]
  },
  {
    icon: Zap,
    title: "Creative Prototypes",
    description: "Live, interactive demos that win pitches, unlock budget, and excite stakeholders.",
    price: "From $5,000",
    link: "/contact",
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