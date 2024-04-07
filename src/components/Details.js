import { Box, Button, Container, Icon, TextField, Typography } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import CameraRoundedIcon from '@mui/icons-material/CameraRounded';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';


const detail_data =[
    {
        title: "Products",
        content_1: "Network Cameras",
        content_2: "HDCVI Cameras",
        content_3: "PTZ Cameras",
        content_4: "Thermal Cameras",
        content_5: "Explosion-Proof & Anti-Corrosion",
        content_6: "Network Recorders",
    },
	{
		title:"Support",
		content_1: "Network Cameras",
        content_2: "HDCVI Cameras",
        content_3: "PTZ Cameras",
        content_4: "Thermal Cameras",
        content_5: "Explosion-Proof & Anti-Corrosion",
        content_6: "Network Recorders",
	}
]

function Details() {
	const navigate = useNavigate();

	const goToTop = () => {
		navigate('./login')
	}

	return (
		<Box className='details_box'>
			<Container>
				<Box className="details_input">
					<div className="newsletter">
						<h4 className='newsletter_title'>newsletter</h4>
						<form>
							<TextField id="outlined-basic" variant="outlined" />                  </form>

						<Box className='Button_wrap'>
							<Button className='small details_btn' variant="contained">Search</Button>
						</Box>
						<h6 className='newsletter_subtitle'>
							Enter your email address to receive the latest news & products information</h6>
					</div>

{/* 					
				{detail_data.map((el, index) => (
					<SwiperSlide key={index}>
						<SingleProduct detail_data={el} />
					</SwiperSlide>
				))} */}

					<ul class="fotter_nav">
						<li class="footer_nav_item">
							<Typography variant='h5' class="footer_title">Products</Typography>
							<ul class="footer_link_item">
								<li class="footer_link_list">
									<a href="Network Cameras" class="primary_hover">Network Cameras</a>
								</li>
								<li class="footer_link_list">
									<a href="HDCVI Cameras" class="primary_hover">HDCVI Cameras</a>
								</li>
								<li class="footer_link_list">
									<a href="PTZ Cameras" class="primary_hover">PTZ Cameras</a>
								</li>
								<li class="footer_link_list">
									<a href="Thermal Cameras" class="primary_hover">Thermal Cameras</a>
								</li>
								<li class="footer_link_list">
									<a href="Explosion-Proof &amp; Anti-Corrosion" class="primary_hover">Explosion-Proof &amp; Anti-Corrosion</a>
								</li>
								<li class="footer_link_list">
									<a href="Network Recorders" class="primary_hover">Network Recorders</a>
								</li>
								<li class="footer_link_list">
									<a href="HDCVI Recorders" class="primary_hover">HDCVI Recorders</a>
								</li>
								<li class="footer_link_list">
									<a href="Learn More" class="primary_hover">
										<i>Learn More</i>
									</a>
								</li>
							</ul>
						</li>

						<li class="footer_nav_item">
							<Typography variant='h5' class="footer_title">Solutions</Typography>
							<ul class="footer_link_item">
								<li class="footer_link_list">
									<a href="Transportation" class="primary_hover">Transportation</a>
								</li>
								<li class="footer_link_list">
									<a href="Critical Infrastructure" class="primary_hover">Critical Infrastructure</a>
								</li>
								<li class="footer_link_list">
									<a href="Traffic" class="primary_hover">Traffic</a>
								</li>
								<li class="footer_link_list">
									<a href="Banking & Finance" class="primary_hover">Banking & Finance</a>
								</li>
								<li class="footer_link_list">
									<a href="Building" class="primary_hover">Building</a>
								</li>
								<li class="footer_link_list">
									<a href="" Retail class="primary_hover">Retail</a>
								</li>
							</ul>
						</li>

						<li class="footer_nav_item">
							<Typography variant='h5' class="footer_title">Support</Typography>
							<ul class="footer_link_item">
								<li class="footer_link_list">
									<a href="Tools" class="primary_hover">Tools</a>
								</li>
								<li class="footer_link_list">
									<a href="Download Center" class="primary_hover">Download Center</a>
								</li>
								<li class="footer_link_list">
									<a href="Training" class="primary_hover">Training</a>
								</li>
								<li class="footer_link_list">
									<a href="RMA" class="primary_hover">RMA</a>
								</li>
								<li class="footer_link_list">
									<a href="Video" class="primary_hover">Video</a>
								</li>
								<li class="footer_link_list">
									<a href="Dahua India Call Center" class="primary_hover">Dahua India Call Center</a>
								</li>
								<li class="footer_link_list">
									<a href="Dahua India Call Center" class="primary_hover">Dahua India Service Center And The Policys</a>
								</li>
							</ul>
						</li>
						<li class="footer_nav_item">
							<Typography variant='h5' class="footer_title">Partners</Typography>
							<ul class="footer_link_item">
								<li class="footer_link_list">
									<a href="Dahua ECO Partner Program" class="primary_hover">Dahua ECO Partner Program</a>
								</li>
							</ul>
						</li>

						<li class="footer_nav_item">
							<Typography variant='h5' class="footer_title">News & Events</Typography>
							<ul class="footer_link_item">
								<li class="footer_link_list">
									<a href="Press Release" class="primary_hover">Press Release</a>
								</li>
								<li class="footer_link_list">
									<a href="Success Stories" class="primary_hover">Success Stories</a>
								</li>
								<li class="footer_link_list">
									<a href="Notice" class="primary_hover">Notice</a>
								</li>
								<li class="footer_link_list">
									<a href="Events" class="primary_hover">Events</a>
								</li>
								<li class="footer_link_list">
									<a href="Newsletter" class="primary_hover">Newsletter</a>
								</li>
								<li class="footer_link_list">
									<a href="CSR" class="primary_hover">CSR</a>
								</li>
							</ul>
						</li>

						<li class="footer_nav_item">
							<Typography variant='h5' class="footer_title">About Us</Typography>
							<ul class="footer_link_item">
								<li class="footer_link_list">
									<a href="Introduction" class="primary_hover">Introduction</a>
								</li>
								<li class="footer_link_list">
									<a href="Contact Us" class="primary_hover">Contact Us</a>
								</li>
								<li class="footer_link_list">
									<a href="Trust Center" class="primary_hover">Trust Center</a>
								</li>
								<li class="footer_link_list">
									<a href="Terms of Use" class="primary_hover">Terms of Use</a>
								</li>
								<li class="footer_link_list">
									<a href="Privacy Policy" class="primary_hover">Privacy Policy</a>
								</li>
							</ul>
						</li>
					</ul>
				</Box>
			</Container>
			<Box className="fotter_body">
				<Container>
					<Box className='fotter_innerbody' >
						<Box>
							<p className='copyright'> © 2010-2024 Dahua Technology Co., Ltd</p>
							<Box className='chinese'>
								<p className='chinese_a'>浙ICP备07004180号-3</p>
								<p className='chinese_b'>浙公网安备 33010802004137号</p>
							</Box>
						</Box>
						<Box className='fotter_icons'>
							<Icon>
								<FacebookIcon />
								<FacebookRoundedIcon />
								<SubscriptionsRoundedIcon />
								<CameraRoundedIcon />
								<Diversity2RoundedIcon />
							</Icon>
						</Box>
						<Box className='goToTop' onClick={() => goToTop()}>
							<Icon>
								<KeyboardArrowUpIcon />
							</Icon>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	)
}

export default Details;
