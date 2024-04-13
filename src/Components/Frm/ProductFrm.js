import React from "react";
import { Box, Button, TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';






const ProductFrm = ({ btnText, onSubmitHandler, productData, onChangeHandler }) => {

  return (
    <form onSubmit={onSubmitHandler} className="addProduct_cover">
      <div className='addproduct_title_box'>
        <div className="add_box">
          <Box className="addProductInputBox">
            <label>Product Name <span>*</span> </label>
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
            <label>Description <span>*</span> </label>
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
            <label>Purchases Price <span>*</span> </label>
            <TextField
              size="small"
              onChange={(e) => onChangeHandler(e)}
              name="purchases_price"
              value={productData?.purchases_price}
              // label="Purchases Price"
              variant="outlined"
            />
          </Box>
        </div>
        <div className="add_box">
          <Box className="addProductInputBox">
            <label>Selling Price <span>*</span> </label>
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
            <label>Quantity <span>*</span> </label>
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

            <label>Category <span>*</span> </label>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              size="small"
              onChange={(e) => onChangeHandler(e)}
              name="category_id"
              value={productData?.category_id}
              sx={{ width: 214 }}
              renderInput={(params) => <TextField
                {...params} label="Category" />}
            />




            {/* <TextField
          
          // label="Category"
          variant="outlined"
        /> */}
          </Box>
        </div>
      </div>
      <div className="addProduct_btn">
        <Button type="submit" variant="contained" color="success">
          {btnText}
        </Button>
      </div>
    </form>
  );
};

export default ProductFrm;




const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
];
