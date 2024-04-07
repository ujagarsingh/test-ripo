
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AdminLayout from '../Layout/AdminLayout';
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'ProductName', headerName: 'Product Name', width: 130 },
  { field: 'Description', headerName: 'Description', width: 170 },
  { field: 'Category', headerName: 'Category', width: 170 },
  { field: 'ProductPrice', headerName: 'Product Price', width: 130 },
  {
    field: 'SellingPrice',
    headerName: 'Selling Price ',
    type: 'number',
    width: 90,
  },

  {
    field: 'Quantity',
    headerName: 'Quantity',
    width: 120
  },

  {
    field: 'Action',
    headerName: 'Action',
    width: 300
  },
];


const rows = [
  { id: 1, ProductName: 'LDV65-SAI400K', Description: "65'' Floor-standing Digital Signage", ProductPrice: '4500', SellingPrice: 5200, Quantity: '', Category: 'Floor-standing' },
  { id: 2, ProductName: 'SDT6C432-4P-GB-APV', Description: "4MP 32X Smart Dual Light Network", ProductPrice: '5000', SellingPrice: 6500, Quantity: '', Category: '32X Smart Dual' },
  { id: 3, ProductName: 'SD1A203T-GN', Description: "2MP 3x Starlight IR PTZ Network C", ProductPrice: '10000', SellingPrice: 14500, Quantity: '', Category: 'Starlight IR' },
  { id: 4, ProductName: 'SDT6C432-4P-GB-APV', Description: "4MP 32X Smart Dual Light Network", ProductPrice: '15000', SellingPrice: 20850, Quantity: '', Category: ' Dual Light' },
  { id: 5, ProductName: 'F2C-LED', Description: "2MP Entry Full-color Fixed-focal W", ProductPrice: '2800', SellingPrice: 4200, Quantity: '', Category: 'Full-color Fixed' },
  { id: 6, ProductName: 'CS4218-16ET-135', Description: "4MP 32X Smart Dual Light Network", ProductPrice: 7500, SellingPrice: 9200, Quantity: '', Category: 'Light Network' },
  { id: 7, ProductName: 'TPC-AEPT8441-T', Description: "Thermal Anti-Explosion Hybrid PTZ", ProductPrice: '8800', SellingPrice: 10200, Quantity: '', Category: 'Anti-Explosion' },
  { id: 8, ProductName: 'T2A-LED', Description: "2MP Entry Full-color Fixed-focal Wi", ProductPrice: '7800', SellingPrice: 9300, Quantity: '', Category: 'Fixed-focal Wi' },
];


export default function ProductList() {

  const navigate = useNavigate()
  const addProductHandler = () => {
    navigate('/AddProduct')
  }
  
  return (
    <AdminLayout>
      <Box className='addButton'>
        <Button className='Addbtn' variant="contained" onClick={() => addProductHandler()}>Add Product</Button>
      </Box>
      <div className='dataGrid_cover'>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </AdminLayout>
  );
}
