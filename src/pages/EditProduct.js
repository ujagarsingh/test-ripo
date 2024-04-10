import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
// import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AdminLayout from '../Layout/AdminLayout';



function EditProduct() {
    // const navigate = useNavigate();

    const [productList, setProductList] = useState({
        'product_name': '',
        'product_description': '',
        'product_category': '',
        'product_price': '',
        'selling_price': '',
        'quantity': ''
    })

    const onChangeHandler = (e) => {
        setProductList({ ...productList, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(productList);
    }

    return (
        <AdminLayout>
            <form className='EditProduct' onSubmit={onSubmitHandler}>
                <Box className='EditField_box'>
                    <Box className='EditProduct_box'>
                        <Typography gutterBottom variant="h5" className='EditProduct_title'>Edit Product</Typography>
                    </Box>
                    <TextField onChange={e => onChangeHandler(e)} name='product_name' value={productList.product_name} className='Edit_input' fullWidth label="Product Name" id="fullWidth" />
                    <TextField onChange={e => onChangeHandler(e)} name='product_description' value={productList.product_description} className='Edit_input' fullWidth label="Product Description" id="fullWidth" />
                    <TextField onChange={e => onChangeHandler(e)} name='product_category' value={productList.product_category} className='Edit_input' fullWidth label="Product Category" id="fullWidth" />
                    <TextField onChange={e => onChangeHandler(e)} name='product_price' value={productList.product_price} className='Edit_input' fullWidth label="ProductPrice" id="fullWidth" />
                    <TextField onChange={e => onChangeHandler(e)} name='selling_price' value={productList.selling_price} className='Edit_input' fullWidth label="Selling Price" id="fullWidth" />
                    <TextField onChange={e => onChangeHandler(e)} name='quantity' value={productList.quantity} className='Edit_input' fullWidth label="Quantity" id="fullWidth" />

                    <Box className='submitBtn_cover'>
                        <Button type='submit' variant="contained" className='submitBtn'>Submit</Button>
                    </Box>
                </Box>
            </form>
        </AdminLayout>
    )
}

export default EditProduct
