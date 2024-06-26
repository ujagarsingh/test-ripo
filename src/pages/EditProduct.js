import ProductService from "../services/product.services";
import { serverTimestamp } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import { useParams } from "react-router-dom";
import ProductFrm from "../components/Frm/ProductFrm";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import categoryService from "../services/category.services";

export default function EditProduct() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [dataList, setDataList] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    purchases_price: "",
    selling_price: "",
    category: "",
    quantity: "",
  });

  const onChangeHandler = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await ProductService.updateProduct(id, productData);
    navigate(`/productList`)
  };

  const getSingleProduct = useCallback(async () => {
    const data = await ProductService.getProduct(id);
    setProductData(data);
  }, [id]);

  useEffect(() => {
    getSingleProduct();
  }, [getSingleProduct]);

  
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
    <AdminLayout
      title="Edit Product"
    >
      <ProductFrm
        btnText="Update Product"
        onSubmitHandler={onSubmitHandler}
        productData={productData}
        onChangeHandler={onChangeHandler}
        categoryList={dataList}
      />
    </AdminLayout>
  );
}
