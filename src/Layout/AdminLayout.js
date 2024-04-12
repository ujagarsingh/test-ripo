import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import StoreIcon from "@mui/icons-material/Store";
import { useNavigate } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AuthContext } from "../context/AuthContext";

function AdminLayout({ children, title, rightSection }) {
  let navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    // navigate("/");
  };

  const DashboardList = styled("div")({
    display: "flex",
  });

  const addProduceBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="admin_layout">
      <AppBar direction="column" position="sticky">
        <StyledToolBar>
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            <img src="images/favicon.png" alt="icon" />
          </Typography>
          <StoreIcon sx={{ display: { xs: "block", sm: "none" } }} />

          <Button onClick={logoutHandler} className="logout_btn">
            Logout
          </Button>
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
            <DashboardMenu className="dashboard_menu" />
          </DashboardList>
        </div>
        <div className="content_area">
          <div className="dashboard_header">
            <div className="dh_left_area">
              <div className="back_btn">
                <ArrowBackIosIcon onClick={() => addProduceBackHandler()} />
              </div>
              <div className="dh_title">{title}</div>
            </div>
            <div className="dh_right_area">{rightSection}</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
