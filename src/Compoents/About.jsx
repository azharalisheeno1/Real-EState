import React from 'react'
import about from '../assets/about.jpg'
import { motion } from 'framer-motion'
function About() {
  return (
    <>
    

    <div id='about' className="container mx-auto px-4 sm:px-20 py-8">
  <div className="flex flex-col lg:flex-row items-center justify-between">
    <div className="lg:w-1/2 mb-6 sm:mb-0">
      <motion.img 
      
          initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }} 
      src={about} alt="About Us" className="w-full lg:h-[600px] lg:w-[500px] object-cover rounded-lg" />
    </div>
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }} 
    className="lg:w-1/2 my-3 ">
      <h2 className="text-xl font-semibold mb-2">WHO WE ARE</h2>
      <h1 className="text-3xl font-bold mb-4">We help clients buy and sell houses since 2010</h1>
      <p className="text-gray-700 mb-6">
      Welcome to Real EState, where we turn your real estate dreams into reality. With a deep-rooted commitment to excellence and a passion for property, we specialize in connecting clients with their ideal homes and investment opportunities. Our team of seasoned professionals leverages extensive market knowledge, innovative strategies, and personalized service to deliver unparalleled results.
      </p>
      <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition">View More</button>
    </motion.div>
  </div>
</div>

    </>
  )
}

export default About