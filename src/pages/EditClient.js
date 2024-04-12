import { serverTimestamp } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import clientServices from "../services/client.services";
import ClientFrm from "../components/Frm/ClientFrm";

export default function EditClient() {
    let navigate = useNavigate();
    const { id } = useParams();
  
    const [clientData, setClientData] = useState({
      name: "",
      address: "",
      state: "",
      city: "",
      phone: "",
    });
  
    const onChangeHandler = (e) => {
        setClientData({ ...clientData, [e.target.name]: e.target.value });
    };
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
      const res = await clientServices.updateClient(id, clientData);
      navigate(`/clientList`)
    };
  
    const getSingleClient = useCallback(async () => {
      const data = await clientServices.getClient(id);
      setClientData(data);
    }, [id]);
  
    useEffect(() => {
        getSingleClient();
    }, [getSingleClient]);
  
    return (
      <AdminLayout
        title="Edit Client"
      >
        <ClientFrm
          btnText="Update Client"
          onSubmitHandler={onSubmitHandler}
          clientData={clientData}
          onChangeHandler={onChangeHandler}
        />
      </AdminLayout>
    );
  }