import { Box, Card, CardContent, CardHeader, CardMedia, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'

function Event() {
    return (
        <Box className='bg_event'>
            <Typography variant='h4' className='Event_title'>News & Events</Typography>
            <Container>
                <Box className='main'>
                    <Box>
                        <Card className='event_left_first'>
                            <CardMedia className='media'
                                image="https://material.dahuasecurity.com/uploads/soft/20230713/Banner-Dahua-Blog_From-1-Month-to-10-Minutes---Dahua-Revolutionizes-Fire-Safety-Inspection-in-Yunnan-Power-Station.png"
                            />
                            <CardContent>
                                <Box className='e_CardContent'>
                                    <Typography gutterBottom variant="h5" component="div" className='blog_title'>
                                        BLOG
                                    </Typography>
                                    <CardHeader className='CardHeader'
                                        subheader='2023-4-02' />
                                </Box>
                                <Link className='e_link'>
                                    From 1 Month to 10 Minutes: Dahua Revolutionizes Fire Safety Inspection in Yunnan Power Station
                                </Link>
                            </CardContent>
                        </Card >
                    </Box>

                    {/* <Box className='two_image'> */}
                    <Card className='right_up' >
                        <CardMedia className='right_up_media'
                            image="https://material.dahuasecurity.com/uploads/soft/20230531/Banner-Success-Story_AI-and-Time-lapse-Recording-Feature-on-Video-Surveillance-System-for-a-European-Logistics-Hub.jpg"
                        />
                        <CardContent>
                            <Box className='e_CardContent'>
                                <Typography gutterBottom variant="h5" component="div">
                                    Success Story...
                                </Typography>
                                <CardHeader
                                    subheader='2023-4-02' />
                            </Box>
                            <Link>
                                AI and Time-lapse Recording Feature on Video Surveillance System for a European Logistics Hub
                            </Link>
                        </CardContent>
                    </Card >
                </Box>
                {/* </Box> */}

            </Container>
        </Box>
    )
};

export default Event
{/* <Card className='right_down'>
                            <CardMedia
                                sx={{ height: 280 }}
                                image="https://material.dahuasecurity.com/uploads/soft/20230713/Banner-Dahua-Blog_From-1-Month-to-10-Minutes---Dahua-Revolutionizes-Fire-Safety-Inspection-in-Yunnan-Power-Station.png"
                                                        />
                            <CardContent>
                                <Box className='e_CardContent'>
                                    <Typography gutterBottom variant="h5" component="div">
                                        BLOG
                                    </Typography>
                                    <CardHeader sx={{ fontStyle: 'italic' }}
                                        subheader='2023-4-02' />
                                </Box>
                                <Link sx={{ color: 'black', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
                                    From 1 Month to 10 Minutes: Dahua Revolutionizes Fire Safety Inspection in Yunnan Power Station
                                </Link>
                            </CardContent>
                        </Card > */}
