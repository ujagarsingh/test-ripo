import React, { Fragment, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { Box, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import styled from '@emotion/styled';

const CardMediaNew = styled(CardMedia)({
    height: 140,
    marginTop: 20,
});

const CardNew = styled(Card)({
    height: 450,
    width: 360,
    marginTop: 20,
    padding: 2,
    paddingBottom: 25
});

const SingleProduct = (props) => {
    const { image, name, detail } = props.data;
    return (
        <SwiperSlide>
            <CardNew className='cardnew'>
                <CardMediaNew className='cardimg'
                    image={image}
                />
                <CardContent>
                    <Typography variant="h5" mb={2} into>
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {detail}
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
    )
}

export default SingleProduct
