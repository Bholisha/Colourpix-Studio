import React from 'react';

const REEL_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800',
    title: 'Executive Podcast Desk'
  },
  {
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800',
    title: 'Cyberpunk Neon Set'
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    title: 'Founder Interview Suite'
  },
  {
    url: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800',
    title: 'Audio Master Console'
  },
  {
    url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
    title: 'Monologue Creator Pod'
  },
  {
    url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
    title: '4K Multi-Cam Rig'
  }
];

export const FilmReel: React.FC = () => {
  // Seamless continuous loop ke liye images list ko duplicate kar rahe hain
  const doubleImages = [...REEL_IMAGES, ...REEL_IMAGES];

  return (
    <div className="w-full bg-obsidian-card py-6 border-y border-obsidian-border relative overflow-hidden font-sans">
      
      {/* Left & Right Subtle Fade Voids */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

      {/* Scrolling Images Container */}
      <div className="animate-film-reel flex items-center gap-4 sm:gap-6 cursor-pointer">
        {doubleImages.map((item, idx) => (
          <div
            key={idx}
            className="w-56 sm:w-72 h-36 sm:h-44 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-cyan/80 relative shrink-0 group transition-all duration-300 shadow-lg"
          >
            {/* Studio Image */}
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
            />

            {/* Bottom Dark Gradient Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

            {/* Clean Title Only */}
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-xs font-bold text-white tracking-wide truncate drop-shadow-md block">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};