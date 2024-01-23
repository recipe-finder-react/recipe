import React from "react";
import dish from "../assets/dish.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Discover Simple Delecious and{" "}
              <h1 className="text-orange-500">Fast Recipes!</h1>
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              A Recipe is Soulless.The essence of Recipe must Come from you.The
              cook
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-2/3 sm:top-20 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-60 h-160 d-flex lg:top-0 lg:right-0 lg:w-1/2 lg:h-full m ">
                        <img
                          src={dish}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={"/all"}>
                <a
                  href="#"
                  className="inline-block text-center bg-yellow-700 border border-transparent rounded-md py-3 px-8 font-medium text-black hover:bg-orange-600"
                >
                  Explore
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
