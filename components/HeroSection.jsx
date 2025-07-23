import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white pt-16 md:pt-32 mb-4 md:mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          AI Developer | Full-Stack Engineer | DevOps Enthusiast
        </p>
        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;