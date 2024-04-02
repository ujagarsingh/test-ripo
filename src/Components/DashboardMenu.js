import React from 'react'
import { AppBar, Menu, Toolbar, Typography,MenuItem, Button, Avatar, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function DashboardMenu() {
  return (
    <List className={`menuList active`} sx={{ width: '100%', maxWidth: 250, bgcolor: '#717275',color:'white',height:'89.9vh' }}
      component="nav"
            subheader={
        <ListSubheader sx={{background:'#717275',fontSize:'20px',color:'white',fontWeight:'700'}} component="div" id="nested-list-subheader">
          DASHBOARD
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
        <ListItemText primary="Product" />
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
        <ListItemText primary="Bill" />
      </ListItemButton>

      </List>
  )
}

export default DashboardMenu
