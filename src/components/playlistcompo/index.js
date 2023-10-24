import { useState } from "react";
import Spotify from "../../api/Spotify";
import Button from "../button";
import Track from "../tractList";

const PlayListCompo = ({ playList, setPlayList }) => {
  const [addintToPlayList, setAddToPlayLists] = useState(false);
  const handleAddToPlayList = async () => {
    setAddToPlayLists(true);
    const trackUris = playList.map((track) => track.uri);
    await Spotify.savePlaylist("playlistName", trackUris).then(() => {
      setPlayList([]);
    });
    setAddToPlayLists(false);
  };
  const removeItem = (data) => {
    const updatedArray = playList?.filter((item) => item.id !== data.id);
    setPlayList(updatedArray);
  };
  return (
    <div className="bg-[#010C3F] bg-opacity-70 p-2 font-bold text-white text-4xl transition-colors">
      <h1>PlayList</h1>

      <div className="mt-10">
        {addintToPlayList && (
          <div class="w-32 h-32 relative text-center">
            <div class="absolute top-0 right-0 bottom-0 left-0 transform -rotate-90 origin-center animate-spin-slow">
              <div class="w-full h-full border-4 border-blue-500 border-solid rounded-full border-dashed"></div>
            </div>
            <div class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
              <span class="text-xl font-semibold text-gray-600">Adding...</span>
            </div>
          </div>
        )}
        {!addintToPlayList &&
          playList?.map((item) => {
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
