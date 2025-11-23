import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Globe, Code, Smartphone, Zap, Shield, Layers, Play, Star, Quote, CheckCircle, MousePointer, Sparkles, Server, Database, Cloud, Cpu, Monitor, BarChart3 } from 'lucide-react';
import CountUp from 'react-countup';

const WebDevelopmentService = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('.svg-draw-path');
    paths?.forEach((path, index) => {
      const pathElement = path as SVGPathElement;
      const length = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${length}`;
      pathElement.style.strokeDashoffset = `${length}`;
      pathElement.style.animation = `draw-in 3s ease-out ${index * 0.5}s forwards`;
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { label: "Websites Delivered", value: 150, suffix: "+" },
    { label: "Performance Boost", value: 340, suffix: "%", prefix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Uptime Guarantee", value: 99.9, suffix: "%" }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      role: "CEO",
      company: "TechStart",
      content: "Our new website increased conversions by 250% and load times improved dramatically. Exceptional development work.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Marketing Manager",
      company: "GrowthCo",
      content: "The team delivered a stunning, high-performance website that perfectly represents our brand. Outstanding technical expertise.",
      rating: 5
    }
  ];

  const webServices = [
    {
      title: "Custom Web Development",
      description: "Tailored websites built with modern technologies for optimal performance",
      icon: Code,
      color: "bg-emerald-500/20"
    },
    {
      title: "Responsive Design",
      description: "Mobile-first designs that work flawlessly across all devices and screen sizes",
      icon: Smartphone,
      color: "bg-blue-500/20"
    },
    {
      title: "E-commerce Solutions",
      description: "Powerful online stores with secure payment processing and inventory management",
      icon: Globe,
      color: "bg-purple-500/20"
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds and optimized user experiences",
      icon: Zap,
      color: "bg-yellow-500/20"
    },
    {
      title: "Security & Hosting",
      description: "Secure hosting solutions with SSL certificates and regular backups",
      icon: Shield,
      color: "bg-red-500/20"
    },
    {
      title: "CMS Development",
      description: "Easy-to-manage content management systems for seamless updates",
      icon: Layers,
      color: "bg-indigo-500/20"
    }
  ];

  return (
    <>
      <style jsx>{`
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
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6); }
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
            className="absolute w-2 h-2 bg-emerald-500 rounded-full opacity-60"
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
            className="absolute top-20 left-10 w-32 h-32 bg-emerald-600/10 rounded-full blur-xl floating"
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
                  Web Development. 
                  <span className="text-gray-400">Digital Excellence.</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                  Build powerful, scalable web applications that deliver exceptional user experiences and drive business growth with cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="https://wa.me/919502055104" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 glow-effect group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Start Building
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
                      <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="396" height="236" rx="16" fill="#1E1E1E" stroke="#333333" strokeWidth="2"/>
                  
                  {/* Code Editor */}
                  <rect x="20" y="30" width="360" height="180" rx="8" fill="#0a0a0a" stroke="#444444" strokeWidth="1"/>
                  
                  {/* Editor Header */}
                  <rect x="30" y="40" width="340" height="25" rx="4" fill="#1a1a1a"/>
                  <circle cx="45" cy="52" r="4" fill="#ef4444"/>
                  <circle cx="60" cy="52" r="4" fill="#f59e0b"/>
                  <circle cx="75" cy="52" r="4" fill="#10b981"/>
                  
                  {/* Line Numbers */}
                  <rect x="35" y="75" width="25" height="120" fill="#262626"/>
                  <text x="42" y="85" fill="#666666" fontSize="8">1</text>
                  <text x="42" y="100" fill="#666666" fontSize="8">2</text>
                  <text x="42" y="115" fill="#666666" fontSize="8">3</text>
                  <text x="42" y="130" fill="#666666" fontSize="8">4</text>
                  <text x="42" y="145" fill="#666666" fontSize="8">5</text>
                  <text x="42" y="160" fill="#666666" fontSize="8">6</text>
                  <text x="42" y="175" fill="#666666" fontSize="8">7</text>
                  
                  {/* Code Lines */}
                  <rect x="70" y="80" width="80" height="6" rx="2" fill="#3b82f6" className="svg-pulse"/>
                  <rect x="160" y="80" width="40" height="6" rx="2" fill="#10b981"/>
                  <rect x="210" y="80" width="60" height="6" rx="2" fill="#f59e0b"/>
                  
                  <rect x="80" y="95" width="60" height="6" rx="2" fill="#10b981" className="svg-pulse" style={{animationDelay: '0.3s'}}/>
                  <rect x="150" y="95" width="80" height="6" rx="2" fill="#666666"/>
                  
                  <rect x="70" y="110" width="100" height="6" rx="2" fill="#3b82f6"/>
                  <rect x="180" y="110" width="50" height="6" rx="2" fill="#ec4899" className="svg-pulse" style={{animationDelay: '0.6s'}}/>
                  
                  <rect x="90" y="125" width="70" height="6" rx="2" fill="#f59e0b"/>
                  <rect x="170" y="125" width="90" height="6" rx="2" fill="#666666"/>
                  
                  <rect x="70" y="140" width="120" height="6" rx="2" fill="#10b981" className="svg-pulse" style={{animationDelay: '0.9s'}}/>
                  
                  {/* Cursor */}
                  <rect x="200" y="140" width="2" height="8" fill="#10b981" className="svg-pulse" style={{animationDelay: '1.2s'}}/>
                  
                  {/* Terminal */}
                  <rect x="280" y="120" width="80" height="60" rx="4" fill="#000000" stroke="#10b981" strokeWidth="1"/>
                  <rect x="285" y="125" width="70" height="4" rx="2" fill="#10b981" opacity="0.7"/>
                  <rect x="285" y="135" width="50" height="4" rx="2" fill="#666666"/>
                  <rect x="285" y="145" width="60" height="4" rx="2" fill="#3b82f6"/>
                  <rect x="285" y="155" width="40" height="4" rx="2" fill="#10b981"/>
                  <rect x="285" y="165" width="30" height="4" rx="2" fill="#f59e0b"/>
                  
                  {/* Network Connections */}
                  <path className="svg-draw-path" d="M 100 200 Q 150 180 200 190 Q 250 200 300 180" stroke="url(#grad1)" fill="none" strokeWidth="2"/>
                  
                  {/* Server Nodes */}
                  <circle cx="100" cy="200" r="6" fill="#10b981" className="svg-pulse" style={{animationDelay: '1.5s'}}/>
                  <circle cx="200" cy="190" r="6" fill="#3b82f6" className="svg-pulse" style={{animationDelay: '1.8s'}}/>
                  <circle cx="300" cy="180" r="6" fill="#10b981" className="svg-pulse" style={{animationDelay: '2.1s'}}/>
                  
                  {/* Brackets */}
                  <path d="M 320 160 L 315 165 L 320 170" stroke="#10b981" strokeWidth="2" fill="none"/>
                  <path d="M 340 160 L 345 165 L 340 170" stroke="#10b981" strokeWidth="2" fill="none"/>
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
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                    {isStatsInView && (
                      <CountUp 
                        start={0} 
                        end={stat.value} 
                        duration={2.5} 
                        delay={index * 0.2}
                        prefix={stat.prefix || ''}
                        suffix={stat.suffix || ''}
                        decimals={stat.value < 10 ? 1 : 0}
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



        {/* Web Services Section */}
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
                Web Development <span className="text-emerald-400">Services</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive web development solutions that combine cutting-edge technology with exceptional user experience design.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webServices.map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 group cursor-pointer ${
                    activeCard === index ? 'ring-2 ring-emerald-500 bg-gray-800/70' : ''
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
                    <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500 rounded-full"></div>
                    <div className="pl-6">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Web Service
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <motion.button 
                        className="inline-flex items-center text-white font-semibold group-hover:text-emerald-400 transition-colors duration-300 hover:underline"
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
                          className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center"
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
                What Our <span className="text-emerald-400">Clients Say</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how our web development expertise has transformed businesses and delivered exceptional digital experiences.
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
                    <Quote className="w-8 h-8 text-emerald-400 mr-3" />
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
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
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
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-blue-900/20"></div>
          <div className="absolute bottom-0 right-0 text-9xl font-black text-white/5 select-none pointer-events-none">
            CODE
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
                Ready to Build Something Amazing with 
                <span className="text-emerald-400">Modern Web Technology?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Let's create powerful, scalable web applications that deliver exceptional user experiences and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="https://wa.me/919502055104" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 glow-effect group"
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
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Modern Tech Stack
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Ongoing Support
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDevelopmentService;