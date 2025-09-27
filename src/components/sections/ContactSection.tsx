import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
export default function ContactSection() {
  return <section id="contact" className="py-20 bg-black relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-800/50 border border-gray-700 text-xs font-medium">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our services? Ready to start your project?
            Reach out to us!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div className="space-y-8" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-gray-800 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Our Location</h3>
                <p className="text-gray-400">
                  Chennai, India
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-gray-800 rounded-lg">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="text-gray-400">
                  info@blazemarketingmedia.com
                  <br />
                 
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-gray-800 rounded-lg">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p className="text-gray-400">
                  +91 9502055104
                  <br />
                  
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 flex flex-col justify-center" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-400 mb-6">
              Fill out our detailed questionnaire to help us understand your
              business needs better.
            </p>
            <motion.div whileHover={{
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.3)'
          }} whileTap={{
            scale: 0.98
          }}>
              <a href="https://wa.me/919502055104" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300">
                Contact Us on WhatsApp
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
            <p className="text-sm text-gray-500 mt-4">
              Our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
}