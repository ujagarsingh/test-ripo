// import { toastError } from "@/lib/utils/constant";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { NotificationManager } from 'react-notifications';

const clientCollectionRef = collection(db, "client");

class ClientService {
  addClient = async (newClient) => {
    try {
      const res = await addDoc(clientCollectionRef, newClient);
      if (res.id) {
        NotificationManager.success('client successfully added', 'Title here');
      }
      return res;
    } catch (error) {
      alert(error);
    }
  };

  updateClient = async (id, updatedClient) => {
    try {
      const clientDoc = await doc(db, "client", id);
      return updateDoc(clientDoc, updatedClient);
    } catch (error) {
      alert(error);
    }
  };

  deleteClient = async (id) => {
    try {
      const clientDoc = doc(db, "client", id);
      await deleteDoc(clientDoc);
    } catch (error) {
      alert(error);
    }
  };

  clientListener = (cbFun) => {
    try {
      const unSub = onSnapshot(
        collection(db, "client"),
        (snapshot) => {
          const newList = snapshot.docs.map((client) =>
          ({
            id: client.id,
            ...client.data(),
          })
          );
          cbFun(newList);
        },
        (error) => {
          alert(error);
        }
      );
      return unSub;
    } catch (error) {
      alert(error);
    }
  };


  getAllClient = async () => {
    try {
      let list = [];
      const res = await getDocs(clientCollectionRef);
      res.forEach((client) => {
        list.push({ id: client.id, ...client.data() });
      });
      return list;
      // LISTEN REALTIME

      // let data = [];
      // const unsub = onSnapshot(
      //   collection(db, "Categorys"),
      //   (snapshot) => {
      //     const newList = snapshot.docs.forEach((product) =>
      //       data.push({
      //         id: product.id,
      //         ...product.data(),
      //       })
      //     );
      //     return newList;
      //   },
      //   (error) => {
      //     alert(error);
      //   }
      // );
      // return { data, unsub };
    } catch (error) {
      alert(error);
    }
  };

  getClient = async (id) => {
    try {
      const clientDoc = doc(db, "client", id);
      const res = await getDoc(clientDoc);
      console.log(res)
      return res.data();
    } catch (error) {
      alert(error);
    }
  };
}

export default new ClientService();
