import { Firestore, collection, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { Room } from 'services/models/room';
import { collectionName } from 'services/constants';

const writeRoom = async (db: Firestore | null, room: Room): Promise<void> => {
  if (!db) return;
  try {
    const collectionRef = collection(db, collectionName.rooms);
    const docRef = doc(collectionRef, room.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await setDoc(docRef, { ...docSnap.data(), updateAt: serverTimestamp() });
    } else {
      // doc.data() will be undefined in this case
      console.error('No such document!'); // eslint-disable-line no-console
    }
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
};

const createRoom = async (db: Firestore, room: Room): Promise<void> => {
  try {
    const collectionRef = collection(db, collectionName.rooms);
    const docRef = doc(collectionRef, room.id);
    await setDoc(docRef, { ...room, createdAt: serverTimestamp() });
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
};

export { writeRoom, createRoom };
