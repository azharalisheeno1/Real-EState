import React from "react";
import Hero from "../assets/hero1.jpg";
import LocationSearchForm from "./LocationSearchForm";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
    <div id="home" className="sm:pt-20">
      <div
        style={{ backgroundImage: `url(${Hero})` }}
        className=" sm:h-[700px] h-screen bg-center   flex justify-center sm:justify-start items-center container sm:mx-auto rounded  bg-cover"
      >
        <div className=" text-white bg-black bg-opacity-50  px-10 sm:px-20  ">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold py-5">
            {" "}
            Find the Perfect Property in the Heart of Austin
          </h1>
          <p className="text-md sm:text-lg  dark:text-white text-justify">
            At AustinNest, we’re changing the way you experience the real estate
            market. Our advanced platform simplifies the search for or sale of
            your home, providing you with the tools and insights needed to make
            informed decisions
          </p>
        </div>
      </div>
      <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 1, ease: "easeInOut" }}
      >
        <LocationSearchForm />
      </motion.div>
      </div>
    </>
  );
}


export default Home;
