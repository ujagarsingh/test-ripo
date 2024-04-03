import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Product from './Product'
import Event from './Event'
import Details from './Details'
import { Box, Container, Grid } from '@mui/material'
import Leftbar from './Solution'


function Home() {
  return (
    <Box>
      <Navbar />
      <Slider />
      <Solution />
      <Product />
      <Event />
      <Details />
    </Box>

  )
}

export default Home
