import styled from "@emotion/styled";
import {
  AppBar,
  Menu,
  Toolbar,
  Typography,
  MenuItem,
  Avatar,
  Button,

} from "@mui/material";
import * as React from "react";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";
import MenuButton from "../components/MenuButton";

function AdminLayout({children}) {

  let navigate = useNavigate();

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const logoutHandler = () => {
    navigate("/")
  }
 
  const DashboardList = styled("div")({
    display: "flex",
  });

  return (
    <div className="admin_layout">
      <AppBar direction="column" position="sticky">
        <StyledToolBar>
          <Typography
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img src='images/favicon.png'  alt='icon'/>
          </Typography>
          <StoreIcon sx={{ display: { xs: "block", sm: "none" } }} />
          
        <Button onClick={()=>logoutHandler()} className="logout_btn">Logout</Button>
          
        </StyledToolBar>

        {/* <Menu
          id="demo-positioned-menu"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu> */}
      </AppBar>
      <div className="admin_page">
        <div className="sidebar">
          <DashboardList className="dashboard_list">
            <DashboardMenu className='dashboard_menu' />
          </DashboardList>
        </div>
        <div className="content_area">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
