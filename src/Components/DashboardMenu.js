import React, { useState } from "react";
import {
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
import { useNavigate } from "react-router-dom";

function DashboardMenu() {
  let navigate = useNavigate();

  const [openDashMenu, setOpenDashMenu] = useState(true);

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
          <ListItemText
            primary="Client"
            onClick={() => navigate("/clientList")}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ProductionQuantityLimitsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Product"
            onClick={() => navigate("/productList")}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText
            primary="Category"
            onClick={() => navigate("/categoryList")}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CurrencyRupeeIcon />
          </ListItemIcon>
          <ListItemText primary="Bill" onClick={() => navigate("/billList")} />
        </ListItemButton>
      </List>
      <MenuButton activeProp={openDashMenu} onClickFun={setOpenDashMenu} />
    </div>
  );
}

export default DashboardMenu;
