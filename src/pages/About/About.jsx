import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./About.css";

// Images
import slide1 from "../../assets/Header1.jpg";
import slide2 from "../../assets/Header2.jpg";
import slide3 from "../../assets/Header3.jpg";

import Footer from "../../components/common/Footer/Footer";
import AboutPage from "@/components/Aboutpage/Aboutpage";

const Home = () => {
  return (
    <>
      {/* Image Slider */}
      <div className="hero-slider-container">
        <Swiper
          className="mySwiper"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <img src={slide1} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="Slide 3" />
          </SwiperSlide>
        </Swiper>

        <section className="about-hero">
          <h1>Welcome to MobileMart</h1>
          <p>
            Your one-stop destination for the latest smartphones, accessories,
            and mobile services. <br />
            At MobileMart, we bring top brands, unbeatable prices, and expert
            support together — all under one roof.
          </p>
        </section>
      </div>

      <AboutPage />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
