import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

export default function Solution() {
	return (

		<Box className='Solution_grid'>
			<Container >
				<Typography variant='h4' className='solu_title'>Solution</Typography>
				<Grid container spacing={2} className='Solution_grid_1'>
					<Grid item xs={8}>
						<Card className='Solution_left_first'>
							<CardMedia className='Solution_left_first_img'
								image="https://material.dahuasecurity.com/uploads/image/20230207/trans.jpg"
							/>
							<CardContent className='solu_card_content'>
								<Typography  className='solu_card_title'gutterBottom variant="h5" component="div">
									Transportation
								</Typography>
							</CardContent>
						</Card >
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Card className='Solution_first_up Solution_left_first' >
									<CardMedia className='Solution_first_up first_up'
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
								<Card className='Solution_first_up_second Solution_left_first'>
									<CardMedia className='Solution_first_up_second'
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
								<Card className='Solution_bottom_first'>
									<CardMedia className='Solution_bottom_first Solution_left_first'
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
								<Card className='Solution_bottom_second'>
									<CardMedia className='Solution_bottom_second Solution_left_first'
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
						<Card className='Solution_right_first'>
							<CardMedia className='Solution_right_first Solution_left_first'
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