'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaHeart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
export default function AboutPage() {
    const router = useRouter();

    const handleRedirect = () => {
      router.push('products'); 
    };
  
  return (
    <div className="px-10">

      <motion.section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center pt-32">
          <h1 className="text-5xl font-extrabold mb-4 text-white">
            Welcome to Our eCommerce Store
          </h1>
          <p className="text-lg text-gray-300">
            Discover the best products and experience seamless shopping.
          </p>
        </div>
      </motion.section>

      
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className=" text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-center mb-4">Our Mission</h2>
          <p className="text-lg text-gray-400">
            We strive to provide quality products that cater to the unique needs of our customers.
          </p>
        </div>
        <div className=" p-8  text-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <FaRocket size={50} className="mx-auto text-primary mb-4" />
          <h3 className="text-xl font-semibold text-center">Innovative Solutions</h3>
          <p className="text-lg text-gray-400 text-center">
            Our goal is to deliver innovative solutions for your shopping experience.
          </p>
        </div>
      </motion.section>

  
      <motion.section
        className="py-16 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-400">
            We offer the best prices, quality, and customer support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FaHeart size={40} className="mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold text-center">Quality Products</h3>
            <p className="text-lg text-gray-400 text-center">
              We carefully select products that exceed expectations.
            </p>
          </motion.div>

          <motion.div
            className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <FaUsers size={40} className="mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold text-center">Customer Satisfaction</h3>
            <p className="text-lg text-gray-400 text-center">
              We prioritize our customers with excellent service and support.
            </p>
          </motion.div>

          <motion.div
            className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <FaRocket size={40} className="mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold text-center">Fast Shipping</h3>
            <p className="text-lg text-gray-400 text-center">
              We ensure your order reaches you quickly and safely.
            </p>
          </motion.div>
        </div>
      </motion.section>

 
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-400">
            A group of dedicated professionals working hard for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
              alt="Team Member"
              className="rounded-full mx-auto w-32 h-32 mb-4"
            />
            <h3 className="text-xl font-semibold text-center">John Doe</h3>
            <p className="text-lg text-gray-400 text-center">CEO</p>
          </motion.div>

          <motion.div
            className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8"
              alt="Team Member"
              className="rounded-full mx-auto w-32 h-32 mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Jane Smith</h3>
            <p className="text-lg text-gray-400 text-center">Marketing Director</p>
          </motion.div>

          <motion.div
            className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1558203728-00f45181dd84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"
              alt="Team Member"
              className="rounded-full mx-auto w-32 h-32 mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Sarah Lee</h3>
            <p className="text-lg text-gray-400 text-center">Product Manager</p>
          </motion.div>
        </div>
      </motion.section>

  
      <motion.section
        className="text-center bg-primary py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
        <p className="text-lg text-gray-400 mb-6">
          Ready to experience the best in eCommerce? Start shopping now!
        </p>
        <motion.button
      className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleRedirect} 
    >
      Shop Now
    </motion.button>
      </motion.section>

    </div>
  );
}
