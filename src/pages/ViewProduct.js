import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AdminLayout from '../Layout/AdminLayout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


function ViewProduct() {
    const navigate = useNavigate();
  

    const addProduceBackHandler = () => {
        navigate("/product_list")
    }

    return (
        <AdminLayout>
            <Typography className='addProduct_title' variant='h4' >
      <ArrowBackIosIcon onClick={()=> addProduceBackHandler()}  /> View Product
    </Typography>
<div className='view_product_cover'>
    <Box  className='view_product'>
        <Typography variant='h5'>product_name = </Typography>
        <Typography variant='h5'>gagan</Typography>
    </Box>
    <Box  className='view_product'>
    
        <Typography variant='h5'>product_description = </Typography>
         
    
        <Typography variant='h5'>gagan</Typography>
    
    </Box>
    <Box  className='view_product'>
    
        <Typography variant='h5'>product_price = </Typography>
         
    
        <Typography variant='h5'>gagan</Typography>
    
    </Box>
    <Box  className='view_product'>
    
        <Typography variant='h5'>selling_price = </Typography>
         
    
        <Typography variant='h5'>gagan</Typography>
    
    </Box>
    <Box  className='view_product'>
    
        <Typography variant='h5'>quantity = </Typography>
         
    
        <Typography variant='h5'>gagan</Typography>
    
    </Box>
    <Box  className='view_product'>
    
        <Typography variant='h5'>product_category = </Typography>
         
    
        <Typography variant='h5'>gagan</Typography>
    
    </Box>

    </div>


        </AdminLayout>
    )
}

export default ViewProduct;
