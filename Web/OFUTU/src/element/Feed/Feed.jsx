import FullSizeImage from "../Image/FullSizeImage";

const Feed = () => {
  const feedClick = (id) => {
    location.href = "/feedDetail/" + id;
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-[6px]">
        <div
          onClick={() => {
            feedClick(1);
          }}
        >
          <FullSizeImage id={14} />
        </div>
        <div
          onClick={() => {
            feedClick(2);
          }}
        >
          <FullSizeImage id={15} />
        </div>
        <div
          onClick={() => {
            feedClick(3);
          }}
        >
          <FullSizeImage id={16} />
        </div>
        <div
          className="row-span-2"
          onClick={() => {
            feedClick(4);
          }}
        >
          <FullSizeImage id={17} />
        </div>
        <div
          className="row-span-2"
          onClick={() => {
            feedClick(5);
          }}
        >
          <FullSizeImage id={18} />
        </div>
        <div
          onClick={() => {
            feedClick(6);
          }}
        >
          <FullSizeImage id={19} />
        </div>
        <div
          className="row-span-2"
          onClick={() => {
            feedClick(7);
          }}
        >
          <FullSizeImage id={20} />
        </div>
        <div
          onClick={() => {
            feedClick(8);
          }}
        >
          <FullSizeImage id={21} />
        </div>
        <div
          onClick={() => {
            feedClick(9);
          }}
        >
          <FullSizeImage id={22} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
