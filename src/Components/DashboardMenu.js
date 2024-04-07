import React, { useState } from "react";
import {
<<<<<<< HEAD

=======
>>>>>>> bef115b05bc43591cb35c77b987686b3012b34b7
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CategoryIcon from "@mui/icons-material/Category";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MenuButton from "./MenuButton";
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { useNavigate } from "react-router-dom";
>>>>>>> bef115b05bc43591cb35c77b987686b3012b34b7

function DashboardMenu() {

  const navigate = useNavigate();
  const addProduct = () => {
    navigate("/Product");
  }
  const [openDashMenu, setOpenDashMenu] = useState(true);

  let navigate = useNavigate();
  const BillHandler = () => {
navigate("/bill")
  }
  return (
    <div className={`dashboardMenuList ${openDashMenu ? "active" : ""} `}>
      <List
        sx={{
          width: "100%",
          maxWidth: 250,
          bgcolor: "#717275",
          color: "white",
          height: "89.9vh",
        }}
        component="nav"
        subheader={
          <ListSubheader
            sx={{
              background: "#717275",
              fontSize: "20px",
              color: "white",
              fontWeight: "700",
            }}
            component="div"
            id="nested-list-subheader"
          >
            {openDashMenu ? "DASHBOARD" : ""}
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Client" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ProductionQuantityLimitsIcon />
          </ListItemIcon>
          <ListItemText primary="Product" onClick={() => addProduct()} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Category" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CurrencyRupeeIcon />
          </ListItemIcon>
          <ListItemText onClick={()=>BillHandler()} primary="Bill" />
        </ListItemButton>
      </List>
      <MenuButton activeProp={openDashMenu} onClickFun={setOpenDashMenu} />
    </div>
  );
}

export default DashboardMenu;
