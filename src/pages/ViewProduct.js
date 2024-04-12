import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
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
    console.log(data)
    setProductData(data);
  }, [id]);

  useEffect(() => {
    getSingleProduct();
  }, [getSingleProduct]);

  return (
    <AdminLayout title={"View Product"}>
      <div className="view_product_cover">
        <Box className="view_product">
          <Typography variant="h5">Name = </Typography>
          <Typography variant="h5">{productData.name}</Typography>
        </Box>
        <Box className="view_product">
          <Typography variant="h5">Description = </Typography>

          <Typography variant="h5">{productData.description}</Typography>
        </Box>
        <Box className="view_product">
          <Typography variant="h5">Purchases Price = </Typography>

          <Typography variant="h5">{productData.purchases_price}</Typography>
        </Box>
        <Box className="view_product">
          <Typography variant="h5">Selling Price = </Typography>

          <Typography variant="h5">{productData.selling_price}</Typography>
        </Box>
        <Box className="view_product">
          <Typography variant="h5">Quantity = </Typography>

          <Typography variant="h5">{productData.quantity}</Typography>
        </Box>
        <Box className="view_product">
          <Typography variant="h5">Category = </Typography>

          <Typography variant="h5">{productData.category_id}</Typography>
        </Box>
      </div>
    </AdminLayout>
  );
}

export default ViewProduct;
