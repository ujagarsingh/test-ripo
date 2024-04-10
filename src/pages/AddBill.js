import React, { useState } from 'react'
import AdminLayout from '../Layout/AdminLayout';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const AddBill = () => {

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
    ];

    const [bill, setBill] = useState(() => {

        return {
            'date': '',
            'client_name': '',
            'client_address': '',
            'Item_description': '',
            'price': '',
            'qty': '',
            'tax': '',
            'discount': ''
        }

    })


    const onChangeHandler = (e) => {
        debugger;
        setBill({ ...bill, [e.target.name]: e.target.value })

    }


    const finishHandler = async (e) => {
        e.preventDefault()
        debugger;
        console.log(bill)
    }

    return (
        <AdminLayout>

            <form onSubmit={finishHandler}>
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
                            <h3>Date <span className='date'><Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField onChange={(e) => onChangeHandler(e)} name='date' value={bill.date} type='date' variant="outlined" />
                            </Box></span></h3>
                        </div>
                        <h1>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    name='client_name'
                                    onChange={(e) => onChangeHandler(e)}
                                    value={bill.client_name}
                                    label="Client name"
                                    variant="outlined" />
                            </Box>
                        </h1>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField onChange={(e) => onChangeHandler(e)} name='client_address' value={bill.client_address} className='client_address_bar' id="outlined-multiline-static"
                                label="Client Address"
                                multiline
                                rows={4}
                            />
                        </Box>

                    </div>

                    <TableContainer className='table_list_cover'>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left'>Sl</TableCell>
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
                                        <TableCell align="left"><Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField onChange={(e) => onChangeHandler(e)} name='item_description' value={bill.item_description} label="Item Description" variant="outlined" />
                                        </Box></TableCell>
                                        <TableCell align="left"><Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField onChange={(e) => onChangeHandler(e)} name='price' value={bill.price} label="price" variant="outlined" />
                                        </Box></TableCell>
                                        <TableCell align="left"><Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField onChange={(e) => onChangeHandler(e)} name='qty' value={bill.qty} label="Qty." variant="outlined" />
                                        </Box></TableCell>
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
                            <h3 className='Tax_box'>Tax : <span className='tax'><Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField onChange={(e) => onChangeHandler(e)} name='tax' value={bill.tax} label="tax" variant="outlined" />
                            </Box></span></h3>
                            <h3 className='discount_box'>Discount : <span><Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField onChange={(e) => onChangeHandler(e)} name='discount' value={bill.discount} label="discount" variant="outlined" />
                            </Box>

                            </span></h3>
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
                            <h5>A/C Name: <span className='name'>Lorem Ipsum</span></h5>
                            <h5>Bank Details: <span className='bank_detail'>Add Your Bank Details</span></h5>
                        </div>
                    </div>



                    <div className='bill_footer'>
                        <h4>Authorized Sign</h4>
                    </div>


                </div>
                <div className='footer_btn'>
                    <Button variant='outlined'>Save as a draft</Button>
                    <Button variant='outlined' type="submit" color='error'>Save and preview</Button>
                </div>
            </form>

        </AdminLayout>
    )
}

export default AddBill
