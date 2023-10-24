import Button from "./components/button";
import Header from "./components/header";
import Input from "./components/searchbar";
import Footer from "./components/Footer/Footer";
import ResultCompo from "./components/reultcompoent";
import PlayListCompo from "./components/playlistcompo";
import { useEffect, useState } from "react";
import Spotify from "./api/Spotify";
import image from "./assets/images/background_img.jpg";

function App() {
  const [searchText, setSearchText] = useState(null);
  const [result, setResult] = useState(null);
  const [playList, setPlayList] = useState([]);

  const [resultLoading, setLoadingResult] = useState(false);

  const handleSearch = async () => {
    setLoadingResult(true);
    const data = await Spotify.search(searchText);
    setResult(data);
    setLoadingResult(false);
  };

  return (
    <div
      className="bg-background w-full  bg-cover "
      style={{ minHeight: "100vh", backgroundImage: `url(${image})` }}
    >
      <Header />
      <div className="mt-20 flex flex-col justify-center items-center">
        <Input setSearchText={setSearchText} />
        <Button text="search" onClick={handleSearch} />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10 px-10">
        <ResultCompo
          result={result}
          setPlayList={setPlayList}
          playList={playList}
          resultLoading={resultLoading}
        />
        <PlayListCompo playList={playList} setPlayList={setPlayList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
