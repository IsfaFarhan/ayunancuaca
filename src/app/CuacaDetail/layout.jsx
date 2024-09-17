import tailwind from "tailwindcss";
import { children } from "react";
export default function layout({ children }) {
  return <div className="h-auto flex justify-center w-screen">{children}</div>;
}
