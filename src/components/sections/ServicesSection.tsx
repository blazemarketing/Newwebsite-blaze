import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Code, LineChart, Search, Users, Zap, MessageSquareText, Megaphone, Facebook, PenTool, Globe, Box } from 'lucide-react';
import ServiceCard from '../ServiceCard';
const services = [{
  id: 1,
  title: 'LLM SEO',
  description: 'Leverage AI-powered optimization strategies to boost your visibility in search engines.',
  icon: <MessageSquareText className="h-8 w-8 text-blue-500" />,
  slug: 'llm-seo'
}, {
  id: 2,
  title: 'Google Ads',
  description: 'Targeted PPC campaigns that drive qualified traffic and maximize your ROI.',
  icon: <Megaphone className="h-8 w-8 text-red-500" />,
  slug: 'google-ads'
}, {
  id: 3,
  title: 'Meta Ads',
  description: 'Strategic Facebook and Instagram ad campaigns to grow your social presence.',
  icon: <Facebook className="h-8 w-8 text-blue-600" />,
  slug: 'meta-ads'
}, {
  id: 4,
  title: '3D Rendering',
  description: 'Stunning 3D visualizations that bring your products and ideas to life.',
  icon: <Box className="h-8 w-8 text-purple-500" />,
  slug: '3d-rendering'
}, {
  id: 5,
  title: 'Graphic Designing',
  description: 'Eye-catching designs that strengthen your brand identity and messaging.',
  icon: <PenTool className="h-8 w-8 text-pink-500" />,
  slug: 'graphic-designing'
}, {
  id: 6,
  title: 'Web Development',
  description: 'Custom websites and applications built with the latest technologies.',
  icon: <Globe className="h-8 w-8 text-green-500" />,
  slug: 'web-development'
}, ];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
export default function ServicesSection() {
  return <section id="services" className="py-20 bg-black relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" initial={{
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
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-800/50 border border-gray-700 text-xs font-medium">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Digital{' '}
            <span className="text-purple-400">Marketing Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a wide range of services to help your business grow online
            and reach its full potential. Explore our specialized solutions
            tailored to your needs.
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }}>
          {services.map(service => <ServiceCard key={service.id} id={service.id} title={service.title} description={service.description} icon={service.icon} slug={service.slug} />)}
        </motion.div>
      </div>
    </section>;
}