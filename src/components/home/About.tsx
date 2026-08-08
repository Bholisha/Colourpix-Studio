import React, { useEffect, useRef, useState } from 'react';
import { Mic, Video, VolumeX, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutProps {
  onReadFullStory?: () => void;
}

export const About: React.FC<AboutProps> = ({ onReadFullStory }) => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative py-20 bg-obsidian border-t border-obsidian-border/50 overflow-hidden font-sans"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header with Scroll-Triggered Fade & Slide Animation */}
        <div 
          className={`max-w-4xl mb-12 text-left transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-brand-cyan/30 text-brand-cyan text-xs font-bold tracking-wide mb-4 shadow-neon-glow">
            <Award className="w-4 h-4" />
            <span>About ColourPix Studio</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Where India's Top Creators <span className="text-gradient">Record & Scale Content</span>
          </h2>

          {/* Tagline */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium max-w-3xl">
            Delhi NCR’s premier broadcast-grade podcast production facility built for creators, brands, and thought leaders.
          </p>
        </div>

        {/* Top Grid: Story List + Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          
          {/* Left Side: Single-Column Vertical List with Staggered Entrance */}
          <div 
            className={`lg:col-span-7 space-y-5 transition-all duration-1000 delay-200 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Why Top Creators Choose Our Space
            </h3>

            {/* Vertical List Container */}
            <div className="space-y-3.5">
              
              {/* List Item 1 */}
              <div className="glass-panel p-4 rounded-2xl border-white/5 hover:border-brand-cyan/40 transition-all flex items-center gap-4 hover:-translate-y-1 hover:shadow-neon-glow duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                  <VolumeX className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">Acoustic Engineering</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-snug mt-0.5">Zero room echo, soundproof treatment, and studio-grade audio clarity.</p>
                </div>
              </div>

              {/* List Item 2 */}
              <div className="glass-panel p-4 rounded-2xl border-white/5 hover:border-brand-cyan/40 transition-all flex items-center gap-4 hover:-translate-y-1 hover:shadow-neon-glow duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">4K Multi-Cam Setup</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-snug mt-0.5">Sony Cinema FX Series cameras pre-configured for dynamic multi-angle switching.</p>
                </div>
              </div>

              {/* List Item 3 */}
              <div className="glass-panel p-4 rounded-2xl border-white/5 hover:border-brand-cyan/40 transition-all flex items-center gap-4 hover:-translate-y-1 hover:shadow-neon-glow duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">Shure SM7B Audio</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-snug mt-0.5">Industry-standard microphones connected with Rodecaster Pro II mixers.</p>
                </div>
              </div>

              {/* List Item 4 */}
              <div className="glass-panel p-4 rounded-2xl border-white/5 hover:border-brand-cyan/40 transition-all flex items-center gap-4 hover:-translate-y-1 hover:shadow-neon-glow duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">Dedicated Engineer</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-snug mt-0.5">In-house sound and video technicians present during your entire session.</p>
                </div>
              </div>

            </div>

            {/* Feature Chips */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" /> Plug & Play Experience
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" /> Raw Data Delivered Immediately
              </div>
            </div>
          </div>

          {/* Right Side: Studio Image Showcase */}
          <div 
            className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-obsidian-border group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000"
                alt="ColourPix Podcast Studio Control Desk"
                className="w-full h-[380px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-5 left-5 right-5 glass-panel p-4 rounded-xl border-white/10 backdrop-blur-md">
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-1">Location Advantage</p>
                <p className="text-sm font-semibold text-white">Central Delhi | Easy Metro Connectivity & Ample Parking</p>
              </div>
            </div>
          </div>

        </div>

        {/* Larger Stats Strip */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 glass-panel p-6 rounded-2xl border-white/5 mb-10 transition-all duration-1000 delay-400 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center space-y-1">
            <span className="text-3xl sm:text-5xl font-black text-white block">500+</span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Episodes Recorded</span>
          </div>

          <div className="text-center space-y-1 border-l border-obsidian-border/60">
            <span className="text-3xl sm:text-5xl font-black text-brand-cyan block">100%</span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Soundproof Guarantee</span>
          </div>

          <div className="text-center space-y-1 border-l border-obsidian-border/60">
            <span className="text-3xl sm:text-5xl font-black text-white block">4.9 ★</span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Client Rating</span>
          </div>

          <div className="text-center space-y-1 border-l border-obsidian-border/60">
            <span className="text-3xl sm:text-5xl font-black text-brand-cyan block">24/7</span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Booking Availability</span>
          </div>
        </div>

        {/* Prominent Redirect Button */}
        <div 
          className={`text-center pt-2 transition-all duration-1000 delay-500 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={onReadFullStory}
            className="px-8 py-4 rounded-xl font-bold text-sm bg-neon-gradient text-black hover:shadow-neon-glow transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
          >
            Read Full Story & About Us
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};