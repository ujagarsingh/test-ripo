import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";


const BillFrm = ({
  onChangeHandler,
  billData,
  productList,
  clientList,
  onHandler = [],
}) => {

  console.log(billData.items);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      Padding: theme.palette.common.none
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,

    },

  }));

  return (
    <Formik
      initialValues={clientData}
      validationSchema={clientSchema}
      enableReinitialize={true}
      onSubmit={(values) => {
        onSubmitHandler(values)
      }}
    >
      {(formik) => {
        const { handleSubmit, handleChange, handleBlur, values, errors } = formik;
        return (
          <form onSubmit={onHandler} >

            <div className="bill_container">
              <Typography className="bill_logo">
                <img src="images/favicon.png" />
              </Typography>

              <div className="bill_cover">
                <h1>INVOICE</h1>
              </div>

              <div className="bill_address_bar">
                <h2>Invoice To:</h2>
                <div className="bill_address">
                  <h3>
                    Invoice# <span className="invoice">53124</span>
                  </h3>
                  <h3>
                    Date{" "}
                    <span className="date">
                      <Box
                        component="div"
                        sx={{
                          "& > :not(style)": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          size="small"
                          //  onChange={(e) => onChangeHandler(e)}
                          name="date"
                          value={billData?.date}
                          type="date"
                          variant="outlined"
                        />
                      </Box>
                    </span>
                  </h3>
                </div>
                <h1>
                  <Box
                    component="div"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <Select
                      name="client_id"
                      value={billData?.client_id}
                      onChange={onChangeHandler}
                      size="small"
                      sx={{ width: 210 }}
                    >
                      {clientList.map((item) => {
                        return (
                          <MenuItem key={item.id} value={item.id}>
                            {item.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </Box>
                </h1>
                <Box
                  component="div"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    onChange={(e) => onChangeHandler(e)}
                    name="client_address"
                    value={billData.client_address}
                    className="client_address_bar"
                    id="outlined-multiline-static"
                    label="Client Address"
                    multiline
                    rows={4}
                  />
                </Box>
              </div>

              <TableContainer className="table_list_cover">
                <Table size="small" className='small'>
                  <TableHead >
                    <TableRow>
                      <StyledTableCell align="left">Sr.No.</StyledTableCell>
                      <StyledTableCell align="left">Product</StyledTableCell>
                      <StyledTableCell align="left">Price</StyledTableCell>
                      <StyledTableCell align="left">quantity.</StyledTableCell>
                      <StyledTableCell align="left">Total</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {billData.items.map((item, index) => {
                      return (
                        <TableRow size='small'
                          key={index}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {billData.name}
                          </TableCell>
                          <TableCell align="left">
                            <Box
                              component="div"
                              sx={{
                                "& > :not(style)": { m: 1, width: "25ch" },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <Select
                                name="product_id"
                                value={item.product_id}
                                onChange={(e) => onChangeHandler(e, index)}
                                size="small"
                                sx={{ width: 210 }}
                              >
                                {productList.map((item) => (
                                  <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                  </MenuItem>
                                ))}
                              </Select>

                              {/* <TextField size='small' onChange={(e) => onChangeHandler(e)} name='item_description' value={billData.item_description} label="Item Description" variant="outlined" /> */}
                            </Box>
                          </TableCell>
                          <TableCell align="left">
                            <Box
                              component="div"
                              sx={{
                                "& > :not(style)": { m: 1, width: "25ch" },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <TextField
                                size="small"
                                onChange={(e) => onChangeHandler(e, index)}
                                name="price"
                                value={item.price}
                                variant="outlined"
                              />
                            </Box>
                          </TableCell>
                          <TableCell align="left">
                            <Box
                              component="div"
                              sx={{
                                "& > :not(style)": { m: 1, width: "25ch" },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <TextField
                                size="small"
                                onChange={(e) => onChangeHandler(e, index)}
                                name="quantity"
                                value={item.quantity}
                                variant="outlined"
                              />
                            </Box>
                          </TableCell>
                          <TableCell align="left">{item.total}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>

              <div className="bill_total_cover">
                <h2>Thank You For Your Business</h2>
                <div className="bill_total">
                  <h3>
                    Total : <span className="sub_total">{billData?.total}</span>
                  </h3>
                  <h3 className="Tax_box">
                    discount :{" "}
                    <span className="tax">
                      <Box
                        component="div"
                        sx={{
                          "& > :not(style)": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          size='small'
                          onChange={(e) => onChangeHandler(e)}
                          name="discount"
                          value={billData?.discount}
                          label="discount"
                          variant="outlined"
                        />
                      </Box>
                    </span>
                  </h3>

                </div>
              </div>

              <div className="bill_term_condition_cover">
                <h3>Term & Conditions</h3>
                <div className="bill_term_total">
                  <p>
                    Lorem Ipsum is simply dummt text of the printing and typesetting
                    industry. Lorem ipsum has been the industry's standred dummy text.
                  </p>
                  <h2>
                    Grand Total: <span>{billData.g_total}</span>
                  </h2>
                </div>
              </div>

              <div className="bill_payment_cover">
                <h2>Payment Info</h2>

                <div className="bill_payment">
                  <h5>
                    Account #: <span className="account">1210 5210 8542</span>
                  </h5>
                  <h5>
                    A/C Name: <span className="name">Pankaj Singh</span>
                  </h5>
                  <h5>
                    Bank Details:{" "}
                    <span className="bank_detail">Add Your Bank Details</span>
                  </h5>
                </div>
              </div>

              <div className="bill_footer">
                <h4>Authorized Sign</h4>
              </div>
            </div>
            <div className="footer_btn">
              <Button variant="outlined">Save as a draft</Button>
              <Button variant="outlined" type="submit" color="error">
                Save and preview
              </Button>
            </div>
          </form>
        );
      }};
    </Formik>
  )
}


export default BillFrm;
