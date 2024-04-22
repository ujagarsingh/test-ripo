import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import categoryServices from "../services/category.services";

function ViewCategory() {
    const { id } = useParams();
    const [categoryData, setCategoryData] = useState({
      name: "",
      description: "",
    });
  
    const getSingleCategory = useCallback(async () => {
      const data = await categoryServices.getCategory(id);
      setCategoryData(data);
    }, [id]);
  
    useEffect(() => {
      getSingleCategory();
    }, [getSingleCategory]);
  
    console.log(categoryData)
    return (
      <AdminLayout title={"View Product"}>
        <div className="view_product_cover">
          <div className='view_product_title'>
          <Box className="view_product">
  
          <h3>Name = </h3>
          <h3 className='product_icon'>  {categoryData?.name} </h3>
          
           
          </Box>
          <Box className="view_product">
          <h3>Description = </h3>
          <h3 className='product_icon'> {categoryData?.description} </h3>
          </Box>
          
          </div>
        </div>
      </AdminLayout>
    );
  }
  
  export default ViewCategory;
  