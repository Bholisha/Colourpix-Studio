import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Video, Mic, ShieldCheck, Award, ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onSeeStudioClick?: () => void;
}

// Background HD Studio Images Carousel
const BACKGROUND_IMAGES = [
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000', // Neon RGB Set
  'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=2000', // Executive Lounge
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000', // Panel Discussion Set
  'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=2000', // Solo Pod
];

export const Hero: React.FC<HeroProps> = ({ onBookClick, onSeeStudioClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-obsidian font-sans">
      
      {/* 1. Dynamic Auto-Changing Studio Background Images with Motion Cross-Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={BACKGROUND_IMAGES[currentImageIndex]}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={BACKGROUND_IMAGES[currentImageIndex]}
            alt={`ColourPix Studio Background ${currentImageIndex + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. Left-Side Gradient Overlay (Text side faded, right side crystal clear) */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-transparent w-full md:w-[70%] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40 z-10 pointer-events-none" />

      {/* 3. Left-Aligned Content Container */}
      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-20 flex flex-col justify-center">
        
        <div className="max-w-2xl space-y-6 text-left">
          
          {/* Badge Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-brand-cyan/40 text-brand-cyan text-xs font-bold tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Delhi NCR's Premier Podcast & Content Studio</span>
          </motion.div>

          {/* Headline Entrance Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
          >
            Record Podcasts That Look <br />
            <span className="text-gradient">World-Class & Viral</span>
          </motion.h1>

          {/* Tagline Animation */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium max-w-xl"
          >
            Record, Edit & Scale your audio/video content with 4K Cinema cameras, Shure SM7B mics, multi-theme RGB lighting, and expert acoustic engineering.
          </motion.p>

          {/* Left-Aligned Motion CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          >
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-neon-gradient text-black shadow-neon-glow hover:shadow-neon-glow-strong transition-all flex items-center justify-center gap-2 text-sm"
            >
              Book Studio Slot Now
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onSeeStudioClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold glass-panel border-white/10 hover:border-brand-cyan/60 text-white transition-all text-sm flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-brand-cyan fill-current" />
              See Our Studio
            </motion.button>
          </motion.div>

          {/* Key Features Chips Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
          >
            <div className="glass-panel p-3.5 flex flex-col items-start gap-1 hover:border-brand-cyan/40 transition-colors">
              <Video className="w-5 h-5 text-brand-cyan" />
              <span className="text-xs font-bold text-white">4K Multi-Cam</span>
              <span className="text-[10px] text-slate-400">Sony FX3 / A7IV</span>
            </div>
            <div className="glass-panel p-3.5 flex flex-col items-start gap-1 hover:border-brand-cyan/40 transition-colors">
              <Mic className="w-5 h-5 text-brand-cyan" />
              <span className="text-xs font-bold text-white">Broadcast Mics</span>
              <span className="text-[10px] text-slate-400">Shure SM7B Setup</span>
            </div>
            <div className="glass-panel p-3.5 flex flex-col items-start gap-1 hover:border-brand-cyan/40 transition-colors">
              <ShieldCheck className="w-5 h-5 text-brand-cyan" />
              <span className="text-xs font-bold text-white">100% Soundproof</span>
              <span className="text-[10px] text-slate-400">Pro Acoustic</span>
            </div>
            <div className="glass-panel p-3.5 flex flex-col items-start gap-1 hover:border-brand-cyan/40 transition-colors">
              <Award className="w-5 h-5 text-brand-cyan" />
              <span className="text-xs font-bold text-white">500+ Episodes</span>
              <span className="text-[10px] text-slate-400">Recorded</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 4. Right-side Background Slider Controls */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3">
        <div className="text-xs font-bold text-white bg-obsidian/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-obsidian-border">
          <span className="text-brand-cyan">{currentImageIndex + 1}</span> / {BACKGROUND_IMAGES.length}
        </div>
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-xl glass-panel hover:border-brand-cyan text-white transition-all active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="p-2.5 rounded-xl glass-panel hover:border-brand-cyan text-white transition-all active:scale-95"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};