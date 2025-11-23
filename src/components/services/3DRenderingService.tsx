import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Box, Layers, Zap, Play, Star, Quote, CheckCircle, MousePointer, Sparkles, Palette, Eye, Camera, Monitor, BarChart3 } from 'lucide-react';
import CountUp from 'react-countup';

const ThreeDRenderingService = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('.svg-draw-path');
    paths?.forEach((path, index) => {
      const pathElement = path as SVGPathElement;
      if (pathElement && typeof pathElement.getTotalLength === 'function') {
        const length = pathElement.getTotalLength();
        pathElement.style.strokeDasharray = `${length}`;
        pathElement.style.strokeDashoffset = `${length}`;
        pathElement.style.animation = `draw-in 3s ease-out ${index * 0.5}s forwards`;
      }
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { label: "3D Models Created", value: 500, suffix: "+" },
    { label: "Rendering Quality", value: 4, suffix: "K" },
    { label: "Client Satisfaction", value: 97, suffix: "%" },
    { label: "Project Completion", value: 99, suffix: "%" }
  ];

  const testimonials = [
    {
      name: "Marcus Johnson",
      role: "Product Manager",
      company: "InnovateTech",
      content: "The 3D renderings exceeded our expectations. Our product presentations have never looked more professional and engaging.",
      rating: 5
    },
    {
      name: "Rachel Green",
      role: "Creative Director",
      company: "DesignStudio",
      content: "Incredible attention to detail and photorealistic quality. These 3D visualizations transformed our client presentations.",
      rating: 5
    }
  ];

  const renderingServices = [
    {
      title: "Product Visualization",
      description: "Photorealistic 3D models and renderings for product marketing and e-commerce",
      icon: Box,
      color: "bg-purple-500/20"
    },
    {
      title: "Architectural Rendering",
      description: "Stunning architectural visualizations for real estate and construction projects",
      icon: Box,
      color: "bg-blue-500/20"
    },
    {
      title: "Animation & Motion",
      description: "Dynamic 3D animations and motion graphics for engaging visual storytelling",
      icon: Play,
      color: "bg-green-500/20"
    },
    {
      title: "Interior Design",
      description: "Realistic interior renderings to visualize spaces before construction",
      icon: Monitor,
      color: "bg-orange-500/20"
    },
    {
      title: "Character Modeling",
      description: "Detailed 3D character models for games, films, and marketing campaigns",
      icon: Eye,
      color: "bg-pink-500/20"
    },
    {
      title: "VR/AR Content",
      description: "Immersive 3D content optimized for virtual and augmented reality experiences",
      icon: Camera,
      color: "bg-indigo-500/20"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes draw-in {
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.7; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.6); }
        }
        .svg-pulse {
          animation: pulse 2s infinite ease-in-out;
        }
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Floating Interactive Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div 
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-60"
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          />
          <motion.div 
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            animate={{
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.1 }}
          />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl floating"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-24 h-24 bg-blue-600/10 rounded-full blur-xl floating"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  3D Rendering. 
                  <span className="text-gray-400">Reality Reimagined.</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                  Transform your ideas into stunning photorealistic 3D visualizations that captivate audiences and bring concepts to life with incredible detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="https://wa.me/919502055104" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 glow-effect group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Box className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Start Creating
                  </motion.a>

                </div>
              </motion.div>
              
              <motion.div 
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg 
                  ref={svgRef}
                  viewBox="0 0 400 240" 
                  className="w-full max-w-md h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9333ea" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="396" height="236" rx="16" fill="#1E1E1E" stroke="#333333" strokeWidth="2"/>
                  
                  {/* 3D Workspace */}
                  <rect x="20" y="30" width="360" height="180" rx="8" fill="#0a0a0a" stroke="#444444" strokeWidth="1"/>
                  
                  {/* 3D Viewport */}
                  <rect x="40" y="50" width="200" height="140" rx="4" fill="#111111" stroke="#666666" strokeWidth="1"/>
                  
                  {/* 3D Cube Wireframe */}
                  <g stroke="url(#grad1)" strokeWidth="2" fill="none" className="svg-draw-path">
                    <path d="M 80 80 L 120 80 L 120 120 L 80 120 Z"/>
                    <path d="M 100 60 L 140 60 L 140 100 L 100 100 Z"/>
                    <path d="M 80 80 L 100 60 M 120 80 L 140 60 M 120 120 L 140 100 M 80 120 L 100 100"/>
                  </g>
                  
                  {/* 3D Object Vertices */}
                  <circle cx="80" cy="80" r="3" fill="#9333ea" className="svg-pulse"/>
                  <circle cx="120" cy="80" r="3" fill="#9333ea" className="svg-pulse" style={{animationDelay: '0.2s'}}/>
                  <circle cx="140" cy="60" r="3" fill="#3b82f6" className="svg-pulse" style={{animationDelay: '0.4s'}}/>
                  <circle cx="100" cy="60" r="3" fill="#3b82f6" className="svg-pulse" style={{animationDelay: '0.6s'}}/>
                  
                  {/* Material Properties Panel */}
                  <rect x="260" y="60" width="100" height="80" rx="4" fill="#1a1a1a" stroke="#555555" strokeWidth="1"/>
                  <rect x="270" y="70" width="80" height="8" rx="2" fill="#9333ea" opacity="0.7"/>
                  <rect x="270" y="85" width="60" height="8" rx="2" fill="#3b82f6" opacity="0.6"/>
                  <rect x="270" y="100" width="70" height="8" rx="2" fill="#666666"/>
                  <rect x="270" y="115" width="50" height="8" rx="2" fill="#888888"/>
                  
                  {/* Lighting Setup */}
                  <circle cx="180" cy="80" r="15" fill="none" stroke="#f59e0b" strokeWidth="2" className="svg-pulse" style={{animationDelay: '0.8s'}}/>
                  <path d="M 175 75 L 185 85 M 185 75 L 175 85" stroke="#f59e0b" strokeWidth="2"/>
                  
                  {/* Render Progress */}
                  <rect x="40" y="200" width="200" height="8" rx="4" fill="#333333"/>
                  <rect x="40" y="200" width="140" height="8" rx="4" fill="url(#grad1)" className="svg-draw-path"/>
                  
                  {/* Camera View */}
                  <rect x="280" y="160" width="60" height="40" rx="4" fill="#222222" stroke="#9333ea" strokeWidth="1"/>
                  <circle cx="310" cy="180" r="8" fill="none" stroke="#9333ea" strokeWidth="2" className="svg-pulse" style={{animationDelay: '1s'}}/>
                  <circle cx="310" cy="180" r="4" fill="#9333ea"/>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                    {isStatsInView && (
                      <CountUp 
                        start={0} 
                        end={stat.value} 
                        duration={2.5} 
                        delay={index * 0.2}
                        suffix={stat.suffix || ''}
                      />
                    )}
                  </div>
                  <div className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>



        {/* 3D Rendering Services Section */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                3D Rendering <span className="text-purple-400">Services</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Professional 3D visualization services that transform concepts into photorealistic renderings and immersive experiences.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderingServices.map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group cursor-pointer ${
                    activeCard === index ? 'ring-2 ring-purple-500 bg-gray-800/70' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-purple-500 rounded-full"></div>
                    <div className="pl-6">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        3D Service
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <motion.button 
                        className="inline-flex items-center text-white font-semibold group-hover:text-purple-400 transition-colors duration-300 hover:underline"
                        whileHover={{ x: 5 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Start Here
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.button>
                      {activeCard === index && (
                        <motion.div 
                          className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                What Our <span className="text-purple-400">Clients Say</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how our 3D rendering expertise has brought visions to life and exceeded client expectations.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-1 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-purple-400 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="absolute bottom-0 right-0 text-9xl font-black text-white/5 select-none pointer-events-none">
            RENDER
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Bring Your Vision to Life with 
                <span className="text-purple-400">3D Rendering?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Let's create stunning photorealistic 3D visualizations that showcase your products and ideas in their best light.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="https://wa.me/919502055104" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 glow-effect group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MousePointer className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>

              </div>
              
              {/* Interactive Elements */}
              <motion.div 
                className="mt-12 flex justify-center space-x-8 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                  4K Quality
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                  Fast Turnaround
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThreeDRenderingService;