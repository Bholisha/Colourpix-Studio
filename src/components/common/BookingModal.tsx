import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sun, 
  Moon, 
  MapPin, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  User, 
  Phone, 
  Mail 
} from 'lucide-react';
import { STUDIO_ROOMS } from '../../data/studioRooms';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: any;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedPackage }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [shootType, setShootType] = useState<string>('day-shoot');

  const today = new Date(2026, 7, 7); 
  
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2026, 7, 1));
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(today.getDate());
  const [selectedSlot, setSelectedSlot] = useState<string>('10:00 AM');
  
  const [selectedSet, setSelectedSet] = useState<string>(STUDIO_ROOMS[0]?.id || 'set-1');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleModalClose = () => {
    setCurrentStep(1);
    onClose();
  };

  const SHOOT_TYPES = [
    {
      id: 'day-shoot',
      title: 'DAY SHOOT',
      price: 5999,
      timing: '8 AM – 6 PM · 2 hrs total (1hr shoot + buffers)',
      icon: Sun,
      color: 'text-amber-400'
    },
    {
      id: 'night-shoot',
      title: 'NIGHT SHOOT',
      price: 3599,
      timing: '8 PM – 6 AM · Budget-friendly · Same quality',
      icon: Moon,
      color: 'text-brand-cyan'
    },
    {
      id: 'outdoor',
      title: 'OUTDOOR',
      price: 17999,
      timing: 'Delhi NCR · 24/7 · 2.5 hrs · 2 professionals',
      icon: MapPin,
      color: 'text-emerald-400'
    },
    {
      id: 'full-day',
      title: 'FULL DAY',
      price: 18000,
      timing: '8-hour window · Weekdays · Bulk production',
      icon: Clock,
      color: 'text-purple-400'
    }
  ];

  const TWENTY_FOUR_HOUR_SLOTS = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM',
    '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM'
  ];

  const ADD_ONS = [
    { id: 'reels-pack', name: 'Vertical Reels & Shorts Editing', price: 2999, spec: '5 Animated Reels with captions' },
    { id: 'thumbnail', name: 'Custom High-CTR Thumbnails', price: 999, spec: '2 YouTube Thumbnail variations' },
    { id: 'audio-mastering', name: 'Audio Noise Cleaning & Mastering', price: 1499, spec: 'Spotify/Apple Podcast Loudness compliance' }
  ];

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const handlePrevMonth = () => {
    const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    if (prevMonthDate.getFullYear() > today.getFullYear() || 
       (prevMonthDate.getFullYear() === today.getFullYear() && prevMonthDate.getMonth() >= today.getMonth())) {
      setCurrentDate(prevMonthDate);
    }
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const isPrevDisabled = currentDate.getFullYear() === today.getFullYear() && currentDate.getMonth() <= today.getMonth();

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const chosenTypeObj = SHOOT_TYPES.find(t => t.id === shootType);
    const chosenSetObj = STUDIO_ROOMS.find(s => s.id === selectedSet);
    const formattedDate = `${selectedDayNumber} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    const pkgDetails = selectedPackage?.name ? `📦 Selected Package: ${selectedPackage.name}\n` : '';

    const message = `Hi ColourPix Studio! I want to confirm my booking:

${pkgDetails}👤 Name: ${name}
📞 Phone: ${phone}
✉️ Email: ${email}

🎬 Shoot Type: ${chosenTypeObj?.title} (₹${chosenTypeObj?.price})
📅 Date: ${formattedDate}
⏰ Time Slot: ${selectedSlot}
🏰 Studio Set: ${chosenSetObj?.name || 'Standard Setup'}
✨ Add-ons: ${selectedAddOns.length > 0 ? selectedAddOns.join(', ') : 'None'}`;

    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
    handleModalClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-sans">
      <div className="glass-panel max-w-3xl w-full p-5 sm:p-7 relative space-y-5 border-brand-cyan/40 bg-obsidian-card my-4 rounded-2xl shadow-2xl">
        
        <button 
          onClick={handleModalClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-between border-b border-obsidian-border pb-4 overflow-x-auto gap-2">
          {[
            { step: 1, label: 'Shoot Type' },
            { step: 2, label: 'Date & Time' },
            { step: 3, label: 'Studio Set' },
            { step: 4, label: 'Add-Ons' },
            { step: 5, label: 'Your Details' }
          ].map((item) => {
            const isActive = currentStep === item.step;
            const isCompleted = currentStep > item.step;

            return (
              <div key={item.step} className="flex items-center gap-1.5 shrink-0">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs transition-all ${
                  isActive 
                    ? 'bg-neon-gradient text-black shadow-neon-glow' 
                    : isCompleted 
                    ? 'bg-brand-cyan/20 border border-brand-cyan text-brand-cyan' 
                    : 'bg-obsidian border border-obsidian-border text-slate-500'
                }`}>
                  {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : item.step}
                </div>
                <span className={`text-[11px] font-bold ${isActive ? 'text-white' : 'text-slate-500'}`}>
                  {item.label}
                </span>
                {item.step < 5 && <div className="w-4 h-[1px] bg-obsidian-border hidden sm:block ml-1" />}
              </div>
            );
          })}
        </div>

        {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Choose Shoot Type {selectedPackage?.name ? `(${selectedPackage.name})` : ''}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Pick session type. All options include professional gear and tech crew.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SHOOT_TYPES.map((type) => {
                const Icon = type.icon;
                const isSelected = shootType === type.id;

                return (
                  <div
                    key={type.id}
                    onClick={() => setShootType(type.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 relative ${
                      isSelected
                        ? 'border-brand-cyan bg-brand-cyan/10 shadow-neon-glow'
                        : 'border-obsidian-border bg-obsidian hover:border-slate-600'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-brand-cyan text-black flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}

                    <div className="space-y-1">
                      <Icon className={`w-5 h-5 ${type.color}`} />
                      <h3 className="text-base font-black text-white">{type.title}</h3>
                      <div className="text-2xl font-black text-brand-cyan">₹{type.price.toLocaleString('en-IN')}</div>
                    </div>

                    <p className="text-[11px] text-slate-400">{type.timing}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Pick a Date & Time</h2>
              <p className="text-xs text-slate-400 mt-0.5">24/7 Studio Operations · Select any date & hour from today onwards.</p>
            </div>

            <div className="space-y-3 bg-obsidian/60 p-4 rounded-2xl border border-obsidian-border">
              <div className="flex items-center justify-between mb-2">
                <button 
                  type="button" 
                  disabled={isPrevDisabled}
                  onClick={handlePrevMonth}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
                    isPrevDisabled 
                      ? 'bg-obsidian/30 border border-obsidian-border/40 text-slate-600 cursor-not-allowed opacity-50' 
                      : 'bg-obsidian border border-obsidian-border text-slate-300 hover:text-white hover:border-brand-cyan'
                  }`}
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Prev
                </button>

                <h3 className="text-base font-black text-white">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>

                <button 
                  type="button" 
                  onClick={handleNextMonth}
                  className="px-3 py-1.5 rounded-lg bg-obsidian border border-obsidian-border text-[11px] font-bold text-slate-300 hover:text-white hover:border-brand-cyan flex items-center gap-1 transition-all"
                >
                  Next <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-7 text-center text-[9px] font-black uppercase text-slate-500 mb-1 tracking-wider">
                <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {Array.from({ length: firstDayIndex }).map((_, i) => (
                  <div key={`empty-${i}`} className="p-2" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNum);
                  const isPastDate = cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                  const isSelected = selectedDayNumber === dayNum && !isPastDate;

                  return (
                    <button
                      key={dayNum}
                      type="button"
                      disabled={isPastDate}
                      onClick={() => !isPastDate && setSelectedDayNumber(dayNum)}
                      className={`p-2 rounded-xl font-black text-xs transition-all flex items-center justify-center ${
                        isPastDate
                          ? 'bg-obsidian/30 border border-obsidian-border/30 text-slate-600 cursor-not-allowed opacity-40'
                          : isSelected
                          ? 'border-2 border-brand-cyan bg-brand-cyan/20 text-brand-cyan shadow-neon-glow scale-105'
                          : 'bg-obsidian/80 border border-obsidian-border text-slate-300 hover:border-slate-500 hover:text-white'
                      }`}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-black text-white">Select Time Slot (24 Hours)</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 max-h-48 overflow-y-auto p-1 border border-obsidian-border/50 rounded-xl bg-obsidian/40">
                {TWENTY_FOUR_HOUR_SLOTS.map((slotTime) => {
                  const isSelected = selectedSlot === slotTime;
                  
                  return (
                    <button
                      key={slotTime}
                      type="button"
                      onClick={() => setSelectedSlot(slotTime)}
                      className={`p-2 rounded-lg border text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
                        isSelected
                          ? 'border-brand-cyan bg-brand-cyan/20 text-brand-cyan shadow-neon-glow scale-105'
                          : 'border-obsidian-border bg-obsidian text-slate-300 hover:border-slate-500 hover:text-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-brand-cyan stroke-[3]" />}
                      {slotTime}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Choose Your Studio Set</h2>
              <p className="text-xs text-slate-400 mt-0.5">Pick the set that matches your show's vibe and capacity.</p>
            </div>

            <div className="space-y-3">
              {STUDIO_ROOMS.map((set, idx) => {
                const isSelected = selectedSet === set.id;
                return (
                  <div
                    key={set.id}
                    onClick={() => setSelectedSet(set.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between relative ${
                      isSelected
                        ? 'border-brand-cyan bg-brand-cyan/10 shadow-neon-glow'
                        : 'border-obsidian-border bg-obsidian hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-cyan/20 text-brand-cyan font-black text-lg flex items-center justify-center shrink-0">
                        {set.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-black text-white">{set.name}</h3>
                          <span className="text-[9px] text-brand-cyan font-bold uppercase tracking-wider">SET 0{idx + 1}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">{set.capacity} · {set.lighting} · {set.cameras}</p>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-brand-cyan text-black flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Optional Add-Ons</h2>
              <p className="text-xs text-slate-400 mt-0.5">Enhance your session with post-production & channel services.</p>
            </div>

            <div className="space-y-3">
              {ADD_ONS.map((addon) => {
                const isSelected = selectedAddOns.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddOn(addon.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-brand-cyan bg-brand-cyan/10 shadow-neon-glow'
                        : 'border-obsidian-border bg-obsidian hover:border-slate-600'
                    }`}
                  >
                    <div>
                      <h3 className="text-sm font-bold text-white">{addon.name}</h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">{addon.spec}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-brand-cyan">+₹{addon.price}</span>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                        isSelected ? 'bg-brand-cyan border-brand-cyan text-black' : 'border-slate-600'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <form onSubmit={handleFinalSubmit} className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Your Details</h2>
              <p className="text-xs text-slate-400 mt-0.5">Enter contact details to reserve your slot via WhatsApp.</p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1 uppercase tracking-wider text-[10px]">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-obsidian border border-obsidian-border text-white text-xs focus:border-brand-cyan outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1 uppercase tracking-wider text-[10px]">Phone / WhatsApp Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-obsidian border border-obsidian-border text-white text-xs focus:border-brand-cyan outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1 uppercase tracking-wider text-[10px]">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-obsidian border border-obsidian-border text-white text-xs focus:border-brand-cyan outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-obsidian-border gap-3">
              <button
                type="button"
                onClick={() => setCurrentStep(4)}
                className="px-5 py-3 rounded-xl border border-obsidian-border text-xs font-bold text-slate-300 hover:text-white hover:border-slate-500 transition-all flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <button
                type="submit"
                className="flex-1 py-3.5 rounded-xl font-black bg-neon-gradient text-black hover:shadow-neon-glow-strong transition-all flex items-center justify-center gap-2 text-xs"
              >
                Confirm Booking via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {currentStep < 5 && (
          <div className="flex items-center justify-between pt-4 border-t border-obsidian-border">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="px-5 py-2.5 rounded-xl border border-obsidian-border text-xs font-bold text-slate-300 hover:text-white hover:border-slate-500 transition-all flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="px-7 py-3 rounded-xl font-bold bg-neon-gradient text-black hover:shadow-neon-glow transition-all flex items-center gap-2 text-xs"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};