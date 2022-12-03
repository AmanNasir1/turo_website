import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Carousel from 'react-bootstrap/Carousel';


export const Slider2 = () => {
    return (
        <div className="slider2">
            <div className="sliderInner2">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <div className="slider2Content">
                            <div className="image">
                                <img src="images/slide1.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>Find the perfect car to <br /> <span> conquer the great outdoors </span></h3>
                                <p>Go prepared in a rugged 4x4 to take on winter roads <br /> with ease, or a camper van to take you to the trees.</p>
                                <button>Browse Car</button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slider2Content">
                            <div className="image">
                                <img src="images/slider2.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>Find the perfect car to <br /> <span> conquer the great outdoors </span></h3>
                                <p>Go prepared in a rugged 4x4 to take on winter roads <br /> with ease, or a camper van to take you to the trees.</p>
                                <button>Browse Car</button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slider2Content">
                            <div className="image">
                                <img src="images/slider3.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h3>Find the perfect car to <br /><span> conquer the great outdoors</span></h3>
                                <p>Go prepared in a rugged 4x4 to take on winter roads <br /> with ease, or a camper van to take you to the trees.</p>
                                <button>Browse Car</button>
                            </div>
                        </div>

                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

        /* // <div className='slider2'>
        //     <div className="slider2Content">
        //         <div className="image">
        //             <img src="images/slide1.jpg" alt="" />
        //         </div>
        //         <div className="content">
        //             <h3>Find the perfect car to conquer the great outdoors</h3>
        //             <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
        //             <button>Browse Car</button>
        //         </div>
        //     </div>
        // </div> */
    )
}
