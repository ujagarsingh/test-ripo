import React from "react";
import { Box, Button, TextField } from "@mui/material";

const ClientFrm = ({ btnText, onSubmitHandler, clientData, onChangeHandler }) => {
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
                            value={clientData?.name}
                            // label="Product Name"
                            variant="outlined"
                        />
                    </Box>
                    <Box className="addProductInputBox">
                        <label>Address <span>*</span> </label>
                        <TextField
                            size="small"
                            onChange={(e) => onChangeHandler(e)}
                            name="address"
                            value={clientData?.address}
                            // label="Description"
                            variant="outlined"
                        />
                    </Box>
                    <Box className="addProductInputBox">
                        <label>State <span>*</span> </label>
                        <TextField
                            size="small"
                            onChange={(e) => onChangeHandler(e)}
                            name="state"
                            value={clientData?.state}
                            // label="Description"
                            variant="outlined"
                        />
                    </Box>
                    <Box className="addProductInputBox">
                        <label>City <span>*</span> </label>
                        <TextField
                            size="small"
                            onChange={(e) => onChangeHandler(e)}
                            name="city"
                            value={clientData?.city}
                            // label="Description"
                            variant="outlined"
                        />
                    </Box>
                    <Box className="addProductInputBox">
                        <label>Phone <span>*</span> </label>
                        <TextField
                            size="small"
                            onChange={(e) => onChangeHandler(e)}
                            name="phone"
                            value={clientData?.phone}
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

export default ClientFrm
