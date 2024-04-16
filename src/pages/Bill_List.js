import React, { useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import billServices from "../services/bill.services";

const BillList = () => {
  const [billList, setBillList] = useState([]);
  const navigate = useNavigate();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  // const getAllCategoryList = async () => {
  //   const data = await categoryService.getAllCategorys();
  //   setDataList(data);
  // };

  const deleteBillHandler = async (id) => {
    await billServices.deleteBill(id);
  };


  const getAllBillList = () => {
    const unSub = billServices.billListener((data) => {
        setBillList(data);
    });
    return unSub;
  };

  useEffect(() => {
    const unSub = getAllBillList();
    return () => unSub();
  }, []);



  return (
    <AdminLayout
      title="Bill List"
      rightSection={
        <Button
          onClick={() => navigate("/addBill")}
          variant="contained"
          color="secondary"
        >
          Add A Bill
        </Button>
      }
    >
      <TableContainer className="table_list_cover">
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Sr.No.</StyledTableCell>
              <StyledTableCell align="left">id</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">Balance</StyledTableCell>
              <StyledTableCell align="left">Payment</StyledTableCell>
              <StyledTableCell align="left">Total</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {billList.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell align="left">{row?.id}</TableCell>
                <TableCell align="left">{row?.date}</TableCell>
                <TableCell align="left">{row?.client_name}</TableCell>
                <TableCell align="left">{row?.client_Phone}</TableCell>
                <TableCell align="left">{row?.client_address}</TableCell>
                <TableCell align="left">{row?.balance}</TableCell>
                <TableCell align="left">{row?.payment}</TableCell>
                <TableCell align="left">{row?.total}</TableCell>
                <TableCell align="left">
                  <div className="action_btn">
                    <VisibilityOutlinedIcon
                      color="primary"
                      onClick={() => navigate(`/viewCategory/${row.id}`)}
                    />
                    <EditOutlinedIcon
                      color="success"
                      onClick={() => navigate(`/EditBill/${row.id}`)}
                    />
                    <DeleteIcon
                      color="error"
                      onClick={() => deleteBillHandler(row.id)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default BillList;
