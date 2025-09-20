import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: 'Dr. Priya Sharma',
  role: 'Owner, Sri Laxmi Dental',
  image: 'https://randomuser.me/api/portraits/women/32.jpg',
  text: 'BlazeMarketingMedia helped us attract 50% more local patients through SEO and Google Ads. Our dental practice has never been busier!',
  rating: 5,
  logo: '🦷' // Placeholder logo
}, {
  id: 2,
  name: 'Bhargav Patel',
  role: 'Content Creator',
  image: 'https://randomuser.me/api/portraits/men/44.jpg',
  text: 'They scaled my channel using targeted Meta ads. I grew from 10K to 100K subscribers in months. Their creative team nailed my brand identity.',
  rating: 5,
  logo: '📱' // Placeholder logo
}, {
  id: 3,
  name: 'Arjun Mehta',
  role: 'CEO, Nexus Database',
  image: 'https://randomuser.me/api/portraits/men/67.jpg',
  text: "From 0 to 500 paid signups in 3 months. BlazeMarketingMedia's LLM SEO and performance marketing gave our SaaS exponential growth.",
  rating: 5,
  logo: '💾' // Placeholder logo
}];
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="testimonials" className="py-20 bg-black relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full opacity-30"></div>
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
            CLIENT STORIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-purple-400">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real results from businesses across India who have transformed their
            digital presence with our solutions.
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop view: Grid layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map(testimonial => <motion.div key={testimonial.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 group" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: testimonial.id * 0.1
          }} whileHover={{
            y: -5,
            scale: 1.02,
            boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.2)'
          }}>
                <div className="flex items-center mb-4 justify-between">
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500" />
                    <div>
                      <h4 className="font-bold group-hover:text-purple-400 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl opacity-70">{testimonial.logo}</div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                </div>
                <div className="relative">
                  <Quote className="absolute top-0 left-0 w-6 h-6 text-purple-500/20 -translate-x-2 -translate-y-2" />
                  <p className="text-gray-300 relative z-10">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>)}
          </div>
          {/* Mobile view: Carousel */}
          <div className="md:hidden">
            <motion.div key={currentIndex} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6" initial={{
            opacity: 0,
            x: direction * 50
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -direction * 50
          }} transition={{
            duration: 0.3
          }}>
              <div className="flex items-center mb-4 justify-between">
                <div className="flex items-center">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500" />
                  <div>
                    <h4 className="font-bold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
                <div className="text-2xl opacity-70">
                  {testimonials[currentIndex].logo}
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
              </div>
              <div className="relative">
                <Quote className="absolute top-0 left-0 w-6 h-6 text-purple-500/20 -translate-x-2 -translate-y-2" />
                <p className="text-gray-300 relative z-10">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </motion.div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }} className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-purple-500' : 'bg-gray-600'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={prevTestimonial} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700" aria-label="Previous testimonial">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextTestimonial} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700" aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}