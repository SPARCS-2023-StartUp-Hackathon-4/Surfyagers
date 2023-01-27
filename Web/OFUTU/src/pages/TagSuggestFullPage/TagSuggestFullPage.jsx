import TagSuggest from "../../element/TagSuggest/TagSuggest";
import { useEffect, useState } from "react";
import TextBox from "../../element/TextBox/TextBox";

const TagSuggestFullPage = () => {
  const [valueTagText, setValueTagText] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  const activeSuggestButton = () => {
    if (valueTagText === "") return;
    location.href = "./suggestDone";
  };

  const onBack = () => {
    alert("back");
  };

  useEffect(() => {
    setButtonActive(valueTagText === "");
  }, [valueTagText]);

  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <div>
        <div>
          <button
            className="absolute translate-x-[50%] translate-y-[50%] ml-[24px]"
            onClick={onBack}
          >
            <img src="/images/arrow.left.svg" alt="" />
          </button>
          <div className="w-full flex justify-center mt-[54px] mb-[27px]">
            <img src="/images/OFUTU_logo.svg" alt="" />
          </div>
        </div>
        <div className="py-[27px] px-[31px] bg-[#F5F5F5] w-full">
          <TagSuggest />
        </div>
        <div className="w-full px-[31px] mt-[41px] font-light">
          <TextBox
            text={valueTagText}
            setText={setValueTagText}
            placeHolder="한개의 단어로 입력해주세요."
          />
          <div className="my-[21px] border-b-[0.5px] border-[#DCDCDC]"></div>
          <div className="text-[#A6A5A5] text-[14px]">
            제시한 가치에 대한 의미를 간단한 문자로 설명해주세요.
          </div>
        </div>
      </div>
      <div className="px-[24px] mb-[49px]">
        <button
          className="w-full text-[#fff] py-[17px] rounded-[5px]"
          style={{
            backgroundColor: buttonActive ? "#D9D9D9" : "#000000",
          }}
          onClick={activeSuggestButton}
        >
          제안하기
        </button>
      </div>
    </div>
  );
};

export default TagSuggestFullPage;
