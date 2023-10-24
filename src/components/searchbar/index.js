const Input = ({ setSearchText }) => {
  return (
    <input
      className="w-[287px] py-4 px-3 border border-blue-500 rounded-md mb-5 text-[#010c3f] text-center text-base focus:outline-none transition-all duration-300 hover:border-blue-700 focus:border-blue-700"
      type="text"
      placeholder="Search for a Song, Artist, or Album"
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
    />
  );
};

export default Input;
