import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import 'swiper/css/free-mode';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { Box } from '@mui/material';

function Slider() {
    return (
        <Box>
            <Swiper
                spaceBetween={1}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    Loop: true,
                }}
                pagination={{
                    clickable: true,
                }}
                Navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://material.dahuasecurity.com/uploads/image/20240314/Banner2_Dahua-Wireless-Series-New-Arrivals-Online-Event_384001600.jpg" alt="girl hold eggs" /></SwiperSlide>
                <SwiperSlide><img src="https://material.dahuasecurity.com/uploads/image/20230315/Website-Banner-01.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://material.dahuasecurity.com/uploads/image/20230315/Website-Banner-02.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://material.dahuasecurity.com/uploads/image/20230625/Dahua-DeepHub-Smart-Classroom-Solution_38401600.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://material.dahuasecurity.com/uploads/image/20230315/Full-color-Camera_38402.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://material.dahuasecurity.com/uploads/image/20230315/Dahua-Display--Control_38402.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://material.dahuasecurity.com/uploads/image/20230509/AcuPick_38401600.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://material.dahuasecurity.com/uploads/image/20230315/Full-color-Camera_38402.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://material.dahuasecurity.com/uploads/image/20230315/Dahua-Display--Control_38402.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default Slider
