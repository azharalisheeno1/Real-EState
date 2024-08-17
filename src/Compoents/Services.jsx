import React from 'react'
import { service } from '../export'
import { motion } from 'framer-motion'
function Services() {
  return (
    <>
    
    <div
        id="service"
        className="container  mx-auto px-4 sm:px-0  pt-28 sm:pt-20"
      >
        <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: 50 }} // Start from below with reduced scale and zero opacity
        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate to normal position, full scale, and full opacity
        transition={{ duration: 1, ease: "easeInOut" }} // Set the duration and easing
        className=" mx-auto lg:w-1/3 text-center">
          <h2 className="text-lg  mb-2 text-red-500">OUR SERVICES</h2>
          <h1 className="text-2xl font-bold mb-4">
          Top real estate
          services available
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2  sm:px-2 rounded-xl md:grid-cols-2 lg:grid-cols-3 gap-6">
      {service.map((serv,index)=>
       <motion.div
       initial={{ opacity: 0, scale: 0.5, y: 50 }} // Start from below with reduced scale and zero opacity
      whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate to normal position, full scale, and full opacity
      transition={{ duration: 1, ease: "easeInOut" }} // Set the duration and easing
       key={index} className="max-w-lg  w-full bg-gray-700 mx-auto  border-b-4 border-red-600 rounded-lg shadow-md p-6 flex flex-col justify-between space-y-4">
       <div className='space-x-2'>
       
        < serv.icon size={20}  className="w-24 text-white h-24 rounded-full object-cover"/>
       
         <div className='py-5'>
           <h2 className="text-lg font-semibold text-white">{serv.title}</h2>
           <p className="mt-2 text-sm text-white">
          {serv.desc}
           </p>
         </div>
         
       </div>
       <button className="self-start  border-b-2 px-1 text-white font-medium border-red-500     transition-colors duration-200">
         Read More
       </button>
     </motion.div>
      )}
       
        </div>
      
      </div>
    
    </>
  )
}

export default Services