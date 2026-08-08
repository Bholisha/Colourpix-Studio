import React, { useEffect, useRef, useState } from 'react';
import { Video, Building2, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

interface WhoWeServeProps {
  onBookClick?: () => void;
}

const AUDIENCE_CATEGORIES = [
  {
    id: 'creators',
    title: 'Creators & Influencers',
    description: 'Youtubers, podcasters, and short-form creators looking for high-converting 4K multi-cam setups, dynamic RGB neon backdrops, and viral reels cutting.',
    icon: Video,
    tag: 'Content Creators',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800',
    features: ['4K Multi-Cam Angles', 'Shure SM7B Vocal Mics', 'Custom RGB Mood Lighting']
  },
  {
    id: 'businesses',
    title: 'Businesses & Organizations',
    description: 'Founders, corporate executives, and brand teams building personal authority, hosting leadership interviews, and recording internal communications.',
    icon: Building2,
    tag: 'Corporate & Brands',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    features: ['Executive Lounge Setup', 'Dedicated Tech Crew', 'NDAs & Confidentiality']
  },
  {
    id: 'education',
    title: 'Education & Knowledge',
    description: 'Educators, trainers, coaches, and EdTech professionals recording online courses, webinars, masterclasses, and instructional video series.',
    icon: GraduationCap,
    tag: 'EdTech & Trainers',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
    features: ['Teleprompter Included', 'Presentation Overlay Support', 'High-Speed Raw File Export']
  }
];

export const WhoWeServe: React.FC<WhoWeServeProps> = ({ onBookClick }) => {
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
      id="audience" 
      ref={sectionRef}
      className="w-full py-20 bg-obsidian border-t border-obsidian-border relative overflow-hidden font-sans"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <div 
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-brand-cyan/30 text-brand-cyan text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Who We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you are an independent creator, an established brand, or an educator, our studio is engineered to match your recording needs.
            </p>
          </div>

          {onBookClick && (
            <button 
              onClick={onBookClick}
              className="px-6 py-3 rounded-xl font-bold bg-neon-gradient text-black hover:shadow-neon-glow transition-all flex items-center gap-2 text-xs self-start md:self-auto shrink-0 transform hover:-translate-y-0.5"
            >
              Book For Your Industry
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Audience Cards Grid with Staggered Entrance Animation */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full transition-all duration-1000 delay-200 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {AUDIENCE_CATEGORIES.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                className="bg-obsidian-card/80 p-7 rounded-3xl flex flex-col justify-between space-y-6 group 
                           border border-obsidian-border hover:border-brand-cyan/80 
                           transition-all duration-300 ease-out 
                           transform hover:-translate-y-2 hover:shadow-neon-glow 
                           relative overflow-hidden cursor-pointer min-h-[380px]"
              >
                {/* Topic Background Image with Faded Gradient Overlay */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute right-0 top-0 h-full w-2/3 object-cover object-center opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-transparent w-full z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent z-10" />
                </div>

                {/* Card Content */}
                <div className="space-y-4 relative z-20">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center group-hover:bg-neon-gradient group-hover:text-black transition-all duration-300 shadow-neon-glow">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-wider px-3 py-1 rounded-full bg-obsidian/90 border border-brand-cyan/30 text-brand-cyan shadow-sm backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-[85%]">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-obsidian-border/80 space-y-2.5">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-obsidian-border/60 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors relative z-20">
                  <span>Explore Dedicated Package</span>
                  <ArrowRight className="w-4 h-4 text-brand-cyan transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};