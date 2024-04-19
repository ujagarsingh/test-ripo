import React, { useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import BillFrm from "../components/Frm/BillFrm";
import billServices from "../services/bill.services";
import { serverTimestamp } from "firebase/firestore";
import clientServices from "../services/client.services";
import ProductService from "../services/product.services";

const initialData = {
  client_id: "GAqtQA3nhIrhkA7TXSMf",
  client_name: "gagan",
  client_address: "uykadshjki",
  date: "04/04/2024",
  items: [
    {
      product_id: "KwGB8AHSlmsBQA0ZafYs",
      product: "",
      name: "",
      price: "1500",
      quantity: "5",
      total: "",
    },
    {
      product_id: "KwGB8AHSlmsBQA0ZafYs",
      product: "",
      name: "",
      price: "1500",
      quantity: "5",
      total: "",
    },
  ],
  total: "55258",
  discount: "452692",
  g_total: "101010",
};

const AddBill = () => {
  const [billData, setAddBill] = useState(initialData);
  const [clientList, setClientList] = useState([]);
  const [productList, setProductList] = useState([]);

  const onHandler = async (e) => {
    e.preventDefault();
    await billServices.addBill({
      ...billData,
      timeStamp: serverTimestamp(),
    });
    setAddBill(initialData);
  };

  const getAllClientList = () => {
    const unSub = clientServices.clientListener((data) => {
      const catList = data.map((item) => ({
        id: item.id,
        name: item.name,
        address: `${item.address}, ${item.city}, ${item.state}, Mobile : ${item.phone}`,
      }));
      setClientList(catList);
    });
    return unSub;
  };

  const onChangeHandler = (e) => {
    if (e.target.name === "client_id") {
      const cItem = clientList.find((el) => {
        if (el.id === e.target.value) {
          return el;
        }
      });
      const newData = {
        ...billData,
        client_id: e.target.value,
        client_name: cItem.name,
        client_address: cItem.address,
      };
      setAddBill((pre) => (pre = newData));
    }
    if (e.target.name === "product_id") {
      
    } else {
      setAddBill({ ...billData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    const unSub = getAllClientList();
    return () => unSub();
  }, []);

  const getAllProductList = () => {
    const unSub = ProductService.productListener((data) => {
      const productList = data.map((item) => ({
        id: item.id,
        name: item.name,
      }));
      console.log(productList);
      setProductList(productList);
    });
    return unSub;
  };

  useEffect(() => {
    const unSub = getAllProductList();
    return () => unSub();
  }, []);

  return (
    <AdminLayout title="Add Bill">
      <BillFrm
        btnText="Create Product"
        billData={billData}
        clientList={clientList}
        onHandler={onHandler}
        productList={productList}
        onChangeHandler={onChangeHandler}
      />
    </AdminLayout>
  );
};

export default AddBill;
