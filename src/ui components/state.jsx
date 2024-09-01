"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
export default function Cuaca2() {
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
  if (!weather) return <div>Loading...</div>;

  const today = weather[2];

  return (
    <div>
      <h1 className="text-2xl">Weather Forecast for {negeri}</h1>
      <br></br>
      <p>Date: {today.date}</p>
      <p>
        Cuaca Hari ini {today.summary_forecast} berlaku pada waktu{" "}
        {today.summary_when}
      </p>
      <p>Ramalan Pagi ini: {today.morning_forecast}</p>
      <p>Ramalan Tengahari ini: {today.afternoon_forecast}</p>
      <p>Ramalan Malam ini: {today.morning_forecast} </p>
      <p>
        Suhu hari ini adalah di antara {today.min_temp} ke {today.max_temp}
      </p>
    </div>
  );
}
