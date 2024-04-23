import * as React from 'react'
import AdminLayout from '../Layout/AdminLayout';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Button, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Bill = () => {


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein, };
  }

  const rows = [
    createData(1, 'Lorem Dolor Ipsum', '$20.00', 1, '$20.00'),
    createData(2, 'Lorem Dolor Ipsum', '$50.00', 1, '$50.00'),
    createData(3, 'Lorem Dolor Ipsum', '$60.00', 1, '$60.00'),
    createData(4, 'Lorem Dolor Ipsum', '$70.00', 1, '$70.00'),
    createData(5, 'Lorem Dolor Ipsum', '$80.00', 1, '$80.00'),
    createData(5, 'Lorem Dolor Ipsum', '$80.00', 1, '$80.00'),
    createData('', '', '', '', ''),
    createData('', '', '', '', ''),
  ];


  let navigate = useNavigate()

  const AddBillHandler = () => {
    navigate("/addbill")
  }



  return (
    <AdminLayout>

      <div className='bill_container'>
        <Button onClick={() => AddBillHandler()} variant='outlined' sx={{ display: 'flex', alignItem: 'end', justifyContent: 'end' }}>Add A Bill</Button>
        <Typography className='bill_logo'>
          <img src='images/favicon.png' alt='vk' />
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

        <TableContainer className='table_list_cover'>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align='left'>Sr.No.</StyledTableCell>
                <StyledTableCell align="left">Item Description</StyledTableCell>
                <StyledTableCell align="left">Price</StyledTableCell>
                <StyledTableCell align="left">Qty.</StyledTableCell>
                <StyledTableCell align="left">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        <div className='bill_total_cover'>
          <h2>Thank You For Your Business</h2>
          <div className='bill_total'>
            <h3>Sub Total : <span className='sub_total'>280$</span></h3>
            <h3>Tax : <span className='tax'>0.00%</span></h3>
          </div>
        </div>


        <div className='bill_term_condition_cover'>
          <h3>Term & Conditions</h3>
          <div className='bill_term_total'>
            <p>
              Lorem Ipsum is simply dummt text of the printing and typesetting industry. Lorem ipsum has been the industry's standred dummy text.
            </p>
            <h2>Total: <span>280$</span></h2>
          </div>

        </div>


        <div className='bill_payment_cover'>
          <h2>Payment Info</h2>

          <div className='bill_payment'>
            <h5>Account #: <span className='account'>1210 5210 8542</span></h5>
            <h5>A/C Name: <span className='name'>Jigyasa Sharma</span></h5>
            <h5>Bank Details: <span className='bank_detail'>Add Your Bank Details</span></h5>
          </div>
        </div>



        <div className='bill_footer'>
          <h4>Authorized Sign</h4>
        </div>


      </div>

    </AdminLayout>
  )
}

export default Bill








