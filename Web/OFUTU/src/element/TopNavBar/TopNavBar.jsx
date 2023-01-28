const TopNavBar = ({ selectedIndex, setSelectedIndex }) => {
  const tags = [
    "홈",
    "제로웨이스트",
    "공정무역",
    "친환경",
    "비건",
    "기부",
    "ETC",
  ];

  const tags_eng = [
    "home",
    "zeroWaste",
    "fairTrade",
    "eco",
    "vegun",
    "donation",
    "etc",
  ];

  const changeIndex = (index) => {
    location.href = "/main/" + tags_eng[index];
  };

  return (
    <div className="w-screen overflow-y-auto scrollbar-hide my-[14px]">
      <div className="flex w-max">
        {tags.map((tag, index) => {
          if (index === selectedIndex) {
            return (
              <button
                key={index}
                className="mx-[10px] w-fit text-[#000000] text-[14px]"
              >
                {tag}
              </button>
            );
          }
          return (
            <button
              className="mx-[10px] w-fit text-[#767676] text-[14px]"
              onClick={() => changeIndex(index)}
              key={index}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TopNavBar;
