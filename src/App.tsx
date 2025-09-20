import React, { useEffect, useState, Children } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Search, ChevronRight, User, ArrowRight, Check } from 'lucide-react';
// Import our sections
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CTASection from './components/sections/CTASection';
import ContactSection from './components/sections/ContactSection';
import FooterSection from './components/sections/FooterSection';
import StatsSection from './components/sections/StatsSection';
// Import our animations
import BackgroundAnimation from './components/animations/BackgroundAnimation';
import CustomCursor from './components/animations/CustomCursor';
// Import service detail component for dynamic routing
import ServiceDetail from './components/sections/ServiceDetail';
export function App() {
  const controls = useAnimation();
  const [showServiceDetail, setShowServiceDetail] = useState(false);
  const [serviceSlug, setServiceSlug] = useState('');
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    });
    // Handle hash changes for service detail pages
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/services/')) {
        const slug = hash.replace('#/services/', '');
        setServiceSlug(slug);
        setShowServiceDetail(true);
        window.scrollTo(0, 0);
      } else {
        setShowServiceDetail(false);
      }
    };
    // Initial check
    handleHashChange();
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [controls]);
  if (showServiceDetail) {
    return <div className="w-full min-h-screen bg-black text-white">
        {/* Background Animation */}
        <BackgroundAnimation />
        {/* Custom Cursor */}
        <CustomCursor />
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 shadow-sm shadow-purple-900/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <a href="#" className="text-xl font-bold text-white">
                  BlazeMarketingMedia
                </a>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300">
                  Home
                </a>
                <a href="#services" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300">
                  Services
                </a>
                <a href="#testimonials" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300">
                  Testimonials
                </a>
                <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300">
                  Pricing
                </a>
                <a href="#contact" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300">
                  Contact
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <a href="#cta" className="hidden sm:flex items-center space-x-2 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:opacity-90 hover:translate-y-[-2px] transition-all duration-300" data-cta-button="true">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button className="flex items-center space-x-2 px-4 py-1.5 text-sm font-medium text-white border border-gray-700 rounded-full bg-gray-800/50 hover:bg-gray-800 hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                  <span>Sign In</span>
                  <User className="w-4 h-4" />
                </button>
                <button className="md:hidden">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* Service Detail Page */}
        <ServiceDetail slug={serviceSlug} />
        {/* Footer Section */}
        <FooterSection />
      </div>;
  }
  return <div className="w-full min-h-screen bg-black text-white">
      {/* Background Animation */}
      <BackgroundAnimation />
      {/* Custom Cursor */}
      <CustomCursor />
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 shadow-sm shadow-purple-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">
                BlazeMarketingMedia
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-white hover:text-purple-400 hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                Home
              </a>
              <a href="#services" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                Services
              </a>
              <a href="#testimonials" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                Testimonials
              </a>
              <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                Pricing
              </a>
              <a href="#contact" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="#cta" className="hidden sm:flex items-center space-x-2 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:opacity-90 hover:translate-y-[-2px] transition-all duration-300" data-cta-button="true">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="flex items-center space-x-2 px-4 py-1.5 text-sm font-medium text-white border border-gray-700 rounded-full bg-gray-800/50 hover:bg-gray-800 hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                <span>Sign In</span>
                <User className="w-4 h-4" />
              </button>
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" initial={{
          opacity: 0,
          y: 20
        }} animate={controls}>
            <motion.div className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-800/50 border border-gray-700 text-xs font-medium" initial={{
            opacity: 0,
            y: 10
          }} animate={controls}>
              WELCOME
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" initial={{
            opacity: 0,
            y: 20
          }} animate={controls}>
              Optimize Your <span className="text-gray-400">Website</span>,
              <br />
              Maximize <span className="text-gray-400">Success</span>
            </motion.h1>
            <motion.p className="text-lg text-gray-400 mb-8" initial={{
            opacity: 0,
            y: 20
          }} animate={controls}>
              Turn Clicks into Customers with Tailored SEO Solutions That
              Deliver Real Results
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" initial={{
            opacity: 0,
            y: 20
          }} animate={controls}>
              <button className="px-6 py-3 text-white bg-transparent border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 w-full sm:w-auto hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                Pick your solution
              </button>
              <button className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-medium hover:opacity-90 w-full sm:w-auto hover:translate-y-[-2px] transition-all duration-300" data-cta-button="true">
                Getting Started
              </button>
            </motion.div>
          </motion.div>
        </div>
        {/* Curved Path Visualization */}
        <div className="relative mt-24 mb-16 max-w-5xl mx-auto">
          <div className="h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 w-full max-w-4xl mx-auto relative">
            <div className="absolute -top-2 left-[5%] w-4 h-4 rounded-full bg-blue-600 border-2 border-black"></div>
            <div className="absolute -top-2 left-[30%] w-4 h-4 rounded-full bg-blue-400 border-2 border-black"></div>
            <div className="absolute -top-2 left-[60%] w-4 h-4 rounded-full bg-purple-600 border-2 border-black"></div>
            <div className="absolute -top-2 left-[90%] w-4 h-4 rounded-full bg-pink-600 border-2 border-black"></div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8 text-center">
            <div className="space-y-2">
              <h3 className="font-bold">Start</h3>
              <p className="text-xs text-gray-400">
                Deep analysis of your site and your niche
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Engage</h3>
              <p className="text-xs text-gray-400">
                Implement strategies that engage your audience
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Marketing</h3>
              <p className="text-xs text-gray-400">
                Targeted campaigns that grow your audience
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Benefits</h3>
              <p className="text-xs text-gray-400">
                Increased traffic and more paid customers
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <ServicesSection />
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div className="text-center" initial={{
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
            <p className="mb-6 text-lg">
              We are a team
              <span className="inline-flex mx-2 -space-x-2">
                <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-black"></div>
                <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-black"></div>
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-black"></div>
              </span>
              of SEO experts, digital strategists, content creators, and data
              analysts dedicated to{' '}
              <span className="text-purple-400">
                driving your online success
              </span>
              . We understand that the digital landscape is constantly evolving,
              and we stay ahead of the curve with the latest tools, techniques,
              and trends to ensure our clients achieve sustainable growth.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <button className="px-4 py-2 bg-gray-800 rounded-full text-xs flex items-center gap-2 hover:bg-gray-700 hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                <Check className="w-4 h-4" />
                Search Engine
              </button>
              <button className="px-4 py-2 bg-gray-800 rounded-full text-xs flex items-center gap-2 hover:bg-gray-700 hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                <Check className="w-4 h-4" />
                Top Performance
              </button>
              <button className="px-4 py-2 bg-gray-800 rounded-full text-xs flex items-center gap-2 hover:bg-gray-700 hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                <Check className="w-4 h-4" />
                Social Media
              </button>
              <button className="px-4 py-2 bg-gray-800 rounded-full text-xs flex items-center gap-2 hover:bg-gray-700 hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                <Check className="w-4 h-4" />
                Local Listings
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Reason to Choose Section */}
      <section id="pricing" className="py-16 relative">
        {/* Purple glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-purple-600/30 blur-[100px] rounded-full opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-center mb-16" initial={{
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
            Why choose{' '}
            <span className="text-purple-400">BlazeMarketingMedia</span>
          </motion.h2>
          {/* Stats Section - New addition */}
          <StatsSection />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {/* Device mockups */}
            <motion.div className="bg-gray-900 rounded-xl p-4 relative overflow-hidden" initial={{
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
          }} whileHover={{
            y: -5
          }} data-service-card="true">
              <div className="rounded-lg bg-black p-3">
                <div className="h-40 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="bg-gray-900 rounded-xl p-4 relative overflow-hidden" initial={{
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
          }} whileHover={{
            y: -5
          }} data-service-card="true">
              <div className="rounded-lg bg-black p-3">
                <div className="h-40 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Total Revenue</p>
                    <p className="text-2xl font-bold">₹78,254</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="bg-gray-900 rounded-xl p-4 relative overflow-hidden" initial={{
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
          }} whileHover={{
            y: -5
          }} data-service-card="true">
              <div className="rounded-lg bg-black p-3">
                <div className="h-40 bg-gray-800 rounded-lg flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 mb-2"></div>
                  <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <CTASection />
      {/* Contact Section */}
      <ContactSection />
      {/* Footer Section */}
      <FooterSection />
    </div>;
}