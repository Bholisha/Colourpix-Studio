import type { AddOnOption } from '../@types/booking';

export const RECORDING_TYPE_RATES = {
  audio: 1,
  audio_video: 1.6
};

export const ADDONS_LIST: AddOnOption[] = [
  {
    id: 'reels_editing',
    name: 'Vertical Reels/Shorts (3 Clips)',
    price: 1999,
    description: 'High-engaging subtitled vertical clips for Instagram & Shorts'
  },
  {
    id: 'yt_thumbnail',
    name: 'Custom YouTube Thumbnail',
    price: 499,
    description: 'High CTR face cutout & custom typography thumbnail design'
  },
  {
    id: 'audio_mastering',
    name: 'Pro Audio Mastering & Noise Cleaning',
    price: 799,
    description: 'Broadcast-ready audio loudness compliance for Spotify & Apple Podcasts'
  },
  {
    id: 'express_delivery',
    name: 'Same Day Raw Footage Express Export',
    price: 999,
    description: 'Get all raw audio & multi-cam 4K video files right after recording'
  }
];