import TextBox from "../../element/TextBox/TextBox";

const HomePage = () => {
  return (
    <div className="w-screen">
      <div className="pl-[24px]">
        <div className="text-[15px] text-[#808080] font-semibold">
          나의 가치소비
        </div>
        <div className="w-[50%] text-[24px] break-keep">
          지구가 푸른 별로 돌아갈 수 있는 세상을 위해
        </div>
      </div>
      <div>
        <TextBox />
      </div>
      <div>
        <div className="pl-[24px] text-[18.5px] font-bold">
          지금 OFUTU에서 HOT 제품
        </div>
        <div className="px-[24px] py-[14px]">tags</div>
        <div>imgs</div>
        <div className="px-[24px]">tips</div>
      </div>
    </div>
  );
};

export default HomePage;
