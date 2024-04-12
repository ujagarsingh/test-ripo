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

const productCollectionRef = collection(db, "products");

class ProductService {
  addProduct = async (newProduct) => {
    try {
      const res = await addDoc(productCollectionRef, newProduct);
      if (res.id) {
        alert("product successfully added");
      }
      return res;
    } catch (error) {
      alert(error);
    }
  };

  updateProduct = async (id, updatedProduct) => {
    try {
      const productDoc = await doc(db, "products", id);
      return updateDoc(productDoc, updatedProduct);
    } catch (error) {
      alert(error);
    }
  };

  deleteProduct = async (id) => {
    try {
      const productDoc = doc(db, "products", id);
      await deleteDoc(productDoc);
    } catch (error) {
      alert(error);
    }
  };

  productListener = (cbFun) => {
    try {
      const unSub = onSnapshot(
        collection(db, "products"),
        (snapshot) => {
          const newList = snapshot.docs.map((product) =>
            ({
              id: product.id,
              ...product.data(),
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

  getAllProducts = async () => {
    try {
      let list = [];
      const res = await getDocs(productCollectionRef);
      res.forEach((product) => {
        list.push({ id: product.id, ...product.data() });
      });
      return list;
    } catch (error) {
      alert(error);
    }
  };

  getProduct = async (id) => {
    try {
      const productDoc = doc(db, "products", id);
      const res = await getDoc(productDoc);
      return res.data();
    } catch (error) {
      alert(error);
    }
  };
}

export default new ProductService();
