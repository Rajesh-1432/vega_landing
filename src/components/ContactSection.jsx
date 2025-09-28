// components/ContactSection.jsx
import React, { useState } from "react";
import { FileText, BookOpen, ArrowRight, Download, Video } from "lucide-react";

const ContactSection = () => {
  const articles = [
    {
      tag: "Implementation",
      title: "AI-Driven SAP Implementation: Best Practices for 2024",
      description:
        "Comprehensive guide on integrating AI capabilities into your SAP ecosystem for enhanced business outcomes.",
      link: "#",
    },
    {
      tag: "Migration",
      title: "SAP S/4HANA Migration: Avoiding Common Pitfalls",
      description:
        "Learn from real-world experiences and ensure your migration project delivers maximum ROI.",
      link: "#",
    },
    {
      tag: "AI Technology",
      title: "Generative AI in Enterprise: From Concept to Production",
      description:
        "Step-by-step approach to successfully deploying generative AI solutions in enterprise environments.",
      link: "#",
    },
    {
      tag: "Implementation",
      title: "AI-Driven SAP Implementation: Best Practices for 2024",
      description:
        "Comprehensive guide on integrating AI capabilities into your SAP ecosystem for enhanced business outcomes.",
      link: "#",
    },
  ];

  const resources = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "AI Readiness Assignment",
      description: "Evaluate your organization's readiness for AI implementation",
      link: "#",
      type: "PDF Guide",
    },
    {
      icon: <Video  className="w-6 h-6 text-purple-600" />,
      title: "Customer Success Stories",
      description: "Real-world case studies from successful implementations",
      link: "#",
      type: "PDF Guide",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "SAP Activate Methodology",
      description: "Complete methodology overview and implementation templates",
      link: "#",
      type: "PDF Guide",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "SAP Activate Methodology",
      description: "Complete methodology overview and implementation templates",
      link: "#",
      type: "PDF Guide",
    },
  ];

  return (
    <section id="contact" className="h-full bg-gradient-to-r from-purple-100 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-4 py-1 bg-slate-200 text-black font-bold text-md rounded-full border-2 border-blue-200 shadow-lg">
            KNOWLEDGE CENTER
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Insights & Resources
          </h2>
          <p className="text-md md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with our latest research, best practices, and thought leadership in AI and
            enterprise technology.
          </p>
        </div>

        {/* Latest Articles */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <BookOpen /> Latest Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="p-5 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition bg-white"
              >
                <div className="text-sm font-semibold text-blue-600 mb-2 flex items-center justify-between">
                  <span className="bg-blue-200 px-2 rounded-full text-black text-sm">{article.tag}</span> 
                  <span className="text-gray-600">8 min read</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                <a
                  href={article.link}
                  className="text-blue-600 font-semibold flex items-center gap-1 hover:underline"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-5 py-2 bg-gradient-to-b from-blue-600 to-sky-400 text-white rounded-full hover:bg-blue-700 transition">
              Browse Articles
            </button>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Download /> Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, idx) => (
              <div
                key={idx}
                className="p-5 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition bg-white flex items-start gap-4"
              >
                <span className="bg-gray-200 p-2 rounded-xl text-blue-600">{resource.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1 justify-between">
                    <h4 className="text-lg font-bold text-gray-900">{resource.title}</h4>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-blue-600 font-semibold flex items-center gap-1 hover:underline"
                  >
                    Download <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-5 py-2 bg-gradient-to-b from-blue-600 to-sky-400 text-white rounded-full hover:bg-blue-700 transition">
              Browse Library
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
