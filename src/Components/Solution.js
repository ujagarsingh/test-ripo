import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

export default function Solution() {
	return (
		<>
			<Container className='grid'>
				<Typography variant='h4' fontWeight={700} textAlign='center' mt={5} mb={4} color={'black'}>Solution</Typography>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<Card  className='images' flex={3} sx={{ maxWidth: 750, marginBottom: 2 }} >
							<CardMedia
								sx={{ height: 230 }}
								image="https://material.dahuasecurity.com/uploads/image/20230207/trans.jpg"
								position='relative'
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Transport
								</Typography>
							</CardContent>
						</Card >
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Card className='images' flex={3} sx={{ maxWidth: 400 }} >
									<CardMedia
										sx={{ height: 230 }}
										image="https://material.dahuasecurity.com/uploads/image/20230207/cri.jpg"
										position='relative'
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Critical Infrastructure
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={6}>
								<Card className='images' flex={3} sx={{ maxWidth: 400 }} >
									<CardMedia
										sx={{ height: 230 }}
										image="https://material.dahuasecurity.com/uploads/image/20230207/jiaot.png"
										position='relative'
									/>
									<CardContent>
										<Typography variant="h5" component="div">
											Traffic
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={6}>
								<Card className='images' flex={3} sx={{ maxWidth: 400 }} >
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
							</Grid>
							<Grid item xs={6}>
								<Card className='images' flex={3} sx={{ maxWidth: 400 }} >
									<CardMedia
										sx={{ height: 150 }}
										image="https://material.dahuasecurity.com/uploads/image/20230207/buiding.jpg"
										position='relative'
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Building
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>

					</Grid>
					<Grid item xs={4}>
						<Card className='images' flex={2} sx={{ maxWidth: 400 }}>
							<CardMedia
								sx={{ height: 640 }}
								image="https://material.dahuasecurity.com/uploads/image/20230207/retain.jpg"
								position='relative'
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Retail
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>

			{/* <Container>


                <Card
                    sx={{ maxWidth: 400, marginTop: 2, marginBottom: 2 }} >
                    <CardMedia
                        sx={{ height: 230 }}
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
                <Card sx={{ maxWidth: 400, marginTop: 2, marginBottom: 2 }} >
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
                        sx={{ height: 230 }}
                        image="https://material.dahuasecurity.com/uploads/image/20230207/buiding.jpg"
                        position='relative'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Building
                        </Typography>
                    </CardContent>
                </Card>
            </Container > */}
		</>
	);
}