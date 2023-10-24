const Track = ({ item, handleFunction, icon }) => {
  return (
    <div class="flex items-center border-b border-gray-200 Track">
      <div class="flex-grow flex flex-col justify-center h-20 Track-information">
        <h3 class="mb-2.5 text-lg font-semibold">{item.name}</h3>
        <p class="text-xs font-light text-gray-400">{item.artist}</p>
      </div>
      <button
        class="Track-action hover:text-gray-500 cursor-pointer p-2.5 text-lg transition-colors"
        onClick={() => {
          handleFunction(item);
        }}
      >
        {icon}
      </button>
    </div>
  );
};

export default Track;
