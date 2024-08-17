import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import about from '../assets/images/about.jpg'
import about1 from '../assets/images/about1.jpg'

function Footer() {
  return (
    <>
    
    

<footer className="bg-gray-700 dark:bg-white">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="md:flex text-white justify-between px-4 py-6 lg:py-8 md:grid-cols-3">
        <div className='md:w-1/3'>
            <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-black">About Us</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, placeat? Odit aliquam, maiores ducimus perspiciatis cupiditate dolorum sit repellendus nulla?</p>

          <div className='flex gap-3 items-center sm:my-5 mb-10 mt-2'>
            <IoLogoYoutube size={30}/>
            <FaFacebook size={30}/>
            <FaInstagram size={30}/>
            <FaTwitter size={30}/>
          </div>
          <p>Copyright Real Estate, All Rights Reserved</p>
            
        </div>
        <div>
            <h2 className="mb-6 text-lg mt-5 font-semibold text-white uppercase dark:text-black">Contact US</h2>
            <ul className="text-white dark:text-gray-500 ">
                <li className="mb-4">
                10845 Griffith Peak Dr, Las Vegas, NV 89135
                </li>
                <li className="mb-4">
                +92 879 098 8901
                </li>
                <li className="mb-4">
                office23@gmail.com
                </li>
               
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">Latest Properties</h2>
            <ul className="text-white dark:text-gray-500 font-medium">
                <li className="flex gap-3 items-center mb-4">
                 <img src={about} className='h-20 w-20 rounded-xl' alt="" />
                <div>
                <h1>Sea View Villa</h1>
                <p>$500</p>
                </div>
                </li>
               
                <li className="flex gap-3 items-center mb-4">
                 <img src={about1} className='h-20 w-20 rounded-xl' alt="" />
                <div>
                <h1>Villa with amazing view</h1>
                <p>$ 1000</p>
                </div>
                </li>
               
            </ul>
        </div>
       
    </div>
   
    </div>
</footer>

    </>
  )
}

export default Footer