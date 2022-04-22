import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import rdr from '../assets/rdr.jpg'
import rss from '../assets/rss.jpeg'
import dbd from '../assets/dbd.jpeg'
import { Navigation, Pagination } from 'swiper';

const Slider = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Pagination,Navigation]}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className='container'>
                    <div class="mySlides fade">
                        <img src={rdr} style={{ width: "100%", height: "700px", objectFit: "cover" }} alt="" />
                        <div class="slide-gradient">
                            <h1>Red dead Redemption</h1>
                            <button>Купить игру</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='container'>
                    <div class="mySlides fade">
                        <img src={dbd} style={{ width: "100%", height: "700px", objectFit: "cover" }} alt="" />
                        <div class="slide-gradient">
                            <h1>Dead by Daylight</h1>
                            <button>Купить игру</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='container'>
                    <div class="mySlides fade">
                        <img src={rss} style={{ width: "100%", height: "700px", objectFit: "cover" }} alt="" />
                        <div class="slide-gradient">
                            <h1>Rainbow Six Siege</h1>
                            <button>Купить игру</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;