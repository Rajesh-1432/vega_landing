import React from 'react';
import { Search, FileText, TestTube, Settings, Rocket, RotateCcw } from 'lucide-react';

const ServicesSection = () => {
  const processCards = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "DISCOVER",
      description: "Understanding your business challenges and requirements",
      items: ["Business Analysis", "Requirement Gathering", "Process Mapping"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "PREPARE",
      description: "Designing solutions and preparing implementation strategy",
      items: ["Solution Design", "Architecture Planning", "Resource Allocation"]
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "EXPLORE",
      description: "Prototyping and validating concepts",
      items: ["Proof of Concept", "Support and Maintenance", "Enhancement Planning"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "REALIZE",
      description: "Full implementation and configuration",
      items: ["System Implementation", "Integration", "Configuration"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "DEPLOY",
      description: "Going live with comprehensive support",
      items: ["Go-Live Support", "User Training", "Performance Monitoring"]
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "RUN",
      description: "Ongoing optimization and maintenance",
      items: ["Continuous Improvement", "System Maintenance", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="h-full bg-gradient-to-r from-blue-100 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SAP Activate Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-4 py-1 bg-slate-200 text-black font-bold text-md rounded-full border-2 border-blue-200 shadow-lg">
            SAP ACTIVATE METHODOLOGY
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Our Proven Implementation Process
          </h2>
          <p className="text-md md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We follow the industry-standard SAP Activate methodology, enhanced with AI-driven insights to ensure successful project delivery and business transformation.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {processCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ width: '376px', height: '280px', margin: '0 auto' }}
            >
              {/* Icon */}
              <div className="flex justify-start mb-3">
                <div className="p-2 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full text-white">
                  {card.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {card.description}
              </p>

              {/* List Items */}
              <ul className="space-y-2">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;