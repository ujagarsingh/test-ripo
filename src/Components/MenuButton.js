import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AppBar, Menu, Toolbar, Typography,MenuItem, Button, Avatar, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import styled from '@emotion/styled';
function MenuButton() {

  const div = styled("div")({
    display:'flex',
    flexDirection:'row'
      })



  return (
    <div className='arrowKeys'>
     <Button variant='outlined' sx={{direction:'row'}}>
        <ArrowForwardIcon/>
      </Button> 


     <Button variant='outlined' sx={{direction:'row'}}>
        <ArrowBackIcon/>
      </Button> 

      </div>
    
  )
}

export default MenuButton
