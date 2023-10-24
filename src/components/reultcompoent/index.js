import Track from "../tractList";

const ResultCompo = ({ result, setPlayList, playList }) => {
  const addSongToPlayList = (item) => {
    const updatedPlayList = [...playList, item];

    setPlayList(updatedPlayList);
  };

  return (
    <div className="bg-[#010C3F] bg-opacity-70 p-2  font-bold text-white text-4xl transition-colors min-h-20">
      <h1>Result</h1>
      <div className="mt-10">
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
