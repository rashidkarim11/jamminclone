const Button = (props) => {
  return (
    <button
      {...props}
      className="cursor-pointer w-[8.11rem] py-2 px-3 rounded-full bg-gradient-to-r from-blue-900 to-indigo-600 text-[.833rem] transition duration-300 ease-in-out border-0 text-white font-semibold hover:bg-blue-800 focus:ring-2 focus:ring-blue-400"
    >
      {props.text}
    </button>
  );
};

export default Button;
