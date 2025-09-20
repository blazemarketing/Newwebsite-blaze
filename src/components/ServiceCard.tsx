import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PenTool } from 'lucide-react';
interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  icon,
  slug
}) => {
  // Fix for missing icon in Graphic Designing service card
  const displayIcon = title === 'Graphic Designing' && !icon ? <PenTool className="h-8 w-8 text-pink-500" /> : icon;
  return <motion.div data-service-card="true" className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 group relative overflow-hidden" initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: id * 0.1
  }} whileHover={{
    y: -8,
    boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.3)',
    transition: {
      duration: 0.3
    }
  }}>
      {/* Gradient border effect on hover */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100" initial={{
      opacity: 0
    }} whileHover={{
      opacity: 1
    }}>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-sm" />
      </motion.div>
      {/* Card content */}
      <div className="relative z-10">
        <div className="mb-4 p-3 bg-gray-800/70 rounded-lg inline-block group-hover:bg-gray-800/90 transition-colors duration-300">
          {displayIcon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <a href={`#/services/${slug}`} data-fill-button="true" className="inline-flex items-center text-sm font-medium text-white relative overflow-hidden group-hover:text-white transition-colors duration-300">
          {/* Button with water-fill animation */}
          <span className="relative z-10 flex items-center">
            Learn More <ArrowRight className="ml-1 w-4 h-4" />
          </span>
          <motion.span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" initial={{
          scaleX: 0,
          originX: 0
        }} whileHover={{
          scaleX: 1
        }} transition={{
          duration: 0.3
        }} />
        </a>
      </div>
    </motion.div>;
};
export default ServiceCard;