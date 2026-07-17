import React from "react";
import { FaArrowRight } from "react-icons/fa";
import hero from "../../assets/hero.svg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="bg-[#F5F4FF] h-[585px] flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="mx-auto">
            <h1 className="md:text-6xl text-4xl font-bold leading-tight text-slate-900">
              Create, Read,
              <br />
              <span className="text-violet-600">Inspire.</span>
            </h1>
            <p className="mt-6 text-gray-500 text-lg max-w-md">
              Discover stories written by amazing people. Share your knowledge
              and inspire others with your unique perspective.
            </p>
            <div className="md:flex gap-4 mt-6">
              <Link
                to={"posts"}
                className="flex items-center justify-center w-[193px] h-[48px] gap-2 bg-gradient-to-r from-[#4346EF] to-[#8524E5] text-white px-6 py-3 rounded-lg"
              >
                Explore Posts
                <FaArrowRight size={12} />
              </Link>
              <Link
                to={"login"}
                className="px-6 py-3 w-[157px] h-[48px] rounded-lg border border-gray-300 bg-white"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <img src={hero} alt="Hero" className="w-full hidden md:flex" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
