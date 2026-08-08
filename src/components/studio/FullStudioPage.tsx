import React from 'react';
import { ArrowLeft, Play, ExternalLink, Calendar, Video, CheckCircle2, Mic, Sliders, HardDrive } from 'lucide-react';

interface FullStudioPageProps {
  onBackToHome: () => void;
  onBookSet: (setName: string) => void;
}

const SET_SECTIONS = [
  {
    setNumber: 'SET 01',
    name: 'Set 1: Cyberpunk Neon & Founder Lounge',
    tagline: 'Multi-angle RGB neon backdrop & executive setup for high-impact podcasts',
    capacity: '2 to 4 Persons',
    images: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800'
    ],
    videoThumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    podcastLink: 'https://youtube.com',
    podcastTitle: 'Tech Founders Unfiltered Episode #42',
    specs: ['Sony FX3 Triple 4K Rig', 'Shure SM7B Microphones', 'App-Controlled RGB Neon Backdrop']
  },
  {
    setNumber: 'SET 02',
    name: 'Set 2: Executive Panel Desk & Lounge',
    tagline: 'Warm amber wooden slat aesthetic for founder interviews & group debates',
    capacity: '2 to 4 Persons',
    images: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800'
    ],
    videoThumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    podcastLink: 'https://youtube.com',
    podcastTitle: 'Delhi Founder Debates Season 02',
    specs: ['Custom Leather Armchairs', 'Wooden Acoustic Slats', 'RodeCaster Pro II Audio Mixer']
  }
];

export const FullStudioPage: React.FC<FullStudioPageProps> = ({ onBackToHome, onBookSet }) => {
  return (
    <div className="w-full min-h-screen bg-obsidian text-slate-100 pt-28 pb-20 font-sans">
      
      {/* Fixed Left & Right Margin Wrapper Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        
        {/* Back Button */}
        <button 
          onClick={onBackToHome}
          className="mb-8 px-5 py-2.5 rounded-xl glass-panel text-xs font-bold text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all flex items-center gap-2 transform hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4 text-brand-cyan" />
          Back To Home Page
        </button>

        {/* Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest block">Complete Studio Tour</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Explore <span className="text-gradient">Sets & Production Suite</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Detailed tour of Set 1, Set 2, and our Technical Production Control Room. Browse photo galleries, BTS video samples, and live audio-video hardware specs.
          </p>
        </div>

        {/* SECTION 1: SET 1 AND SET 2 */}
        <div className="space-y-20 mb-20">
          {SET_SECTIONS.map((setItem) => (
            <div 
              key={setItem.setNumber}
              className="glass-panel p-8 sm:p-12 rounded-3xl border-white/10 space-y-8 bg-obsidian-card/60 relative overflow-hidden"
            >
              {/* Set Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-obsidian-border pb-6">
                <div className="space-y-1">
                  <span className="text-xs font-black text-brand-cyan tracking-widest uppercase block">{setItem.setNumber}</span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white">{setItem.name}</h2>
                  <p className="text-xs sm:text-sm text-slate-300">{setItem.tagline}</p>
                </div>

                <button
                  onClick={() => onBookSet(setItem.name)}
                  className="px-6 py-3 rounded-xl font-bold text-xs bg-neon-gradient text-black hover:shadow-neon-glow shrink-0 transition-all flex items-center gap-2 self-start md:self-auto"
                >
                  <Calendar className="w-4 h-4" />
                  Book {setItem.setNumber} Now
                </button>
              </div>

              {/* Photo Gallery Grid */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Set Photo Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {setItem.images.map((img, i) => (
                    <div key={i} className="h-56 rounded-2xl overflow-hidden border border-obsidian-border group">
                      <img 
                        src={img} 
                        alt={`${setItem.name} view ${i + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Video & Podcast Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                
                {/* BTS Video */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Video className="w-4 h-4 text-brand-cyan" />
                    Behind-The-Scenes Shoot Video Preview
                  </h3>
                  <a 
                    href={setItem.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative h-64 rounded-2xl overflow-hidden border border-obsidian-border block group"
                  >
                    <img 
                      src={setItem.videoThumbnail} 
                      alt="BTS Video Preview" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-neon-gradient text-black flex items-center justify-center shadow-neon-glow group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Podcast Link & Specs */}
                <div className="space-y-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <Mic className="w-4 h-4 text-brand-cyan" />
                      Recorded Episode Sample Link
                    </h3>
                    
                    <a 
                      href={setItem.podcastLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-5 rounded-2xl glass-panel border-white/10 hover:border-brand-cyan/60 flex items-center justify-between group transition-all"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider block">Recorded Live at ColourPix</span>
                        <h4 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors mt-0.5">{setItem.podcastTitle}</h4>
                      </div>
                      <ExternalLink className="w-5 h-5 text-brand-cyan group-hover:translate-x-1 transition-transform shrink-0 ml-4" />
                    </a>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-obsidian-border/60">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Set Key Specs:</span>
                    <div className="flex flex-wrap gap-2">
                      {setItem.specs.map((s, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-obsidian border border-brand-cyan/30 text-slate-300 text-xs font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* SECTION 2: PRODUCTION SUITE & CONTROL ROOM */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-brand-cyan/40 space-y-8 bg-gradient-to-r from-obsidian-card via-obsidian-card to-brand-blue/10 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-obsidian-border pb-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-brand-cyan tracking-widest uppercase flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                Technical Control Room
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Production & Live Switching Suite</h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Where the technical magic happens. Monitored by our dedicated in-house sound and video engineers during your session for live multi-cam switching and zero distortion.
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-brand-cyan/10 border border-brand-cyan/40 text-brand-cyan text-xs font-bold self-start md:self-auto shrink-0">
              Dedicated Tech Crew Included
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Control Desk & Gear Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-56 rounded-2xl overflow-hidden border border-obsidian-border group">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Production Control Desk" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-56 rounded-2xl overflow-hidden border border-obsidian-border group">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800" 
                  alt="Audio Console Workstation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-56 rounded-2xl overflow-hidden border border-obsidian-border group">
                <img 
                  src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800" 
                  alt="Live Video Switcher Monitor" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-obsidian-border/60">
            <div className="glass-panel p-4 rounded-2xl border-white/5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                <Sliders className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Live Multi-Cam Switching</h4>
              <p className="text-xs text-slate-400">Blackmagic ATEM ISO Switcher for real-time camera transitions and instant rough cut exports.</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl border-white/5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                <Mic className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">RodeCaster Pro II Mastering</h4>
              <p className="text-xs text-slate-400">APHEX audio processing for real-time noise gate, vocal compression, and broadcast EQ.</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl border-white/5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                <HardDrive className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Instant Raw File Transfer</h4>
              <p className="text-xs text-slate-400">High-speed USB-C & cloud handoff immediately after session wrap so you leave with 4K footage.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};