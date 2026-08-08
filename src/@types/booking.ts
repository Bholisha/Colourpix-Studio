export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface BookingState {
  selectedRoomId: string;
  selectedDate: string;
  selectedTimeSlot: string;
  hours: number;
  recordingType: 'audio' | 'audio_video';
  addons: string[];
}