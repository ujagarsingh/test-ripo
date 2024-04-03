import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Product from './Product'
import Event from './Event'
import  Details from './Details'
import { Box } from '@mui/material'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'


function Home() {
  return (
    <Box>
      <Navbar />
      <Slider />
      <Leftbar/>
      <Rightbar/>
      <Product />
      <Event />
      <Details />
    </Box>

  )
}

export default Home
