import React from "react";
import { Box, Button, TextField } from "@mui/material";

const ProductFrm = ({ btnText, onSubmitHandler, productData, onChangeHandler }) => {

  return (
    <form onSubmit={onSubmitHandler} className="addProduct_cover">
      <Box className="addProductInputBox">
        <label>Product Name * </label>
        <TextField
          size="small"
          onChange={(e) => onChangeHandler(e)}
          name="name"
          value={productData?.name}
          // label="Product Name"
          variant="outlined"
        />
      </Box>
      <Box className="addProductInputBox">
        <label>Description * </label>
        <TextField
          size="small"
          onChange={(e) => onChangeHandler(e)}
          name="description"
          value={productData?.description}
          // label="Description"
          variant="outlined"
        />
      </Box>
      <Box className="addProductInputBox">
        <label>Purchases Price * </label>
        <TextField
          size="small"
          onChange={(e) => onChangeHandler(e)}
          name="purchases_price"
          value={productData?.purchases_price}
          // label="Purchases Price"
          variant="outlined"
        />
      </Box>
      <Box className="addProductInputBox">
        <label>Selling Price * </label>
        <TextField
          size="small"
          onChange={(e) => onChangeHandler(e)}
          name="selling_price"
          value={productData?.selling_price}
          // label="Selling Price"
          variant="outlined"
        />
      </Box>
      <Box className="addProductInputBox">
        <label>Quantity * </label>
        <TextField
          size="small"
          onChange={(e) => onChangeHandler(e)}
          name="quantity"
          value={productData?.quantity}
          // label="Quantity"
          variant="outlined"
          type="number"
        />
      </Box>
      <Box className="addProductInputBox">
        <label>Category * </label>
        <TextField
          size="small"
          onChange={(e) => onChangeHandler(e)}
          name="category_id"
          value={productData?.category_id}
          // label="Category"
          variant="outlined"
        />
      </Box>
      <div className="addProduct_btn">
        <Button type="submit" variant="contained" color="success">
          {btnText}
        </Button>
      </div>
    </form>
  );
};

export default ProductFrm;
