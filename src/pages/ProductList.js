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
import ProductService from "../services/product.services";

export default function ProductList() {
  const [dataList, setDataList] = useState([]);
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

  const deleteProductHandler = async (id) => {
    await ProductService.deleteProduct(id);
  };

  const getAllProductList = () => {
    const unSub = ProductService.productListener((data) => {
      setDataList(data);
    });
    return unSub;
  };

  useEffect(() => {
    const unSub = getAllProductList();
    return () => unSub();
  }, []);



  return (
    <AdminLayout
      title="Product List"
      rightSection={
        <Button
          onClick={() => navigate("/AddProduct")}
          variant="contained"
          color="secondary"
        >
          Add A Product
        </Button>
      }
    >
      <TableContainer className="table_list_cover">
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Sr.No.</StyledTableCell>
              <StyledTableCell align="left">id</StyledTableCell>
              <StyledTableCell align="left">ProductName</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">ProductPrice</StyledTableCell>
              <StyledTableCell align="left">SellingPrice</StyledTableCell>
              <StyledTableCell align="left">Quantity</StyledTableCell>
              <StyledTableCell align="left">Category</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell align="left">{row?.id}</TableCell>
                <TableCell align="left">{row?.name}</TableCell>
                <TableCell align="left">{row?.description}</TableCell>
                <TableCell align="left">{row?.purchases_price}</TableCell>
                <TableCell align="left">{row?.selling_price}</TableCell>
                <TableCell align="left">{row?.quantity}</TableCell>
                <TableCell align="left">{row?.category_id}</TableCell>
                <TableCell align="left">
                  <div className="action_btn">
                    <VisibilityOutlinedIcon
                      color="primary"
                      onClick={() => navigate(`/viewProduct/${row.id}`)}
                    />
                    <EditOutlinedIcon
                      color="success"
                      onClick={() => navigate(`/EditProduct/${row.id}`)}
                    />
                    <DeleteIcon
                      color="error"
                      onClick={() => deleteProductHandler(row.id)}
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
}
