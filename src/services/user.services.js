import { toastError } from "@/lib/utils/constant";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  query,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");

class UserDataService {
  addUser = (newUser_) => {
    const newUser = {bill_number:12, bill_item : 152}
    return addDoc(userCollectionRef, newUser);
  };
  
  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(userCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "bills", id);
    return getDoc(userDoc);
  };
}

export default new UserDataService();
