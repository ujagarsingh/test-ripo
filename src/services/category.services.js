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

const categoryCollectionRef = collection(db, "category");

class CategoryService {
  addCategory = async (newCategory) => {
    try {
      const res = await addDoc(categoryCollectionRef, newCategory);
      if (res.id) {
        alert("category successfully added");
      }
      return res;
    } catch (error) {
      alert(error);
    }
  };

  updateCategory = async (id, updatedCategory) => {
    try {
      const categoryDoc = await doc(db, "category", id);
      return updateDoc(categoryDoc, updatedCategory);
    } catch (error) {
      alert(error);
    }
  };

  deleteCategory = async (id) => {
    try {
      const categoryDoc = doc(db, "category", id);
      await deleteDoc(categoryDoc);
    } catch (error) {
      alert(error);
    }
  };

  categoryListener = (cbFun) => {
    try {
      const unSub = onSnapshot(
        collection(db, "category"),
        (snapshot) => {
          const newList = snapshot.docs.map((category) =>
            ({
              id: category.id,
              ...category.data(),
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

  getAllCategorys = async () => {
    try {
      let list = [];
      const res = await getDocs(categoryCollectionRef);
      res.forEach((category) => {
        list.push({ id: category.id, ...category.data() });
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

  getCategory = async (id) => {
    try {
      const categoryDoc = doc(db, "category", id);
      const res = await getDoc(categoryDoc);
      console.log(res)
      return res.data();
    } catch (error) {
      alert(error);
    }
  };
}

export default new CategoryService();
