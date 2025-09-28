import React from "react";
import homebg from "../assets/homebg.png";
import home1 from "../assets/home1.png";
import humanAI from "../assets/humanAI.png";

const HomeSection = () => {
  const scrollToNext = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-cover bg-center bg-no-repeat relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 py-8 lg:py-0"
      style={{
        backgroundImage: `url(${homebg})`,
      }}
    >
      {/* Cloud-like images at random positions - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        <img
          src={home1}
          alt=""
          className="absolute top-20 left-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 opacity-60 animate-float"
        />
        <img
          src={home1}
          alt=""
          className="absolute top-80 left-1/6 w-18 h-18 sm:w-20 sm:h-20 lg:w-28 lg:h-28 opacity-50 animate-float animation-delay-1000"
        />
        <img
          src={home1}
          alt=""
          className="absolute bottom-1/4 left-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 opacity-40 animate-float animation-delay-2000"
        />
      </div>

      {/* Left side content */}
      <div className="flex-1 text-center lg:text-left text-white z-20 max-w-3xl mb-8 lg:mb-0">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            WE <span style={{ color: "#CC65FF" }}>SOLVE</span> BUSINESS PROBLEM
            OF <span style={{ color: "#00DDFF" }}>TODAY</span>
          </h1>
        </div>

        <div className="animate-fade-in-up animation-delay-300">
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Transforming your business with cutting-edge AI solutions and SAP
            expertise. We bridge the gap between today's challenges and
            tomorrow's opportunities.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-600">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium border-2 border-white/50 text-white bg-transparent rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              Learn More
            </button>
            <button
              onClick={scrollToNext}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium bg-gradient-to-b from-[#1D74FF] to-[#02D6FF] text-white rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Human AI image */}
      <div className="flex-1 flex justify-center lg:justify-end items-center z-20 lg:pl-8">
        <div className="animate-fade-in-up animation-delay-900">
          <img
            src={humanAI}
            alt="Human AI"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1023px) {
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSection;