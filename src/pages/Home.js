import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Product from '../components/Product'
import Event from '../components/Event'
import Details from '../components/Details'
import { Box, Container, Grid } from '@mui/material'
import Solution from '../components/Solution'


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
