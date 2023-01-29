import TopNavBar from "../../element/TopNavBar/TopNavBar";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goTagSuggest = () => {
    try {
      webkit.messageHandlers.scriptHandler.postMessage("/tagSuggest");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <TopNavBar
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        from="main"
      />
      <Swiper>
        <SwiperSlide>
          <img src="/images/main_scroll_1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={goTagSuggest} src="/images/main_scroll_2.png" alt="" />
        </SwiperSlide>
      </Swiper>
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
