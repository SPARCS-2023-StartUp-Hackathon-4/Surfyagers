import TopNavBar from "../../element/TopNavBar/TopNavBar";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <TopNavBar
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Swiper>
        <SwiperSlide>
          <img src="/images/main_scroll_1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/main_scroll_2.png" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="w-screen">
        <img className="w-screen" src="/images/main_scroll_.png" alt="" />
      </div>
      <img className="w-screen" src="/images/main_search.png" alt="" />
      <div className="w-[100vw] overflow-auto scrollbar-hide">
        <img
          className="w-[120vw] max-w-[120vw]"
          src="/images/main_scroll.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
