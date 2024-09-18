import tailwind from "tailwindcss";
import { children } from "react";
export default function layout({ children }) {
  return (
    <div className="absolute top-0 bg-gradient-to-b from-[#005A9B] to-[#2D7FAE] text-white flex-col flex items-center justify-center w-screen h-screen">
      {children}
    </div>
  );
}
