import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  Video, 
  Scissors, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Briefcase,
  Film,
  ChevronRight
} from 'lucide-react';

interface ServicesProps {
  onBookClick?: () => void;
}

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
  image: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'studio-rental',
    icon: Mic,
    title: 'Podcast Studio Rental',
    description: 'Acoustically engineered soundproof studio space equipped with Shure SM7B mics, 4K multi-cam Sony FX3 setups, and app-controlled RGB lighting.',
    features: ['100% Soundproof Acoustic Room', 'Sony FX3 Cinema 4K Cameras', 'Shure SM7B Broadcast Mics'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'podcast-production',
    icon: Video,
    title: 'Podcast Production',
    description: 'End-to-end recording management with in-house audio-video engineers, live ATEM multi-cam switching, and real-time audio mastering.',
    features: ['Dedicated Technical Crew Included', 'Live ATEM Multi-Cam Switching', 'Instant High-Speed Raw Handoff'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'video-editing',
    icon: Film,
    title: 'Video Editing',
    description: 'Professional post-production for long-form episodes with color grading, multi-cam timeline assembly, lower-thirds, and audio noise cleaning.',
    features: ['Full Episode Multi-Cam Cut', 'Cinematic Color Grading & B-Rolls', 'Broadcast-Grade Audio Mastering'],
    popular: false,
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'reels-shorts',
    icon: Scissors,
    title: 'Reels & Shorts',
    description: 'Transform long podcasts into viral, high-converting vertical clips for Instagram Reels, YouTube Shorts, and TikTok with animated subtitles.',
    features: ['3 to 10 Reels Per Episode', 'Engaging Subtitles & Cutouts', 'Optimized 9:16 Vertical Aspect'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'publishing-distribution',
    icon: Globe,
    title: 'Publishing & Distribution',
    description: 'Complete channel management, YouTube SEO optimization, show notes writing, custom CTR thumbnails, and publishing across Spotify & Apple Podcasts.',
    features: ['Spotify & Apple Podcast Setup', 'YouTube SEO & Custom Thumbnails', 'Show Notes & Metadata Writing'],
    popular: false,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'brand-content',
    icon: Briefcase,
    title: 'Brand Content Production',
    description: 'Custom corporate podcast production, founder thought-leadership interviews, EdTech course shoots, and branded promotional video campaigns.',
    features: ['Custom Set & Neon Branding', 'Teleprompter & Script Support', 'White-Label Production Support'],
    popular: false,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000'
  }
];

export const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_LIST[0]);
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
      id="services" 
      ref={sectionRef}
      className="w-full py-20 bg-obsidian border-t border-obsidian-border relative overflow-hidden font-sans"
    >
      {/* Main Container */}
      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <div 
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-brand-cyan/30 text-brand-cyan text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>End-to-End Production Suite</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Premium <span className="text-gradient">Services</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Click any service from the list on the right to preview complete details, specs, and included features on the left.
            </p>
          </div>

          {onBookClick && (
            <button 
              onClick={onBookClick}
              className="px-6 py-3 rounded-xl font-bold bg-neon-gradient text-black hover:shadow-neon-glow transition-all flex items-center gap-2 text-xs self-start md:self-auto shrink-0 transform hover:-translate-y-0.5"
            >
              Book A Service
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* 2-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* LEFT SIDE: Dynamic Info Preview Card with Entrance Animation */}
          <div 
            className={`lg:col-span-7 lg:sticky lg:top-28 transition-all duration-1000 delay-200 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <div className="bg-obsidian-card p-6 sm:p-8 rounded-3xl border border-brand-cyan/40 relative overflow-hidden shadow-2xl transition-all duration-500 min-h-[440px] flex flex-col justify-between">
              
              {/* Background Topic Image with Heavy Left-to-Right Black Gradient Overlay */}
              <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="absolute right-0 top-0 h-full w-2/3 object-cover object-center opacity-30 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian-card via-obsidian-card/95 to-transparent w-full z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-card via-obsidian-card/70 to-transparent z-10" />
              </div>

              {/* Card Content Header */}
              <div className="relative z-20 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center shadow-neon-glow">
                    {React.createElement(selectedService.icon, { className: 'w-6 h-6' })}
                  </div>
                  {selectedService.popular && (
                    <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-brand-cyan text-black shadow-neon-glow">
                      Most Popular
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-xl font-medium">
                    {selectedService.description}
                  </p>
                </div>

                {/* Included Features Checklist */}
                <div className="pt-4 border-t border-obsidian-border space-y-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    What's Included in This Service:
                  </span>
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="pt-6 mt-6 border-t border-obsidian-border/80 flex items-center justify-between relative z-20">
                <span className="text-xs font-bold text-slate-400">Customized Service Solution</span>
                <button
                  onClick={onBookClick}
                  className="px-5 py-2.5 rounded-xl font-bold bg-neon-gradient text-black hover:shadow-neon-glow text-xs flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  Get Instant Quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Services Interactive List with Staggered Entrance */}
          <div 
            className={`lg:col-span-5 space-y-3 transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2 px-1">
              Click Any Service To Preview Info
            </span>

            {SERVICES_LIST.map((service) => {
              const isSelected = selectedService.id === service.id;
              const IconComp = service.icon;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-obsidian-card border border-brand-cyan shadow-neon-glow scale-[1.01]'
                      : 'bg-obsidian-card/60 border border-white/5 hover:border-brand-cyan/40 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-brand-cyan text-black' : 'bg-obsidian text-brand-cyan group-hover:bg-brand-cyan/20'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{service.description}</p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-brand-cyan translate-x-1' : 'text-slate-600 group-hover:text-slate-300'
                  }`} />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};