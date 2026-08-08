import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-obsidian/90 backdrop-blur-md border-b border-obsidian-border font-sans">
      <div className="w-full px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-xl overflow-hidden border border-brand-cyan/40 bg-black/80 flex items-center justify-center p-1.5 group-hover:border-brand-cyan transition-all shadow-neon-glow">
            <img 
              src="/logo.png" 
              alt="ColourPix Studio Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-black text-white tracking-tight group-hover:text-brand-cyan transition-colors">
            COLOURPIX <span className="text-brand-cyan">STUDIO</span>
          </span>
        </a>

        {/* Desktop Nav Links (Right-Aligned) */}
        <div className="hidden lg:flex items-center gap-8">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-brand-cyan transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-brand-cyan transition-colors"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-brand-cyan transition-colors"
          >
            Services
          </a>
          <a 
            href="#sets" 
            onClick={(e) => handleNavClick(e, 'sets')}
            className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-brand-cyan transition-colors"
          >
            Studio
          </a>
          <a 
            href="#packages" 
            onClick={(e) => handleNavClick(e, 'packages')}
            className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-brand-cyan transition-colors"
          >
            Packages
          </a>

          {/* Book Now CTA */}
          <button
            onClick={onBookClick}
            className="px-6 py-2.5 rounded-xl text-xs font-black bg-neon-gradient text-black hover:shadow-neon-glow transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Book Now
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-300 hover:text-white p-2 rounded-xl glass-panel"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-card border-b border-obsidian-border px-6 py-6 space-y-4">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="block text-sm font-bold text-slate-200 hover:text-brand-cyan"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="block text-sm font-bold text-slate-200 hover:text-brand-cyan"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className="block text-sm font-bold text-slate-200 hover:text-brand-cyan"
          >
            Services
          </a>
          <a 
            href="#sets" 
            onClick={(e) => handleNavClick(e, 'sets')}
            className="block text-sm font-bold text-slate-200 hover:text-brand-cyan"
          >
            Studio
          </a>
          <a 
            href="#packages" 
            onClick={(e) => handleNavClick(e, 'packages')}
            className="block text-sm font-bold text-slate-200 hover:text-brand-cyan"
          >
            Packages
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full py-3 rounded-xl font-bold bg-neon-gradient text-black flex items-center justify-center gap-2 text-xs"
          >
            Book Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
};