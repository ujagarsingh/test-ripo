import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

export default function Solution() {
	return (

		<Box className='grid'>
			<Container >
				<Typography variant='h4' className='solu_title'>Solution</Typography>
				<Grid container spacing={2} className='grid_1'>
					<Grid item xs={8}>
						<Card className='left_first'>
							<CardMedia className='left_first_img'
								image="https://material.dahuasecurity.com/uploads/image/20230207/trans.jpg"
							/>
							<CardContent className='solu_card_content'>
								<Typography gutterBottom variant="h5" component="div">
									Transportation
								</Typography>
							</CardContent>
						</Card >
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Card className='first_up left_first' >
									<CardMedia className='first_up'
										image="https://material.dahuasecurity.com/uploads/image/20230207/cri.jpg"

									/>
									<CardContent className='solu_card_content'>
										<Typography gutterBottom variant="h5" component="div">
											Critical Infrastructure
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={6}>
								<Card className='first_up_second left_first'>
									<CardMedia className='first_up_second'
										image="https://material.dahuasecurity.com/uploads/image/20230207/bank.png"
									/>
									<CardContent className='solu_card_content'>
										<Typography variant="h5" component="div">
											Bank
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={6}>
								<Card className='bottom_first'>
									<CardMedia className='bottom_first left_first'
										image="https://material.dahuasecurity.com/uploads/image/20230207/jiaot.png"

									/>
									<CardContent className='solu_card_content'>
										<Typography gutterBottom variant="h5" component="div">
											Traffic
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={6}>
								<Card className='bottom_second'>
									<CardMedia className='bottom_second left_first'
										image="https://material.dahuasecurity.com/uploads/image/20230207/buiding.jpg"

									/>
									<CardContent className='solu_card_content'>
										<Typography gutterBottom variant="h5" component="div">
											Building
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>

					</Grid>
					<Grid item xs={4}>
						<Card className='right_first'>
							<CardMedia className='right_first left_first'
								image="https://material.dahuasecurity.com/uploads/image/20230207/retain.jpg"
							/>
							<CardContent className='solu_card_content'>
								<Typography gutterBottom variant="h5" component="div">
									Retail
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}