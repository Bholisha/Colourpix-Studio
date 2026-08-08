import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { getNextSevenDays, TIME_SLOTS } from '../../utils/dateUtils';
import { STUDIO_ROOMS } from '../../data/studioRooms';

export const BookingSection: React.FC = () => {
  const dates = getNextSevenDays();
  const [selectedDate, setSelectedDate] = useState(dates[0].fullDate);
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0]);
  const [selectedRoom, setSelectedRoom] = useState(STUDIO_ROOMS[0].name);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi ColourPix Studio! I want to book a recording slot.\n\n📍 Room: ${selectedRoom}\n📅 Date: ${selectedDate}\n⏰ Time: ${selectedSlot}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 border-t border-obsidian-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest">Instant Reservation</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Select Your Recording Slot</h2>
          <p className="text-slate-400 text-sm">Pick your date and time. Get instant confirmation on WhatsApp.</p>
        </div>

        <div className="glass-panel p-6 sm:p-8 max-w-4xl mx-auto border-brand-cyan/30">
          <form onSubmit={handleBookingSubmit} className="space-y-8">
            
            {/* 1. Date Selector Cards */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-brand-cyan" />
                1. Select Recording Date
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {dates.map((d) => {
                  const isSelected = selectedDate === d.fullDate;
                  return (
                    <button
                      key={d.fullDate}
                      type="button"
                      onClick={() => setSelectedDate(d.fullDate)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'border-brand-cyan bg-brand-cyan/15 text-white shadow-neon-glow'
                          : 'border-obsidian-border bg-obsidian-card/40 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <span className="text-[10px] block text-slate-400 uppercase">{d.dayName}</span>
                      <span className="text-lg font-black block my-0.5">{d.dayNumber}</span>
                      <span className="text-[10px] block text-brand-cyan font-semibold">{d.month}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Time Slot Grid */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-cyan" />
                2. Select Available Time Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3.5 rounded-xl border text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'border-brand-cyan bg-brand-cyan/15 text-white shadow-neon-glow'
                          : 'border-obsidian-border bg-obsidian-card/40 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      {isSelected && <CheckCircle className="w-4 h-4 text-brand-cyan" />}
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Studio Room Dropdown */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                3. Choose Room
              </label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-obsidian border border-obsidian-border text-xs text-white focus:border-brand-cyan outline-none"
              >
                {STUDIO_ROOMS.map(r => (
                  <option key={r.id} value={r.name}>{r.name} ({r.capacity})</option>
                ))}
              </select>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold bg-neon-gradient text-black hover:shadow-neon-glow-strong transition-all flex items-center justify-center gap-2 text-sm"
            >
              Confirm Slot via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};