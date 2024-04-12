import React from "react";
import { Box, Button, TextField } from "@mui/material";

const CategoryFrm = ({ btnText, onSubmitHandler, categoryData, onChangeHandler }) => {
    return (
        <form onSubmit={onSubmitHandler} className="addProduct_cover">
            <div className='addproduct_title_box'>
                <div className="add_box">
                    <Box className="addProductInputBox">
                        <label>Name <span>*</span> </label>
                        <TextField
                            size="small"
                            onChange={(e) => onChangeHandler(e)}
                            name="name"
                            value={categoryData?.name}
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
                            value={categoryData?.description}
                            // label="Description"
                            variant="outlined"
                        />
                    </Box>

                </div>
            </div>
            <div className="addProduct_btn">
                <Button type="submit" variant="contained" color="success">
                    {btnText}
                </Button>
            </div>
        </form>
    )
}

export default CategoryFrm
