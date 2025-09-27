import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export default function CTASection() {
  return <section id="cta" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 blur-xl"></div>
      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6,
      type: 'spring',
      bounce: 0.4
    }}>
        <div className="max-w-4xl mx-auto bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            Ready to <span className="text-purple-400">Transform</span> Your
            Digital Presence?
          </motion.h2>
          <motion.p className="text-gray-300 mb-8 max-w-2xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            Join thousands of businesses that have accelerated their growth with
            our proven digital marketing strategies. Start your journey today!
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }}>
            <a href="https://wa.me/919502055104" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-medium text-lg flex items-center justify-center mx-auto hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
          <motion.p className="text-gray-400 mt-6 text-sm" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }}>
            No contracts. Cancel anytime.
          </motion.p>
        </div>
      </motion.div>
    </section>;
}