import ProductService from "../services/product.services";
import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import ProductFrm from "../components/Frm/ProductFrm";

const initialData = {
  name: "",
  description: "",
  purchases_price: "",
  selling_price: "",
  category_id: "",
  quantity: "",
};


export default function AddProduct() {
  const [productData, setAddProduct] = useState(initialData);

  const onChangeHandler = (e) => {
    setAddProduct({ ...productData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    debugger;
    e.preventDefault();
    await ProductService.addProduct({
      ...productData,
      timeStamp: serverTimestamp(),
    });
    setAddProduct(initialData);
  };

  return (
    <AdminLayout
      title="Add New Product"
    >
      <ProductFrm
        btnText="Create Product"
        onSubmitHandler={onSubmitHandler}
        productData={productData}
        onChangeHandler={onChangeHandler}
      />
    </AdminLayout>
  );
}
