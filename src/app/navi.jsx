"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navi() {
  const pathname = usePathname();
  return (
    <div>
      <nav>
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Cuaca Malaysia
        </Link>
      </nav>
    </div>
  );
}
