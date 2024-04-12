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
import clientServices from "../services/client.services";




const ClientList = () => {
  
  const [clientList, setClientList] = useState([]);
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

  
  const getAllClientList = async () => {
    const data = await clientServices.getAllClient();
    setClientList(data);
  };
  
  const deleteClientHandler = async (id) => {
    const data = await clientServices.deleteClient(id);
    getAllClientList()
  };
  
  useEffect(() => {
    getAllClientList();
  }, []);

  return (
    <AdminLayout
      title="Client List"
      rightSection={
        <Button
          onClick={() => navigate("/AddClient")}
          variant="contained"
          color="secondary"
        >
          Add A Client
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
              <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">State</StyledTableCell>
              <StyledTableCell align="left">City</StyledTableCell>
              <StyledTableCell align="left">Mobile Phone</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientList.map((row, index) => (
              <TableRow
                key={index}
              >
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell align="left">{row?.id}</TableCell>
                <TableCell align="left">{row?.name}</TableCell>
                <TableCell align="left">{row?.address}</TableCell>
                <TableCell align="left">{row?.state}</TableCell>
                <TableCell align="left">{row?.city}</TableCell>
                <TableCell align="left">{row?.phone}</TableCell>

                <TableCell align="left">
                  <div className="action_btn">
                    <VisibilityOutlinedIcon
                      color="primary"
                      onClick={() => navigate(`/viewClient/${row.id}`)}
                    />
                    <EditOutlinedIcon
                      color="success"
                      onClick={() => navigate(`/EditClient/${row.id}`)}
                    />
                    <DeleteIcon
                      color="error"
                      onClick={() => deleteClientHandler(row.id)}
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

export default ClientList
