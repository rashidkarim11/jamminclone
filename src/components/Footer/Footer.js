import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#010C3F] text-white py-4 fixed bottom-0 w-full transition-all duration-500 ease-in-out">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold transition-all hover:text-blue-400">
            Spotify
          </h1>
          <p className="transition-all hover:text-gray-400">
            © 2023 Spotify, Inc.
          </p>
        </div>
        <div className="md:space-x-4">
          <h1 className="transition-all hover:text-blue-400">JAMMING</h1>
        </div>
        <div className="md:flex items-center space-x-4">
          <div className="w-full md:w-64">
            <div className="bg-gray-700 h-2 rounded-full">
              <div
                className="bg-green-400 h-2 rounded-full transition hover:bg-blue-400"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div>
            <i className="fas fa-volume-up text-lg hover:text-gray-400 transition"></i>
            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                className="absolute w-full h-1 appearance-none cursor-pointer bg-transparent transition"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
