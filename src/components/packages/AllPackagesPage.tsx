import React, { useState } from 'react';
import { Check, ArrowLeft, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { PACKAGES_DATA } from '../../data/packagesData';
import type { PackageItem } from '../../data/packagesData';

interface AllPackagesPageProps {
  onBackToHome: () => void;
  onBookClick: (pkg: any) => void;
}

export const AllPackagesPage: React.FC<AllPackagesPageProps> = ({ onBackToHome, onBookClick }) => {
  const [activeTab, setActiveTab] = useState<'studio-shoots' | 'shoot-packages' | 'post-production' | 'full-day'>('studio-shoots');

  const getTabPackages = (): PackageItem[] => {
    switch (activeTab) {
      case 'studio-shoots':
        return [
          {
            id: 'day-shoot',
            name: 'DAY SHOOT',
            tagline: '8 AM - 6 PM · All Year',
            price: 5999,
            unit: '2 hrs · 1hr shoot + buffers',
            popular: false,
            category: 'shoot',
            description: 'Standard daytime recording setup with 3-camera multi-angle capture.',
            features: [
              '3-camera Sony FX Cinema Rig',
              'Shure SM7B Vocal Mics',
              'Live ATEM ISO Video Switching',
              'Godox 3-point Lighting Setup',
              'Extra ₹2K/30min · ₹3K/hr'
            ]
          },
          {
            id: 'night-shoot',
            name: 'NIGHT SHOOT',
            tagline: '8 PM - 6 AM · Budget Friendly',
            price: 3599,
            unit: '2 hrs · Same premium setup',
            popular: true,
            category: 'shoot',
            description: 'Night discount slot with identical hardware & sound isolation.',
            features: [
              'Same 3-camera Cinema Setup',
              'All audio & lighting included',
              'Night team specially assigned',
              'Perfect for beginners & founders',
              'Day price before 8 PM: ₹5,999'
            ]
          },
          {
            id: 'outdoor-shoot',
            name: 'OUTDOOR SHOOT',
            tagline: 'Delhi NCR · 24/7 · Any Location',
            price: 17999,
            unit: '2.5 hrs · 2 professionals',
            popular: false,
            category: 'shoot',
            description: 'On-location podcast recording with wireless kit and mobile crew.',
            features: [
              '2-3 camera multi-angle outdoor',
              'DJI Wireless + Rode Mics',
              'Director\'s monitor included',
              'Godox lighting for outdoors',
              'Cab beyond 15km from studio base'
            ]
          }
        ];

      case 'shoot-packages':
        return [
          {
            id: 'monthly-shoot-pkg',
            name: 'MONTHLY',
            tagline: '4 Shoots · 45 day validity',
            price: 22000,
            unit: 'package total',
            popular: false,
            category: 'shoot',
            description: '4 regular studio sessions for monthly podcast series.',
            features: [
              '+30 min bonus per shoot',
              '45 days to use all shoots',
              'Dedicated relationship manager',
              'Save ₹8,000'
            ]
          },
          {
            id: 'quarterly-shoot-pkg',
            name: 'QUARTERLY',
            tagline: '12 Shoots · 100 day validity',
            price: 60000,
            unit: 'best value pack',
            popular: true,
            category: 'shoot',
            description: '12 complete studio sessions for quarterly scaling.',
            features: [
              '+45 min bonus per shoot',
              '2 free last-minute cancellations',
              'Dedicated relationship manager',
              'Save ₹30,000'
            ]
          },
          {
            id: 'yearly-shoot-pkg',
            name: 'YEARLY',
            tagline: '24 Shoots · 365 days',
            price: 100000,
            unit: 'annual retainer',
            popular: false,
            category: 'shoot',
            description: 'Complete year-long studio partnership for active creators.',
            features: [
              '+45 min bonus per shoot',
              '5 free last-minute cancellations',
              '1 complimentary showreel',
              'Save ₹80,000'
            ]
          }
        ];

      case 'post-production':
        return [
          {
            id: 'post-starter',
            name: 'STARTER',
            tagline: 'Clean · Sharp · Entry Level',
            price: 10000,
            unit: 'per episode',
            popular: false,
            category: 'post-production',
            description: 'Essential multi-cam video cutting & basic sound polish.',
            features: [
              'Teaser (1 min)',
              'Full podcast (1.5H)',
              '2 Reels + 1 Thumbnail',
              '3-4 Carousel Slides',
              'Min 1 week delivery'
            ]
          },
          {
            id: 'post-builder',
            name: 'BUILDER',
            tagline: 'Motion · Mixing · Regular',
            price: 15000,
            unit: 'per episode',
            popular: true,
            category: 'post-production',
            description: 'Dynamic editing with animated subtitles and sound design.',
            features: [
              'Teaser (1 min)',
              'Full podcast (1.5H)',
              '2 Reels + 2 Thumbnails',
              'Sound mixing included',
              '3-4 Carousel Slides'
            ]
          },
          {
            id: 'post-prime',
            name: 'PRIME',
            tagline: 'Cinematic · GFX · Brands',
            price: 20000,
            unit: 'per episode',
            popular: false,
            category: 'post-production',
            description: 'High-end cinema editing with custom motion graphics.',
            features: [
              'Teaser (1 min)',
              'Full podcast + GFX cards',
              '2 Reels + 4 Thumbnails',
              'Cinematic grade color',
              '3-4 Carousel Slides'
            ]
          },
          {
            id: 'post-elevate',
            name: 'ELEVATE',
            tagline: 'Pro · Full Motion GFX',
            price: 35000,
            unit: 'agency level',
            popular: false,
            category: 'post-production',
            description: 'Top-tier production quality with full motion animations.',
            features: [
              'Extended Teaser (2 min)',
              'Full podcast + Motion GFX',
              '2 Reels + 4 Thumbnails',
              'Highest production quality',
              '3-4 Carousel Slides'
            ]
          }
        ];

      case 'full-day':
        return [
          {
            id: 'full-weekday',
            name: 'WEEKDAY',
            tagline: 'Monday - Friday · 8 Hours',
            price: 18000,
            unit: 'per day (2-day: ₹35,000)',
            popular: false,
            category: 'full-day',
            description: '8-hour unrestricted studio access during weekdays.',
            features: [
              '8-hour shooting window',
              'Full professional studio services',
              'Premium production package',
              '40% off regular per-hour rate'
            ]
          },
          {
            id: 'full-weekend',
            name: 'WEEKEND',
            tagline: 'Saturday - Sunday · 8 Hours',
            price: 22500,
            unit: 'per day (2-day: ₹40,000)',
            popular: true,
            category: 'full-day',
            description: '8-hour weekend studio buyout for intensive shoot days.',
            features: [
              '8-hour shooting window',
              'Full professional studio services',
              'Premium production package',
              '25% off regular rate'
            ]
          }
        ];

      default:
        return PACKAGES_DATA;
    }
  };

  const currentPackages = getTabPackages();

  return (
    <div className="w-full min-h-screen bg-obsidian text-slate-100 pt-28 pb-20 font-sans">
      
      {/* Container with Fixed Left & Right Margins (max-w-7xl mx-auto px-6 sm:px-10 lg:px-12) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        
        {/* Back Button */}
        <button 
          onClick={onBackToHome}
          className="mb-8 px-5 py-2.5 rounded-xl glass-panel text-xs font-bold text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all flex items-center gap-2 transform hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4 text-brand-cyan" />
          Back To Home Page
        </button>

        {/* Pill Tab Navigation Header */}
        <div className="flex flex-col items-center justify-center space-y-6 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-brand-cyan/30 text-brand-cyan text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing Matrix</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Select Your Production <span className="text-gradient">Package</span>
          </h1>

          {/* PILL NAVIGATION TABS */}
          <div className="p-1.5 rounded-full glass-panel border-white/10 bg-obsidian-card/80 inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 max-w-full">
            <button
              onClick={() => setActiveTab('studio-shoots')}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 ${
                activeTab === 'studio-shoots'
                  ? 'bg-neon-gradient text-black shadow-neon-glow scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Studio Shoots
            </button>

            <button
              onClick={() => setActiveTab('shoot-packages')}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 ${
                activeTab === 'shoot-packages'
                  ? 'bg-neon-gradient text-black shadow-neon-glow scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Shoot Packages
            </button>

            <button
              onClick={() => setActiveTab('post-production')}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 ${
                activeTab === 'post-production'
                  ? 'bg-neon-gradient text-black shadow-neon-glow scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Post-Production
            </button>

            <button
              onClick={() => setActiveTab('full-day')}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 ${
                activeTab === 'full-day'
                  ? 'bg-neon-gradient text-black shadow-neon-glow scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Full Day
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 ${
          currentPackages.length === 4 ? 'lg:grid-cols-4' : currentPackages.length === 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-3'
        } gap-6 sm:gap-8 w-full mb-16`}>
          {currentPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`bg-obsidian-card/80 p-7 sm:p-8 rounded-3xl flex flex-col justify-between space-y-8 relative 
                         border ${
                           pkg.popular 
                             ? 'border-brand-cyan shadow-neon-glow scale-[1.02]' 
                             : 'border-obsidian-border hover:border-brand-cyan/80'
                         } 
                         hover:bg-brand-cyan/[0.04] 
                         transition-all duration-300 ease-out 
                         transform hover:-translate-y-2 cursor-pointer group`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-full bg-neon-gradient text-black shadow-neon-glow">
                  {activeTab === 'studio-shoots' ? 'BEST VALUE' : activeTab === 'full-day' ? 'WEEKEND RATE' : 'BEST PICK'}
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-brand-cyan transition-colors tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">{pkg.tagline}</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">₹{pkg.price.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-semibold mt-1">{pkg.unit}</p>
                </div>

                <div className="pt-4 border-t border-obsidian-border space-y-3">
                  {pkg.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                      <Check className="w-4 h-4 text-brand-cyan shrink-0 stroke-[3]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onBookClick(pkg)}
                className={`w-full py-3.5 rounded-2xl font-black text-xs transition-all ${
                  pkg.popular 
                    ? 'bg-neon-gradient text-black shadow-neon-glow-strong hover:scale-[1.02]' 
                    : 'glass-panel text-white border-white/10 hover:border-brand-cyan hover:bg-brand-cyan/10'
                }`}
              >
                Book {pkg.name}
              </button>
            </div>
          ))}
        </div>

        {/* Overtime Notice Strip */}
        {activeTab === 'studio-shoots' && (
          <div className="glass-panel p-4 rounded-2xl border-white/10 text-center text-xs text-slate-400 max-w-5xl mx-auto mb-10">
            <p className="flex items-center justify-center gap-2 font-medium">
              <span className="text-brand-cyan font-bold">ℹ Overtime:</span> ₹2,000 per 30 min · ₹3,000 per hour · 50% advance for standard shoots · No cancellation fees for 24h prior notices.
            </p>
          </div>
        )}

        {/* Enterprise Custom Retainer Banner */}
        <div className="glass-panel p-8 rounded-3xl border-brand-cyan/40 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-obsidian-card to-brand-blue/10">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-cyan" />
              Need a Custom Agency Retainer or Enterprise Setup?
            </h3>
            <p className="text-xs text-slate-300">
              We offer custom monthly studio subscriptions for corporate shows, edtech channels, and brand networks.
            </p>
          </div>
          <button 
            onClick={() => window.open('https://wa.me/919999999999?text=Hi%20ColourPix%20Studio!%20I%20want%20a%20custom%20agency%20package', '_blank')}
            className="px-6 py-3.5 rounded-xl bg-brand-cyan text-black font-bold text-xs shrink-0 hover:shadow-neon-glow flex items-center gap-2 transition-all"
          >
            Talk To Studio Manager
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};