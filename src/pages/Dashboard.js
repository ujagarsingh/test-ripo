
import React from "react";
import AdminLayout from "../Layout/AdminLayout";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.white,
  },
}));

const Dashdata = [{
  Client_Name: ' Kuldeep',
  Mobile: 9782960832,
  Total: 25500,
  Deposite: 20500,
  Balance: 5000,
  Due_Time: 5
},
{
  Client_Name: 'Ajay',
  Mobile: 9782960833,
  Total: 35500,
  Deposite: 20500,
  Balance: 15000,
  Due_Time: 8
},
{
  Client_Name: 'Ranjan',
  Mobile: 9782960834,
  Total: 45500,
  Deposite: 20500,
  Balance: 25000,
  Due_Time: 10
},
{
  Client_Name: 'Ajay',
  Mobile: 9782960833,
  Total: 35500,
  Deposite: 20500,
  Balance: 15000,
  Due_Time: 8
},
{
  Client_Name: 'Rajani',
  Mobile: 9782960822,
  Total: 45500,
  Deposite: 20500,
  Balance: 25000,
  Due_Time: 10
},
{
  Client_Name: 'Jay',
  Mobile: 9782960855,
  Total: 55500,
  Deposite: 50000,
  Balance: 5500,
  Due_Time: 15
}
]


export default function BasicCard() {
  return (
    <AdminLayout
    title="Sales Overview">
      <Box >
        {/* 0 */}
      </Box>
      <Box className='CardParent'>
        <Card className='basic_card'>
          <Box>
            <CardContent className="CardContent" >
              <Box className='Content'>
                <Typography className="Title_text" >
                  <ReceiptLongOutlinedIcon className="personIcon" /> Total Revenue
                </Typography>
                <Typography variant="body2" className='Dot'>
                  ...
                </Typography>
              </Box>
              <Box className='middleLine'>
                <Typography variant="h5" component="div" className="Revenue">
                  $145,500
                </Typography>
                <Typography className="increment">
                  <ArrowUpwardOutlinedIcon className="increIcon" />12.25%
                </Typography>
              </Box>
              <Typography variant="body2">
                From Last Weeks
              </Typography>
            </CardContent>
          </Box>
        </Card>

        <Card className='basic_card'>
          <Box>
            <CardContent className="CardContent" >
              <Box className='Content'>
                <Typography className="Title_text" gutterBottom>
                  <BorderColorOutlinedIcon className="personIcon" /> Average Order
                </Typography>
                <Typography variant="body2" className='Dot'>
                  ...
                </Typography>
              </Box>
              <Box className='middleLine'>
                <Typography variant="h5" component="div" className="Revenue Order">
                  $1,250
                </Typography>
                <Typography className="increment">
                  <ArrowUpwardOutlinedIcon className="increIcon" />10%
                </Typography>
              </Box>
              <Typography variant="body2">
                From Last Weeks
              </Typography>
            </CardContent>
          </Box>
        </Card>

        <Card className='basic_card'>
          <Box>
            <CardContent className="CardContent" >
              <Box className='Content'>
                <Typography className="Title_text" >
                  <PeopleOutlineOutlinedIcon className="personIcon" /> Total Custumers
                </Typography>
                <Typography variant="body2" className='Dot'>
                  ...
                </Typography>
              </Box>
              <Box className='middleLine'>
                <Typography variant="h5" component="div" className="Revenue">
                  $650
                </Typography>
                <Typography className="increment">
                  <ArrowUpwardOutlinedIcon className="increIcon" />8%
                </Typography>
              </Box>
              <Typography variant="body2">
                From Last Weeks
              </Typography>
            </CardContent>
          </Box>
        </Card>

        <Card className='basic_card'>
          <Box>
            <CardContent className="CardContent" >
              <Box className='Content'>
                <Typography className="Title_text" gutterBottom>
                  <ViewInArOutlinedIcon className="personIcon" /> Product Sold
                </Typography>
                <Typography variant="body2" className='Dot'>
                  ...
                </Typography>
              </Box>
              <Box className='middleLine'>
                <Typography variant="h5" component="div" className="Revenue Order">
                  $450
                </Typography>
                <Typography className="decrement">
                  <ArrowDownwardOutlinedIcon className="decreIcon" />2.5%
                </Typography>
              </Box>
              <Typography variant="body2">
                From Last Weeks
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>

      <Box>
        <TableContainer className="table_list_cover">
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Sr.No.</StyledTableCell>
                <StyledTableCell align="left">Client Name</StyledTableCell>
                <StyledTableCell align="left">Mobile</StyledTableCell>
                <StyledTableCell align="left">Total</StyledTableCell>
                <StyledTableCell align="left">Deposite</StyledTableCell>
                <StyledTableCell align="center">Balance</StyledTableCell>
                <StyledTableCell align="center">Due Time(Monts)</StyledTableCell>
                <StyledTableCell align="center">Action(Months)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                Dashdata.map((row, index) => (
                  <TableRow key={index}>
                    <StyledTableCell align="left">{index + 1}</StyledTableCell>
                    <StyledTableCell align="left">{row?.Client_Name}</StyledTableCell>
                    <StyledTableCell align="left">{row?.Mobile}</StyledTableCell>
                    <StyledTableCell align="left">{row?.Total}</StyledTableCell>
                    <StyledTableCell align="left">{row?.Deposite}</StyledTableCell>
                    <StyledTableCell align="center">{row?.Balance}</StyledTableCell>
                    <StyledTableCell align="center">{row?.Due_Time}</StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="action_btn">
                        <VisibilityOutlinedIcon
                          color="primary"
                          onClick={() => (`/viewCategory/${row.id}`)}
                        />
                        <EditOutlinedIcon
                          color="success"
                          onClick={() => (`/EditCategory/${row.id}`)}
                        />
                        <DeleteIcon
                          color="error"
                          onClick={() => (row.id)}
                        />
                      </div>
                    </StyledTableCell>
                  </TableRow>
                ))
              }

            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
}





