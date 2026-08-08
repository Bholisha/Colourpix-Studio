import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-obsidian-card border-t border-obsidian-border text-slate-400 py-12 text-xs">
      <div className="w-full px-6 sm:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info with Rounded Butterfly Logo Container */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-obsidian border border-brand-cyan/30 p-1.5 flex items-center justify-center shrink-0 shadow-neon-glow overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="ColourPix Studio Butterfly Logo" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div>
                <span className="text-lg font-black tracking-wider text-white block leading-tight">COLOURPIX</span>
                <span className="block text-[9px] text-brand-cyan tracking-[0.25em] font-bold">STUDIO</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Delhi NCR's premier broadcast podcast & content studio. Equipped with 4K Cinema cameras, Shure SM7B mics, and acoustic treatment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-brand-cyan transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-cyan transition-colors">About Studio</a></li>
              <li><a href="#sets" className="hover:text-brand-cyan transition-colors">Studio Sets</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-brand-cyan transition-colors">Packages</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-2.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>H-107, SECTOR-63, NOIDA, Noida 20130</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>+91 9667080050</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>colourpixstudio@gamil.com</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Follow Us</h4>
            <p className="text-slate-400">Check out our latest recorded podcasts and creator clips.</p>
            <div className="flex items-center gap-3 pt-1">
              <a href="#" className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-obsidian-border flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 ColourPix Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};