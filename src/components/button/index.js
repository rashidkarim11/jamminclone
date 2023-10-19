const Button = ({ text }) => {
  return (
    <button class="cursor-pointer w-[8.11rem] py-2 px-3 rounded-full bg-[#010C3F] text-center text-[.833rem] transition-background-color-[.25s] border-0 text-white font-semibold">
      {text}
    </button>
  );
};

export default Button;
