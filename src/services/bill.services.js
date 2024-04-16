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

const billCollectionRef = collection(db, "bill");

class BillService {
  addBill = async (newBill) => {
    try {
      const res = await addDoc(billCollectionRef, newBill);
      if (res.id) {
        alert("bill successfully added");
      }
      return res;
    } catch (error) {
      alert(error);
    }
  };

  updateBill = async (id, updatedBill) => {
    try {
      const billDoc = await doc(db, "bill", id);
      return updateDoc(billDoc, updatedBill);
    } catch (error) {
      alert(error);
    }
  };

  deleteBill = async (id) => {
    try {
      const billDoc = doc(db, "bill", id);
      await deleteDoc(billDoc);
    } catch (error) {
      alert(error);
    }
  };

  billListener = (cbFun) => {
    try {
      const unSub = onSnapshot(
        collection(db, "bill"),
        (snapshot) => {
          const newList = snapshot.docs.map((bill) =>
            ({
              id: bill.id,
              ...bill.data(),
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

  getAllBill = async () => {
    try {
      let list = [];
      const res = await getDocs(billCollectionRef);
      res.forEach((bill) => {
        list.push({ id: bill.id, ...bill.data() });
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

  getBill = async (id) => {
    try {
      const billDoc = doc(db, "bill", id);
      const res = await getDoc(billDoc);
      console.log(res)
      return res.data();
    } catch (error) {
      alert(error);
    }
  };
}

export default new BillService();
