import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

function Navbar() {
const [isopen,setIsopen]=  useState(false)
const menues=[
  {name:"Home",path:"home"},
  {name:"About",path:"about"},
  {name:"Properties",path:"Properties"},
  {name:"services",path:"service"},
  {name:"testimonials",path:"testimonials"},
  {name:"contact",path:"contact"},
]

  return (
    <>
    
    
<nav  className="bg-gray-700  fixed p-3 w-full z-[999] text-white  dark:bg-gray-900 dark:border-gray-700">
  <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2">
    <div  className="flex items-center space-x-3 rtl:space-x-reverse">
       <h1 className='text-white sm:text-2xl font-medium'>Real EState</h1>
        
    </div>
   

    <div className="hidden w-full md:block md:w-auto" >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  lg:gap-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {menues.map((menu,index)=> 
        <li key={index}>
        <Link 
        spy={true}
        smooth={true}
        duration={700}
        className="block py-2 cursor-pointer px-3 uppercase  hover:bg-red-600 hover:text-white  text-white md:px-2 rounded-xl dark:text-white dark:bg-blue-600 "  to={menu.path}>{menu.name}</Link>
      </li>
        )}



      </ul>
    </div>

    <div className="md:hidden py-5 " onClick={() => setIsopen(!isopen)}>
          {isopen ? <IoCloseSharp size={30}/> : <MdOutlineMenu size={30} /> }
          {isopen && (
            <div className="absolute top-20   right-0  bg-gray-700   md:hidden flex flex-col items-center  w-full  py-2  ">
              <ul className="flex flex-col  space-y-6 justify-center items-center">
                {menues.map((menu, index) => (
                  <li
                    key={index}
                    className=" py-2 cursor-pointer  uppercase px-3 font-medium  hover:bg-red-600 hover:text-white  text-white rounded-xl dark:text-white dark:bg-blue-600"
                  >
                    <Link
                      spy={true}
                      smooth={true}
                      duration={700}
                      to={menu.path}
                      onClick={() => setIsopen(false)}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>
          )}
        </div>


    


  </div>
</nav>
    
    </>
  )
}

export default Navbar