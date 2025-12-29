import React from "react";
import HeroSection from "./HeroSection";

export default function App() {
  return (
    <>
      {/* Hero Section with CTA */}
      <HeroSection
        title="Welcome to WsCube Tech"
        description="Learn MERN Stack, React & Backend with real-world projects"
        myclass="bg-teal-500 text-white"
      >
        <button className="rounded-xl bg-white px-6 py-2 font-semibold text-teal-600 hover:bg-gray-100">
          Click Me
        </button>

        <p className="max-w-xl text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eius in facilis quia omnis et commodi minus necessitatibus.
        </p>
      </HeroSection>

      {/* Navigation Section */}
      <HeroSection
        title="Quick Links"
        description="Navigate through important pages"
        myclass="bg-gray-900 text-white"
      >
        <ul className="flex flex-wrap gap-4 font-medium">
          <li className="cursor-pointer hover:text-teal-400">Home</li>
          <li className="cursor-pointer hover:text-teal-400">Courses</li>
          <li className="cursor-pointer hover:text-teal-400">Projects</li>
          <li className="cursor-pointer hover:text-teal-400">About</li>
          <li className="cursor-pointer hover:text-teal-400">Contact</li>
        </ul>
      </HeroSection>
    </>
  );
}
