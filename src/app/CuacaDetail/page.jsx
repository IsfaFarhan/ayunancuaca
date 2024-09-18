"use client";
import React from "react";
import { useState } from "react";
import Cuaca2 from "../../ui components/state";
import Cuaca3 from "../../ui components/district";
import Image from "next/image";

export default function Cuaca() {
  const [addDay, setAddDay] = useState(6);
  const tarikh = new Date();
  const hari = tarikh.getDay();
  const days = ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "sabtu"];

  const [addDate, setAddDate] = useState(hari);

  const incDay = () => {
    if (addDate < 6) {
      setAddDate(addDate + 1);
    } else {
      setAddDate(0);
    }
  };

  const decDay = () => {
    if (addDate <= 6 && addDate > 0) {
      setAddDate(addDate - 1);
    } else {
      setAddDate(6);
    }
  };
  let countDay = days[addDate];

  const buttonAllInc = () => {
    if (addDay <= 6 && addDay > 0) {
      incDay();
      increase();
    }
  };

  const buttonAllDec = () => {
    if (addDay >= 0 && addDay < 6) {
      decDay();
      decrease();
    }
  };

  const increase = () => {
    if (addDay <= 6 && addDay > 0) {
      setAddDay(addDay - 1);
    }
  };
  const decrease = () => {
    if (addDay >= 0 && addDay < 6) {
      setAddDay(addDay + 1);
    }
  };

  return (
    <div>
      {/* z-50 relative bottom-14 left-[38rem] */}
      <div className=" z-50 lg:absolute sm:static right-[2rem] top-5 flex-row flex items-center justify-center">
        <button onClick={buttonAllDec}>
          <Image
            className="bg-[#46BCFF] rounded-tl-md rounded-bl-md hover:bg-[#2D7FAE] transition duration-300 ease-in-out"
            src="/left chev.svg" // Path to your image
            alt="Tolak hari" // Alternative text for accessibility
            width={34} // Desired width
            height={34}
          />
        </button>
        <p className="text-center min-w-[97px] p-1 pr-4 pl-4 bg-white border border-[#2D7FAE] border-opacity-25">
          {countDay}
        </p>
        <button onClick={buttonAllInc}>
          <Image
            className="bg-[#46BCFF] rounded-tr-md rounded-br-md hover:bg-[#2D7FAE] transition duration-300 ease-in-out"
            src="/right chev.svg" // Path to your image
            alt="Tolak hari" // Alternative text for accessibility
            width={34} // Desired width
            height={34}
          />
        </button>
      </div>
      <div className="w-screen min-w-[500px] flex-row flex justify-center flex-wrap">
        <Cuaca2 addDay={addDay} />
        <Cuaca3 addDay={addDay} />
      </div>
    </div>
  );
}
