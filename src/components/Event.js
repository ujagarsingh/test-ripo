import { Box, Card, CardContent, CardHeader, CardMedia, Container, Link, Typography } from '@mui/material'
import React from 'react'

function Event() {
    return (
        <Box className='bg' mb={15}>
            <Typography variant='h4' fontWeight={700} textAlign='center' mt={5} mb={4} color={'black'}>New Products</Typography>
            <Container sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Card sx={{ maxWidth: 620 }}>

                    <CardMedia
                        component="img"
                        height="280"
                        image="https://material.dahuasecurity.com/uploads/soft/20230713/Banner-Dahua-Blog_From-1-Month-to-10-Minutes---Dahua-Revolutionizes-Fire-Safety-Inspection-in-Yunnan-Power-Station.png"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" fontWeight={700}>BLOG
                            <CardHeader sx={{ fontStyle: 'italic' }}
                                subheader='2023-4-02' />
                        </Typography>
                        <Link sx={{ color: 'black', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
                            From 1 Month to 10 Minutes: Dahua Revolutionizes Fire Safety Inspection in Yunnan Power Station
                        </Link>
                    </CardContent>
                </Card>

                <Box className="box" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Card className='card' >
                        <CardMedia
                            className='CardMedia'
                            component="img"
                            height="50"
                            image="https://material.dahuasecurity.com/uploads/soft/20230531/Banner-Success-Story_AI-and-Time-lapse-Recording-Feature-on-Video-Surveillance-System-for-a-European-Logistics-Hub.jpg"
                            alt="Paella dish"
                        />
                        <CardContent width={500}>
                            <Typography gutterBottom variant="h5" fontWeight={700} >SUCCESS STO...
                                <CardHeader sx={{ fontStyle: 'italic' }}
                                    subheader='2023-4-02' />
                            </Typography>
                            <Link sx={{ color: 'black', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
                                AI and Time-lapse Recording Feature on Video Surveillance...
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className='card'>

                        <CardMedia
                            className='CardMedia'
                            component="img"
                            height="50"
                            image="https://material.dahuasecurity.com/asset/upload/uploads/image/20230706/20230706113226_23870.png"
                            alt="Paella dish"
                        />
                        <CardContent className='CardContent'>
                            <Typography gutterBottom variant="h5" fontWeight={700}>News
                                <CardHeader sx={{ fontStyle: 'italic' }}
                                    subheader='2023-4-02' />
                            </Typography>
                            <Link sx={{ color: 'black', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
                                International Yoga Day,2023
                            </Link>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    )
}

export default Event
