import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../Layout/AdminLayout';
import { Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function FullWidthTextField() {

  const navigate = useNavigate();

  const addProduceBackHandler = () => {
    navigate('/product_list')
  }


  const[addProduct,setAddProduct] = useState(()=>{
    return {
      'product_name': '',
      'product_description': '',
      'product_price': '',
      'selling_price': '',
      'product_category': '',
      'quantity': ''
    }
  })

  const onChangeHandler = (e) => {
    setAddProduct({...addProduct, [e.target.name]: e.target.value})
  }


  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(addProduct);
  }



  return (
    <AdminLayout>
      <Typography className='addProduct_title' variant='h4' >
      <ArrowBackIosIcon onClick={()=> addProduceBackHandler()}  /> Add Product
    </Typography>
      <form onSubmit={onSubmitHandler} className='addProduct_cover'>
      <Box className='addProductInputBox'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '250px' },
      }}
      noValidate
      autoComplete="off"
    >
      <label>ProductName * </label>
      <TextField size='small' onChange={e=>onChangeHandler(e)} name='product_name' value={addProduct.product_name} id="outlined-basic" label="ProductName" variant="outlined" />
    
    </Box>
      <Box className='addProductInputBox'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '250px' },
      }}
      noValidate
      autoComplete="off"
    >
      <label>Description * </label>
      <TextField size='small' onChange={e=>onChangeHandler(e)} name='product_description' value={addProduct.product_description} id="outlined-basic" label="Description" variant="outlined" />
    </Box>
      <Box className='addProductInputBox'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '250px' },
      }}
      noValidate
      autoComplete="off"
    >
      <label>ProductPrice * </label>
      <TextField size='small'  onChange={e=>onChangeHandler(e)} name='product_price' value={addProduct.product_price} id="outlined-basic" label="ProductPrice" variant="outlined" />
    </Box>
      <Box className='addProductInputBox'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '250px' },
      }}
      noValidate
      autoComplete="off"
    >
      <label>SellingPrice * </label>
      <TextField size='small' onChange={e=>onChangeHandler(e)} name='selling_price' value={addProduct.selling_price} id="outlined-basic" label="SellingPrice" variant="outlined" />
    </Box>
      <Box className='addProductInputBox'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '250px' },
      }}
      noValidate
      autoComplete="off"
    >
      <label>Quantity * </label>
      <TextField size='small' onChange={e=>onChangeHandler(e)} name='quantity' value={addProduct.quantity} id="outlined-basic" label="Quantity" variant="outlined" />
    </Box>
      <Box className='addProductInputBox'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '250px' },
      }}
      noValidate
      autoComplete="off"
    >
      <label>Category * </label>
      <TextField size='small' onChange={e=>onChangeHandler(e)} name='product_category' value={addProduct.product_category} id="outlined-basic" label="Category" variant="outlined" />
    </Box>
<div className='addProduct_btn'>
    <Button type='submit' variant='contained' color="success">Submit</Button>
</div>
    
    </form>

        </AdminLayout>
  );
}