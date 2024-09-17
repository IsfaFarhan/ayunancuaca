"use client";
import React, { useState } from "react";
import PageMuka from "./stateinput";
import Buttons from "./button";
import PageDaerah from "./districtinput";
import { useRouter } from "next/navigation";
import { FrontSunny } from "../ui components/animation";

export default function Cuaca() {
  const [namaNegeri, setNamaNegeri] = useState("");
  const [namaDaerah, setnamaDaerah] = useState("");
  const router = useRouter();

  const hantarNamaNegeri = (value) => {
    setNamaNegeri(value);
  };

  const hantarNamaDaerah = (value) => {
    setnamaDaerah(value);
  };

  const navigateToCuaca = () => {
    if (!namaDaerah) {
      alert("Pilih Daerah");
    } else if (namaNegeri === "Wilayah") {
      router.push(`/CuacaDetail?location2=${encodeURIComponent(namaDaerah)}`);
    } else {
      router.push(
        `/CuacaDetail?location=${encodeURIComponent(
          namaNegeri
        )}&location2=${encodeURIComponent(namaDaerah)}`
      );
    }
  };

  return (
    <div className="flex items-center justify-center w-full m-4">
      <div className="z-10">
        <div className=" flex-wrap flex items-center justify-center pl-4 pr-4 m-2">
          <PageMuka hantarNamaNegeri={hantarNamaNegeri} />
          <PageDaerah
            hantarNamaDaerah={hantarNamaDaerah}
            namaNegeri={namaNegeri}
          />
        </div>
        <div className="flex items-center justify-center m-4">
          <Buttons navigateToCuaca={navigateToCuaca} />
        </div>

        {/*  <PageDaerah /> */}
      </div>

      <div className="fixed h-[900px] w-[1300px] bottom-0">
        <FrontSunny />
      </div>
    </div>
  );
}
