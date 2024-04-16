import ProductService from "../services/product.services";
import { serverTimestamp } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import categoryService from "../services/category.services";
import billService from "../services/bill.services";
import BillFrm from "../components/Frm/BillFrm";

export default function EditBill() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [billList, setBillList] = useState([]);
  const [billData, setBillData] = useState({
    date: "",
    name: "",
    phone: "",
    address: "",
    balance: "",
    payment: "",
    total: "",
  });

  const onChangeHandler = (e) => {
    setBillData({ ...billData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await billService.updateBill(id, billData);
    navigate(`/productList`)
  };

  const getSingleProduct = useCallback(async () => {
    const data = await ProductService.getProduct(id);
    setBillData(data);
  }, [id]);

  useEffect(() => {
    getSingleProduct();
  }, [getSingleProduct]);

  
  const getAllBillList = () => {
    const unSub = billService.billListener((data) => {
      const catList = data.map((item) => ({
        id: item.id,
        label: item.name,
      }));
      setBillList(catList);
    });
    return unSub;
  };

  useEffect(() => {
    const unSub = getAllBillList();
    return () => unSub();
  }, []);

  return (
    <AdminLayout
      title="Edit Bill"
    >
      <BillFrm
        btnText="Update Bill"
        onSubmitHandler={onSubmitHandler}
        productData={billData}
        onChangeHandler={onChangeHandler}
        categoryList={billList}
      />
    </AdminLayout>
  );
}
