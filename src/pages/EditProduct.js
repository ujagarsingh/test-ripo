import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AdminLayout from '../Layout/AdminLayout';



function EditProduct() {
    const navigate = useNavigate();
    const addSubmitHandler = () => {
        navigate('/Product')
    }

    return (
        <AdminLayout>
            <Box className='EditProduct'>
                <Box className='EditField_box'>
                    <Box className='EditProduct_box'>
                        <Typography gutterBottom variant="h5" className='EditProduct_title'>Edit Product</Typography>
                    </Box>
                    <TextField className='Edit_input' fullWidth label="Product Name" id="fullWidth" />
                    <TextField className='Edit_input' fullWidth label="Product Description" id="fullWidth" />
                    <TextField className='Edit_input' fullWidth label="Product Category" id="fullWidth" />
                    <TextField className='Edit_input' fullWidth label="ProductPrice" id="fullWidth" />
                    <TextField className='Edit_input' fullWidth label="Selling Price" id="fullWidth" />
                    <TextField className='Edit_input' fullWidth label="Quantity" id="fullWidth" />

                    <Box className='submitBtn_cover'>
                        <Button variant="contained" onClick={() => addSubmitHandler()} className='submitBtn'>Submit</Button>
                    </Box>
                </Box>
            </Box>
        </AdminLayout>
    )
}

export default EditProduct
