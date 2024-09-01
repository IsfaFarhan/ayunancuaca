"use client";
import React, { useState } from "react";
import PageMuka from "./stateinput";
import Buttons from "./button";
import PageDaerah from "./districtinput";
import { useRouter } from "next/navigation";

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
    router.push(
      `/CuacaDetail?location=${encodeURIComponent(
        namaNegeri
      )}&location2=${encodeURIComponent(namaDaerah)}`
    );
  };

  return (
    <div>
      <PageMuka hantarNamaNegeri={hantarNamaNegeri} />
      <PageDaerah hantarNamaDaerah={hantarNamaDaerah} />
      <Buttons navigateToCuaca={navigateToCuaca} />
      {/*  <PageDaerah /> */}
    </div>
  );
}
