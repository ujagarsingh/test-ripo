import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import SingleProduct from './SingleProduct';

export default function Product() {

	const data = [
		{
			image: 'https://material.dahuasecurity.com/uploads/image/20221228/DHI-LDV65-SAI400K_1_thumb.png',
			name: 'LDV65-SAI400K',
			detail: "65'' Floor-standing Digital Signage"
		},
		{
			image: 'https://material.dahuasecurity.com/product/20180118/SD1A203T-GN_thumb.png',
			name: 'SDT6C432-4P-GB-APV',
			detail: "4MP 32X Smart Dual Light Network"
		},
		{
			image: 'https://material.dahuasecurity.com/uploads/image/20230830/x-spans2.png',
			name: 'SD1A203T-GN',
			detail: "2MP 3x Starlight IR PTZ Network C"
		},
		{
			image: 'https://material.dahuasecurity.com/uploads/cpq/prm-os-srv-res/smart/formal/Product/HQ/1_0_01_06_10573/ProductImage/1_0_01_06_10573_255278020_thumb.png',
			name: 'SDT6C432-4P-GB-APV',
			detail: "4MP 32X Smart Dual Light Network"
		},
		{
			image: 'https://material.dahuasecurity.com/uploads/image/20230817/IPC-HFW1239DQ-LED-SAW_3_thumb.png',
			name: 'F2C-LED',
			detail: "2MP Entry Full-color Fixed-focal W"
		},
		{
			image: 'https://material.dahuasecurity.com/uploads/cpq/prm-os-srv-res/smart/formal/Product/HQ/1_0_01_20_11257/ProductImage/1_0_01_20_11257_459621471_crop_thumb.png',
			name: 'CS4218-16ET-135',
			detail: "4MP 32X Smart Dual Light Network"
		},
		{
			image: 'https://material.dahuasecurity.com/uploads/cpq/prm-os-srv-res/smart/formal/Product/HQ/1_0_01_34_13946/ProductImage/1_0_01_34_13946_50049086_crop_thumb.png',
			name: 'TPC-AEPT8441-T',
			detail: "Thermal Anti-Explosion Hybrid PTZ"
		},
		{
			image: 'https://material.dahuasecurity.com/uploads/image/20230817/IPC-HDW1239DT-LED-SAW_11_thumb.png',
			name: 'T2A-LED',
			detail: "2MP Entry Full-color Fixed-focal Wi"
		}
	]
	return (
		<Box className='bg_product'>
			<Typography variant='h4' className='product_title'>New Products</Typography>
			<Swiper
				slidesPerView={4}
				freeMode={true}	
				loop={true}
				// pagination={{
				// 	clickable: true,
				// }}
				// autoplay={{
				// 	delay: 4500,
				// 	disableOnInteraction: false,
				// }}
				navigation={true}
				modules={[FreeMode, Pagination, Navigation, Autoplay]}
				className="mySwiper"
			>
				{data.map((el, index) => (
					<SwiperSlide key={index}>
						<SingleProduct data={el} />
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
}





















































































































































































































{/* <SwiperSlide>
					<CardNew className='cardnew'>
						<CardMediaNew className='cardimg'
							image="https://material.dahuasecurity.com/uploads/image/20221228/DHI-LDV65-SAI400K_1_thumb.png"
						/>
						<CardContent>
							<Typography variant="h5" mb={2} into>

							</Typography>
							<Typography variant="body2">
							
							</Typography>
							</CardContent>
							<CardActions>
							<Link className='sliderLink'
								component="button"
								variant="body2"
							>
								Details
							</Link>
						</CardActions>
					</CardNew>
				</SwiperSlide>
				<SwiperSlide>
					<CardNew className='cardnew'>
						<CardMediaNew className='cardimg'
							image="https://material.dahuasecurity.com/product/20180118/SD1A203T-GN_thumb.png"
						/>
						<CardContent>
							<Typography variant="h5" mb={2} component="div">
								SDT6C432-4P-GB-APV
							</Typography>
							<Typography variant="body2">
								4MP 32X Smart Dual Light Network
							</Typography>
						</CardContent>
						<CardActions>
							<Link className='sliderLink'
								component="button"
								variant="body2"
							>
								Details
							</Link>
						</CardActions>
					</CardNew>
				</SwiperSlide>
				<SwiperSlide>
					<CardNew className='cardnew'>
						<CardMediaNew className='cardimg'
							image="https://material.dahuasecurity.com/uploads/image/20230830/x-spans2.png"
						/>
						<CardContent>
							<Typography variant="h5" mb={2} component="div">
								SD1A203T-GN
							</Typography>
							<Typography variant="body2">
								2MP 3x Starlight IR PTZ Network C
							</Typography>
						</CardContent>
						<CardActions>
							<Link className='sliderLink'
								component="button"
								variant="body2"
							>
								Details
							</Link>
						</CardActions>
					</CardNew>
				</SwiperSlide>
				<SwiperSlide>
					<CardNew className='cardnew'>
						<CardMediaNew className='cardimg'
							image="https://material.dahuasecurity.com/uploads/cpq/prm-os-srv-res/smart/formal/Product/HQ/1_0_01_06_10573/ProductImage/1_0_01_06_10573_255278020_thumb.png"
						/>
						<CardContent>
							<Typography variant="h5" mb={2} component="div">
								SDT6C432-4P-GB-APV
							</Typography>
							<Typography variant="body2">
								4MP 32X Smart Dual Light Network
							</Typography>
						</CardContent>
						<CardActions>
							<Link className='sliderLink'
								component="button"
								variant="body2"
							>
								Details
							</Link>
						</CardActions>
					</CardNew>
				</SwiperSlide>
				<SwiperSlide>
					<CardNew className='cardnew'>
						<CardMediaNew className='cardimg'
							image="https://material.dahuasecurity.com/uploads/image/20230817/IPC-HFW1239DQ-LED-SAW_3_thumb.png"
						/>
						<CardContent>
							<Typography variant="h5" mb={2} component="div">
								F2C-LED
							</Typography>
							<Typography variant="body2">
								2MP Entry Full-color Fixed-focal W
							</Typography>
						</CardContent>
						<CardActions>
							<Link className='sliderLink'
								component="button"
								variant="body2"
							>
								Details
							</Link>
						</CardActions>
					</CardNew>
				</SwiperSlide>
				<SwiperSlide>
					<CardNew className='cardnew'>
						<CardMediaNew className='cardimg'
							image="https://material.dahuasecurity.com/uploads/cpq/prm-os-srv-res/smart/formal/Product/HQ/1_0_01_20_11257/ProductImage/1_0_01_20_11257_459621471_crop_thumb.png"
						/>
						<CardContent>
							<Typography variant="h5" mb={2} component="div">
								CS4218-16ET-135
							</Typography>
							<Typography variant="body2">
								18-Port Cloud Managed Desktop
							</Typography>
						</CardContent>
						<CardActions>
							<Link className='sliderLink'
								component="button"
								variant="body2"
							>
								Details
							</Link>
						</CardActions>
					</CardNew>
				</SwiperSlide>
				<SwiperSlide>
					<CardNew className='cardnew'>
						<CardMediaNew className='cardimg'
							image="https://material.dahuasecurity.com/uploads/cpq/prm-os-srv-res/smart/formal/Product/HQ/1_0_01_34_13946/ProductImage/1_0_01_34_13946_50049086_crop_thumb.png"
						/>
						<CardContent>
							<Typography variant="h5" mb={2} component="div">
								TPC-AEPT8441-T
							</Typography>
							<Typography variant="body2">
								Thermal Anti-Explosion Hybrid PTZ
							</Typography>
						</CardContent>
						<CardActions>
							<Link className='sliderLink'
								component="button"
								variant="body2"
							>
								Details
							</Link>
						</CardActions>
					</CardNew>
				</SwiperSlide>
				<SwiperSlide>
					<CardNew className='cardnew'>
						<CardMediaNew className='cardimg'
							image="https://material.dahuasecurity.com/uploads/image/20230817/IPC-HDW1239DT-LED-SAW_11_thumb.png"
						/>
						<CardContent>
							<Typography variant="h5" mb={2} component="div">
								T2A-LED
							</Typography>
							<Typography variant="body2">
								2MP Entry Full-color Fixed-focal Wi
							</Typography>
						</CardContent>
						<CardActions>
							<Link className='sliderLink'
								component="button"
								variant="body2"
							>
								Details
							</Link>
						</CardActions>
					</CardNew>
				</SwiperSlide> */}
