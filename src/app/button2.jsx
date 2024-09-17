"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export function ButtonTentang() {
  const router = useRouter();

  const openTentang = () => {
    router.push("/Tentang");
  };

  return (
    <button
      onClick={openTentang}
      className="relative z-20 text-[#46BCFF] font-medium bg-white pt-1 pb-1 pr-4 pl-4 border border-[#46BCFF] border-opacity-25 rounded-[20px] mr-2 hover:shadow-custom-hover transition duration-300 ease-in-out active:bg-[#46BCFF] active:text-white"
    >
      Tentang
    </button>
  );
}

export function ButtonGithub() {
  const openGithub = () => {
    window.open("https://github.com/IsfaFarhan/weatherapp", "_blank");
  };
  return (
    <button
      onClick={openGithub}
      className="relative z-20 text-[#46BCFF] font-medium bg-white pt-1 pb-1 pr-4 pl-4 border border-[#46BCFF] border-opacity-25 rounded-[20px] ml-2 hover:shadow-custom-hover transition duration-300 ease-in-out active:bg-[#46BCFF] active:text-white"
    >
      Github
    </button>
  );
}
