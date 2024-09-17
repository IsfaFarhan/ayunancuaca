import tailwind from "tailwindcss";
import { children } from "react";
export default function layout({ children }) {
  return <div className="h-auto bg-slate-400">{children}</div>;
}
