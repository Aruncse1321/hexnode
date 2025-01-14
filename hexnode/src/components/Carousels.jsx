import React from 'react'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import "../styles/Carousel.css"
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation"; // Import the Navigation module styles
import "swiper/css/pagination";


const Carousels = () => {


    return (


        <div className="carousel-container">
            <div className="sub-container">
                <Swiper
  
                    spaceBetween={10} // Space between slides
                    slidesPerView={2} // Number of slides to show at once
                    loop={true} // Enable infinite looping
                    autoplay={{ delay: 1000 }} // Auto slide every 2.5 seconds
                    modules={[Pagination, Autoplay]} // Enable Navigation and Pagination modules
                    // navigation // Enable navigation arrows
                    pagination={{ clickable: true }} // Enable clickable pagination
                    breakpoints={{
                        // For larger screens, show 2 slides at once
                        300:{
                            slidesPerView: 1, 
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        // 1024: {
                        //     slidesPerView: 3,
                        //     spaceBetween: 40,
                        // },
                    }}
                >
                    <div className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="carousel-box">
                            <img src="/acc-main.png" alt="Slide 1" className="slide" />

                            <div className="carousel-content">
                                <img src="/Group 48.png" />
                                <h1>Single App Kiosk</h1>
                                <p>Powerful Single-App Kiosk solutions for enhanced control
                                </p>
                            </div>
                            <h1>1</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-box ">
                            <img src="/project-img-3.png" alt="Slide 2" class="slide" />
                            <div className="carousel-content">
                                <img src="/Group 49.png" />
                                <h1>Multi-App Kiosk</h1>
                                <p>Elevate efficiency with Multi-App Kiosk
                                    Limit device access to approved apps, ensuring focus and productivity.</p>
                            </div>
                            <h1>2</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-box ">
                            <img src="/project-img-4.png" alt="Slide 3" class="slide" />
                            <div className="carousel-content">
                                <img src="/Group 50.png" />
                                <h1>Web-based Kiosk</h1>
                                <p>Explore the new way to manage web apps and websites
                                    Let users access essential and approved web apps, website and files only.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-box ">
                            <img src="/project-img-4.png" alt="Slide 3" class="slide" />
                            <div className="carousel-content">
                                <img src="/Group 50.png" />
                                <h1>Web-based Kiosk</h1>
                                <p>Explore the new way to manage web apps and websites
                                    Let users access essential and approved web apps, website and files only.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    </div>
                    {/* <SwiperSlide>
                        <div className="carousel-box swiper-slide">
                            <img src="/project-img-4.png" alt="Slide 3" class="slide" />
                            <div className="carousel-content">
                                <img src="/Group 50.png" />
                                <h1>Web-based Kiosk</h1>
                                <p>Explore the new way to manage web apps and websites
                                    Let users access essential and approved web apps, website and files only.</p>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide>
                    <div className="carousel-box swiper-slide">
                        <img src="/acc-main.png" alt="Slide 1" className="slide" />

                        <div className="carousel-content">
                            <img src="/Group 48.png" />
                            <h1>Single App Kiosk</h1>
                            <p>Powerful Single-App Kiosk solutions for enhanced control
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-box swiper-slide">
                        <img src="/project-img-3.png" alt="Slide 2" class="slide" />
                        <div className="carousel-content">
                            <img src="/Group 49.png" />
                            <h1>Multi-App Kiosk</h1>
                            <p>Elevate efficiency with Multi-App Kiosk
                                Limit device access to approved apps, ensuring focus and productivity.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-box swiper-slide">
                        <img src="/project-img-4.png" alt="Slide 3" class="slide" />
                        <div className="carousel-content">
                            <img src="/Group 50.png" />
                            <h1>Web-based Kiosk</h1>
                            <p>Explore the new way to manage web apps and websites
                                Let users access essential and approved web apps, website and files only.</p>
                        </div>
                    </div>
                </SwiperSlide> */}
                    <div className='swiper-pagination'></div>
                </Swiper>
                <div className='swiper-pagination' style={{backgroundColor:"red"}}></div>
            </div>
        </div>





    );
};

export default Carousels;
