import { db, getDocs, collection, getDoc, doc, setDoc } from "./config";

export const getCollection = async (
  collectionName: string,
  pageName: string,
  sectionName: string
) => {
  const querySnapshot = await getDocs(
    collection(db, collectionName, pageName, sectionName)
  );
  const data = querySnapshot.docs.map((doc) => doc.data());
  return data;
};

export const getDocById = async (
  collectionName: string,
  pageName: string,
  sectionName: string,
  id: string
) => {
  const docRef = doc(db, collectionName, pageName, sectionName, id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const setDocById = async (
  collectionName: string,
  pageName: string,
  sectionName: string,

  id: string,
  data: any
) => {
  const docRef = doc(db, collectionName, pageName, sectionName, id);
  await setDoc(docRef, data);
};

export const addDocbyId = async (
  collectionName: string,
  pageName: string,
  sectionName: string,

  id: string,
  data: any
) => {
  await setDoc(doc(db, collectionName, pageName, sectionName, id), data);
  alert("Document successfully written!");
};

export const updateDoc = async (
  collectionName: string,
  pageName: string,
  sectionName: string,

  id: string,
  data: any
) => {
  const docRef = doc(db, collectionName, pageName, sectionName, id);
  await setDoc(docRef, data, { merge: true });
};

export const deleteUpgrade = async (upgradeName: string) => {
  await setDoc(doc(db, "network_upgrades", upgradeName), {
    deleted: true,
  });
};

export const updateUpgrades = async (newUpgrades: string[]) => {
  await setDoc(doc(db, "network_upgrades", "upgrades"), {
    upgrades: newUpgrades,
  });
};

export const deleteDoc = async (
  collectionName: string,
  pageName: string,
  sectionName: string,
  id: string
) => {
  await setDoc(doc(db, collectionName, pageName, sectionName, id), {
    deleted: true,
  });
};
