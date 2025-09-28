// components/PricingSection.jsx

import { FileText, Search, TestTube } from "lucide-react";
import sectionImage from "../assets/section.jpg";

const PricingSection = () => {
  const processCards = [
    {
      icon: <Search className="w-8 h-8" />,
      title: " Support Compass",
      description: "Learn from real-world experiences and ensure your migration project delivers maximum ROL.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Development Compass",
      description: "Access a curated collection of tools and guides to streamline your project implementation.",
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Agent Compass",
      description: "Connect with industry specialists for tailored advice and strategies specific to your needs."
    }
  ];
  return (
    <section id="pricing" className="h-full bg-gradient-to-r from-blue-100 to-white">
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SAP Activate Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-1 bg-slate-200 text-black font-bold text-md rounded-full border-2 border-blue-200 shadow-lg">
              CORE TO ADVANCED TECHNOLOGIES
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Foundation Technologies
            </h2>
            <p className="text-md md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Built on proven enterprise technologies that power the world's leading organizations.
            </p>
          </div>

          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {processCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ width: '376px', height: '200px', margin: '0 auto' }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full text-white">
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* table section */}
          <div className="overflow-x-auto rounded-md shadow-lg border border-gray-200 my-8">
            <table className="min-w-full border-collapse">
              {/* Top Header Row */}
              <thead>
                <tr className="text-white text-center">
                  <th
                    className="bg-gradient-to-r from-red-900 to-red-500 p-2 border-r border-red-400"
                    colSpan={2}
                  >
                    Core Technologies
                  </th>
                  <th
                    className="bg-gradient-to-r from-green-900 to-green-500 p-2"
                    colSpan={2}
                  >
                    Advanced Technologies
                  </th>
                </tr>
                {/* Sub-header Row */}
                <tr className="text-gray-800 text-left border-1 border-white">
                  <th className="bg-red-400 p-2 w-1/4 border-r border-gray-300">
                    SAP Support Role
                  </th>
                  <th className="bg-red-400 p-2 w-1/4 border-r border-gray-300">
                    Current Pain Areas
                  </th>
                  <th className="bg-green-400 p-2 w-1/4 border-r border-gray-300">
                    VEGA AI Value
                  </th>
                  <th className="bg-green-400 p-2 w-1/4">
                    Productivity / Staff Impact
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-sm text-gray-800 border-1 border-white ">
                {/* RED ROWS */}
                <tr className="bg-red-100 border-1 border-white">
                  <td className="p-4 font-semibold">
                    SAP Basis
                    <br />
                    <span className="text-xs text-gray-600">
                      (L1 Monitoring & Infra Support)
                    </span>
                  </td>
                  <td className="p-4">
                    Manual monitoring, password resets, incident triage
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-sky-700">
                      Support Navigator
                    </span>
                    <br />
                    Automates monitoring, incident routing, password management
                  </td>
                  <td className="p-4">
                    Reduces need for 24x7 large L1 team by 50%
                  </td>
                </tr>

                <tr className="bg-red-200 border-1 border-white">
                  <td className="p-4 font-semibold">
                    SAP Functional Support
                    <br />
                    <span className="text-xs text-gray-600">(FI, MM, SD, etc.)</span>
                  </td>
                  <td className="p-4">
                    Repeated functional queries, reliance on SMEs
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-sky-700">
                      Knowledge Navigator
                    </span>
                    <br />
                    Provides instant access to SOPs, KT docs, and Signavio integration
                  </td>
                  <td className="p-4">
                    Cuts functional query tickets by ~40%
                  </td>
                </tr>

                {/* GREEN ROWS */}
                <tr className="bg-green-100 border-1 border-white">
                  <td className="p-4 font-semibold">SAP ABAP Development</td>
                  <td className="p-4">
                    Manual coding, test scripts, regression issues
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-sky-700">
                      Development Navigator
                    </span>
                    <br />
                    Generates ABAP code & test scripts, integrates with DevOps
                  </td>
                  <td className="p-4">Developers' productivity up by 2-3x</td>
                </tr>

                <tr className="bg-green-200 border-1 border-white">
                  <td className="p-4 font-semibold">SAP End-to-End Lifecycle</td>
                  <td className="p-4">
                    Manual coordination between teams, high MTTR
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-sky-700">SAP Agentic AI</span>
                    <br />
                    Auto-resolves incidents, recommends best practices
                  </td>
                  <td className="p-4">
                    Reduces overall staff dependency by 30–40%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Full Width Background Section */}
      <div
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-full flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${sectionImage})`,
        }}
      >
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto p-10 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side Text Content */}
            <div className="lg:w-1/2 text-white space-y-6">
              <div className="inline-flex items-center px-4 py-1 bg-slate-200 text-black font-bold text-md rounded-full border-2 border-blue-200 shadow-lg">
                CORE TO ADVANCED TECHNOLOGIES
              </div>
              <h2 className="text-xl md:text-xl lg:text-2xl font-bold leading-tight">
                Advancing to Next Gen Solutions
              </h2>
              <p className="text-sm md:text-md lg:text-lg text-gray-200 leading-relaxed max-w-2xl">
                Harness the power of innovation with cutting-edge technologies designed to shape the future. Our solutions go beyond conventional methods, integrating AI, automation, and data-driven intelligence to deliver smarter, faster, and more reliable outcomes. From optimizing operations to unlocking new opportunities, we help businesses stay ahead in a rapidly evolving digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn More
                </button>

              </div>
            </div>

            {/* Right Side - Optional for future content */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              {/* This space can be used for additional content, graphics, or left empty */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;