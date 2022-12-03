import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export const Slider = ({ dataArr, showHeading, carPics }) => {

    return (
        <>
            <div className='slider1'>
                <div className="slider1Content">
                    {showHeading &&
                        <div className="sliderHeading">
                            <p>Find your drive</p>
                            <h4>Explore the world's largest car sharing marketplace</h4>
                        </div>
                    }
                    <div>
                        <Swiper
                            className='swipe1'
                            slidesPerView={3}
                        >
                            {dataArr?.map((e, i) => (
                                <SwiperSlide key={i}><div className='test'> <img className={carPics ? 'slides' : 'noclass'} src={e} alt="dasda" /> <span>Jeep {i}</span></div> </SwiperSlide>
                            ))}



                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};
