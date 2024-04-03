import styled from "@emotion/styled";
import {
  AppBar,
  Menu,
  Toolbar,
  Typography,
  MenuItem,
  Button,
  Avatar,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as React from "react";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";
import MenuButton from "../components/MenuButton";

function Dashboard() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const handleClose = () => {
    navigate({
      pathname: "/",
    });
  };

  const DashboardList = styled("div")({
    display: "flex",
  });

  return (
    <>
      <AppBar direction="column" position="sticky">
        <StyledToolBar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            VK Enterprises
          </Typography>
          <StoreIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Avatar>
            <PersonIcon onClick={(e) => setOpen(true)}></PersonIcon>
          </Avatar>
        </StyledToolBar>

        <Menu
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
        </Menu>
      </AppBar>

      <DashboardList>
        <DashboardMenu />
      </DashboardList>
    </>
  );
}

export default Dashboard;
