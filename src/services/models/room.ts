import { firestore } from 'firebase/app';

export type Room = {
  id?: string;
  name: string;
  timer: number;
  breaks: number;
  breaksCount: number;
  count: number;
  current: number;
  members: string[];
  topics: string;
  timerEnd: firestore.Timestamp | null;
  subTimerEnd: firestore.Timestamp | null;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

export const initialRoom: Room = {
  name: '',
  timer: 15,
  breaks: 15,
  breaksCount: 5,
  count: 0,
  current: 0,
  members: ['start  by', 'the left top button'],
  topics: '',
  timerEnd: null,
  subTimerEnd: null,
  createdAt: null,
  updatedAt: null,
};
