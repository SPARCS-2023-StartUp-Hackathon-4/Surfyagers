import { useEffect } from "react";
import lottie from "lottie-web";
import checkAnimationData from "../../assets/black_check.json";

const SuggestDoneFullPage = () => {
  const goBackMain = () => {
    try {
      webkit.messageHandlers.scriptHandler.postMessage("back");
    } catch (error) {
      alert(error);
    }
  };

  let isDone = false;
  const done = () => {
    if (!isDone) document.querySelectorAll("svg")[0].remove();
    isDone = true;
  };

  useEffect(() => {
    const check = document.querySelector("#check");
    lottie.loadAnimation({
      container: check,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: checkAnimationData,
    });
    done();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <div>
        <div className="w-full flex justify-center mt-[54px] mb-[27px]">
          <img src="/images/OFUTU_logo.svg" alt="" />
        </div>
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <div id="check" class="mb-[22px]" style={{ width: "78px" }}></div>
        <div className="mb-[13.5px] text-[24px] font-semibold">
          제안해줘서 고마워요!
        </div>
        <div className="text-[#5C5C5C]">
          <div>제안해주신 valueTag를 OFUTU가</div>
          <div>검토한 후 선정되면 알림 드릴게요!</div>
        </div>
        <button
          className="bg-[#000] text-[#fff] mt-[42px] py-[13px] px-[37px] rounded-[5px]"
          onClick={goBackMain}
        >
          메인으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default SuggestDoneFullPage;
