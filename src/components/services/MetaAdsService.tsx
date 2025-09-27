import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, Target, Users, Zap, Play, Star, Quote, CheckCircle, MousePointer, Sparkles, Heart, Share2, MessageCircle, Eye, TrendingUp, BarChart3 } from 'lucide-react';
import CountUp from 'react-countup';

const MetaAdsService = () => {
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
    { label: "ROAS Improvement", value: 320, suffix: "%", prefix: "+" },
    { label: "Campaigns Launched", value: 180, suffix: "+" },
    { label: "Audience Reach", value: 2.5, suffix: "M+" },
    { label: "Conversion Rate", value: 94, suffix: "%" }
  ];

  const testimonials = [
    {
      name: "Maria Garcia",
      role: "E-commerce Manager",
      company: "StyleHub",
      content: "Our Meta Ads campaigns generated 5x more leads than our previous agency. The targeting precision is incredible.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Marketing Director",
      company: "FitLife",
      content: "ROI increased by 280% within 2 months. Their creative approach to Meta advertising is outstanding.",
      rating: 5
    }
  ];

  const metaStrategies = [
    {
      title: "Facebook Advertising",
      description: "Reach billions of users with precision-targeted Facebook ad campaigns",
      icon: Facebook,
      color: "bg-blue-500/20"
    },
    {
      title: "Instagram Marketing",
      description: "Visual storytelling that converts through Instagram's engaging platform",
      icon: Instagram,
      color: "bg-pink-500/20"
    },
    {
      title: "Audience Targeting",
      description: "Advanced demographic and behavioral targeting for maximum relevance",
      icon: Target,
      color: "bg-purple-500/20"
    },
    {
      title: "Creative Optimization",
      description: "A/B test ad creatives to find the highest-performing variations",
      icon: Eye,
      color: "bg-orange-500/20"
    },
    {
      title: "Retargeting Campaigns",
      description: "Re-engage website visitors and convert them into customers",
      icon: Users,
      color: "bg-green-500/20"
    },
    {
      title: "Performance Analytics",
      description: "Real-time tracking and optimization for maximum ROI",
      icon: TrendingUp,
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
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
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
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-60"
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          />
          <motion.div 
            className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-40"
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
            className="absolute top-20 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl floating"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-24 h-24 bg-pink-600/10 rounded-full blur-xl floating"
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
                  Meta Ads Mastery. 
                  <span className="text-gray-400">Social Success.</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                  Reach billions of users across Facebook, Instagram, and Meta platforms with precision-targeted campaigns that drive real business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="https://wa.me/919502055104" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 glow-effect group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Launch Campaigns
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
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="396" height="236" rx="16" fill="#1E1E1E" stroke="#333333" strokeWidth="2"/>
                  
                  {/* Social Media Feed */}
                  <rect x="20" y="30" width="360" height="180" rx="8" fill="#111111" stroke="#444444" strokeWidth="1"/>
                  
                  {/* Facebook Post */}
                  <rect x="40" y="50" width="150" height="80" rx="8" fill="#333333" stroke="#3b82f6" strokeWidth="1"/>
                  <circle cx="60" cy="70" r="8" fill="#3b82f6"/>
                  <rect x="75" y="65" width="60" height="4" rx="2" fill="#666666"/>
                  <rect x="75" y="75" width="40" height="3" rx="1" fill="#555555"/>
                  
                  {/* Instagram Post */}
                  <rect x="210" y="50" width="150" height="80" rx="8" fill="#333333" stroke="#ec4899" strokeWidth="1"/>
                  <rect x="225" y="65" width="120" height="50" rx="4" fill="url(#grad1)" opacity="0.3"/>
                  
                  {/* Engagement Metrics */}
                  <circle cx="80" cy="150" r="3" fill="#3b82f6" className="svg-pulse"/>
                  <text x="90" y="155" fill="#3b82f6" fontSize="10">2.5K</text>
                  
                  <circle cx="150" cy="150" r="3" fill="#ec4899" className="svg-pulse" style={{animationDelay: '0.3s'}}/>
                  <text x="160" y="155" fill="#ec4899" fontSize="10">1.8K</text>
                  
                  <circle cx="220" cy="150" r="3" fill="#3b82f6" className="svg-pulse" style={{animationDelay: '0.6s'}}/>
                  <text x="230" y="155" fill="#3b82f6" fontSize="10">3.2K</text>
                  
                  {/* Growth Chart */}
                  <path className="svg-draw-path" d="M 50 190 L 80 170 L 120 160 L 160 140 L 200 130 L 240 110 L 280 100 L 320 80 L 350 70" stroke="url(#grad1)" fill="none" strokeWidth="3"/>
                  
                  {/* Social Icons */}
                  <circle cx="320" cy="170" r="12" fill="#3b82f6" className="svg-pulse" style={{animationDelay: '1s'}}/>
                  <text x="316" y="175" fill="white" fontSize="12" fontWeight="bold">f</text>
                  
                  <circle cx="350" cy="160" r="12" fill="#ec4899" className="svg-pulse" style={{animationDelay: '1.3s'}}/>
                  <rect x="345" y="155" width="10" height="10" rx="2" fill="white"/>
                  
                  {/* Interaction Animations */}
                  <circle cx="100" cy="180" r="15" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.5" className="svg-pulse" style={{animationDelay: '0.5s'}}/>
                  <circle cx="280" cy="170" r="15" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.5" className="svg-pulse" style={{animationDelay: '1.5s'}}/>
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
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
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
                Our Meta Advertising <span className="text-blue-400">Services</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive social media advertising solutions that connect your brand with the right audience.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {metaStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-full"></div>
                    <div className="pl-6">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Meta Service
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        {strategy.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {strategy.description}
                      </p>
                      <div className="flex items-center text-blue-400">
                        <strategy.icon className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">Learn More</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meta Strategies Section */}
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
                Meta Advertising <span className="text-blue-400">Strategies</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive social media advertising solutions that connect your brand with the right audience at the perfect moment.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {metaStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 group cursor-pointer ${
                    activeCard === index ? 'ring-2 ring-blue-500 bg-gray-800/70' : ''
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
                    <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-full"></div>
                    <div className="pl-6">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Meta Strategy
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        {strategy.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {strategy.description}
                      </p>
                      <motion.button 
                        className="inline-flex items-center text-white font-semibold group-hover:text-blue-400 transition-colors duration-300 hover:underline"
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
                          className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
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
                What Our <span className="text-blue-400">Clients Say</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how our Meta advertising strategies have transformed social media presence and driven business growth.
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
                    <Quote className="w-8 h-8 text-blue-400 mr-3" />
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
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-pink-900/20"></div>
          <div className="absolute bottom-0 right-0 text-9xl font-black text-white/5 select-none pointer-events-none">
            SOCIAL
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
                Ready to Dominate Social Media with 
                <span className="text-blue-400">Meta Advertising?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Let's create compelling Meta ad campaigns that connect with your audience and drive measurable business results.
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
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Free Strategy Session
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  No Setup Fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
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

export default MetaAdsService;