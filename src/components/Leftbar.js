import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function MediaCard() {
    return (
        <Container>
            <Typography variant='h4' fontWeight={700} textAlign='center' mt={5} mb={4} color={'black'}>Solution</Typography>
            <Card sx={{ maxWidth: 815 }}>
                <CardMedia
                    sx={{ height: 300 }}
                    image="https://material.dahuasecurity.com/uploads/image/20230207/trans.jpg"
                    position='relative'
                />
                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Transport
                    </Typography>
                </CardContent> */}
            </Card>
        </Container >
    );
}