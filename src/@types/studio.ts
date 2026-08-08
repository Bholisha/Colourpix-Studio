export interface StudioRoom {
  id: string;
  name: string;
  tagline: string;
  capacity: string;
  image: string;
  basePricePerHour: number;
  lightingOptions: string[];
  features: string[];
}

export interface GearItem {
  id: string;
  category: 'Microphone' | 'Camera' | 'Mixer' | 'Lighting' | 'Amenity';
  name: string;
  spec: string;
  iconName: string;
  featured?: boolean;
}