import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import styled from '@emotion/styled';

const CardMediaNew = styled(CardMedia)({
    maxWidth: 100,
    height: 300,
    marginTop: 100,
    margin: 'auto'

});

const CardNew = styled(Card)({
    // height: 450,
    width: 330,
    marginTop: 20,
    padding: 2,
    // paddingBottom: 50
});

const SingleProduct = (props) => {
    const { image, name, detail } = props.data;
    return (
        <>
            <CardNew className='product_card'>
                <CardMediaNew className='product_image'
                    image={image}
                />
                <CardContent>
                    <Typography variant="h5" className='product_content'>
                        {name}
                    </Typography>
                    <Typography variant="h5" className='product_body'>
                        {detail}
                    </Typography>
                </CardContent>
                <CardActions className='detail_link'>
                    <Button className='detail_innerlink' variant="text">Details</Button>
                </CardActions>
            </CardNew>
        </>
    )
}

export default SingleProduct
