import { useParams } from "react-router-dom";
import TextBox from "../../element/TextBox/TextBox";

const ComunityDetailPage = () => {
  const onBack = () => {
    try {
      webkit.messageHandlers.scriptHandler.postMessage("back");
    } catch (error) {
      alert(error);
    }
  };

  const { id } = useParams();
  const datas = [
    {
      name: "채현",
      level: 3,
      title: "지구가 푸른 별이 되는 세상",
      content:
        "저는 작년 생일부터 생일을 비건으로 보내고 있어요.\n저의 탄생을 다른 존재들의 죽음을 빌려 축하하고 싶지 않았습니다.\n작은 실천이지만, 의미를 찾고 조금이나마 지구의 발전에 도움이 되고자 합니다.\n이렇게 실천하는 방법 있으면 함께 공유해요~",
      tags: ["제로웨이스트", "비건"],
      comments: [
        {
          name: "하이난션",
          level: 3,
          comment:
            "장바구니 들고다니기? 간단하지만 생각보다 비닐 사용 많이 줄일 수 있어요!",
        },
        {
          name: "샤인",
          level: 4,
          comment: "비누망에 넣어 끝까지 쓰기요!",
        },
      ],
    },
    {
      name: "해리",
      level: 4,
      title: "다양한 개성을 존중하는 세상",
      content:
        "유기견 후원에 관심이 있습니다! 유기견 후원 아이템 관련 추천 부탁드려요",
      tags: ["기부"],
      comments: [
        {
          name: "가치를 위한 길이",
          level: 3,
          comment: "컨슈머 피드 가서 가장 위에 뜨는거 좋아요",
        },
        {
          name: "jeenii22",
          level: 4,
          comment: "유기견은 아니지만 위안부 후원 팔지도 추천합니다.",
        },
        {
          name: "vnfmsquf",
          level: 1,
          comment: "유기견 후원 단체에 직접 후원해보는 방식도 추천해요!!",
        },
        {
          name: "hiem",
          level: 1,
          comment: "나도 사고 싶은데 돈이 없다..",
        },
      ],
    },
    {
      name: "에디",
      level: 2,
      title: "합리적인 세상",
      content:
        "비건 청소년입니다. 학교 급식을 먹다보니 비건을 지키기가 힘든데, 도움되는 팁이 있을까요?",
      tags: ["비건"],
      comments: [
        {
          name: "wfefew",
          level: 4,
          comment: "도시락 싸가는게 힘들긴 한데 의미 있더라구요",
        },
        {
          name: "seehyun",
          level: 2,
          comment: "그래도 학교 졸업하면 지키기 훨씬 쉬울거에요,,우리 힘내요!",
        },
      ],
    },
    {
      name: "패티",
      level: 3,
      title: "자연과 공존하는 세상",
      content:
        "얼쑤 제품 좋더라구요! 솔직히 처음들어보는 브랜드라 망설여졌는데 후기 보고 구매했습니다. 여기 제품 다 좋아서 추천해요!",
      tags: ["제로웨이스트", "친환경"],
      comments: [
        {
          name: "뽀로로",
          level: 4,
          comment: "감사합니다~~",
        },
        {
          name: "패티",
          level: 3,
          comment: "디어마이어스 여기 제품도 추천",
        },
        {
          name: "루피",
          level: 3,
          comment: "오 여기 사은품 많이 챙겨줘서 좋아요 ㅋㅋㅋ",
        },
      ],
    },
    {
      name: "통통이",
      level: 2,
      title: "함께 더불어가는 세상",
      content:
        "안녕하세요! 비건 음식점 사업을 시작하려고 합니다. 혹시 원하는 비건 메뉴가 있을까요?",
      tags: ["비건"],
      comments: [
        {
          name: "로보",
          level: 1,
          comment: "비건 음식점이 많이 생기면 좋겠네요..",
        },
        {
          name: "크롱",
          level: 2,
          comment: "대체육을 활용해보는 것도 좋을것 같아요.",
        },
      ],
    },
  ];

  const levelColor = ["#E4EFA4", "#C5D853", "#85D16A", "#3AB6A9"];
  const data = datas[id - 1];

  return (
    <div className="h-screen">
      <div className="fixed flex pt-[54px] pb-[24px] w-full bg-white">
        <button className="translate-x-[24px] flex-1" onClick={onBack}>
          <img src="/images/arrow.left.svg" alt="" />
        </button>
        <div className="w-full flex justify-center  flex-1">
          <img src="/images/OFUTU_logo.svg" alt="" />
        </div>
        <button dir="rtl" className="flex-1 translate-x-[-24px]">
          <img src="/images/search.svg" alt="" />
        </button>
      </div>
      <div className="h-[111px]"></div>
      <div className="p-[18px]">
        <div className="flex items-baseline">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6106 6.59235C11.8527 5.74473 11.0824 3.83756 10.917 2.98993C10.5626 1.9304 10.2081 0.80023 8.15246 0.164507C5.48539 -0.660285 -0.0702131 1.64786 0.000671925 6.38045C0.071557 11.113 6.09679 14.5036 10.917 13.9385C15.7372 13.3734 15.808 7.65189 13.6106 6.59235Z"
              fill={levelColor[data.level - 1]}
            />
          </svg>
          <div className="ml-[4px] text-[20px]">{data.name}</div>
          <div className="ml-[14px] text-[14px] font-extralight ">
            {data.title}
          </div>
        </div>
        <div className="break-keep whitespace-pre-line text-[15px] mt-[30px] font-normal">
          {data.content}
        </div>
        <div className="flex pt-[16px] pb-[24px] border-b-[1px] border-[#D8D8D8] items-center justify-between">
          <div className="flex gap-[8px] ">
            {data.tags.map((tag) => {
              return (
                <div className="py-[3px] px-[10px] border-[1px] border-black rounded-full text-[13px]">
                  #{tag}
                </div>
              );
            })}
          </div>
          <div className="text-[12px] font-extralight">5일 전</div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        {data.comments.map((comment) => {
          return (
            <div className="p-[18px] ">
              <div className="flex items-baseline">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6106 6.59235C11.8527 5.74473 11.0824 3.83756 10.917 2.98993C10.5626 1.9304 10.2081 0.80023 8.15246 0.164507C5.48539 -0.660285 -0.0702131 1.64786 0.000671925 6.38045C0.071557 11.113 6.09679 14.5036 10.917 13.9385C15.7372 13.3734 15.808 7.65189 13.6106 6.59235Z"
                    fill={levelColor[comment.level - 1]}
                  />
                </svg>
                <div className="ml-[4px] text-[18px]">{comment.name}</div>
              </div>
              <div className="text-[15px] font-normal text-[#424242] px-[10px]">
                {comment.comment}
              </div>
              <div className="border-b-[0.5px] border-[#DCDCDC] mt-[20px]"></div>
            </div>
          );
        })}
        <div className="border-[1px] border-black mx-[18px] mb-[40px] rounded-[3px] py-[12px] px-[15px]">
          <TextBox placeHolder="댓글을 입력하세요" />
        </div>
      </div>
    </div>
  );
};

export default ComunityDetailPage;
