import React from 'react';
import { Bot, Zap, Sparkles, Code, CheckCircle } from 'lucide-react';

export default function ProjectOverview() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-4">AI-Powered Work Order Management Platform</h2>
        <p className="text-lg text-gray-200 mb-8">
          Dear Jason, thank you for sharing your requirements for the Work Order/Maintenance platform. I've reviewed the scope document in detail and am excited to present a comprehensive solution that aligns with your needs while leveraging cutting-edge AI technology.
        </p>
        <p className="text-lg text-gray-200 mb-8">
          Drawing inspiration from industry leaders like Property Meld, Flexwurx, and Happy Co, we'll create a state-of-the-art platform that revolutionizes your property management operations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Bot className="w-5 h-5 text-blue-400" />
              Development Approach
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Utilizing Bolt and Claude AI for rapid, error-free development</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Incremental delivery with continuous feedback integration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Seamless Propertyware integration via JSON/SOAP API</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-400" />
              Technical Excellence
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Modern, scalable architecture with AI at its core</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Real-time synchronization and updates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Mobile-first, responsive design</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { value: "14 Weeks", label: "Total Duration" },
            { value: "$56,000", label: "Total Investment" },
            { value: "3 Phases", label: "Delivery Plan" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900">Phase 1</h3>
          </div>
          <p className="text-gray-600 mb-4">Core Platform Development</p>
          <div className="text-sm text-gray-500">4 weeks • $16,000</div>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Bot className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-medium text-gray-900">Phase 2</h3>
          </div>
          <p className="text-gray-600 mb-4">Advanced Features & AI</p>
          <div className="text-sm text-gray-500">4 weeks • $16,000</div>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Sparkles className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-medium text-gray-900">Phase 3</h3>
          </div>
          <p className="text-gray-600 mb-4">Advanced Reporting</p>
          <div className="text-sm text-gray-500">6 weeks • $24,000</div>
        </div>
      </div>
    </div>
  );
}