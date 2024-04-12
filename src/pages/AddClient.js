import ProductService from "../services/product.services";
import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import CategoryFrm from "../components/Frm/CategoryFrm";
import {useNavigate} from "react-router-dom"
import clientServices from "../services/client.services";
import ClientFrm from "../components/Frm/ClientFrm";


const initialData = {
    name: "",
    address: "",
    state: "",
    city: "",
    phone: "",
};


const AddClient = () => {

let navigate = useNavigate()
    const [clientData, setAddClient] = useState(initialData);

    const onChangeHandler = (e) => {
        setAddClient({ ...clientData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const res = await clientServices.addClient({
            ...clientData,
            timeStamp: serverTimestamp(),
        });
        navigate("/clientList")
        setAddClient(initialData);
    };

    return (
        <AdminLayout
            title="Add New Client"
        >
            <ClientFrm
                btnText="Create Client"
                onSubmitHandler={onSubmitHandler}
                clientData={clientData}
                onChangeHandler={onChangeHandler}
            />
        </AdminLayout>
    )
}

export default AddClient
