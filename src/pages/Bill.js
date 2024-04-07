import * as React from 'react'
import AdminLayout from '../Layout/AdminLayout';
import { Typography } from '@mui/material';

const Bill = () => {

  


  return (
    <AdminLayout>

      <div className='bill_container'>
        <Typography className='bill_logo'>
          <img src='images/favicon.png' />
        </Typography>

        <div className='bill_cover'>
          <h1>INVOICE</h1>
        </div>

        <div className='bill_address_bar'>
            <h2>Invoice To:</h2>
          <div className='bill_address'>
<h3>Invoice# <span className='invoice'>53124</span></h3>
<h3>Date <span className='date'>01/01/2020</span></h3>
            </div>
            <h1>Maruf Bilah</h1>
            <h5>25 Dummy Street Area</h5>
            <h5>Location,Lorem Ipsum</h5>
            <h5>9694630425</h5>
  
        </div>



      </div>
      
    </AdminLayout>
  )
}

export default Bill








