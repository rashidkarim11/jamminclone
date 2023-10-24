import Spotify from "../../api/Spotify";
import Button from "../button";
import Track from "../tractList";

const PlayListCompo = ({ playList, setPlayList }) => {
  const handleAddToPlayList = async () => {
    const trackUris = playList.map((track) => track.uri);
    Spotify.savePlaylist("playlistName", trackUris).then(() => {
      setPlayList([]);
    });
  };
  const removeItem = (data) => {
    const updatedArray = playList?.filter((item) => item.id !== data.id);
    setPlayList(updatedArray);
  };
  return (
    <div className="bg-[#010C3F] bg-opacity-70 p-2 font-bold text-white text-4xl transition-colors">
      <h1>PlayList</h1>
      <div className="mt-10">
        {playList?.map((item) => {
          return (
            <Track item={item} icon="REMOVE" handleFunction={removeItem} />
          );
        })}
      </div>
      <div className="mx-auto mt-10">
        {Boolean(playList?.length) && (
          <Button text="Add to playlist" onClick={handleAddToPlayList} />
        )}
      </div>
    </div>
  );
};

export default PlayListCompo;
