import ProductService from "../services/product.services";
import { serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import ProductFrm from "../components/Frm/ProductFrm";
import categoryService from "../services/category.services";

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
  const [dataList, setDataList] = useState([]);

  const onChangeHandler = (e) => {
    setAddProduct({ ...productData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await ProductService.addProduct({
      ...productData,
      timeStamp: serverTimestamp(),
    });
    setAddProduct(initialData);
  };

  const getAllCategoryList = () => {
    const unSub = categoryService.categoryListener((data) => {
      const catList = data.map((item) => ({
        id: item.id,
        label: item.name,
      }));
      setDataList(catList);
    });
    return unSub;
  };

  useEffect(() => {
    const unSub = getAllCategoryList();
    return () => unSub();
  }, []);

  return (
    <AdminLayout title="Add New Product">
      <ProductFrm
        btnText="Create Product"
        onSubmitHandler={onSubmitHandler}
        productData={productData}
        categoryList={dataList}
        onChangeHandler={onChangeHandler}
      />
    </AdminLayout>
  );
}
