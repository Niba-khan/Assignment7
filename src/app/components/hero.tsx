import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="w-full max-w-lg py-6 px-8 shadow-lg rounded-lg">
        <div className="text-center">
          <h1
            className='text-[#586617] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl'
          >
            Client Side Rendering (CSR) and Server Side Rendering (SSR)
          </h1>
        </div>
        <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href="/clientSide-data-fetch">
            <button className="text-white  bg-[#1c2007] border border-gray-300 rounded-lg hover:motion-safe:animate-ping">
              Client Side Rendering
            </button>
          </Link>
          <Link href="/serverSide-data-fetch">
            <button className="text-white hover:motion-safe:animate-ping bg-[#1c2007] border border-gray-300 rounded-lg">
              Server Side Rendering
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;