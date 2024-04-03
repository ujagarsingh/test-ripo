import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

export default function LeftBar() {
    return (
        <Container>
            <Typography variant='h4' fontWeight={700} textAlign='center' mt={5} mb={4} color={'black'}>Solution</Typography>

            <Card flex={3} sx={{ maxWidth: 750 }} >
                <CardMedia
                    sx={{ height: 300 }}
                    image="https://material.dahuasecurity.com/uploads/image/20230207/trans.jpg"
                    position='relative'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Transport
                    </Typography>
                </CardContent>
            </Card>
            <Card
                sx={{ maxWidth: 400, marginTop: 2, marginBottom: 2 }} >
                <CardMedia
                    sx={{ height: 300 }}
                    image="https://material.dahuasecurity.com/uploads/image/20230207/cri.jpg"
                    position='relative'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Critical Infrastructure
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 400 }} >
                <CardMedia
                    sx={{ height: 150 }}
                    image="https://material.dahuasecurity.com/uploads/image/20230207/jiaot.png"
                    position='relative'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Traffic
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 400,marginTop: 2, marginBottom: 2  }} >
                <CardMedia
                    sx={{ height: 150 }}
                    image="https://material.dahuasecurity.com/uploads/image/20230207/bank.png"
                    position='relative'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bank
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 400, }} >
                <CardMedia
                    sx={{ height: 300 }}
                    image="https://material.dahuasecurity.com/uploads/image/20230207/buiding.jpg"
                    position='relative'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Building
                    </Typography>
                </CardContent>
            </Card>
        </Container >
    );
}