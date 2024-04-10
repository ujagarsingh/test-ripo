import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AdminLayout from "../Layout/AdminLayout";

import ProductService from "../services/product.services";
import { serverTimestamp } from "firebase/firestore";

export default function FullWidthTextField() {
  const navigate = useNavigate();

  // const addSubmitHandler = () => {
  //   navigate("/Product");
  // };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await ProductService.addProduct({
      id: 1,
      name: "gagan",
      timeStamp: serverTimestamp()
    });
    
      console.log(res.id)
  };
  return (
    <AdminLayout>
      <Box className="addForm">
        <form onSubmit={formSubmitHandler} className="textField_box">
          <Box className="addProduct_box">
            <Typography gutterBottom variant="h5" className="addProduct_title">
              Add Product
            </Typography>
          </Box>
          <TextField
            className="Product_input"
            fullWidth
            label="Enter Product Name"
            id="fullWidth"
          />
          <TextField
            className="Product_input"
            fullWidth
            label="fullWidth"
            id="fullWidth"
          />
          <TextField
            className="Product_input"
            fullWidth
            label="fullWidth"
            id="fullWidth"
          />
          <TextField
            className="Product_input"
            fullWidth
            label="fullWidth"
            id="fullWidth"
          />
          <Box className="submitBtn_cover">
            <Button variant="contained" type="submit" className="submitBtn">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </AdminLayout>
  );
}
