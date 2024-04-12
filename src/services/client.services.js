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
} from "firebase/firestore";

const clientCollectionRef = collection(db, "client");

class Clientservice {
  addClient = async (newClient) => {
    try {
      const res = await addDoc(clientCollectionRef, newClient);
      if (res.id) {
        alert("client successfully added");
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

export default new Clientservice();
