import React, { useEffect, useState } from 'react'
import AdminLayout from '../Layout/AdminLayout';
import BillFrm from '../components/Frm/BillFrm';
import billServices from "../services/bill.services";
import { serverTimestamp } from 'firebase/firestore';
import clientServices from "../services/client.services";



const initialData = {
    client_name: "",
    Client_Address: "",
    date: "",
    item_description: "",
    price: "",
    quantity: "",
  };


const AddBill = () => {

    const [billData, setAddBill] = useState(initialData);
    const [billList, setBillList] = useState([]);

   

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
            label: item.name,
          }));
          setBillList(catList);
        });
        return unSub;
      };
    
      useEffect(() => {
        const unSub = getAllClientList();
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
        onChangeHandler={onChangeHandler}
        />
            

        </AdminLayout>
    )
}

export default AddBill
