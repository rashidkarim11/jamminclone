const Loading = () => {
  return (
    <div class="flex items-center border-b border-gray-200 Track animate-pulse">
      <div class="flex-grow flex flex-col justify-center h-20 Track-information">
        <h3 class="mb-2.5 text-lg font-semibold bg-gray-300 h-6 w-1/2 rounded"></h3>
        <p class="text-xs font-light text-gray-400 bg-gray-200 h-4 w-2/3 rounded"></p>
      </div>
      <button
        class="Track-action hover:text-gray-500 cursor-pointer p-2.5 text-lg transition-colors bg-gray-300 w-10 h-10 rounded"
        disabled
      >
        {/* You can use a loading icon or text here */}
      </button>
    </div>
  );
};

export default Loading;
