import React, { useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import BillFrm from "../components/Frm/BillFrm";
import billServices from "../services/bill.services";
import { serverTimestamp } from "firebase/firestore";
import clientServices from "../services/client.services";
import ProductService from "../services/product.services";

const initialData = {
  client_id: "",
  client_name: "",
  client_address: "",
  date: "04/04/2024",
  items: [
    {
      product_id: "",
      product: "",
      name: "",
      price: "",
      quantity: "",
      total: "",
    },
    {
      product_id: "",
      product: "",
      name: "",
      price: "",
      quantity: "",
      total: "",
    },
    {
      product_id: "",
      product: "",
      name: "",
      price: "",
      quantity: "",
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

  const onChangeHandler = (e, index) => {
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
    } else if (e.target.name === "product_id") {
      // get the current product form productList
      const cItem = productList.find((el) => {
        if (el.id === e.target.value) {
          return el;
        }
      });
      // create product for bill
      const product = {
        product_id: e.target.value,
        price: cItem.price,
        name: cItem.name,
      };
      // map bill items with created product
      const newItems = billData?.items.map((el, inx) => {
        if (inx === index) {
          return product;
        }
        return el;
      });
      //  merge billData object
      const newData = {
        ...billData,
        items: newItems,
      };
      // set billData 
      setAddBill(newData);

    } else if (e.target.name === "quantity") {
      const newItems = billData?.items.map((el, inx) => {
        if (inx === index) {
          const itemCost = e.target.value * el.price;
          return { ...el, quantity: e.target.value, total: itemCost };
        }
        return el;
      });

      const totalValue = newItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue["total"],
        0
      );

      const newData = {
        ...billData,
        items: newItems,
        total: totalValue,
      };
      setAddBill((res) => (res = newData));
    } else if (e.target.name === "discount") {

      const g_total = billData.total - e.target.value;
      const gTotal = {
        ...billData,
        discount: e.target.value,
        g_total: g_total,
      };
      setAddBill((res) => (res = gTotal));

    }
    else {
      setAddBill({ ...billData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    const unSub = getAllClientList();
    return () => unSub();
  }, []);

  const getAllProductList = () => {
    const unSub = ProductService.productListener((data) => {
      const products = data.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.selling_price,
      }));
      setProductList(products);
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
