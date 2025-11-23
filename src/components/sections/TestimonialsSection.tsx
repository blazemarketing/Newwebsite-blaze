import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [ 
  {
    id: 1,
    name: 'Bhargav',
    role: 'Music Producer',
    image: '/src/public/testimonials/bhargav-music.jpg',
    videoPath: '/src/public/pimpom.mp4',
    text: 'When I dropped my track "Pim Pom", I honestly didn\'t expect it to blow up the way it did. The promo ideas they helped me with felt so simple but somehow worked like crazy. Within a few weeks, the song crossed a million views.',
    rating: 5,
    service: 'Music Promotion'
  }, {
    id: 2,
    name: 'Arjun Mehta',
    role: 'CEO, Nexus Database',
    image: '/src/public/testimonials/arjun-mehta.jpg',
    videoPath: '/src/public/testimonials/videos/arjun-mehta-review.mp4',
    text: "From 0 to 500 paid signups in 3 months. BlazeMarketingMedia's LLM SEO and performance marketing gave our SaaS exponential growth.",
    rating: 5,
    service: 'LLM SEO & Performance Marketing'
  }, {
    id: 3,
    name: 'Hari Venkatesh',
    role: 'Business Owner',
    image: '/src/public/testimonials/hari-venkatesh.jpg',
    videoPath: '/src/public/testimonials/videos/hari-venkatesh-review.mp4',
    text: "I don't like flashy marketing, and thankfully the whole approach was simple and minimal. Felt very aligned with how we operate.",
    rating: 5,
    service: 'Web Development'
  }, {
    id: 4,
    name: 'Neha S. Prakash',
    role: 'Service Provider',
    image: '/src/public/testimonials/neha-prakash.jpg',
    videoPath: '/src/public/testimonials/videos/neha-prakash-review.mp4',
    text: 'My old site was honestly embarrassing. The new version just feels clean and modern, and we actually get booking requests now.',
    rating: 5,
    service: 'Web Development'
  }, {
    id: 5,
    name: 'Abhishek',
    role: 'Sicily CEO',
    image: '/src/public/Silicy.webp',
    videoPath: '/src/public/testimonials/videos/abhishek-review.mp4',
    text: 'The way my portfolio was reshaped made me look way more put-together. It helped me land two more international gigs.',
    rating: 5,
    service: 'Portfolio Design'
  }, {
    id: 6,
    name: 'Pawel',
    role: 'Business Owner',
    image: '/src/public/mate.jpg',
    videoPath: '/src/public/testimonials/videos/pawel-review.mp4',
    text: 'After the portfolio cleanup, people finally "got" the mood and lighting choices. Approvals became way faster.',
    rating: 5,
    service: '3D Rendering Portfolio'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (isVideoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVideoPlaying]);

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-800/50 border border-gray-700 text-xs font-medium">
            CLIENT STORIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-purple-400">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real results from businesses who have transformed their digital presence with our solutions.
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div className="order-2 lg:order-1">
                        <div className="mb-6">
                          <h4 className="text-2xl font-bold text-white mb-2">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400 mb-3">
                            {testimonial.role}
                          </p>
                          <span className="text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                            {testimonial.service}
                          </span>
                        </div>
                        
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-500/20" />
                          <p className="text-gray-300 text-lg leading-relaxed relative z-10 mb-4">
                            {testimonial.text}
                          </p>
                          {testimonial.image && (
                            <div className="mt-4">
                              <img 
                                src={testimonial.image} 
                                alt={`${testimonial.name} testimonial`}
                                className="w-full max-w-sm h-auto rounded-lg border border-gray-700 object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Video */}
                      <div className="order-1 lg:order-2">
                        {testimonial.videoPath && (
                          <div className="w-full max-w-md mx-auto">
                            <video 
                              className="w-full h-auto rounded-lg border border-gray-700"
                              controls
                              preload="metadata"
                              onPlay={() => setIsVideoPlaying(true)}
                              onPause={() => setIsVideoPlaying(false)}
                              onEnded={() => setIsVideoPlaying(false)}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            >
                              <source src={testimonial.videoPath} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}