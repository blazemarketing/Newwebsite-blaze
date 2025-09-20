import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight } from 'lucide-react';
export default function FooterSection() {
  return <footer className="bg-gray-900/70 pt-16 pb-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
          delay: 0.1
        }}>
            <h2 className="text-xl font-bold mb-6">Boostly</h2>
            <p className="text-gray-400 mb-6">
              Your trusted partner for SEO optimization and digital marketing
              solutions that deliver real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
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
          delay: 0.2
        }}>
            <h3 className="font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline hover:translate-y-[-2px] inline-flex items-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white hover:underline hover:translate-y-[-2px] inline-flex items-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white hover:underline hover:translate-y-[-2px] inline-flex items-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white hover:underline hover:translate-y-[-2px] inline-flex items-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white hover:underline hover:translate-y-[-2px] inline-flex items-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
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
          delay: 0.3
        }}>
            <h3 className="font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline hover:translate-y-[-2px] inline-flex items-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline hover:translate-y-[-2px] inline-flex items-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Content Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline hover:translate-y-[-2px] inline-flex items-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Social Media Growth
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline hover:translate-y-[-2px] inline-flex items-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Analytics & Reporting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline hover:translate-y-[-2px] inline-flex items-center transition-all duration-300">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Performance Optimization
                </a>
              </li>
            </ul>
          </motion.div>
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
        }}>
            <h3 className="font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <strong className="text-white">Address:</strong>
                <br />
                123 Tech Park, Bangalore
                <br />
                Karnataka, India - 560001
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Phone:</strong>
                <br />
                +91 98765 43210
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong>
                <br />
                info@boostly.com
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Working Hours:</strong>
                <br />
                Mon-Fri: 9AM - 6PM
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div className="border-t border-gray-800 pt-8 text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }}>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Boostly. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>;
}