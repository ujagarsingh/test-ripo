import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function FullWidthTextField() {

  const navigate = useNavigate();
  const addSubmitHandler = () => {
    navigate('/Product')
  }
  return (
    <Box className='addForm'>
      <Box className='textField_box'>
        <Box className='addProduct_box'>
          <Typography gutterBottom variant="h5" className='addProduct_title'>Add Product</Typography>
        </Box>
        <TextField className='Product_input' fullWidth label="Enter Product Name" id="fullWidth" />
        <TextField className='Product_input' fullWidth label="fullWidth" id="fullWidth" />
        <TextField className='Product_input' fullWidth label="fullWidth" id="fullWidth" />
        <TextField className='Product_input' fullWidth label="fullWidth" id="fullWidth" />
        <Box className='submitBtn_cover'>
          <Button variant="contained" onClick={() => addSubmitHandler()} className='submitBtn'>Submit</Button>
        </Box>
      </Box>
    </Box>
  );
}