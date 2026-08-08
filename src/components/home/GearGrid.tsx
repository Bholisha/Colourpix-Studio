import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  Camera, 
  Sliders, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  Maximize2, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface GearItem {
  id: string;
  name: string;
  category: 'Microphone' | 'Camera' | 'Mixer' | 'Lighting' | 'Accessories';
  spec: string;
  image: string;
  description: string;
  highlights: string[];
}

const GEAR_DATA: GearItem[] = [
  {
    id: 'shure-sm7b',
    name: 'Shure SM7B Broadcast Mic',
    category: 'Microphone',
    spec: 'Dynamic Cardioid Vocal Mic with Cloudlifter CL-1',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000',
    description: 'The global standard for podcasting and vocal recording. Delivers warm, smooth sound with zero electromagnetic hum.',
    highlights: ['Flat, wide-range frequency response', 'Internal air suspension shock isolation', 'Advanced electromagnetic shielding']
  },
  {
    id: 'sony-fx3',
    name: 'Sony FX3 Cinema Camera',
    category: 'Camera',
    spec: 'Full-Frame 4K 120fps Cinema Line Camera',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
    description: 'Compact cinema-line camera providing high sensitivity, breathtaking 10-bit 4:2:2 color depth, and real-time eye autofocus.',
    highlights: ['15+ stops dynamic range with S-Cinetone', '4K 120p high frame rate recording', 'Uninterrupted 4K 60p recording']
  },
  {
    id: 'rodecaster-pro-2',
    name: 'RØDECaster Pro II',
    category: 'Mixer',
    spec: 'Integrated Audio Production Studio Console',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000',
    description: 'All-in-one audio production studio with ultra-low-noise Revolution Preamps and studio-grade APHEX audio processing.',
    highlights: ['Quad-core audio engine for instant processing', 'Customizable SMART pads for sound effects', 'Dual USB-C interfaces for two computers']
  },
  {
    id: 'godox-lights',
    name: 'Godox & Aputure RGB Studio Lights',
    category: 'Lighting',
    spec: 'App-Controlled Multi-Theme RGB Background Panels',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=1000',
    description: 'Customizable lighting setups allowing complete palette adjustments to match your brand theme and mood.',
    highlights: ['36,000+ full color spectrum control', 'Softbox keylights for flattering skin tones', 'App-controlled scenes & light effects']
  },
  {
    id: 'teleprompter-system',
    name: 'Pro-Grade Teleprompter System',
    category: 'Accessories',
    spec: '17" HD Glass Prompter Screen with Remote Control',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
    description: 'Maintain natural eye contact with your audience during online courses, solo monologues, and scripted podcasts.',
    highlights: ['Ultra-clear 70/30 beam splitter glass', 'Bluetooth remote speed controller', 'Compatible with all 4K Cinema Lenses']
  }
];

export const GearGrid: React.FC = () => {
  const [selectedGear, setSelectedGear] = useState<GearItem>(GEAR_DATA[0]);
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
      id="gear" 
      ref={sectionRef}
      className="w-full py-20 bg-obsidian border-t border-obsidian-border relative overflow-hidden font-sans"
    >
      
      {/* 100% Full Edge-to-Edge Container */}
      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <div 
          className={`max-w-2xl mb-12 space-y-3 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-brand-cyan/30 text-brand-cyan text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Broadcast Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Pro Audio & Video <span className="text-gradient">Equipment Specs</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Select any equipment from the list to preview detailed specifications, camera capabilities, and audio hardware setup.
          </p>
        </div>

        {/* 2-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* LEFT SIDE: Equipment Interactive List with Staggered Entrance */}
          <div 
            className={`lg:col-span-5 space-y-3 transition-all duration-1000 delay-200 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2 px-1">
              Click Equipment To Preview
            </span>
            {GEAR_DATA.map((item) => {
              const isSelected = selectedGear.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedGear(item)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-obsidian-card border border-brand-cyan shadow-neon-glow scale-[1.01]'
                      : 'bg-obsidian-card/60 border border-white/5 hover:border-brand-cyan/40 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Category Icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-brand-cyan text-black' : 'bg-obsidian text-brand-cyan group-hover:bg-brand-cyan/20'
                    }`}>
                      {item.category === 'Microphone' && <Mic className="w-5 h-5" />}
                      {item.category === 'Camera' && <Camera className="w-5 h-5" />}
                      {item.category === 'Mixer' && <Sliders className="w-5 h-5" />}
                      {item.category === 'Lighting' && <Zap className="w-5 h-5" />}
                      {item.category === 'Accessories' && <ShieldCheck className="w-5 h-5" />}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{item.spec}</p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-brand-cyan translate-x-1' : 'text-slate-600 group-hover:text-slate-300'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Dynamic Popup Style Preview Card with Entrance Animation */}
          <div 
            className={`lg:col-span-7 sticky top-28 transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <div className="bg-obsidian-card p-6 sm:p-8 rounded-3xl border border-brand-cyan/40 relative overflow-hidden shadow-2xl transition-all duration-500">
              
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-cyan/20 border border-brand-cyan text-brand-cyan">
                  {selectedGear.category} Spec
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5 text-brand-cyan" /> HD Studio Rig
                </span>
              </div>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-6 border border-white/10 group">
                <img
                  src={selectedGear.image}
                  alt={selectedGear.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-obsidian/80 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                  <p className="text-xs font-bold text-white">{selectedGear.name}</p>
                  <p className="text-[11px] text-brand-cyan truncate">{selectedGear.spec}</p>
                </div>
              </div>

              {/* Specs & Description Details */}
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {selectedGear.description}
                </p>

                <div className="pt-2 border-t border-obsidian-border space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Features & Technical Capabilities:
                  </span>
                  {selectedGear.highlights.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};