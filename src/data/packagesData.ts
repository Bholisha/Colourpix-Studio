export interface PackageItem {
  id: string;
  name: string;
  category: 'shoot' | 'post-production' | 'full-day';
  tagline: string;
  price: number;
  unit: string;
  popular?: boolean;
  features: string[];
  description: string;
}

export const PACKAGES_DATA: PackageItem[] = [
  // 📸 STUDIO SHOOT PACKAGES
  {
    id: 'starter-shoot',
    category: 'shoot',
    name: 'Starter Shoot Session',
    tagline: 'Ideal for solo podcasters & quick audio/video monologues',
    price: 1999,
    unit: 'per hour',
    popular: false,
    description: 'Basic studio setup with high quality sound & 4K single cinema camera angle.',
    features: [
      'Single 4K Cinema Camera Recording',
      '2 x Shure SM7B Broadcast Microphones',
      'Acoustic Soundproof Suite',
      'Instant Raw File Handover',
      'In-House Sound Technician Included'
    ]
  },
  {
    id: 'creator-pro-shoot',
    category: 'shoot',
    name: 'Creator Pro Multi-Cam Shoot',
    tagline: 'Best for growing YouTube talk shows & multi-guest podcasts',
    price: 3999,
    unit: 'per hour',
    popular: true,
    description: 'Complete multi-cam setup with live switching and dynamic RGB set lighting.',
    features: [
      '3 x Sony 4K Multi-Cam Angles',
      '4 x Shure SM7B Mics + Cloudlifters',
      'App-Controlled RGB Mood Backdrop',
      'Teleprompter System Support',
      'Dedicated Audio & Video Director'
    ]
  },
  {
    id: 'panel-shoot',
    category: 'shoot',
    name: 'Corporate Panel Shoot',
    tagline: 'Designed for executive roundtables & high-profile interviews',
    price: 5999,
    unit: 'per hour',
    popular: false,
    description: 'Spacious setup with leather armchairs and pro video switching console.',
    features: [
      '4 x Sony Cinema FX Series Cameras',
      'Up to 4 Guest Seating Setup',
      'Green Room & Refreshments',
      'Live Streaming Output Enabled'
    ]
  },

  // 🎬 POST-PRODUCTION PACKAGES
  {
    id: 'reels-pack',
    category: 'post-production',
    name: 'Viral Shorts & Reels Edit Pack',
    tagline: 'Turn long podcasts into high-converting short clips',
    price: 2999,
    unit: 'per 5 reels',
    popular: false,
    description: 'Engaging vertical video editing with animated subtitles, hooks, and sound effects.',
    features: [
      '5 x High-Converting Vertical Reels/Shorts',
      'Animated Subtitles & Dynamic Captions',
      'B-Roll Overlays & Zoom-in Effects',
      'Optimized 9:16 Aspect Ratio Format',
      '48-Hour Express Export'
    ]
  },
  {
    id: 'audio-mastering-pack',
    category: 'post-production',
    name: 'Full Episode Audio & Video Edit',
    tagline: 'End-to-end full episode post-production cutting',
    price: 4999,
    unit: 'per episode',
    popular: true,
    description: 'Complete video editing with camera switching, audio noise removal, and mastering.',
    features: [
      'Multi-Cam Video Assembly & Cutting',
      'LUFS Audio Loudness Compliance (Spotify/Apple)',
      'Background Noise & Echo Removal',
      'Custom YouTube Thumbnail Design',
      'SEO Show Notes & Chapter Markers'
    ]
  },

  // ⚡ FULL DAY & BULK RETAINERS
  {
    id: 'full-day-pass',
    category: 'full-day',
    name: 'Full Day Studio Buyout',
    tagline: 'Unrestricted 8-Hour studio access for bulk creators & brands',
    price: 19999,
    unit: 'per full day (8 hrs)',
    popular: true,
    description: 'Batch record multiple episodes in a single seamless production day.',
    features: [
      '8 Hours Complete Studio Access',
      'Record up to 4 to 6 Full Episodes',
      'All 4K Multi-Cam & Audio Gear Included',
      'VIP Green Room & Catering Support',
      'Dedicated Crew & Sound Engineer All Day',
      'Priority Post-Production Queue'
    ]
  },
  {
    id: 'brand-monthly',
    category: 'full-day',
    name: 'Monthly Brand Subscription',
    tagline: 'Complete agency-level monthly content engine',
    price: 34999,
    unit: 'per month',
    popular: false,
    description: '4 Episodes + 12 Reels + Channel Management every month.',
    features: [
      '4 Full Episodes Recording (8 Studio Hours)',
      '12 x Viral Instagram Reels/Shorts Edited',
      '4 x Custom YouTube Thumbnails',
      'Spotify & YouTube Channel Management',
      'Dedicated Account Manager'
    ]
  }
];