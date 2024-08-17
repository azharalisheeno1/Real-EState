import React from "react";
import { property } from "../export";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { motion } from "framer-motion";
function Properties() {
  return (
    <>
      <div
        id="Properties"
        className="container mx-auto px-4 sm:px-0  pt-28 md:pt-20"
      >
        <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }} // Start from below with reduced scale and zero opacity
        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate to normal position, full scale, and full opacity
        transition={{ duration: 1, ease: "easeInOut" }} // Set the duration and easing
        className="mx-auto  lg:w-1/3 text-center">
          <h2 className="text-lg  mb-2 text-red-500">PROPERTIES</h2>
          <h1 className="text-2xl font-bold mb-4">
          Explore the latest
          properties available
          </h1>
        </motion.div>

        <div className=" sm:flex  flex-wrap gap-2">
          {property.map((card, index) => (
            <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }} // Start from below with reduced scale and zero opacity
      whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate to normal position, full scale, and full opacity
      transition={{ duration: 1, ease: "easeInOut" }} // Set the duration and easing
              key={index}
              className="shadow-2xl bg-white  rounded-xl mb-6 mx-auto w-full sm:w-[45%] md:w-[32%]"
            >
              <div className="relative">
                <img
                  src={card.images}
                  alt="Villa Image"
                  className="rounded-xl sm:h-80 w-full"
                />
                <div>
                  <div className="absolute flex justify-between  sm:bottom-64 bottom-52 w-full">
                    <button className="bg-red-500 rounded-full lg:mx-3 md:mx-1 mx-2 text-xs sm:text-sm text-white  px-2 hover:bg-red-600">
                      Featured
                    </button>
                    <div>
                      <button className="bg-red-500 rounded-full lg:mx-3 md:mx-1 mx-2text-xs sm:text-sm text-white px-2 hover:bg-red-600">
                        Sale
                      </button>
                      <button className="bg-red-500 rounded-full lg:mx-3 md:mx-1 mx-2 text-xs sm:text-sm text-white px-2 hover:bg-red-600">
                        Active
                      </button>
                    </div>
                  </div>
                  <div className="absolute bottom-5 px-5">
                    <h1 className="text-white text-sm sm:text-md">
                      {card.address}
                    </h1>
                  </div>
                </div>
              </div>
              {/* Below Part */}
              <div className="px-5 py-5">
                <h1 className="text-lg  font-semibold">{card.name}</h1>
                <h2 className="text-xl font-medium py-2 text-red-500">
                  {card.price}
                </h2>
                <div className="flex gap-3 items-center mt-2">
                  <FaBed size={20} className="text-red-500" />
                  <h1 className="text-sm font-medium">{card.bed}</h1>
                  <FaBath size={20} className="text-red-500" />
                  <h2 className="text-sm font-medium">{card.bath}</h2>
                  <h3 className="text-sm font-medium">{card.area}</h3>
                </div>
                <div className="border-b-2 my-3 border-gray-300"></div>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-medium">{card.owner}</h1>
                  <div className="flex items-center justify-center space-x-4">
                    {/* Heart Button */}
                    <button className=" text-red-500 p-2 h-8 w-8 rounded-full hover:bg-gray-800 transition-colors duration-200">
                      <FaHeart className="mx-auto" size={15} />
                    </button>

                    {/* Share Button */}
                    <button className="text-red-500 p-2 h-8 w-8 rounded-full hover:bg-gray-800 transition-colors duration-200">
                      <FaShareAlt size={15} />
                    </button>

                    {/* Plus Button */}
                    <button className="text-red-500 p-2 h-8 w-8 rounded-full hover:bg-gray-800 transition-colors duration-200">
                      <FaPlusCircle size={15} />
                    </button>
                  </div>
                </div>
              </div>
              {/* Below Part */}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Properties;
