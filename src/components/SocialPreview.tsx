import React from 'react';
import { useParams } from 'react-router-dom';
import { Bot, Globe, CheckCircle, BookOpen, Users, Calendar, Download, Gift } from 'lucide-react';
import { downloadAsImage } from '../lib/downloadUtils';

const dimensions = {
  twitter: {
    width: 800,
    height: 450,
    className: 'w-[800px] h-[450px]'
  },
  linkedin: {
    width: 800,
    height: 418,
    className: 'w-[800px] h-[418px]'
  }
};

const slides = {
  christmas: {
    title: "Season's Greetings",
    subtitle: "Wishing You Joy & Innovation",
    icon: <Gift className="w-6 h-6 text-red-400" />,
    iconBg: "bg-red-100",
    textColor: "text-red-400",
    gradientFrom: "from-red-500/20",
    gradientTo: "to-green-500/20",
    points: [
      "Building the Future Together",
      "Creating Digital Magic",
      "Spreading Holiday Joy",
      "Here's to 2024!"
    ]
  },
  website: {
    title: "Custom Website Package",
    subtitle: "Get Your Website Built with AI",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    iconBg: "bg-purple-100",
    textColor: "text-purple-400",
    gradientFrom: "from-purple-500/20",
    gradientTo: "to-pink-500/20",
    price: "$3,000",
    regularPrice: "$6,000",
    points: [
      "Professional Design & Development",
      "2-4 Weeks Delivery",
      "50% Off Limited Time Offer",
      "30 Days Support Included"
    ]
  },
  guide: {
    title: "Bolt Builder's Guide",
    subtitle: "Build Your Next Product with AI",
    icon: <BookOpen className="w-6 h-6 text-green-400" />,
    iconBg: "bg-green-100",
    textColor: "text-green-400",
    gradientFrom: "from-green-500/20",
    gradientTo: "to-emerald-500/20",
    price: "$50",
    points: [
      "200+ Pages of Practical Guidance",
      "Step-by-Step Instructions",
      "Real-World Examples",
      "Access to Bolt Builder Network"
    ]
  },
  training: {
    title: "Expert Training",
    subtitle: "Master AI-Powered Development",
    icon: <Calendar className="w-6 h-6 text-blue-400" />,
    iconBg: "bg-blue-100",
    textColor: "text-blue-400",
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-indigo-500/20",
    price: "$500",
    points: [
      "One-on-One Intensive Training",
      "3 x 2-Hour Sessions",
      "Hands-On Project Development",
      "Guide Included (Worth $50)"
    ]
  },
  affiliate: {
    title: "Affiliate Program",
    subtitle: "Earn 20% Commission on Every Referral",
    icon: <Users className="w-6 h-6 text-pink-400" />,
    iconBg: "bg-pink-100",
    textColor: "text-pink-400",
    gradientFrom: "from-pink-500/20",
    gradientTo: "to-purple-500/20",
    price: "20%",
    points: [
      "Up to $600 Per Referral",
      "30-Day Cookie Window",
      "Monthly Payouts",
      "Marketing Resources Provided"
    ]
  }
};

export default function SocialPreview() {
  const { platform = 'linkedin', type = 'website' } = useParams();
  const { className } = dimensions[platform as keyof typeof dimensions];
  const slide = slides[type as keyof typeof slides];

  const handleDownload = () => {
    downloadAsImage('social-preview-card', `${type}-${platform}-preview`);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <div id="social-preview-card" className={`${className} bg-gradient-to-br from-gray-900 to-black overflow-hidden relative`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center" />
        </div>

        <div className="relative z-10 h-full flex">
          <div className="flex-1 p-10 flex flex-col">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 ${slide.iconBg} rounded-xl`}>
                  {slide.icon}
                </div>
                <span className={`text-lg font-medium ${slide.textColor}`}>{slide.title}</span>
              </div>

              <h1 className="text-3xl font-bold mb-6 leading-tight text-white">
                {slide.subtitle}
              </h1>

              <div className="space-y-3 mb-8">
                {slide.points.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className={`w-5 h-5 ${slide.textColor} flex-shrink-0`} />
                    <span className="text-base text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <div className="text-2xl font-bold mb-1 text-white">{slide.price}</div>
              {slide.regularPrice && (
                <div className="text-sm text-gray-400">Regular price: {slide.regularPrice}</div>
              )}
            </div>
          </div>

          <div className="w-[250px] p-8 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${slide.gradientFrom} ${slide.gradientTo} blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2`} />
            
            <div className="relative z-10 text-center">
              <img
                src="https://bolt.new/stackblitz-logo.svg"
                alt="Bolt"
                className="w-24 mb-6 mx-auto"
              />
              <div className="space-y-4 mb-6">
                <div className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                  <Bot className="w-6 h-6 text-blue-400 mb-2 mx-auto" />
                  <p className="text-xs text-gray-300">
                    "Built with Bolt AI-powered development"
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                p0stman.com/{type}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="mt-8 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Download className="w-5 h-5" />
        Download Image
      </button>
    </div>
  );
}