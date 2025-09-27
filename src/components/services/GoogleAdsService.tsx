import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Search, TrendingUp, Target, BarChart3, Users, Zap, Play, Star, Quote, CheckCircle, MousePointer, Sparkles, Monitor, ShoppingBag, Video, Smartphone, MapPin, Eye } from 'lucide-react';
import CountUp from 'react-countup';

const GoogleAdsService = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    // Animate SVG paths on mount
    const paths = svgRef.current?.querySelectorAll('.svg-draw-path');
    paths?.forEach((path, index) => {
      const pathElement = path as SVGPathElement;
      const length = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${length}`;
      pathElement.style.strokeDashoffset = `${length}`;
      pathElement.style.animation = `draw-in 3s ease-out ${index * 0.5}s forwards`;
    });

    // Mouse tracking for interactive elements
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { label: "ROI Increase", value: 340, suffix: "%", prefix: "+" },
    { label: "Campaigns Managed", value: 150, suffix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Years Experience", value: 8, suffix: "+" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      content: "Our Google Ads performance increased by 280% within 3 months. The team's expertise is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "GrowthLab",
      content: "Best investment we've made. Our cost per acquisition dropped by 60% while conversions doubled.",
      rating: 5
    }
  ];

  const googleAdsTypes = [
    {
      title: "Search Ads",
      description: "Text ads on search results that appear when users search for your keywords",
      icon: Search,
      color: "blue"
    },
    {
      title: "Display Ads",
      description: "Visual ads on websites and apps across Google's Display Network",
      icon: Monitor,
      color: "purple"
    },
    {
      title: "Shopping Ads",
      description: "Product listings on Google Shopping with images, prices, and reviews",
      icon: ShoppingBag,
      color: "green"
    },
    {
      title: "Video Ads",
      description: "Engaging video advertisements on platforms like YouTube",
      icon: Video,
      color: "red"
    },
    {
      title: "App Campaigns",
      description: "Automated campaigns for app promotion across Google's networks",
      icon: Smartphone,
      color: "indigo"
    },
    {
      title: "Local Ads",
      description: "Promoting local businesses to nearby customers",
      icon: MapPin,
      color: "yellow"
    },
    {
      title: "Discovery Ads",
      description: "Native ads that appear in Google feeds and discovery surfaces",
      icon: Eye,
      color: "pink"
    }
  ];

  const services = [
    {
      category: "Campaign Strategy",
      title: "Data-Driven Foundations",
      description: "We develop a comprehensive, data-driven strategy that aligns with your business goals, ensuring every click counts towards your success.",
      icon: Target
    },
    {
      category: "Audience Targeting",
      title: "Precision Audience Reach",
      description: "Reach the right customers at the right moment. We use advanced targeting methods to connect you with your most valuable audience segments.",
      icon: Users,
      hasImage: true
    },
    {
      category: "Creative Development",
      title: "Compelling Ad Creatives",
      description: "Craft compelling ad copy and visuals that capture attention and drive conversions. Our team blends creativity with performance analytics.",
      icon: Zap
    },
    {
      category: "ROI Optimization",
      title: "Maximize Return on Ad Spend",
      description: "Achieve maximum ROI with continuous, data-informed adjustments to your campaigns, bids, and budgets. We make your ad spend work harder.",
      icon: TrendingUp
    },
    {
      category: "Analytics & Reporting",
      title: "Actionable Insights",
      description: "Gain clarity with detailed performance tracking and custom dashboards. We turn complex data into clear, actionable insights for growth.",
      icon: BarChart3,
      hasImage: true
    },
    {
      category: "Bid Management",
      title: "Intelligent Bidding Strategies",
      description: "Leverage Google's AI and our expertise to implement smart, automated bidding strategies that deliver superior results efficiently.",
      icon: Search
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
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6); }
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
                  Google Ads Reimagined. 
                  <span className="text-gray-400">Results Redefined.</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                  We leverage data, AI, and creative strategy to build high-performance Google Ads campaigns that drive measurable growth for your business.
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
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Start Growing
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
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
                      <stop offset="100%" stopColor="#4f46e5" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="396" height="236" rx="16" fill="#1E1E1E" stroke="#333333" strokeWidth="2"/>
                  
                  {/* Google Ads Dashboard */}
                  <rect x="20" y="30" width="360" height="180" rx="8" fill="#111111" stroke="#444444" strokeWidth="1"/>
                  
                  {/* Header Bar */}
                  <rect x="30" y="40" width="340" height="20" rx="4" fill="#333333"/>
                  <circle cx="45" cy="50" r="3" fill="#a855f7" className="svg-pulse"/>
                  <rect x="60" y="47" width="80" height="6" rx="2" fill="#666666"/>
                  
                  {/* Ad Performance Chart */}
                  <path className="svg-draw-path" d="M 50 180 L 80 140 L 120 160 L 160 100 L 200 120 L 240 80 L 280 90 L 320 60 L 350 70" stroke="url(#grad1)" fill="none" strokeWidth="3"/>
                  
                  {/* Data Points */}
                  <circle cx="80" cy="140" r="4" fill="#a855f7" className="svg-pulse"/>
                  <circle cx="160" cy="100" r="4" fill="#4f46e5" className="svg-pulse" style={{animationDelay: '0.3s'}}/>
                  <circle cx="240" cy="80" r="4" fill="#a855f7" className="svg-pulse" style={{animationDelay: '0.6s'}}/>
                  <circle cx="320" cy="60" r="4" fill="#4f46e5" className="svg-pulse" style={{animationDelay: '0.9s'}}/>
                  
                  {/* Ad Cards */}
                  <rect x="50" y="80" width="60" height="40" rx="4" fill="#333333" stroke="#a855f7" strokeWidth="1"/>
                  <rect x="130" y="90" width="60" height="40" rx="4" fill="#333333" stroke="#4f46e5" strokeWidth="1"/>
                  <rect x="210" y="85" width="60" height="40" rx="4" fill="#333333" stroke="#a855f7" strokeWidth="1"/>
                  
                  {/* Click Animation */}
                  <circle cx="300" cy="170" r="20" fill="none" stroke="#a855f7" strokeWidth="2" className="svg-pulse" style={{animationDelay: '1s'}}/>
                  <path className="svg-draw-path" d="M 295 170 l 5 -3 l 5 3 l -5 8 z" fill="#a855f7" />
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

        {/* Services Section */}
        <section id="services" className="py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Google Ads <span className="text-purple-400">Services</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive Google Ads management services designed to maximize your ROI and drive sustainable growth.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-purple-500 rounded-full"></div>
                    <div className="pl-6">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-purple-400">
                        <service.icon className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">Learn More</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Ads Campaign Types Section */}
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
                Google Ads <span className="text-purple-400">Campaign Types</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose the right campaign type to reach your audience at the perfect moment and maximize your advertising ROI.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {googleAdsTypes.map((adType, index) => (
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
                        Campaign Type
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                        {adType.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {adType.description}
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
                Don't just take our word for it. See how we've helped businesses transform their Google Ads performance.
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
            GROWTH
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
                Ready to Transform Your 
                <span className="text-purple-400">Google Ads Performance?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Let's build a data-driven Google Ads strategy that delivers measurable results and drives sustainable growth for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="https://wa.me/919502055104" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 glow-effect group"
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
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No Setup Fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  30-Day Guarantee
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GoogleAdsService;