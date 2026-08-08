import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Maximize2, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface StudioGalleryProps {
  onExploreAllSets?: () => void;
}

const GALLERY_SETS = [
  {
    id: 'set-1',
    category: 'Set 1',
    name: 'Set 1: Cyberpunk Neon & Founder Suite',
    tagline: 'Multi-angle RGB neon backdrop & executive setup for high-impact podcasts',
    capacity: '2-4 Guests',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1600',
    features: ['Sony FX3 4K Triple Cam', 'Shure SM7B Broadcast Mics', 'Custom Neon Signboards', 'Acoustic Wall Panels']
  },
  {
    id: 'set-2',
    category: 'Set 2',
    name: 'Set 2: Executive Panel Desk & Lounge',
    tagline: 'Warm amber wooden slat aesthetic for founder interviews & group debates',
    capacity: '2-4 Guests',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1600',
    features: ['Custom Leather Armchairs', 'Wooden Acoustic Slats', 'RodeCaster Pro II Audio Console', '4K Sony Multi-Cam']
  },
  {
    id: 'solo-pod',
    category: 'Solo Pod',
    name: 'Creator Monologue Studio',
    tagline: 'Intimate soundproof setup for voiceovers, video essays, YouTube commentary & reels',
    capacity: '1 Person',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=1600',
    features: ['Teleprompter Screen', 'Instant Raw Footage Export', 'Ultra-Low Noise Isolation', 'Acoustic Foam Suite']
  },
  {
    id: 'production-suite',
    category: 'Control Desk',
    name: 'Production & Live Editing Suite',
    tagline: 'Broadcast control desk equipped with live ATEM video switchers & audio monitoring',
    capacity: 'In-House Crew',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600',
    features: ['Live ATEM Video Switcher', 'Live Audio Waveform Monitoring', 'Direct High-Speed Drive Handoff', 'Dedicated Director Desk']
  }
];

export const StudioGallery: React.FC<StudioGalleryProps> = ({ onExploreAllSets }) => {
  const [activeSet, setActiveSet] = useState(GALLERY_SETS[0]);
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
      id="sets" 
      ref={sectionRef} 
      className="w-full py-24 bg-obsidian relative border-t border-obsidian-border font-sans overflow-hidden"
    >
      
      {/* Header with Scroll Animation */}
      <div 
        className={`w-full px-6 sm:px-12 lg:px-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold tracking-wide mb-3 shadow-neon-glow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Studio Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Explore Our World-Class <span className="text-gradient">Studio Spaces</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            From Set 1 and Set 2 to our Monologue Pod and Production Suite — built for seamless recording.
          </p>
        </div>
      </div>

      {/* Main Preview Frame with Entrance Animation */}
      <div 
        className={`w-full px-4 sm:px-8 lg:px-16 mb-12 transition-all duration-1000 delay-200 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        <div className="relative rounded-3xl overflow-hidden border border-obsidian-border bg-obsidian-card min-h-[480px] lg:min-h-[580px] flex flex-col justify-end p-6 sm:p-12 shadow-2xl">
          
          <img 
            src={activeSet.image} 
            alt={activeSet.name} 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 brightness-75 hover:brightness-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

          {/* Overlaid Info Panel */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-brand-cyan text-black uppercase tracking-wider">
                  {activeSet.category}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1 glass-panel-wide px-3 py-1">
                  <Users className="w-3.5 h-3.5 text-brand-cyan" /> {activeSet.capacity}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">{activeSet.name}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">{activeSet.tagline}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {activeSet.features.map((feat, i) => (
                  <div key={i} className="glass-panel-wide p-3 text-[11px] font-semibold text-slate-200 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom-Right Corner CTA Button */}
            <div className="shrink-0 self-start lg:self-end">
              <button
                onClick={onExploreAllSets}
                className="px-6 py-3.5 rounded-xl font-black text-xs bg-neon-gradient text-black hover:shadow-neon-glow transition-all inline-flex items-center gap-2.5 transform hover:-translate-y-0.5"
              >
                <span>Explore Studio</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Cards Grid Below with Staggered Scroll Animation */}
      <div 
        className={`w-full px-4 sm:px-8 lg:px-16 transition-all duration-1000 delay-300 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_SETS.map((set) => (
            <div
              key={set.id}
              onClick={() => setActiveSet(set)}
              className={`glass-panel-wide p-4 cursor-pointer transition-all duration-300 ${
                activeSet.id === set.id 
                  ? 'border-brand-cyan shadow-neon-glow scale-[1.02]' 
                  : 'hover:border-slate-600 hover:-translate-y-1'
              }`}
            >
              <div className="h-40 rounded-xl overflow-hidden relative mb-3">
                <img src={set.image} alt={set.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
              <h4 className="text-sm font-bold text-white truncate">{set.name}</h4>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{set.tagline}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};