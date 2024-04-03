import { Box, Typography } from '@mui/material'
import React from 'react'

function BlogLeftBar() {
    return (
        <Box>

            <Card sx={{ maxWidth: 620 }}>

                <CardContent>
                    <Typography gutterBottom variant="h5" fontWeight={700}>BLOG
                        <CardHeader sx={{ fontStyle: 'italic' }}
                            subheader='2023-4-02' />
                    </Typography>
                    <Link sx={{ color: 'black', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
                        From 1 Month to 10 Minutes: Dahua Revolutionizes Fire Safety Inspection in Yunnan Power Station
                    </Link>
                </CardContent>
                <CardMedia
                    component="img"
                    height="280"
                    image="https://material.dahuasecurity.com/uploads/soft/20230713/Banner-Dahua-Blog_From-1-Month-to-10-Minutes---Dahua-Revolutionizes-Fire-Safety-Inspection-in-Yunnan-Power-Station.png"
                    alt="Paella dish"
                />
            </Card>
        </Box>
    )
}

export default BlogLeftBar
