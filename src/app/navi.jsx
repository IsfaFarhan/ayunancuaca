"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navi() {
  const pathname = usePathname();
  return (
    <nav className="relative z-10 bg-white white shadow-custom-blue p-2 rounded-lg ">
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        <div className="flex items-center">
          <Image
            className="pr-4"
            src="/ACM Icon.svg" // Path to your image
            alt="Ayunan cuaca Malaysia" // Alternative text for accessibility
            width={60} // Desired width
            height={60} // Desired height
          />
          <p className="font-medium">Ayunan Cuaca Malaysia</p>
        </div>
      </Link>
    </nav>
  );
}
