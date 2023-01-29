import { useState } from "react";
import Comunity from "../../element/Comunity/Comunity";
import { useParams } from "react-router-dom";
import TopNavBar from "../../element/TopNavBar/TopNavBar";

const ComunityPage = () => {
  const { tag } = useParams();

  const tags = [
    "home",
    "freeSubject",
    "zeroWaste",
    "fairTrade",
    "eco",
    "vegun",
    "donation",
    "etc",
  ];

  const tagIndex = +tags.indexOf(tag);

  const [selectedIndex, setSelectedIndex] = useState(tagIndex);

  if (tag != "home")
    return (
      <div className="h-screen">
        <TopNavBar
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          from="comunity"
        />
        <div className="h-[calc(100%-200px)] flex items-center justify-center">
          <img src="/images/repair.png" alt="" />
        </div>
      </div>
    );

  return (
    <div>
      <TopNavBar
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        from="comunity"
      />
      <Comunity tag={tag} />
      <div className="h-[220px]"></div>
    </div>
  );
};
export default ComunityPage;
