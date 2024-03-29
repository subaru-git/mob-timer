import firebase from 'firebase/firestore';
import { createContext } from 'react';

import { Room, initialRoom } from 'services/models/room';

export const FirebaseContext = createContext<{
  db: firebase.Firestore | null;
}>({
  db: null,
});

export const RoomContext = createContext<{
  room: Room;
  setRoom: (room: Room) => void;
  loading: boolean;
}>({
  room: initialRoom,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setRoom: () => () => {},
  loading: true,
});
