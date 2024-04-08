import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AdminLayout from '../Layout/AdminLayout';



function ViewProduct() {
    const navigate = useNavigate();
    const BackHandler = () => {
        navigate('/Product')
    }

    return (
        <AdminLayout>
            <Box className='ViewProduct'>
                <Box className='ViewproductField_box'>
                    <Box className='Back_cover'>
                        <Button variant="contained" onClick={() => BackHandler()} className='Back'>Back To Product</Button>
                    </Box>
                    <Box className='ViewProduct_box'>
                        <Typography gutterBottom variant="h5" className='ViewProduct_title'>View Product</Typography>
                    </Box>
                    <TextField className='View_input' fullWidth label="Product Name" id="fullWidth" />
                    <TextField className='View_input' fullWidth label="Product Description" id="fullWidth" />
                    <TextField className='View_input' fullWidth label="Product Category" id="fullWidth" />
                    <TextField className='View_input' fullWidth label="ProductPrice" id="fullWidth" />
                    <TextField className='View_input' fullWidth label="Selling Price" id="fullWidth" />
                    <TextField className='View_input' fullWidth label="Quantity" id="fullWidth" />
                </Box>
            </Box>
        </AdminLayout>
    )
}

export default ViewProduct;
