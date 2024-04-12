import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AdminLayout from "../Layout/AdminLayout";
import productServices from "../services/product.services";

function ViewProduct() {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    purchases_price: "",
    selling_price: "",
    quantity: "",
    category_id: "",
  });

  const getSingleProduct = useCallback(async () => {
    const data = await productServices.getProduct(id);
    setProductData(data);
  }, [id]);

  useEffect(() => {
    getSingleProduct();
  }, [getSingleProduct]);

  return (
    <AdminLayout title={"View Product"}>
      <div className="view_product_cover">
        <div className='view_product_title'>
        <Box className="view_product">

        <h3>Purchases Price = </h3>
        <h3 className='product_icon'>  {productData.name} </h3>
        
         
        </Box>
        <Box className="view_product">
        <h3>Description = </h3>
        <h3 className='product_icon'> {productData.description} </h3>
        </Box>
        <Box className="view_product">
        <h3>Purchases Price = </h3>
        <h3 className='product_icon'> {productData.purchases_price}  </h3>
        
        </Box>
        <Box className="view_product">
        <h3>Selling Price = </h3>
        <h3 className='product_icon'>  {productData.selling_price}  </h3>
        

        </Box>
        <Box className="view_product">
        <h3>Quantity = </h3>
        <h3 className='product_icon'>  {productData.quantity}  </h3>
       
        </Box>
        <Box className="view_product">
        <h3>Category = </h3>
        <h3 className='product_icon'> {productData.category_id}  </h3>
       
        </Box>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ViewProduct;
