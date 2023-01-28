import { useParams } from "react-router-dom";
import TopNavBar from "../../element/TopNavBar/TopNavBar";
import { useState } from "react";
import FullSizeImage from "../../element/Image/FullSizeImage";
import ProductList from "../../element/ProductList/ProductList";

const MainPage = () => {
  const { tag } = useParams();

  const tags = [
    "home",
    "zeroWaste",
    "fairTrade",
    "eco",
    "vegun",
    "donation",
    "etc",
  ];

  const tagIndex = +tags.indexOf(tag);
  if (tag == "home") {
    location.href = "/home";
  }
  if (tag != "zeroWaste") return <div>none</div>;

  const [selectedIndex, setSelectedIndex] = useState(tagIndex);

  return (
    <div>
      <TopNavBar
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <FullSizeImage id={5} />
      <div className="mt-[-146px] z-1">
        <div className="bottom-0 flex justify-between p-[30px]">
          <div className="text-[16px] font-light flex-col justify-between">
            <svg
              className="mb-[14px]"
              width="207"
              height="24"
              viewBox="0 0 207 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.88579 23V20.6906L11.104 6.32816C11.4625 5.8009 11.8738 5.25256 12.3378 4.68312L12.3062 4.58822C11.8633 4.65149 11.2622 4.68312 10.5029 4.68312H1.73995V0.855241H18.1587V3.10135L7.97211 17.4005C7.46595 18.0965 7.02305 18.666 6.64343 19.1088L6.67506 19.2038C7.01251 19.1405 7.69794 19.1088 8.73136 19.1088H18.2536V23H0.88579ZM27.2131 13.6359V19.1721H38.76V23H22.9107V0.855241H38.5069V4.65149H27.2131V9.90296H37.9375V13.6359H27.2131ZM56.937 23L50.8946 15.5657H48.3005V23H43.8716V0.855241H53.2357C54.7752 0.855241 56.1461 1.16105 57.3482 1.77267C58.5504 2.38428 59.4784 3.24898 60.1322 4.36677C60.807 5.46346 61.1445 6.72888 61.1445 8.16301C61.1445 9.93459 60.6594 11.4425 59.6893 12.6869C58.7402 13.9312 57.4221 14.7748 55.7348 15.2177L62.2834 23H56.937ZM56.7472 8.35282C56.7472 7.17177 56.3992 6.26489 55.7032 5.63218C55.0283 4.97838 54.0793 4.65149 52.856 4.65149H48.2689V11.9276H52.8877C54.1109 11.9276 55.06 11.6113 55.7348 10.9786C56.4097 10.3459 56.7472 9.47061 56.7472 8.35282ZM76.4689 23.5062C74.2122 23.5062 72.2086 23.0316 70.4581 22.0826C68.7077 21.1124 67.3473 19.7626 66.3772 18.0332C65.4281 16.2828 64.9536 14.2792 64.9536 12.0225C64.9536 9.7026 65.4387 7.66739 66.4088 5.9169C67.4001 4.14532 68.7815 2.77445 70.5531 1.8043C72.3457 0.834151 74.4126 0.349076 76.7536 0.349076C79.0102 0.349076 81.0138 0.834151 82.7643 1.8043C84.5148 2.75336 85.8646 4.10314 86.8136 5.85363C87.7838 7.58303 88.2689 9.57606 88.2689 11.8327C88.2689 14.1526 87.7732 16.1984 86.782 17.97C85.8118 19.7205 84.4304 21.0808 82.6378 22.0509C80.8662 23.0211 78.8099 23.5062 76.4689 23.5062ZM76.5638 19.5834C77.9768 19.5834 79.2317 19.267 80.3284 18.6343C81.4251 18.0016 82.2792 17.1158 82.8908 15.9769C83.5025 14.817 83.8083 13.4988 83.8083 12.0225C83.8083 10.4829 83.5025 9.13316 82.8908 7.9732C82.3003 6.79215 81.4673 5.88526 80.3917 5.25256C79.316 4.59876 78.0717 4.27186 76.6587 4.27186C75.2245 4.27186 73.9591 4.59876 72.8624 5.25256C71.7657 5.88526 70.9116 6.77106 70.3 7.90993C69.7094 9.0488 69.4142 10.3564 69.4142 11.8327C69.4142 13.3723 69.7094 14.7326 70.3 15.9137C70.9116 17.0736 71.7552 17.9805 72.8308 18.6343C73.9064 19.267 75.1507 19.5834 76.5638 19.5834ZM97.6539 23L90.0931 0.855241H94.7751L97.9703 11.0735C98.7928 13.6887 99.3622 15.7028 99.6786 17.1158H99.7735C100.28 15.1544 100.891 13.1298 101.608 11.0418L105.025 0.855241H108.505L111.921 10.9786C112.301 12.0542 112.67 13.1825 113.029 14.3635C113.387 15.5235 113.651 16.4409 113.82 17.1158H113.915C114.484 14.9013 115.053 12.8556 115.623 10.9786L118.691 0.855241H123.31L115.908 23H111.858L108.948 14.237C108.062 11.4953 107.345 9.21752 106.797 7.40376H106.702L105.658 10.5989C105.362 11.5691 104.972 12.7923 104.487 14.2686L101.64 23H97.6539ZM146.308 23H141.531L139.665 18.666H128.751L126.884 23H122.234L131.914 0.855241H136.628L146.308 23ZM130.301 14.8697H138.115L135.616 8.511C134.92 6.73942 134.477 5.56891 134.287 4.99948H134.192L133.496 6.77106L132.8 8.57427L130.301 14.8697ZM157.176 23.4745C155.51 23.4745 153.928 23.232 152.431 22.7469C150.954 22.2618 149.626 21.5764 148.445 20.6906L150.375 17.274C151.387 17.9911 152.473 18.5605 153.633 18.9823C154.814 19.383 155.985 19.5834 157.144 19.5834C158.494 19.5834 159.58 19.3092 160.403 18.7609C161.247 18.1914 161.668 17.4216 161.668 16.4515C161.668 15.6079 161.31 14.933 160.593 14.4268C159.897 13.9206 158.716 13.5516 157.05 13.3196C154.329 12.961 152.325 12.2756 151.039 11.2633C149.752 10.2509 149.109 8.84844 149.109 7.05577C149.109 5.74818 149.457 4.58821 150.153 3.57588C150.87 2.56355 151.851 1.78321 153.095 1.23487C154.361 0.665429 155.795 0.380711 157.398 0.380711C158.874 0.380711 160.224 0.549432 161.447 0.886876C162.67 1.22432 163.893 1.78321 165.117 2.56355L163.25 5.82199C162.385 5.25256 161.457 4.83075 160.466 4.55658C159.496 4.28241 158.526 4.14532 157.556 4.14532C156.311 4.14532 155.31 4.38786 154.55 4.87293C153.812 5.35801 153.443 6.02235 153.443 6.86596C153.443 7.6463 153.791 8.24737 154.487 8.66918C155.183 9.06989 156.354 9.39679 157.999 9.64987C160.761 10.0506 162.786 10.8204 164.073 11.9593C165.38 13.077 166.034 14.5639 166.034 16.4198C166.034 17.8329 165.665 19.0772 164.927 20.1528C164.189 21.2073 163.145 22.0298 161.795 22.6204C160.466 23.1898 158.927 23.4745 157.176 23.4745ZM168.148 0.855241H186.401V4.65149H179.441V23H175.076V4.65149H168.148V0.855241ZM194.638 13.6359V19.1721H206.185V23H190.336V0.855241H205.932V4.65149H194.638V9.90296H205.363V13.6359H194.638Z"
                fill="black"
              />
            </svg>
            <div>
              <div>모든 제품이 재사용 될 수 있도록</div>
              <div>장려하여 폐기물을 줄여요</div>
            </div>
          </div>
          <svg
            width="80"
            height="81"
            viewBox="0 0 80 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M79 79.0454L79 1.04541M79 79.0454L0.999998 79.0454M79 79.0454L0.999999 1.04541"
              stroke="black"
              stroke-width="1.93"
            />
          </svg>
        </div>
      </div>
      <ProductList tag={tag} />
    </div>
  );
};

export default MainPage;