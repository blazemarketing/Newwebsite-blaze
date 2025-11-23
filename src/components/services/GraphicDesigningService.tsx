import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, PenTool, Palette, Image, Layout, Layers, Zap, Play, Star, Quote, CheckCircle, MousePointer, Sparkles, Brush, Camera, Printer, Monitor, Smartphone, BarChart3 } from 'lucide-react';
import CountUp from 'react-countup';

const GraphicDesigningService = () => {
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
    { label: "Brand Engagement", value: 280, suffix: "%", prefix: "+" },
    { label: "Designs Created", value: 1200, suffix: "+" },
    { label: "Happy Clients", value: 95, suffix: "%" },
    { label: "Design Awards", value: 24, suffix: "+" }
  ];

  const testimonials = [
    {
      name: "Sophie Chen",
      role: "Brand Manager",
      company: "CreativeSpace",
      content: "Their design work transformed our brand identity completely. The visual impact increased our customer engagement by 300%.",
      rating: 5
    },
    {
      name: "Alex Turner",
      role: "Marketing Lead",
      company: "InnovateCorp",
      content: "Outstanding creative vision and execution. Every design piece perfectly captures our brand essence and resonates with our audience.",
      rating: 5
    }
  ];

  const designServices = [
    {
      title: "Brand Identity Design",
      description: "Complete visual identity systems including logos, color palettes, and brand guidelines",
      icon: Brush,
      color: "bg-pink-500/20"
    },
    {
      title: "Digital Graphics",
      description: "Web graphics, social media visuals, and digital marketing materials",
      icon: Monitor,
      color: "bg-purple-500/20"
    },
    {
      title: "Print Design",
      description: "Business cards, brochures, posters, and all print marketing materials",
      icon: Printer,
      color: "bg-blue-500/20"
    },
    {
      title: "UI/UX Design",
      description: "User interface and experience design for websites and mobile applications",
      icon: Smartphone,
      color: "bg-green-500/20"
    },
    {
      title: "Illustration",
      description: "Custom illustrations, icons, and artistic visual elements",
      icon: PenTool,
      color: "bg-orange-500/20"
    },
    {
      title: "Photography",
      description: "Professional product photography and visual content creation",
      icon: Camera,
      color: "bg-yellow-500/20"
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
          0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.3); }
          50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.6); }
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
            className="absolute w-2 h-2 bg-pink-500 rounded-full opacity-60"
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          />
          <motion.div 
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
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
            className="absolute top-20 left-10 w-32 h-32 bg-pink-600/10 rounded-full blur-xl floating"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-24 h-24 bg-purple-600/10 rounded-full blur-xl floating"
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
                  Visual Storytelling. 
                  <span className="text-gray-400">Brand Excellence.</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                  Create compelling visual experiences that captivate your audience and elevate your brand with our professional graphic design services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="https://wa.me/919502055104" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 glow-effect group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Palette className="w-5 h-5 mr-2 group-hover:animate-pulse" />
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
                      <stop offset="0%" stopColor="#ec4899" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
                    </linearGradient>
                    <radialGradient id="radial1" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    </radialGradient>
                  </defs>
                  <rect x="2" y="2" width="396" height="236" rx="16" fill="#1E1E1E" stroke="#333333" strokeWidth="2"/>
                  
                  {/* Design Canvas */}
                  <rect x="20" y="30" width="360" height="180" rx="8" fill="#111111" stroke="#444444" strokeWidth="1"/>
                  
                  {/* Color Palette */}
                  <circle cx="50" cy="60" r="12" fill="#ec4899" className="svg-pulse"/>
                  <circle cx="80" cy="60" r="12" fill="#8b5cf6" className="svg-pulse" style={{animationDelay: '0.2s'}}/>
                  <circle cx="110" cy="60" r="12" fill="#3b82f6" className="svg-pulse" style={{animationDelay: '0.4s'}}/>
                  <circle cx="140" cy="60" r="12" fill="#10b981" className="svg-pulse" style={{animationDelay: '0.6s'}}/>
                  
                  {/* Design Elements */}
                  <rect x="200" y="50" width="80" height="60" rx="8" fill="url(#radial1)" className="floating"/>
                  <circle cx="320" cy="80" r="25" fill="none" stroke="url(#grad1)" strokeWidth="3" className="svg-pulse" style={{animationDelay: '0.8s'}}/>
                  
                  {/* Typography Lines */}
                  <rect x="50" y="120" width="120" height="8" rx="4" fill="#ec4899" opacity="0.7"/>
                  <rect x="50" y="140" width="90" height="6" rx="3" fill="#8b5cf6" opacity="0.6"/>
                  <rect x="50" y="155" width="110" height="4" rx="2" fill="#666666"/>
                  
                  {/* Creative Tools */}
                  <circle cx="300" cy="140" r="8" fill="#ec4899"/>
                  <path d="M 295 135 L 305 145 M 305 135 L 295 145" stroke="white" strokeWidth="2"/>
                  
                  <rect x="320" y="130" width="16" height="20" rx="2" fill="#8b5cf6"/>
                  <circle cx="328" cy="125" r="3" fill="#ec4899"/>
                  
                  {/* Design Flow */}
                  <path className="svg-draw-path" d="M 60 180 Q 120 160 180 170 Q 240 180 300 160 Q 340 150 360 140" stroke="url(#grad1)" fill="none" strokeWidth="3"/>
                  
                  {/* Creative Sparks */}
                  <circle cx="120" cy="100" r="2" fill="#ec4899" className="svg-pulse" style={{animationDelay: '1s'}}/>
                  <circle cx="250" cy="120" r="2" fill="#8b5cf6" className="svg-pulse" style={{animationDelay: '1.2s'}}/>
                  <circle cx="180" cy="90" r="2" fill="#3b82f6" className="svg-pulse" style={{animationDelay: '1.4s'}}/>
                  
                  {/* Pen Tool */}
                  <path d="M 340 180 L 350 170 L 360 180 L 350 190 Z" fill="url(#grad1)" className="floating"/>
                  <circle cx="350" cy="180" r="15" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.3" className="svg-pulse" style={{animationDelay: '1.6s'}}/>
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
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                    {isStatsInView && (
                      <CountUp 
                        start={0} 
                        end={stat.value} 
                        duration={2.5} 
                        delay={index * 0.2}
                        prefix={stat.prefix || ''}
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



        {/* Design Services Section */}
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
                Creative Design <span className="text-pink-400">Services</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive visual design solutions that bring your brand vision to life across all platforms and mediums.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designServices.map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10 group cursor-pointer ${
                    activeCard === index ? 'ring-2 ring-pink-500 bg-gray-800/70' : ''
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
                    <div className="absolute left-0 top-0 w-1 h-full bg-pink-500 rounded-full"></div>
                    <div className="pl-6">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Design Service
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-pink-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <motion.button 
                        className="inline-flex items-center text-white font-semibold group-hover:text-pink-400 transition-colors duration-300 hover:underline"
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
                          className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center"
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
                What Our <span className="text-pink-400">Clients Say</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how our creative design solutions have transformed brands and elevated visual communication.
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
                    <Quote className="w-8 h-8 text-pink-400 mr-3" />
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
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
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
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-purple-900/20"></div>
          <div className="absolute bottom-0 right-0 text-9xl font-black text-white/5 select-none pointer-events-none">
            DESIGN
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
                Ready to Transform Your Brand with 
                <span className="text-pink-400">Stunning Design?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Let's create compelling visual experiences that captivate your audience and elevate your brand to new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="https://wa.me/919502055104" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 glow-effect group"
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
                  <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                  Unlimited Revisions
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                  Fast Delivery
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GraphicDesigningService;