import ComunityCell from "./ComunityCell";

const Comunity = ({ tag }) => {
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
  const goComunityDetail = (index) => {
    location.href = "/comunityDetail/" + index + 1;
  };
  return (
    <div>
      {datas.map((data, index) => {
        return (
          <div
            onClick={() => {
              goComunityDetail(index);
            }}
          >
            <ComunityCell data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Comunity;
