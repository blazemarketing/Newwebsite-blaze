import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Search, TrendingUp, Target, BarChart3, Users, Zap, Play, Star, Quote, CheckCircle, MousePointer, Sparkles, Brain, Cpu, Database, Globe, Lightbulb, Rocket } from 'lucide-react';
import CountUp from 'react-countup';

const LLMSEOService = () => {
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
    { label: "Organic Traffic Boost", value: 450, suffix: "%", prefix: "+" },
    { label: "Keywords Ranked", value: 2500, suffix: "+" },
    { label: "Content Pieces Optimized", value: 850, suffix: "+" },
    { label: "Client Success Rate", value: 96, suffix: "%" }
  ];

  const testimonials = [
    {
      name: "David Rodriguez",
      role: "Digital Marketing Manager",
      company: "TechVision Corp",
      content: "Our organic traffic increased by 380% in just 4 months. The AI-powered content optimization is game-changing.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "CEO",
      company: "GrowthHub",
      content: "Finally found an SEO approach that actually works. Rankings improved across all our target keywords.",
      rating: 5
    }
  ];

  const seoStrategies = [
    {
      title: "AI Content Generation",
      description: "Create high-quality, SEO-optimized content using advanced language models",
      icon: Brain,
      color: "bg-green-500/20"
    },
    {
      title: "Semantic SEO",
      description: "Optimize for search intent and semantic relationships between keywords",
      icon: Globe,
      color: "bg-blue-500/20"
    },
    {
      title: "Technical SEO Automation",
      description: "Automated technical audits and optimization recommendations",
      icon: Cpu,
      color: "bg-purple-500/20"
    },
    {
      title: "Keyword Intelligence",
      description: "AI-powered keyword research and competitive analysis",
      icon: Database,
      color: "bg-orange-500/20"
    },
    {
      title: "Content Optimization",
      description: "Real-time content scoring and optimization suggestions",
      icon: Lightbulb,
      color: "bg-yellow-500/20"
    },
    {
      title: "Performance Tracking",
      description: "Advanced analytics and predictive SEO performance insights",
      icon: Rocket,
      color: "bg-pink-500/20"
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
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
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
            className="absolute w-2 h-2 bg-green-500 rounded-full opacity-60"
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
            className="absolute top-20 left-10 w-32 h-32 bg-green-600/10 rounded-full blur-xl floating"
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
                  AI-Powered SEO. 
                  <span className="text-gray-400">Rankings Revolutionized.</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                  Harness the power of Large Language Models to dominate search rankings with intelligent content optimization and data-driven SEO strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="https://wa.me/919502055104" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 glow-effect group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Brain className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Start Ranking Higher
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
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="396" height="236" rx="16" fill="#1E1E1E" stroke="#333333" strokeWidth="2"/>
                  
                  {/* Search Engine Interface */}
                  <rect x="20" y="30" width="360" height="180" rx="8" fill="#111111" stroke="#444444" strokeWidth="1"/>
                  
                  {/* Search Bar */}
                  <rect x="40" y="50" width="280" height="30" rx="15" fill="#333333" stroke="#22c55e" strokeWidth="2"/>
                  <circle cx="300" cy="65" r="8" fill="#22c55e"/>
                  <path d="M 296 61 l 8 8 M 304 61 l -8 8" stroke="white" strokeWidth="2"/>
                  
                  {/* AI Brain */}
                  <circle cx="340" cy="65" r="15" fill="none" stroke="#3b82f6" strokeWidth="2" className="svg-pulse"/>
                  <path d="M 335 60 Q 340 55 345 60 Q 340 65 335 60" fill="#3b82f6" className="svg-pulse" style={{animationDelay: '0.3s'}}/>
                  
                  {/* Search Results with Rankings */}
                  <rect x="40" y="100" width="320" height="20" rx="4" fill="#22c55e" opacity="0.8"/>
                  <rect x="40" y="130" width="280" height="20" rx="4" fill="#333333"/>
                  <rect x="40" y="160" width="300" height="20" rx="4" fill="#333333"/>
                  
                  {/* Ranking Arrows */}
                  <path className="svg-draw-path" d="M 50 200 L 80 120 L 120 140 L 160 100 L 200 110 L 240 80 L 280 90 L 320 60" stroke="url(#grad1)" fill="none" strokeWidth="3"/>
                  
                  {/* Position Indicators */}
                  <circle cx="80" cy="120" r="4" fill="#22c55e" className="svg-pulse"/>
                  <text x="76" y="125" fill="white" fontSize="8" fontWeight="bold">1</text>
                  <circle cx="160" cy="100" r="4" fill="#22c55e" className="svg-pulse" style={{animationDelay: '0.4s'}}/>
                  <text x="156" y="105" fill="white" fontSize="8" fontWeight="bold">2</text>
                  <circle cx="240" cy="80" r="4" fill="#22c55e" className="svg-pulse" style={{animationDelay: '0.8s'}}/>
                  <text x="236" y="85" fill="white" fontSize="8" fontWeight="bold">3</text>
                  
                  {/* Keywords floating */}
                  <rect x="280" y="140" width="40" height="15" rx="7" fill="#22c55e" opacity="0.6" className="floating"/>
                  <rect x="290" y="170" width="35" height="15" rx="7" fill="#3b82f6" opacity="0.6" className="floating" style={{animationDelay: '0.5s'}}/>
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
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
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



        {/* SEO Strategies Section */}
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
                AI-Powered SEO <span className="text-green-400">Strategies</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Advanced machine learning algorithms that understand search intent and optimize for maximum visibility.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10 group cursor-pointer ${
                    activeCard === index ? 'ring-2 ring-green-500 bg-gray-800/70' : ''
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
                    <div className="absolute left-0 top-0 w-1 h-full bg-green-500 rounded-full"></div>
                    <div className="pl-6">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        SEO Strategy
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-green-400 transition-colors duration-300">
                        {strategy.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {strategy.description}
                      </p>
                      <motion.button 
                        className="inline-flex items-center text-white font-semibold group-hover:text-green-400 transition-colors duration-300 hover:underline"
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
                          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
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
                What Our <span className="text-green-400">Clients Say</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how our AI-powered SEO strategies have transformed businesses and driven organic growth.
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
                    <Quote className="w-8 h-8 text-green-400 mr-3" />
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
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
          <div className="absolute bottom-0 right-0 text-9xl font-black text-white/5 select-none pointer-events-none">
            RANKINGS
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
                Ready to Dominate Search Results with 
                <span className="text-green-400">AI-Powered SEO?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Let's leverage cutting-edge LLM technology to skyrocket your search rankings and drive sustainable organic growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="https://wa.me/919502055104" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 glow-effect group"
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
                  Free SEO Audit
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

export default LLMSEOService;