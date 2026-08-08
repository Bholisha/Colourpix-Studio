// import React, { useState, useMemo } from 'react';
// import { Calculator as CalcIcon, Check, ArrowRight } from 'lucide-react';
// import { STUDIO_ROOMS } from '../../data/studioRooms';
// import { ADDONS_LIST, RECORDING_TYPE_RATES } from '../../data/pricingData';

// interface CalculatorProps {
//   onProceedToBooking: (calcDetails: any) => void;
// }

// export const Calculator: React.FC<CalculatorProps> = ({ onProceedToBooking }) => {
//   const [selectedRoomId, setSelectedRoomId] = useState(STUDIO_ROOMS[0].id);
//   const [hours, setHours] = useState(2);
//   const [recType, setRecType] = useState<'audio' | 'audio_video'>('audio_video');
//   const [selectedAddons, setSelectedAddons] = useState<string[]>(['reels_editing']);

//   const room = useMemo(() => STUDIO_ROOMS.find(r => r.id === selectedRoomId) || STUDIO_ROOMS[0], [selectedRoomId]);

//   const toggleAddon = (id: string) => {
//     setSelectedAddons(prev => 
//       prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
//     );
//   };

//   const calculatedTotal = useMemo(() => {
//     const baseHourly = room.basePricePerHour * RECORDING_TYPE_RATES[recType];
//     const roomCost = baseHourly * hours;
//     const addonsCost = selectedAddons.reduce((acc, addonId) => {
//       const item = ADDONS_LIST.find(a => a.id === addonId);
//       return acc + (item ? item.price : 0);
//     }, 0);

//     return Math.round(roomCost + addonsCost);
//   }, [room, hours, recType, selectedAddons]);

//   return (
//     <section id="calculator" className="py-20 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
//           <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-widest">
//             <CalcIcon className="w-4 h-4" />
//             Transparent Pricing
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Live Cost Estimator</h2>
//           <p className="text-slate-400 text-sm">Select your room, duration, and post-production add-ons for instant accurate billing.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
//           {/* Options Column */}
//           <div className="lg:col-span-7 space-y-6">
            
//             {/* 1. Room Selection */}
//             <div className="glass-panel p-6 space-y-3">
//               <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">1. Select Studio Room Setup</label>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                 {STUDIO_ROOMS.map((r) => (
//                   <button
//                     key={r.id}
//                     onClick={() => setSelectedRoomId(r.id)}
//                     className={`p-3 rounded-xl border text-left transition-all ${
//                       selectedRoomId === r.id 
//                         ? 'border-brand-cyan bg-brand-cyan/10 text-white' 
//                         : 'border-obsidian-border bg-obsidian-card/50 text-slate-400 hover:border-slate-600'
//                     }`}
//                   >
//                     <div className="text-xs font-bold">{r.name}</div>
//                     <div className="text-[10px] text-slate-400 mt-1">₹{r.basePricePerHour}/hr</div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* 2. Recording Format & Hours */}
//             <div className="glass-panel p-6 space-y-4">
//               <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">2. Duration & Output Type</label>
              
//               <div className="grid grid-cols-2 gap-3">
//                 <button
//                   onClick={() => setRecType('audio')}
//                   className={`p-3 rounded-xl border text-center transition-all ${
//                     recType === 'audio' 
//                       ? 'border-brand-cyan bg-brand-cyan/10 text-white font-bold' 
//                       : 'border-obsidian-border text-slate-400'
//                   }`}
//                 >
//                   🎙️ Audio Only
//                 </button>
//                 <button
//                   onClick={() => setRecType('audio_video')}
//                   className={`p-3 rounded-xl border text-center transition-all ${
//                     recType === 'audio_video' 
//                       ? 'border-brand-cyan bg-brand-cyan/10 text-white font-bold' 
//                       : 'border-obsidian-border text-slate-400'
//                   }`}
//                 >
//                   📹 Audio + 4K Multi-Cam
//                 </button>
//               </div>

//               <div className="pt-2">
//                 <div className="flex justify-between text-xs text-slate-300 mb-2">
//                   <span>Slot Hours:</span>
//                   <span className="font-bold text-brand-cyan">{hours} Hours</span>
//                 </div>
//                 <input 
//                   type="range" 
//                   min="1" 
//                   max="8" 
//                   value={hours} 
//                   onChange={(e) => setHours(Number(e.target.value))}
//                   className="w-full accent-brand-cyan bg-obsidian-border h-2 rounded-lg cursor-pointer"
//                 />
//               </div>
//             </div>

//             {/* 3. Post-Production Add-ons */}
//             <div className="glass-panel p-6 space-y-3">
//               <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">3. Optional Services & Editing</label>
//               <div className="space-y-2">
//                 {ADDONS_LIST.map((addon) => {
//                   const isChecked = selectedAddons.includes(addon.id);
//                   return (
//                     <div 
//                       key={addon.id}
//                       onClick={() => toggleAddon(addon.id)}
//                       className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
//                         isChecked 
//                           ? 'border-brand-cyan/50 bg-brand-cyan/5 text-white' 
//                           : 'border-obsidian-border text-slate-400 hover:border-slate-700'
//                       }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${isChecked ? 'bg-brand-cyan border-brand-cyan text-black' : 'border-slate-600'}`}>
//                           {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
//                         </div>
//                         <div>
//                           <div className="text-xs font-semibold text-white">{addon.name}</div>
//                           <div className="text-[10px] text-slate-400">{addon.description}</div>
//                         </div>
//                       </div>
//                       <div className="text-xs font-bold text-brand-cyan">+₹{addon.price}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//           </div>

//           {/* Realtime Summary Sticky Card */}
//           <div className="lg:col-span-5 sticky top-28">
//             <div className="glass-panel p-6 border-brand-cyan/30 space-y-6 shadow-neon-glow">
//               <h3 className="text-lg font-bold text-white border-b border-obsidian-border pb-3">Booking Estimate Summary</h3>
              
//               <div className="space-y-3 text-xs text-slate-300">
//                 <div className="flex justify-between">
//                   <span>Room:</span>
//                   <span className="font-semibold text-white">{room.name}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Duration:</span>
//                   <span className="font-semibold text-white">{hours} Hour(s)</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Mode:</span>
//                   <span className="font-semibold text-white uppercase">{recType.replace('_', ' + ')}</span>
//                 </div>
                
//                 {selectedAddons.length > 0 && (
//                   <div className="pt-2 border-t border-obsidian-border">
//                     <span className="text-slate-400 block mb-1">Included Add-ons:</span>
//                     {selectedAddons.map(id => {
//                       const item = ADDONS_LIST.find(a => a.id === id);
//                       return (
//                         <div key={id} className="flex justify-between text-[11px] text-slate-300 py-0.5">
//                           <span>• {item?.name}</span>
//                           <span>₹{item?.price}</span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>

//               <div className="pt-4 border-t border-obsidian-border flex items-baseline justify-between">
//                 <div>
//                   <span className="text-xs text-slate-400 block">Total Estimated Cost</span>
//                   <span className="text-3xl font-black text-white">₹{calculatedTotal}</span>
//                 </div>
//                 <span className="text-[10px] text-slate-400">Excl. GST</span>
//               </div>

//               <button 
//                 onClick={() => onProceedToBooking({ room, hours, recType, selectedAddons, total: calculatedTotal })}
//                 className="w-full py-4 rounded-xl font-bold bg-neon-gradient text-black hover:shadow-neon-glow-strong transition-all flex items-center justify-center gap-2 text-sm"
//               >
//                 Proceed To Slot Selector
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };