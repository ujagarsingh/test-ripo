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
import categoryService from "../services/category.services";

const CategoryList = () => {
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

  // const getAllCategoryList = async () => {
  //   const data = await categoryService.getAllCategorys();
  //   setDataList(data);
  // };

  const deleteCategoryHandler = async (id) => {
    await categoryService.deleteCategory(id);
  };


  const getAllCategoryList = () => {
    const unSub = categoryService.categoryListener((data) => {
      setDataList(data);
    });
    return unSub;
  };

  useEffect(() => {
    const unSub = getAllCategoryList();
    return () => unSub();
  }, []);



  return (
    <AdminLayout
      title="Category List"
      rightSection={
        <Button
          onClick={() => navigate("/AddCategory")}
          variant="contained"
          color="secondary"
        >
          Add A Category
        </Button>
      }
    >
      <TableContainer className="table_list_cover">
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Sr.No.</StyledTableCell>
              <StyledTableCell align="left">id</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
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
                <TableCell align="left">
                  <div className="action_btn">
                    <VisibilityOutlinedIcon
                      color="primary"
                      onClick={() => navigate(`/viewCategory/${row.id}`)}
                    />
                    <EditOutlinedIcon
                      color="success"
                      onClick={() => navigate(`/EditCategory/${row.id}`)}
                    />
                    <DeleteIcon
                      color="error"
                      onClick={() => deleteCategoryHandler(row.id)}
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

export default CategoryList;
