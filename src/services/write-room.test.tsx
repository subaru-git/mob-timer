import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from 'firebase-config';
import { writeRoom } from './write-room';
import { initialRoom } from './models/room';

initializeApp(firebaseConfig);

const db = getFirestore();
test('writeRoom', () => {
  const room = { ...initialRoom, id: 'yomogi', name: 'yomogi' };
  expect(() => writeRoom(db, room)).not.toThrow();
});
