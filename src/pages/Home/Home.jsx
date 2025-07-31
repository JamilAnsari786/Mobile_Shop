import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Import Autoplay module
import "swiper/css";
import "./Home.css";

// 🖼️ Local image imports
import slide1 from "../../assets/Header1.jpg";
import slide2 from "../../assets/Header2.jpg";
import slide3 from "../../assets/Header3.jpg";
import Footer from "../../components/common/Footer/Footer";
// import MobileBrand from "@/components/homepage/mobilebrand/MobileBrand";
import Mobiles from "@/components/homepage/LatestMobile/Mobiles";


const Home = () => {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Swiper
          className="mySwiper"
          modules={[Autoplay]} // ✅ Include Autoplay module
          autoplay={{
            delay: 3000, // ✅ 3 seconds
            disableOnInteraction: false, // Keeps autoplay after user interaction
          }}
          loop={true} // ✅ Infinite loop
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
      </div>
      {/* <MobileBrand /> */}
      <Mobiles />
      
      <Footer />
    </>
  );
};

export default Home;
