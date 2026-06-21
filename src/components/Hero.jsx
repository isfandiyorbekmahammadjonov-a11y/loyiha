import React from "react";
import { FaArrowRight } from "react-icons/fa";
import hero from "../assets/hero.svg";
function Hero() {
  return (
    <section className="bg-[#F5F4FF] h-[585px] flex items-center justify-center">
      <div className="max-w-6xl px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl font-bold leading-tight text-slate-900">
              Create, Read,
              <br />
              <span className="text-violet-600">Inspire.</span>
            </h1>

            <p className="mt-6 text-gray-500 text-lg max-w-md">
              Discover stories written by amazing people. Share your knowledge
              and inspire others with your unique perspective.
            </p>

            <div className="flex gap-4">
              <button className="flex items-center justify-center w-[193px] h-[48px] gap-2 bg-gradient-to-r from-[#4346EF] to-[#8524E5] text-white px-6 py-3 rounded-lg">
                Explore Posts
                <FaArrowRight size={12} />
              </button>

              <button className="px-6 py-3 w-[157px] h-[48px] rounded-lg border border-gray-300 bg-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-5 rounded-2xl shadow-xl">
              <img
                src={hero}
                alt="Hero"
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
