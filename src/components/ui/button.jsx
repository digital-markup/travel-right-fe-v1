/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

function Button({ title, className, type, onClick, }) {
  return (
    <button
      type={type || "button"}
      className={twMerge(
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
