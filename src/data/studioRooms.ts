export interface StudioRoom {
  id: string;
  name: string;
  category: string;
  tagline: string;
  capacity: string;
  lighting: string;
  cameras: string;
  image: string;
  features: string[];
}

export const STUDIO_ROOMS: StudioRoom[] = [
  {
    id: 'set-1',
    category: 'Premium',
    name: 'Set 1: Cyberpunk Neon & Founder Suite',
    tagline: 'Multi-angle RGB neon backdrop & executive setup for high-impact podcasts',
    capacity: '2-4 Guests',
    lighting: 'Custom App-Controlled RGB & Softboxes',
    cameras: '3 x Sony 4K FX Cinema Cameras',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1600',
    features: ['Sony FX3 4K Triple Cam', 'Shure SM7B Broadcast Mics', 'Custom Neon Signboards', 'Acoustic Wall Panels']
  },
  {
    id: 'set-2',
    category: 'Corporate & Group',
    name: 'Set 2: Executive Panel Desk & Lounge',
    tagline: 'Warm amber wooden slat aesthetic for founder interviews & group debates',
    capacity: '2-4 Guests',
    lighting: 'Warm Softbox Keylights & 360° Overhead',
    cameras: '3 x Sony 4K Cinema Cameras',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1600',
    features: ['Custom Leather Armchairs', 'Wooden Acoustic Slats', 'RodeCaster Pro II Audio Console', '4K Sony Multi-Cam']
  }
];