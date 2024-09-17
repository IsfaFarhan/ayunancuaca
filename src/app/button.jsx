import * as React from "react";
export default function Buttons({ navigateToCuaca }) {
  return (
    <button
      onClick={navigateToCuaca}
      className="text-white font-medium bg-[#46bcff] pt-1 pb-1 pr-4 pl-4 border border-[#2d7fae] hover:shadow-custom-hover transition duration-300 ease-in-out active:bg-[#2d7fae] border-opacity-25 rounded-[20px]"
    >
      Lihat Cuaca
    </button>
  );
}
