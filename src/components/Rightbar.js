import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Container>
      <Card flex={2} sx={{ maxWidth: 400 }}>
                <CardMedia
                    sx={{ height: 800 }}
                    image="https://material.dahuasecurity.com/uploads/image/20230207/retain.jpg"
                    position='relative'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Retail
                    </Typography>
                </CardContent>
            </Card>
    </Container>
  )
}

export default Rightbar
