// import { useState, useMemo } from 'react';
// import { STUDIO_ROOMS } from '../data/studioRooms';
// import { ADDONS_LIST, RECORDING_TYPE_RATES } from '../data/pricingData';

// export const usePriceCalc = () => {
//   const [selectedRoomId, setSelectedRoomId] = useState(STUDIO_ROOMS[0].id);
//   const [hours, setHours] = useState(2);
//   const [recType, setRecType] = useState<'audio' | 'audio_video'>('audio_video');
//   const [selectedAddons, setSelectedAddons] = useState<string[]>(['reels_editing']);

//   const room = useMemo(() => {
//     return STUDIO_ROOMS.find(r => r.id === selectedRoomId) || STUDIO_ROOMS[0];
//   }, [selectedRoomId]);

//   const toggleAddon = (id: string) => {
//     setSelectedAddons(prev =>
//       prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
//     );
//   };

//   const totalPrice = useMemo(() => {
//     const baseHourly = room.basePricePerHour * RECORDING_TYPE_RATES[recType];
//     const roomCost = baseHourly * hours;
//     const addonsCost = selectedAddons.reduce((sum, addonId) => {
//       const item = ADDONS_LIST.find(a => a.id === addonId);
//       return sum + (item ? item.price : 0);
//     }, 0);

//     return Math.round(roomCost + addonsCost);
//   }, [room, hours, recType, selectedAddons]);

//   return {
//     selectedRoomId,
//     setSelectedRoomId,
//     hours,
//     setHours,
//     recType,
//     setRecType,
//     selectedAddons,
//     toggleAddon,
//     room,
//     totalPrice
//   };
// };