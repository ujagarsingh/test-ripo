
import React from 'react';
import AdminLayout from '../Layout/AdminLayout';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';



export default function ProductList() {


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  function createData(id, ProductName, Description, Category,  ProductPrice, SellingPrice, Quantity, action,) {
    return { id, ProductName, Description, Category, ProductPrice, SellingPrice, Quantity,  action, };
  }


  const rows = [
    createData(1, 'camera', 'LDV65-SAI400K', 'Floor-standing Digital Signage', 4500, 5200, 1,  ''),
    createData(2, 'camera', 'SDT6C432-4P-GB-APV', '4MP 32X Smart Dual Light Network', 5000, 6500, 1,  ''),
    createData(3, 'camera', 'SD1A203T-GN', '2MP 3x Starlight IR PTZ Network C', 10000, 14500, 1,  ''),
    createData(4, 'camera', 'SDT6C432-4P-GB-APV', '4MP 32X Smart Dual Light Network', 15000, 20850, 1, ''),
    createData(5, 'camera', 'F2C-LED', '2MP Entry Full-color Fixed-focal W', 2800, 4200, 1, 'Full-color Fixed', ''),
    createData(6, 'camera', 'CS4218-16ET-135', '4MP 32X Smart Dual Light Network', 7500, 9200, 1,  ''),
    createData(7, 'camera', 'TPC-AEPT8441-T', 'Thermal Anti-Explosion Hybrid PTZ', 8800, 10200, 1,  ''),
  ];

  const navigate = useNavigate()
  // const addProductHandler = () => {
  //   navigate('/AddProduct')
  // }

  const ViewProductHandler = () => {
    navigate("/viewProduct")
  }

  const editProductHandler =() => {
    navigate("/EditProduct")
  }

  const AddProductHandler =() => {
    navigate("/AddProduct")
  }

  return (
    <AdminLayout>
      <div className='product_list_btn'>
        <Button onClick={()=>AddProductHandler()} variant='contained' color="secondary">Add A Product</Button>
      </div>
      <TableContainer className='table_list_cover'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='left'>id</TableCell>
              <StyledTableCell align="left">ProductName</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">ProductPrice</StyledTableCell>
              <StyledTableCell align="left">SellingPrice</StyledTableCell>
              <StyledTableCell align="left">Quantity</StyledTableCell>
              <StyledTableCell align="left">Category</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='left'>{row.id}</TableCell>
                <TableCell align="left">{row.ProductName}</TableCell>
                <TableCell align="left">{row.Description}</TableCell>
                <TableCell align="left">{row.ProductPrice}</TableCell>
                <TableCell align="left">{row.SellingPrice}</TableCell>
                <TableCell align="left">{row.Quantity}</TableCell>
                <TableCell align="left">{row.Category}</TableCell>
                <TableCell align="left">
                  <div className='action_btn'>

                  <VisibilityOutlinedIcon color="primary" onClick={()=> ViewProductHandler()} />
                  <EditOutlinedIcon color="success" onClick={()=> editProductHandler()} />
                  <DeleteIcon color="error" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
}









