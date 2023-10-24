import Loading from "../loading";
import Track from "../tractList";

const ResultCompo = ({ result, setPlayList, playList, resultLoading }) => {
  const addSongToPlayList = (item) => {
    const updatedPlayList = [...playList, item];

    setPlayList(updatedPlayList);
  };
  const arr = [1, 2, 3, 4, 4];

  return (
    <div className="bg-[#010C3F] bg-opacity-70 p-2  font-bold text-white text-4xl transition-colors min-h-20">
      <h1>Result</h1>
      <div className="mt-10">
        {resultLoading &&
          arr.map(() => {
            return <Loading />;
          })}
        {result?.map((item) => {
          return (
            <Track item={item} handleFunction={addSongToPlayList} icon="ADD" />
          );
        })}
      </div>
    </div>
  );
};

export default ResultCompo;
