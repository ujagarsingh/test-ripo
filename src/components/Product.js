import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { Box, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import styled from '@emotion/styled';

const CardNew = styled(Card)({
    height: 450,
    width: 360,
    marginTop: 20,
    padding: 2,
    paddingBottom: 25
});

const CardMediaNew = styled(CardMedia)({
    height: 140,
    marginTop: 20,

});

export default function App() {
    return (
        <Box>
            <Typography variant='h4' fontWeight={700} textAlign='center' mt={5} mb={4} color={'black'}>New Products</Typography>
            <Swiper
                slidesPerView={6}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                Navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CardNew className='cardnew'>
                        <CardMediaNew className='cardimg'
                            image="https://material.dahuasecurity.com/uploads/image/20221228/DHI-LDV65-SAI400K_1_thumb.png"
                        />
                        <CardContent>
                            <Typography variant="h5" mb={2} into>
                                LDV65-SAI400K
                            </Typography>
                            <Typography variant="body2">
                                65'' Floor-standing Digital Signage
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
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}
