import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Aman Sharma",
    role: "Host, The Delhi Tech Show",
    review: "ColourPix Studio ka lighting control aur Shure SM7B audio output CraziStudio se kahin zyada professional hai. Raw files immediately mil gayi!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Creator & Influencer",
    review: "Vertical reels cutting add-on service bohot helpful rahi. Ek episode se 4 viral reels mil gayi. Best podcast studio in South Delhi!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Rohan Kapoor",
    role: "Founder, Startup Unfiltered",
    review: "4K multi-cam setup aur in-house audio engineer ne hmare interview production ko agle level par pahuncha diya. Exceptional experience!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

export const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default center card (Index 1)
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Helper function to calculate position relative to active center card
  const getCardStyle = (index: number) => {
    const total = TESTIMONIALS.length;
    // Normalized distance relative to active index
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) diff -= total;

    if (diff === 0) {
      // CENTER CARD (Top Layer & Highlighted)
      return {
        container: "z-30 scale-100 sm:scale-105 opacity-100 border-brand-cyan shadow-neon-glow bg-obsidian-card translate-x-0 translate-y-0",
        quoteColor: "text-brand-cyan/40",
        isCenter: true
      };
    } else if (diff === -1 || (diff === total - 1 && activeIndex === 0)) {
      // LEFT CARD (Lowered & Layered Under Center)
      return {
        container: "z-10 scale-90 sm:scale-95 opacity-50 sm:opacity-70 border-white/10 bg-obsidian-card/60 -translate-x-12 sm:-translate-x-28 translate-y-4 hover:opacity-90 hover:border-brand-cyan/40 cursor-pointer",
        quoteColor: "text-slate-600",
        isCenter: false
      };
    } else {
      // RIGHT CARD (Lowered & Layered Under Center)
      return {
        container: "z-10 scale-90 sm:scale-95 opacity-50 sm:opacity-70 border-white/10 bg-obsidian-card/60 translate-x-12 sm:translate-x-28 translate-y-4 hover:opacity-90 hover:border-brand-cyan/40 cursor-pointer",
        quoteColor: "text-slate-600",
        isCenter: false
      };
    }
  };

  return (
    <section 
      id="reviews" 
      ref={sectionRef}
      className="py-24 border-t border-obsidian-border relative overflow-hidden font-sans bg-obsidian"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 space-y-3 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest block">
            Creator Community
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Trusted By Top <span className="text-gradient">Delhi Creators</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click side cards to bring them to the center stage.
          </p>
        </div>

        {/* 3D Stacked Testimonials Carousel */}
        <div 
          className={`relative max-w-5xl mx-auto min-h-[360px] sm:min-h-[320px] flex items-center justify-center transition-all duration-1000 delay-200 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full max-w-xl relative flex items-center justify-center">
            {TESTIMONIALS.map((t, idx) => {
              const style = getCardStyle(idx);

              return (
                <div 
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`absolute w-full p-6 sm:p-8 rounded-3xl border transition-all duration-500 ease-out backdrop-blur-md space-y-5 ${style.container}`}
                >
                  <Quote className={`w-10 h-10 absolute top-6 right-6 transition-colors ${style.quoteColor}`} />
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium italic relative z-10">
                    "{t.review}"
                  </p>

                  {/* User Profile Info */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-10 h-10 rounded-full object-cover border border-brand-cyan/40"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-[11px] font-semibold text-brand-cyan">{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls Below */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-xl glass-panel border-white/10 text-white hover:border-brand-cyan/60 hover:text-brand-cyan transition-all transform active:scale-95"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Navigation Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-brand-cyan shadow-neon-glow' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-xl glass-panel border-white/10 text-white hover:border-brand-cyan/60 hover:text-brand-cyan transition-all transform active:scale-95"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};