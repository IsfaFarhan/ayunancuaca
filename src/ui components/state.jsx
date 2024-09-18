"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
export default function Cuaca2({ addDay }) {
  const [weather, setWeather] = useState(null);
  const searchParams = useSearchParams();
  const [error, setError] = useState(null);

  const negeri = searchParams.get("location");

  useEffect(() => {
    if (negeri) {
      // Call your API route
      fetch(`/api/weathernegeri?location=${negeri}`)
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => setError(error.message));
    }
  }, [negeri]);
  if (error) return <div>Error: {error}</div>;
  if (!negeri) {
    return null;
  } else if (!weather) {
    return <div>Loading...</div>;
  }

  const today = weather[addDay];

  return (
    <div className="transition ease-in-out duration-500 transform flex-col flex items-center bg-white shadow-custom-blue rounded-lg m-2 min-h-[620px] xl:w-[350px] lg:w-[970px] md:w-[970px] sm:w-[350px] p-6">
      <h1 className="font-medium text-lg">{negeri}</h1>

      <Image
        className="border border-[#2D7FAE] border-opacity-25 rounded-md"
        src={`/${negeri}.png`}
        alt="test"
        width={220}
        height={20}
      />
      {/* <p className="">Date: {today.date}</p> */}
      <div className="flex flex-col justify-between p-2 h-full">
        <p className="font-medium text-md">Cuaca Ketika ini </p>
        <p className="text-pretty text-sm">
          {today.summary_forecast} berlaku pada waktu {today.summary_when}
        </p>
        <hr className="boder-[#2D7FAE]"></hr>
        <p className="font-medium text-md">Ramalan Pagi</p>
        <p className="text-sm"> {today.morning_forecast}</p>
        <hr className="boder-[#2D7FAE]"></hr>
        <p className="font-medium text-md">Ramalan Tengahari</p>
        <p className="text-sm"> {today.afternoon_forecast}</p>
        <hr className="boder-[#2D7FAE]"></hr>
        <p className="font-medium text-md">Ramalan Malam</p>
        <p className="text-sm"> {today.night_forecast} </p>
        {/* <p>
        Suhu hari ini adalah di antara {today.min_temp} ke {today.max_temp}
      </p> */}
      </div>
    </div>
  );
}
