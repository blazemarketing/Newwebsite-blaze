import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, MessageSquareText, Megaphone, Facebook, PenTool, Globe, Search, Code, LineChart } from 'lucide-react';
import { useParams } from 'react-router-dom';
// Service data
const serviceDetails = {
  'llm-seo': {
    title: 'LLM SEO',
    icon: 'MessageSquareText',
    color: 'blue',
    description: 'Harness the power of Large Language Models to optimize your content and stay ahead in search engine rankings.',
    benefits: ['AI-powered keyword research and content optimization', 'Natural language processing for better content quality', 'Semantic search optimization for modern search engines', 'Automated content suggestions and improvements', 'Regular updates based on algorithm changes'],
    process: ['In-depth analysis of your current SEO performance', 'AI-powered content audit and optimization strategy', 'Implementation of LLM-optimized content', 'Continuous monitoring and improvement']
  },
  'google-ads': {
    title: 'Google Ads',
    icon: 'Megaphone',
    color: 'red',
    description: 'Drive targeted traffic and maximize ROI with our expertly managed Google Ads campaigns.',
    benefits: ['Targeted ad placement to reach potential customers', 'Detailed performance tracking and optimization', 'A/B testing to maximize conversion rates', 'Budget optimization for maximum ROI', 'Regular performance reports and insights'],
    process: ['Comprehensive keyword research and competitor analysis', 'Campaign structure setup and ad creation', 'Bid management and budget optimization', 'Ongoing performance monitoring and optimization']
  },
  'meta-ads': {
    title: 'Meta Ads',
    icon: 'Facebook',
    color: 'blue',
    description: 'Reach your target audience on Facebook, Instagram, and other Meta platforms with strategic ad campaigns.',
    benefits: ['Precise audience targeting based on demographics and interests', 'Visual ad creation optimized for engagement', 'Multi-platform campaign management', 'Retargeting strategies to capture lost conversions', 'Performance analytics and ROI tracking'],
    process: ['Audience research and targeting strategy development', 'Creative design and ad copy creation', 'Campaign setup and budget allocation', 'Performance monitoring and optimization']
  },
  '3d-rendering': {
    title: '3D Rendering',
    icon: 'Cube',
    color: 'purple',
    description: 'Create stunning 3D visualizations to showcase your products, properties, or concepts with photorealistic quality.',
    benefits: ['Photorealistic rendering of products and spaces', 'Interactive 3D models for customer engagement', 'Virtual tours and product demonstrations', 'Custom animations and visual effects', 'Integration with your website and marketing materials'],
    process: ['Concept discussion and requirements gathering', 'Wireframe and basic model development', 'Texturing, lighting, and material application', 'Rendering and post-production enhancements']
  },
  'graphic-designing': {
    title: 'Graphic Designing',
    icon: 'PenTool',
    color: 'pink',
    description: 'Create a strong visual identity with our professional graphic design services for all your branding needs.',
    benefits: ['Consistent brand identity across all platforms', 'Eye-catching visuals that capture attention', 'Custom illustrations and graphics', 'Print and digital design solutions', 'Regular design updates to keep your brand fresh'],
    process: ['Brand discovery and visual strategy development', 'Initial concept creation and design direction', 'Refinement based on feedback', 'Final delivery in all required formats']
  },
  'web-development': {
    title: 'Web Development',
    icon: 'Globe',
    color: 'green',
    description: 'Build a powerful online presence with custom websites and web applications designed for performance and user experience.',
    benefits: ['Custom design tailored to your brand', 'Responsive layouts for all devices', 'Performance optimization for fast loading', 'SEO-friendly structure and code', 'Secure and scalable architecture'],
    process: ['Discovery and requirements gathering', 'UX/UI design and wireframing', 'Development and functionality implementation', 'Testing, launch, and ongoing support']
  },
  'seo-optimization': {
    title: 'SEO Optimization',
    icon: 'Search',
    color: 'yellow',
    description: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO services.',
    benefits: ['Higher rankings for targeted keywords', 'Increased organic traffic and visibility', 'Technical SEO improvements', 'Local SEO optimization', 'Regular performance reporting'],
    process: ['Comprehensive SEO audit and analysis', 'Keyword research and content strategy', 'On-page and off-page optimization', 'Ongoing monitoring and adjustments']
  },
  'content-marketing': {
    title: 'Content Marketing',
    icon: 'Code',
    color: 'blue',
    description: 'Engage your audience and establish authority with strategic content marketing that drives results.',
    benefits: ['Engaging content that resonates with your audience', 'Consistent publishing schedule', 'Content optimized for search engines', 'Multi-format content strategy', 'Content performance analytics'],
    process: ['Content audit and strategy development', 'Editorial calendar creation', 'Content creation and optimization', 'Distribution and performance tracking']
  },
  'analytics-reporting': {
    title: 'Analytics & Reporting',
    icon: 'LineChart',
    color: 'indigo',
    description: 'Gain valuable insights into your digital performance with comprehensive analytics and custom reporting.',
    benefits: ['Data-driven decision making', 'Custom dashboards for key metrics', 'Regular performance reports', 'Actionable insights and recommendations', 'Conversion tracking and optimization'],
    process: ['Analytics setup and configuration', 'KPI definition and tracking implementation', 'Custom dashboard creation', 'Regular reporting and insight generation']
  }
};
interface ServiceDetailProps {
  slug?: string;
}
const ServiceDetail: React.FC<ServiceDetailProps> = ({
  slug
}) => {
  const params = useParams();
  const serviceSlug = slug || params.slug || '';
  const service = serviceDetails[serviceSlug as keyof typeof serviceDetails];
  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-6">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <a href="#services" className="inline-flex items-center px-6 py-3 bg-purple-600 rounded-lg text-white">
            Back to Services <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-black pt-24 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-${service.color}-500/20 mb-6`}>
            <div className={`w-12 h-12 rounded-full bg-${service.color}-500/30 flex items-center justify-center`}>
              {/* We'll need to dynamically import the icon based on the service */}
              <div className={`text-${service.color}-500 text-3xl`}>
                {service.icon === 'MessageSquareText' && <MessageSquareText className="w-6 h-6" />}
                {service.icon === 'Megaphone' && <Megaphone className="w-6 h-6" />}
                {service.icon === 'Facebook' && <Facebook className="w-6 h-6" />}
                {service.icon === 'Cube' && <div className="w-6 h-6" />}
                {service.icon === 'PenTool' && <PenTool className="w-6 h-6" />}
                {service.icon === 'Globe' && <Globe className="w-6 h-6" />}
                {service.icon === 'Search' && <Search className="w-6 h-6" />}
                {service.icon === 'Code' && <Code className="w-6 h-6" />}
                {service.icon === 'LineChart' && <LineChart className="w-6 h-6" />}
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {service.description}
          </p>
        </motion.div>
      </div>
      {/* Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Benefits */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => <motion.li key={index} className="flex items-start" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.3 + index * 0.1
            }}>
                  <div className={`mr-3 p-1 bg-${service.color}-500/20 rounded-full flex-shrink-0`}>
                    <Check className={`w-5 h-5 text-${service.color}-500`} />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </motion.li>)}
            </ul>
          </motion.div>
          {/* Process */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step, index) => <motion.div key={index} className="relative pl-10" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: 0.4 + index * 0.1
            }}>
                  <div className="absolute left-0 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-gray-800 border border-gray-700">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-bold mb-2">{step}</h3>
                  {index < service.process.length - 1 && <div className="absolute left-3.5 top-7 h-10 w-px bg-gray-700"></div>}
                </motion.div>)}
            </div>
          </motion.div>
        </div>
        {/* CTA */}
        <motion.div className="mt-20 max-w-3xl mx-auto text-center" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }}>
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Contact us today to learn more about how our {service.title}{' '}
            services can help your business grow.
          </p>
          <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full text-white font-medium hover:opacity-90 transition-all duration-300" data-fill-button="true">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>;
};
export default ServiceDetail;