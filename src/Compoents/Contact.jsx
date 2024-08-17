import React from 'react'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <>
     <div id='contact' className="container  mx-auto px-4   sm:pt-20 pt-28  py-20">
  <div className="flex flex-col-reverse gap-5 lg:flex-row  items-center   justify-around">
    <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeInOut" }} 
    className="lg:w-1/2 w-full mb-6 sm:mb-0">
   

   {/* FORM */}



   <form className="max-w-xl mx-auto bg-white sm:p-10 p-4 rounded-2xl">
    <h1 className='sm:text-2xl my-5'>Send us a message today</h1>
  
   
    <div className=" w-full mb-5 ">
        <input type="text" name="fullname"  id="fullname" className=" py-3 px-4 rounded-lg w-full text-sm text-gray-900 bg-transparent border 2   border-gray-400 appearance-none     " placeholder="Enter FullName " required />
      
    </div>

  <div className="  mb-5 ">
      <input type="email" name="email" id="floating_email" className=" py-3 px-4 rounded-lg w-full text-sm text-gray-900 bg-transparent border 2   border-gray-400 appearance-none     " placeholder="Enter Your Email " required />
     
  </div>
  <div className=" w-full mb-5 ">
      <input type="new-password" name="password" id="password" className=" py-3 px-4 rounded-lg w-full text-sm text-gray-900 bg-transparent border 2   border-gray-400 appearance-none     "  placeholder="Password " required />
      
  </div>
  <div className="w-full mb-5 ">
      <input type="new-password" name="cpassword" id="cpassword" className=" py-3 px-4 rounded-lg w-full text-sm text-gray-900 bg-transparent border 2   border-gray-400 appearance-none     "  placeholder="Confirom Password " required />
    
  </div>
  <textarea name=""  className=" py-3 px-4 rounded-lg w-full text-sm text-gray-900 bg-transparent border 2   border-gray-400 appearance-none     " rows={5}  id=""></textarea>
  

  <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition">Submit</button>
</form>


{/* FORM */}
    </motion.div>
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }} 
    className="lg:w-1/3">
      <h2 className="text-xl font-semibold mb-2 text-red-500">REACH US</h2>
      <h1 className="text-3xl font-bold mb-4">Get in touch with us today and our team will assist you</h1>
      <p className="text-gray-700 mb-6">
      Our experts and developers would love to contribute their expertise and insights and help you today. Contact us to help you plan your next transaction, either buying or selling a home.
      </p>
      <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition">Contact Us</button>
    </motion.div>
  </div>
</div>

    </>
  )
}

export default Contact