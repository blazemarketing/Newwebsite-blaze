import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Search, ChevronRight, User, ArrowRight, Check, TrendingUp } from 'lucide-react';
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
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const startAnimations = () => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          staggerChildren: 0.1
        }
      });
    };
    
    startAnimations();
    
    // Handle page visibility changes (back button)
    const handleVisibilityChange = () => {
      if (!document.hidden && !showServiceDetail) {
        setAnimationKey(prev => prev + 1);
        setTimeout(startAnimations, 100);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Handle pageshow event for bfcache
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted && !showServiceDetail) {
        setAnimationKey(prev => prev + 1);
        setTimeout(startAnimations, 100);
      }
    };
    
    window.addEventListener('pageshow', handlePageShow);
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
        setServiceSlug('');
        setAnimationKey(prev => prev + 1);
        // If returning to home, scroll to top
        if (hash === '' || hash === '#') {
          window.scrollTo(0, 0);
        }
      }
    };
    // Initial check
    handleHashChange();
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [controls]);
  if (showServiceDetail) {
    return <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
        {/* Background Animation */}
        <BackgroundAnimation />
        {/* Custom Cursor */}
        <CustomCursor />
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 shadow-sm shadow-purple-900/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <button 
                  onClick={() => {
                    setShowServiceDetail(false);
                    setServiceSlug('');
                    window.location.hash = '';
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                  className="text-xl font-bold text-white hover:text-purple-400 transition-colors duration-300"
                >
                  BlazeMarketingMedia
                </button>
              </div>
              <nav className="hidden md:flex space-x-8">
                <button 
                  onClick={() => {
                    setShowServiceDetail(false);
                    setServiceSlug('');
                    window.location.hash = '';
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                  className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300"
                >
                  Home
                </button>
                <a href="#services" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300">
                  Services
                </a>
                <a href="#testimonials" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300">
                  Testimonials
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
                <button 
                  className="md:hidden text-white hover:text-purple-400 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
                <div className="px-4 py-4 space-y-4">
                  <button 
                    onClick={() => {
                      setShowServiceDetail(false);
                      setServiceSlug('');
                      window.location.hash = '';
                      setIsMobileMenuOpen(false);
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    }}
                    className="block w-full text-left text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </button>
                  <a 
                    href="#services" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Services
                  </a>
                  <a 
                    href="#testimonials" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Testimonials
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                  <a 
                    href="https://wa.me/919502055104" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            )}
          </div>
        </header>
        {/* Service Detail Page */}
        <ServiceDetail slug={serviceSlug} />
        {/* Footer Section */}
        <FooterSection />
      </div>;
  }
  return <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Animation */}
      <BackgroundAnimation />
      {/* Custom Cursor */}
      <CustomCursor />
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 shadow-sm shadow-purple-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button 
                onClick={() => {
                  window.location.hash = '';
                  setTimeout(() => window.scrollTo(0, 0), 100);
                }}
                className="text-xl font-bold text-white hover:text-purple-400 transition-colors duration-300"
              >
                BlazeMarketingMedia
              </button>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => {
                  window.location.hash = '';
                  setTimeout(() => window.scrollTo(0, 0), 100);
                }}
                className="text-sm font-medium text-white hover:text-purple-400 hover:translate-y-[-2px] transition-all duration-300" 
                data-hoverable="true"
              >
                Home
              </button>
              <a href="#services" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                Services
              </a>
              <a href="#testimonials" className="text-sm font-medium text-white/70 hover:text-white hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                Testimonials
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
              <button 
                className="md:hidden text-white hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
                <div className="px-4 py-4 space-y-4">
                  <button 
                    onClick={() => {
                      window.location.hash = '';
                      setIsMobileMenuOpen(false);
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    }}
                    className="block w-full text-left text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </button>
                  <a 
                    href="#services" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Services
                  </a>
                  <a 
                    href="#testimonials" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Testimonials
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                  <a 
                    href="https://wa.me/919502055104" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Floating Geometric Shapes */}
          <motion.div className="absolute top-32 left-20 w-6 h-6 border-2 border-blue-400/60 rotate-45" animate={{
            y: [-10, 10, -10],
            rotate: [45, 135, 45]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}></motion.div>
          
          <motion.div className="absolute top-60 right-32 w-8 h-8 bg-purple-500/40 rounded-full" animate={{
            y: [0, -20, 0],
            x: [-5, 5, -5]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}></motion.div>
          
          <motion.div className="absolute bottom-40 right-20 w-5 h-5 border-2 border-pink-400/70" animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}></motion.div>
          
          <motion.div className="absolute top-1/2 left-16 w-4 h-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 transform rotate-45" animate={{
            scale: [1, 1.2, 1],
            rotate: [45, 225, 45]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}></motion.div>
          
          {/* Diagonal Lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent transform -rotate-12"></div>
            <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent transform rotate-12"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent transform -rotate-6"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div key={animationKey} className="max-w-3xl mx-auto text-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }}>
            <motion.div className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-800/50 border border-gray-700 text-xs font-medium" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              WELCOME
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" initial={{
            opacity: 0,
            y: 20,
            scale: 0.8
          }} animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }} whileHover={{
            scale: 1.05
          }}>
              Stop <span className="text-gray-400">Guessing</span>.
              <br />
              Start <span className="text-gray-400">Growing</span>
            </motion.h1>
            <motion.p className="text-lg text-gray-400 mb-8" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }}>
              No more trial and error—just clear, data-backed strategies that deliver.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.8
          }}>
              <button className="px-6 py-3 text-white bg-transparent border border-gray-700 rounded-full font-medium hover:bg-gray-800/50 w-full sm:w-auto hover:translate-y-[-2px] transition-all duration-300" data-hoverable="true">
                Pick your solution
              </button>
              <a href="https://wa.me/919502055104" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-medium hover:opacity-90 w-full sm:w-auto hover:translate-y-[-2px] transition-all duration-300 text-center" data-cta-button="true">
                Getting Started
              </a>
            </motion.div>
          </motion.div>
        </div>
        {/* Curved Path Visualization */}
        <motion.div className="relative mt-24 mb-16 max-w-5xl mx-auto px-4" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: false
        }} transition={{
          duration: 0.8
        }}>
          <motion.div className="h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 w-full max-w-4xl mx-auto relative" initial={{
            scaleX: 0
          }} whileInView={{
            scaleX: 1
          }} viewport={{
            once: false
          }} transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}>
            <motion.div className="absolute -top-2 left-[5%] w-4 h-4 rounded-full bg-blue-600 border-2 border-black" initial={{
              scale: 0,
              rotate: 0
            }} whileInView={{
              scale: 1,
              rotate: 360
            }} viewport={{
              once: false
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }}></motion.div>
            <motion.div className="absolute -top-2 left-[30%] w-4 h-4 rounded-full bg-blue-400 border-2 border-black" initial={{
              scale: 0,
              rotate: 0
            }} whileInView={{
              scale: 1,
              rotate: 360
            }} viewport={{
              once: false
            }} transition={{
              duration: 0.6,
              delay: 0.6
            }}></motion.div>
            <motion.div className="absolute -top-2 left-[60%] w-4 h-4 rounded-full bg-purple-600 border-2 border-black" initial={{
              scale: 0,
              rotate: 0
            }} whileInView={{
              scale: 1,
              rotate: 360
            }} viewport={{
              once: false
            }} transition={{
              duration: 0.6,
              delay: 0.9
            }}></motion.div>
            <motion.div className="absolute -top-2 left-[90%] w-4 h-4 rounded-full bg-pink-600 border-2 border-black" initial={{
              scale: 0,
              rotate: 0
            }} whileInView={{
              scale: 1,
              rotate: 360
            }} viewport={{
              once: false
            }} transition={{
              duration: 0.6,
              delay: 1.2
            }}></motion.div>
          </motion.div>
          <div className="grid grid-cols-4 gap-4 mt-8 text-center">
            <motion.div className="space-y-2" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.5
            }} whileHover={{
              scale: 1.05,
              y: -5
            }}>
              <motion.h3 className="font-bold text-blue-400" whileHover={{
                color: "#60a5fa"
              }}>Start</motion.h3>
              <p className="text-xs text-gray-400">
                Deep analysis of your site and your niche
              </p>
            </motion.div>
            <motion.div className="space-y-2" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.8
            }} whileHover={{
              scale: 1.05,
              y: -5
            }}>
              <motion.h3 className="font-bold text-blue-300" whileHover={{
                color: "#93c5fd"
              }}>Engage</motion.h3>
              <p className="text-xs text-gray-400">
                Implement strategies that engage your audience
              </p>
            </motion.div>
            <motion.div className="space-y-2" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 1.1
            }} whileHover={{
              scale: 1.05,
              y: -5
            }}>
              <motion.h3 className="font-bold text-purple-400" whileHover={{
                color: "#a78bfa"
              }}>Marketing</motion.h3>
              <p className="text-xs text-gray-400">
                Targeted campaigns that grow your audience
              </p>
            </motion.div>
            <motion.div className="space-y-2" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 1.4
            }} whileHover={{
              scale: 1.05,
              y: -5
            }}>
              <motion.h3 className="font-bold text-pink-400" whileHover={{
                color: "#f472b6"
              }}>Benefits</motion.h3>
              <p className="text-xs text-gray-400">
                Increased traffic and more paid customers
              </p>
            </motion.div>
          </div>
        </motion.div>
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
                <span className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-black block"></span>
                <span className="w-8 h-8 rounded-full bg-red-500 border-2 border-black block"></span>
                <span className="w-8 h-8 rounded-full bg-blue-500 border-2 border-black block"></span>
              </span>
              of digital marketing experts—specializing in SEO, digital strategy, content creation, and data analytics—committed to{' '}
              <span className="text-purple-400">
                driving measurable online success
              </span>
              . In today's fast-changing digital landscape, we stay ahead with the latest tools, proven techniques, and emerging trends to help brands achieve sustainable growth, higher visibility, and lasting impact.
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