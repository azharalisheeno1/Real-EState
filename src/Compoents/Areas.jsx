import React from 'react'
import area1 from '../assets/area1.jpg'
import area2 from '../assets/area2.jpg'
import area3 from '../assets/area3.jpg'
import { motion } from 'framer-motion'
function Areas() {

  const images=[
    {img:area1},
    {img:area2},
    {img:area3},
  ]

  const Data=[
    {name:"ACTIVE LISTINGS",heading:"5K"},
    {name:" SOLID LISTINGS ",heading:"9K"},
    {name:"CLIENTS WE'VE SERVED ",heading:"6K"},
  ]
  return (
    <>
    
    <div id='about' className="container rounded-2xl bg-gray-700 text-white mx-auto px-4 sm:px-20 mt-10 py-8">
  <div className="flex flex-col lg:flex-row gap-5 sm:p-10 items-center justify-between">
   
    <motion.div        initial={{ opacity: 0, scale: 0.5 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 1, ease: "easeInOut" }} className="lg:w-1/3">
      <h2 className="text-xl font-semibold mb-2 text-red-500">POPULAR AREAS</h2>
      <h1 className="text-3xl font-bold mb-4">Explore most
      popular areas</h1>
     
     
    </motion.div>
    <div className="lg:w-2/3 lg:flex gap-3 mb-6 sm:mb-0">
    {images.map((img,index)=>
    <motion.img 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    key={index}
    src={img.img}alt="About Us" className=" my-4 lg:h-[400px] lg:w-[300px] object-cover rounded-lg" />
    )}
      
    </div>
  </div>
  <motion.div 
  initial={{ opacity: 0, scale: 0.5, y: 50 }} // Start from below with reduced scale and zero opacity
  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate to normal position, full scale, and full opacity
  transition={{ duration: 1, ease: "easeInOut" }} // Set the duration and easing
  className='flex text-center sm:text-start items-center justify-between'>
   
    
    {Data.map((data,index)=>
     <div key={index} className='md:flex items-center text-lg gap-3'>
     <h1 className='text-lg sm:text-5xl font-medium'>{data.heading}</h1>
     <h1 className='text-md  sm:text-xl'>{data.name}</h1>
     </div>
    )}
 
  </motion.div>
</div>

    </>
  )
}

export default Areas