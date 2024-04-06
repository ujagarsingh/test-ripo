import { Box, Card, CardContent, CardHeader, CardMedia, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'

function Event() {
    return (
        <Box className='bg_event'>
            <Typography variant='h4' className='Event_title'>News & Events</Typography>
            <Container>
                <Box className='event'>
                    <Box>
                        <Card className='event_left_first'>
                            <div className='eventImageCover'>
                                <CardMedia className='event_media'
                                    image="https://material.dahuasecurity.com/uploads/soft/20230713/Banner-Dahua-Blog_From-1-Month-to-10-Minutes---Dahua-Revolutionizes-Fire-Safety-Inspection-in-Yunnan-Power-Station.png"
                                />
                            </div>
                            <CardContent className='event__CardContent_up' >
                                <Box className='event_Content_up'>
                                    <Typography gutterBottom variant="h5" component="div" className='blog_title'>
                                        BLOG
                                    </Typography>
                                    <CardHeader className='event_CardHeader'
                                        subheader='2023-4-02' />
                                </Box>
                                <Link className='event__link'>
                                    From 1 Month to 10 Minutes: Dahua Revolutionizes Fire Safety Inspection in Yunnan Power Station
                                </Link>
                            </CardContent>
                        </Card >
                    </Box>

                    <Box className='twoImageBox'>
                        <Card className='event_right_up'>
                            <CardMedia className='event_right_up_media'
                                image="https://material.dahuasecurity.com/uploads/soft/20230531/Banner-Success-Story_AI-and-Time-lapse-Recording-Feature-on-Video-Surveillance-System-for-a-European-Logistics-Hub.jpg"
                            />
                            <CardContent className='event__CardContent'>
                                <Box className='event_title_box'>
                                    <Typography gutterBottom variant="h5" component="div" className='blog_title'>
                                        Success Story...
                                    </Typography>
                                    <CardHeader className='CardHeader'
                                        subheader='2023-4-02' />
                                </Box>
                                <Link className='event__link'>
                                    AI and Time-lapse Recording Feature on Video Surveillance System for a European Logistics Hub
                                </Link>
                            </CardContent>
                        </Card >

                        <Box>
                            <Card className='event_right_up'>
                                <CardMedia className='event_right_up_media'
                                    image="https://material.dahuasecurity.com/asset/upload/uploads/image/20230706/20230706113226_23870.png"
                                />
                                <CardContent className='event__CardContent'>
                                    <Box className='event_title_box'>
                                        <Typography gutterBottom variant="h5" component="div" className='blog_title'>
                                            News
                                        </Typography>
                                        <CardHeader className='CardHeader'
                                            subheader='2023-4-02' />
                                    </Box>
                                    <Link className='event__link'>
                                        International Yoga Day,2023
                                    </Link>
                                </CardContent>
                            </Card >
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};

export default Event
