import React, { useEffect, useRef, useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PACKAGES_DATA } from '../../data/packagesData';

interface HomePackagesProps {
  onViewMore: () => void;
  onBookClick: (pkg: any) => void;
}

export const HomePackages: React.FC<HomePackagesProps> = ({ onViewMore, onBookClick }) => {
  const featuredPackages = PACKAGES_DATA.slice(0, 3);
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
      id="packages" 
      ref={sectionRef}
      className="w-full py-20 bg-obsidian border-t border-obsidian-border relative overflow-hidden font-sans"
    >
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 space-y-3 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-brand-cyan/30 text-brand-cyan text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Studio <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose a package designed for your podcast needs. Flexible hourly and monthly subscription plans.
          </p>
        </div>

        {/* 3 Packages Cards Grid with Staggered Scroll Entrance Animation */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-12 transition-all duration-1000 delay-200 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {featuredPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-obsidian-card/60 backdrop-blur-md p-8 rounded-3xl flex flex-col justify-between space-y-8 relative 
                         border border-obsidian-border hover:border-brand-cyan/80 
                         hover:bg-brand-cyan/[0.04] 
                         transition-all duration-300 ease-out 
                         transform hover:-translate-y-2 hover:shadow-neon-glow cursor-pointer group"
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 right-8 text-[10px] font-black tracking-widest uppercase px-3.5 py-1 rounded-full bg-neon-gradient text-black shadow-neon-glow">
                  Most Popular
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-brand-cyan transition-colors">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{pkg.tagline}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">₹{pkg.price}</span>
                  <span className="text-xs text-slate-400 font-semibold">/ {pkg.unit}</span>
                </div>

                <div className="pt-4 border-t border-obsidian-border space-y-3">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-brand-cyan/20 border border-brand-cyan flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-brand-cyan stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onBookClick(pkg)}
                className="w-full py-3.5 rounded-xl font-bold text-xs transition-all bg-neon-gradient text-black hover:shadow-neon-glow-strong"
              >
                Book This Package
              </button>
            </div>
          ))}
        </div>

        {/* View All Packages CTA Button with Scroll Animation */}
        <div 
          className={`text-center transition-all duration-1000 delay-300 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={onViewMore}
            className="px-8 py-4 rounded-2xl font-bold glass-panel border-brand-cyan/50 text-white hover:bg-brand-cyan/10 hover:shadow-neon-glow transition-all inline-flex items-center gap-3 text-sm transform hover:-translate-y-0.5"
          >
            <span>View All Packages & Custom Plans</span>
            <ArrowRight className="w-4 h-4 text-brand-cyan" />
          </button>
        </div>

      </div>
    </section>
  );
};