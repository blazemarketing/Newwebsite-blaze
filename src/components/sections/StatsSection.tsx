import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
const StatsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  const statBoxes = [{
    title: 'Clients',
    value: 15,
    suffix: '+',
    description: 'Businesses Transformed',
    color: 'from-blue-600 to-blue-400'
  }, {
    title: 'Revenue Generated',
    value: 200000,
    prefix: '₹',
    suffix: '+',
    formatter: (value: number) => value.toLocaleString('en-IN'),
    description: 'For Our Clients',
    color: 'from-purple-600 to-purple-400'
  }, {
    title: 'Years of Expertise',
    value: 2,
    suffix: '+',
    description: 'In Digital Marketing',
    color: 'from-pink-600 to-pink-400'
  }];
  return <motion.section ref={ref} className="py-12" variants={containerVariants} initial="hidden" animate={controls}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {statBoxes.map((stat, index) => <motion.div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
              <div className="flex flex-col items-center justify-center h-full">
                <div className={`w-16 h-1 bg-gradient-to-r ${stat.color} mb-4 rounded-full`}></div>
                <h3 className="text-lg font-medium text-gray-400 mb-2">
                  {stat.title}
                </h3>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {inView && <>
                      {stat.prefix && <span>{stat.prefix}</span>}
                      <CountUp start={0} end={stat.value} duration={2.5} separator="," decimals={0} formattingFn={stat.formatter}
                useEasing={true} easingFn={(t, b, c, d) => {
                  const ts = (t /= d) * t;
                  const tc = ts * t;
                  return b + c * (tc + -3 * ts + 3 * t);
                }} />
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </>}
                </div>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </motion.section>;
};
export default StatsSection;