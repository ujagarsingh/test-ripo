import React, { useEffect, useState } from 'react'
import AdminLayout from '../Layout/AdminLayout';
import BillFrm from '../components/Frm/BillFrm';
import billServices from "../services/bill.services";
import { serverTimestamp } from 'firebase/firestore';
import clientServices from "../services/client.services";
import ProductService from "../services/product.services";

// "GAqtQA3nhIrhkA7TXSMf"
// "Ujagar"

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
    }
  ],
  total: '55258',
  discount: '452692',
  g_total: '101010'

};


const AddBill = () => {

  const [billData, setAddBill] = useState(initialData);
  const [billList, setBillList] = useState([]);
  const [productList, setProductList] = useState([]);



  const onChangeHandler = (e) => {
    debugger;
    setAddBill({ ...billData, [e.target.name]: e.target.value })

  }


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
      }));
      console.log(catList);
      setBillList(catList);
    });
    return unSub;
  };
  
  useEffect(() => {
    const unSub = getAllClientList();
    return () => unSub();
  }, []);
  
  
  const getAllProductList = () => {
    const unSub = ProductService.productListener((data) => {
      const catList = data.map((item) => ({
        id: item.id,
        name: item.name,
      }));
      console.log(catList);
      setProductList(catList);
    });
    return unSub;
  };
  
  
  useEffect(() => {
    const unSub = getAllProductList();
    return () => unSub();
  }, []);
  
  return (
    <AdminLayout
      title='Add Bill'
    >
      <BillFrm

        btnText="Create Product"
        billData={billData}
        billList={billList}
        onHandler={onHandler}
        productList={productList}
        onChangeHandler={onChangeHandler}
      />


    </AdminLayout>
  )
}

export default AddBill
