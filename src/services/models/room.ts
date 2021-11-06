import firebase from 'firebase/firestore';

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
  timerEnd: firebase.Timestamp | null;
  subTimerEnd: firebase.Timestamp | null;
  createdAt: firebase.Timestamp | null;
  updatedAt: firebase.Timestamp | null;
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
