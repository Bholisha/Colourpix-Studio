import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, HelpCircle } from 'lucide-react';

export const LocationFAQ: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const FAQS = [
    {
      q: "Kya raw video aur audio files immediate hand-over ho jaate hain?",
      a: "Haan! Podcast khatam hote hi aapko Google Drive link ya SSD/Drive me raw 4K multi-cam footage deliver kar di jaati hai."
    },
    {
      q: "Studio reservation cancel/reschedule karne ka kya rule hai?",
      a: "Recording date se 24 hours pehle tak aap bina kisi extra charge ke apna slot reschedule kar sakte hain."
    }
  ];

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
      ref={sectionRef}
      className="py-20 border-t border-obsidian-border bg-obsidian relative overflow-hidden font-sans"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Location & Contact with Scroll Animation */}
          <div 
            className={`space-y-6 transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-2">
              <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest block">Visit Studio</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Prime Delhi Location</h2>
              <p className="text-slate-400 text-sm">Aasan metro connectivity aur free parking facility ke saath.</p>
            </div>

            <div className="bg-obsidian-card p-6 rounded-2xl border border-obsidian-border space-y-4 shadow-xl hover:border-brand-cyan/40 transition-colors">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">ColourPix Studio Delhi</h4>
                  <p className="text-xs text-slate-400 mt-0.5">H-107, SECTOR-63, NOIDA, Noida 20130</p>
                </div>
              </div>

              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 rounded-xl border border-brand-cyan/40 text-brand-cyan font-bold text-xs flex items-center justify-center gap-2 hover:bg-brand-cyan/10 transition-all shadow-neon-glow transform hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                Open Google Maps Directions
              </a>
            </div>
          </div>

          {/* FAQs with Staggered Entrance Animation */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-200 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-2">
              <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest block">Frequently Asked Questions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Queries & Support</h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-obsidian-card p-5 rounded-2xl border border-obsidian-border space-y-2 hover:border-brand-cyan/40 transition-all transform hover:-translate-y-1 duration-300"
                >
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};