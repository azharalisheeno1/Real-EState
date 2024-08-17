
import { client } from '../export';
import { motion } from 'framer-motion';
function Clients() {
  return (
    <>
    
 
    <div
        id="testimonials"
        className="    mx-auto px-4 sm:pt-28   pt-28 "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto  lg:w-1/3 text-center">
          <h2 className="text-lg  mb-2 text-red-500">OUR CLIENTS</h2>
          <h1 className="text-2xl font-bold mb-4">
          What are our clients
          saying about us
          </h1>
        </motion.div>


    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-4'>
      {client.map((clie,index)=>
      
      <motion.div  initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}  key={index} className=''>

      <div className="sm:flex items-start sm:p-10 p-4  bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <img
        src={clie.image} // Replace with your image URL
        alt="Client"
        className="w-24 h-24 rounded-full object-cover mr-4"
      />
      <div>
        <h2 className="text-lg font-semibold">{clie.name}</h2>
        <p className="text-sm text-gray-500">{clie.text}</p>
        <p className="mt-2 text-gray-700">
         {clie.feedback}
        </p>
      </div>
    </div>
      </motion.div>
      
      )}
      
     
     

     
     </div>
 
        </div>


   
    
    </>
  )
}

export default Clients