import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const FullSizeImage = ({ id }) => {
  const { data, error, isLoading } = useSWR(
    "http://loopy-lim.com:8000/image/" + id,
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>ERROR</div>;
  }
  if (isLoading)
    return (
      <div className="animate-pulse">
        <div className="w-full h-full"></div>
      </div>
    );

  const imgUrl = data.url;

  return (
    <div>
      <img className="w-full h-full" src={imgUrl} alt="" />
    </div>
  );
};

export default FullSizeImage;
