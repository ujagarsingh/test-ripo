import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AdminLayout from "../Layout/AdminLayout";
import clientServices from "../services/client.services";

function ViewClient() {
    const { id } = useParams();
    const [clientData, setClientData] = useState({
      name: "",
      address: "",
      state: "",
      city: "",
      phone: "",
    });
  
    const getSingleClient = useCallback(async () => {
      const data = await clientServices.getClient(id);
      setClientData(data);
    }, [id]);
  
    useEffect(() => {
        getSingleClient();
    }, [getSingleClient]);
  
    console.log(clientData)
    return (
      <AdminLayout title={"View Client"}>
        <div className="view_product_cover">
          <div className='view_product_title'>
          <Box className="view_product">
  
          <h3>Name = </h3>
          <h3 className='product_icon'>  {clientData?.name} </h3>
          
           
          </Box>
          <Box className="view_product">
          <h3>Description = </h3>
          <h3 className='product_icon'> {clientData?.address} </h3>
          </Box>
          <Box className="view_product">
          <h3>Description = </h3>
          <h3 className='product_icon'> {clientData?.state} </h3>
          </Box>
          <Box className="view_product">
          <h3>Description = </h3>
          <h3 className='product_icon'> {clientData?.city} </h3>
          </Box>
          <Box className="view_product">
          <h3>Description = </h3>
          <h3 className='product_icon'> {clientData?.phone} </h3>
          </Box>
          
          </div>
        </div>
      </AdminLayout>
    );
  }
  
  export default ViewClient;
  