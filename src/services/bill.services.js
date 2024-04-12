import { toastError, toastSuccess } from "@/lib/utils/constant";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
} from "firebase/firestore";

const billCollectionRef = collection(db, "bills");
const billDetailCollectionRef = collection(db, "bills_details");

class BillDataService {
  addBill = async (newBill) => {
    const { bill_details, ...rest } = newBill;
    const { id: lastBillId } = await addDoc(billCollectionRef, rest);

    const updateRecords = await bill_details.map(async (item) => {
      const newData = { ...item, bill_id: lastBillId };
      const res = await addDoc(billDetailCollectionRef, newData);
      return res;
    });

    if (updateRecords) {
      toastSuccess("Data is updated successfully");
    }
  };

  updateBill = async (billId, updatedBill) => {
    // return updateDoc(billDoc, updatedBill);

    const billDoc = doc(billCollectionRef, billId);
    const { bill_details, ...rest } = updatedBill;

    await setDoc(billDoc, rest);

    // remove all existing data
    await bill_details
      .map(async (item) => {
        const docRef = doc(billDetailCollectionRef, item.id);
        deleteDoc(docRef).then(() => {
          console.log("delete data");
        });
      })
      .then(async () => {
        await bill_details.map(async (item) => {
          const newData = { ...item, bill_id: billId };
          const res = await addDoc(billDetailCollectionRef, newData);
          return res;
        });
      })
      .then(() => {
        toastSuccess("Data is updated successfully");
      });
  };

  deleteBill = async (id) => {
    const billDoc = doc(db, "bills", id);
    return deleteDoc(billDoc)
      .then(async () => {
        const q = query(billDetailCollectionRef, where("bill_id", "==", id));
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        results.forEach(async (result) => {
          const docRef = doc(billDetailCollectionRef, result.id);
          await deleteDoc(docRef);
        });
      })
      .then(() => {
        toastSuccess("Data is deleted successfully");
      });
  };

  getAllBills = async () => {
    debugger;
    const snapshots = await getDocs(billCollectionRef);
    console.log(snapshots)
    debugger;
    const response = snapshots?.docs?.map((doc) => {
      return { ...doc.data(), id: doc?.id };
    });
    debugger;
    return response;
  };

  getBill = async (id) => {
    const billDoc = doc(db, "bills", id);
    const response = await getDoc(billDoc);

    const q = query(billDetailCollectionRef, where("bill_id", "==", id));

    const snapshots = await getDocs(q);
    const bill_details = snapshots.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return { ...response.data(), id, bill_details };
  };
}

export default new BillDataService();
