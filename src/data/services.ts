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
    icon: Bot,
    title: "AI Agents",
    description: "Custom autonomous AI agents for your business",
    price: "From $5,000",
    link: "/ai-agents",
    bgColor: "bg-violet-600",
    iconBg: "bg-violet-100",
    features: [
      "24/7 autonomous operation",
      "Custom workflows",
      "Integration with existing systems",
      "Continuous learning"
    ],
    techStack: [
      "OpenAI API", 
      "Edge Functions", 
      "Supabase", 
      "Serverless Architecture",
      "Real-time APIs"
    ]
  },
  {
    icon: Headphones,
    title: "Retainer Service",
    description: "Get on-demand expert guidance and support for all your tech needs. Private communication channel, no contracts, cancel anytime.",
    price: "$5,000/mo",
    link: "/retainer",
    bgColor: "bg-teal-600",
    iconBg: "bg-teal-100",
    features: [
      "Dedicated support channel",
      "Priority response",
      "Technical advisory",
      "Strategy consulting"
    ],
    techStack: [
      "AI Development", 
      "System Architecture", 
      "Technical Leadership",
      "Product Strategy"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native iOS & Android apps built with AI",
    price: "$20,000",
    link: "/mobile-app",
    bgColor: "bg-blue-600",
    iconBg: "bg-blue-100",
    features: [
      "4 weeks delivery",
      "iOS & Android apps",
      "App Store guidance",
      "30 days support"
    ],
    techStack: [
      "React Native", 
      "Expo", 
      "Supabase", 
      "Edge Functions", 
      "Push Notifications"
    ]
  },
  {
    icon: Globe,
    title: "Website",
    description: "Professional website built with AI",
    price: "$10,000",
    link: "/website",
    bgColor: "bg-purple-600",
    iconBg: "bg-purple-100",
    features: [
      "2 weeks delivery",
      "Professional design",
      "SEO optimized",
      "30 days support"
    ],
    techStack: [
      "React", 
      "Tailwind CSS", 
      "Supabase", 
      "Edge Functions", 
      "SEO Optimization"
    ]
  }
];