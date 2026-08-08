import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Award, 
  ShieldCheck, 
  VolumeX, 
  Video, 
  Users, 
  CheckCircle2, 
  Zap, 
  HeartHandshake, 
  Globe, 
  ChevronRight 
} from 'lucide-react';

interface FullAboutPageProps {
  onBackToHome: () => void;
  onBookClick?: () => void;
}

const ECOSYSTEM_FEATURES = [
  {
    id: '4k-rig',
    icon: Video,
    title: '4K Cinema Multi-Cam Rig',
    description: 'We do not shoot on webcams or basic DSLRs. Our studio is wired with Sony Cinema Line (FX3 / A7IV) full-frame cameras running 10-bit color science. Every angle is color-matched and live-switched for maximum visual impact.',
    highlights: ['Sony Cinema Line FX3/A7IV', '10-Bit 4:2:2 Color Science', 'Live Multi-Angle ATEM Switching']
  },
  {
    id: 'acoustic',
    icon: VolumeX,
    title: 'Acoustic Science & Zero Echo',
    description: 'Engineered with double-walled sound isolation, high-density acoustic absorption panels, and bass traps. You get pristine, broadcast-ready dry audio with zero room reverb or external Delhi street noise.',
    highlights: ['Double-Walled Soundproof Isolation', 'High-Density Acoustic Absorption', 'Zero Traffic or Street Noise']
  },
  {
    id: 'tech-team',
    icon: Users,
    title: 'Dedicated In-House Tech Team',
    description: 'You focus purely on the interview or monologue. Our experienced audio engineers and video directors monitor levels, frame compositions, teleprompter speed, and lighting live during your session.',
    highlights: ['In-House Audio & Video Engineers', 'Real-Time Teleprompter Control', 'Live Waveform & Level Monitoring']
  },
  {
    id: 'express-delivery',
    icon: Zap,
    title: 'Express Same-Day File Delivery',
    description: 'We understand the speed of modern media. Immediately after wrapping your session, your high-bitrate 4K raw video files and multi-track audio exports are transferred directly to your drive.',
    highlights: ['Immediate Raw Footage Handoff', 'Multi-Track Audio Stems Included', 'Cloud Drive or SSD Transfer']
  },
  {
    id: 'vip-lounge',
    icon: HeartHandshake,
    title: 'VIP Creator Lounge & Amenities',
    description: 'Relax before your show in our private green rooms. Enjoy high-speed Wi-Fi, premium coffee, dedicated makeup desks, and valet parking for your guest high-profile interviews.',
    highlights: ['Private VIP Green Room', 'Makeup Desk & Changing Area', 'Valet Parking & Refreshments']
  },
  {
    id: 'channel-scaling',
    icon: Globe,
    title: 'End-to-End Channel Scaling',
    description: 'Beyond recording, we cut high-converting Instagram Reels/YouTube Shorts, design high CTR thumbnails, write SEO show notes, and distribute your show across Spotify and Apple Podcasts.',
    highlights: ['Short-Form Reels/Shorts Cutting', 'Custom High-CTR Thumbnails', 'Spotify & YouTube Distribution']
  }
];

const JOURNEY_MILESTONES = [
  {
    year: '2023',
    title: 'The Blueprint & Inception',
    description: 'Identified the massive gap in Delhi NCR for accessible, broadcast-grade podcast spaces. Constructed our first acoustic soundproof pod in Central Delhi.'
  },
  {
    year: '2024',
    title: '500+ Episodes & Set Expansions',
    description: 'Crossed over 500 recorded episodes. Expanded to 4 distinct set themes including Cyberpunk Lounge, Executive Panel Table, and Monologue Pods.'
  },
  {
    year: '2025',
    title: '4K Cinema & Live Switching Upgrade',
    description: 'Upgraded all studio rigs to 4K Sony Cinema Line cameras, Shure SM7B mics with RodeCaster Pro II consoles, enabling instant multi-cam live switching.'
  },
  {
    year: '2026',
    title: 'Full Agency Post-Production Suite',
    description: 'Launched our dedicated post-production division offering viral short-form reel editing, thumbnail design, and Spotify/YouTube channel management.'
  }
];

const CORE_VALUES = [
  {
    title: 'Uncompromised Audio-Visual Quality',
    desc: 'We never cut corners on hardware or acoustic science. Every episode produced in our space must meet global broadcast standards.'
  },
  {
    title: 'Strict Confidentiality & NDA',
    desc: 'We host high-profile founders, celebrities, and corporate leaders. Your unreleased content, discussions, and raw footage remain 100% private and secure.'
  },
  {
    title: 'Speed to Market',
    desc: 'In the digital ecosystem, timing is everything. We ensure rapid data handovers so you can publish while news and trends are hot.'
  },
  {
    title: 'Creator-Centric Ecosystem',
    desc: 'We treat your show like our own. Our engineers actively assist with lighting adjustments, teleprompter pacing, and mic positioning for optimal results.'
  }
];

const TEAM_MEMBERS = [
  {
    name: 'Vikramaditya Sharma',
    role: 'Founder & Managing Director',
    bio: 'Former media producer with 10+ years in broadcast television. Built ColourPix to revolutionize independent podcasting in North India.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Rohan Verma',
    role: 'Head of Audio Engineering',
    bio: 'Certified acoustic engineer specializing in vocal EQ, room isolation, and loudness compliance for Spotify and Apple Podcasts.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Ananya Malhotra',
    role: 'Creative Director & Set Stylist',
    bio: 'Oversees visual aesthetics, dynamic RGB lighting themes, camera angles, and set customization for corporate & creator clients.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
  }
];

export const FullAboutPage: React.FC<FullAboutPageProps> = ({ onBackToHome, onBookClick }) => {
  const [selectedFeature, setSelectedFeature] = useState(ECOSYSTEM_FEATURES[0]);
  const [isAnimateActive, setIsAnimateActive] = useState(false);

  useEffect(() => {
    // Top scroll force reset on mount
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Delay animation start by 150ms so the user sees the animation happen live on screen
    const timer = setTimeout(() => {
      setIsAnimateActive(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-obsidian text-slate-100 pt-28 pb-20 px-6 sm:px-12 lg:px-16 font-sans overflow-hidden">
      
      {/* Back Button */}
      <button 
        onClick={onBackToHome}
        className="mb-10 px-5 py-2.5 rounded-xl glass-panel text-xs font-bold text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all flex items-center gap-2 transform hover:-translate-x-1"
      >
        <ArrowLeft className="w-4 h-4 text-brand-cyan" />
        Back To Home Page
      </button>

      {/* SECTION 1: HERO HEADER */}
      <div 
        className={`max-w-5xl space-y-6 mb-20 transition-all duration-1000 ease-out transform ${
          isAnimateActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-brand-cyan/30 text-brand-cyan text-xs font-bold tracking-wide shadow-neon-glow">
          <Award className="w-4 h-4" />
          <span>About ColourPix Studio</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
          Where India’s Leading Voices <br />
          <span className="text-gradient">Record, Edit & Scale Content</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-4xl font-medium">
          ColourPix Studio was founded in Delhi NCR with a singular, high-impact mission: to eliminate technical friction for creators, business leaders, and brands, providing a world-class broadcast facility that guarantees viral-ready aesthetic and sound.
        </p>
      </div>

      {/* SECTION 2: BRAND NARRATIVE */}
      <div 
        className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 transition-all duration-1000 delay-150 ease-out transform ${
          isAnimateActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Built by Media Veterans, <br />
            <span className="text-brand-cyan">Engineered for Modern Media</span>
          </h2>
          
          <p>
            In today’s crowded digital landscape, generic video quality and echoey room audio will cost you viewer retention. Audio and video quality are no longer optional — they are the foundation of audience trust.
          </p>
          
          <p>
            At ColourPix Studio, we have eliminated the need for creators to invest lakhs in heavy cinema gear, acoustic foam, and technical engineers. Our plug-and-play studios in Delhi offer high-end Sony 4K Cinema cameras, Shure SM7B broadcast microphones, and customizable RGB neon environments — all managed by an in-house crew during your session.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel p-4 rounded-xl border-white/5 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-cyan shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase">100% Soundproof</h4>
                <p className="text-[11px] text-slate-400">Zero street noise or echoes</p>
              </div>
            </div>
            <div className="glass-panel p-4 rounded-xl border-white/5 flex items-center gap-3">
              <Zap className="w-6 h-6 text-brand-cyan shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase">Instant Export</h4>
                <p className="text-[11px] text-slate-400">Raw data in hand on wrap</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-obsidian-border shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200" 
              alt="ColourPix Studio Control Room" 
              className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl border-white/10 backdrop-blur-md">
              <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-1"> Delhi NCR Facility</p>
              <p className="text-sm font-semibold text-white">4K Multi-Cam Control Desk with Live Audio Monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: THE ECOSYSTEM */}
      <div 
        className={`mb-24 space-y-10 transition-all duration-1000 delay-300 ease-out transform ${
          isAnimateActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-3xl space-y-3">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest block">Complete Infrastructure</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Top Creators <span className="text-gradient">Choose Our Ecosystem</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Click any feature from the list on the left to preview technical specifications and details on the right.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2 px-1">
              Select Feature To Preview
            </span>
            {ECOSYSTEM_FEATURES.map((item) => {
              const isSelected = selectedFeature.id === item.id;
              const IconComp = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedFeature(item)}
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
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{item.description}</p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-brand-cyan translate-x-1' : 'text-slate-600 group-hover:text-slate-300'
                  }`} />
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-7 sticky top-28">
            <div className="bg-obsidian-card p-6 sm:p-8 rounded-3xl border border-brand-cyan/40 relative overflow-hidden shadow-2xl transition-all duration-500 min-h-[380px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center shadow-neon-glow">
                    {React.createElement(selectedFeature.icon, { className: 'w-6 h-6' })}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan text-brand-cyan">
                    Pro Infrastructure Spec
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {selectedFeature.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {selectedFeature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-obsidian-border space-y-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Key Deliverable Standards:
                  </span>
                  {selectedFeature.highlights.map((high, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-obsidian-border/80 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Delhi NCR Production Suite</span>
                {onBookClick && (
                  <button
                    onClick={onBookClick}
                    className="px-5 py-2.5 rounded-xl font-bold bg-neon-gradient text-black hover:shadow-neon-glow text-xs transition-all transform hover:-translate-y-0.5"
                  >
                    Experience Studio Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: JOURNEY TIMELINE */}
      <div 
        className={`mb-24 space-y-12 transition-all duration-1000 delay-400 ease-out transform ${
          isAnimateActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-3xl space-y-3">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest block">Growth & History</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Journey <span className="text-gradient">& Milestones</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From a single acoustic booth to Delhi NCR's most sought-after podcast facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {JOURNEY_MILESTONES.map((m, idx) => (
            <div 
              key={idx} 
              className="bg-obsidian-card p-6 rounded-3xl space-y-3 relative overflow-hidden 
                         border border-obsidian-border hover:border-brand-cyan/80 
                         hover:bg-brand-cyan/[0.04] 
                         transition-all duration-300 ease-out 
                         transform hover:-translate-y-2 hover:shadow-neon-glow cursor-pointer"
            >
              <span className="text-3xl font-black text-brand-cyan block">{m.year}</span>
              <h4 className="text-base font-bold text-white">{m.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: CORE VALUES */}
      <div 
        className={`mb-24 bg-obsidian-card p-8 sm:p-12 rounded-3xl border border-obsidian-border hover:border-brand-cyan/40 transition-all duration-1000 delay-500 ease-out transform space-y-10 ${
          isAnimateActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-2xl space-y-2">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest block">Core Philosophy</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">What We Stand For</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-obsidian border border-obsidian-border hover:border-brand-cyan/60 hover:bg-brand-cyan/[0.03] transition-all transform hover:-translate-y-1 space-y-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                <h3 className="text-base font-bold text-white">{val.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-7">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6: TEAM */}
      <div 
        className={`mb-24 space-y-12 transition-all duration-1000 delay-500 ease-out transform ${
          isAnimateActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-3xl space-y-3">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest block">The Minds Behind ColourPix</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Meet Our <span className="text-gradient">Production Experts</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our team of audio engineers, camera operators, and video editors ensure your show runs seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-obsidian-card p-6 rounded-3xl border border-obsidian-border hover:border-brand-cyan/60 hover:bg-brand-cyan/[0.03] transition-all transform hover:-translate-y-1 space-y-4 group">
              <div className="h-64 rounded-2xl overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-white">{member.name}</h3>
                <p className="text-xs font-semibold text-brand-cyan">{member.role}</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 7: FINAL CTA */}
      <div 
        className={`glass-panel p-8 sm:p-12 rounded-3xl border border-brand-cyan/40 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-obsidian-card via-obsidian-card to-brand-blue/10 transition-all duration-1000 delay-500 ease-out transform ${
          isAnimateActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider block">Ready To Record?</span>
          <h3 className="text-2xl sm:text-4xl font-black text-white">Book Your Studio Slot Today</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Experience Delhi NCR's premier broadcast facility. Schedule your session or tour our space today.
          </p>
        </div>
        
        {onBookClick && (
          <button 
            onClick={onBookClick}
            className="px-8 py-4 rounded-xl font-bold text-xs sm:text-sm bg-neon-gradient text-black hover:shadow-neon-glow shrink-0 transition-all transform hover:-translate-y-0.5"
          >
            Reserve Studio Slot Now
          </button>
        )}
      </div>

    </div>
  );
};