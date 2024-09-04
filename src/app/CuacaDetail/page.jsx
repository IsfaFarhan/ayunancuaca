"use client";
import React from "react";
import { useState } from "react";
import Cuaca2 from "../../ui components/state";
import Cuaca3 from "../../ui components/district";

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
      <div>
        <button onClick={buttonAllInc}>Tambah Hari</button>
        <p>{countDay}</p>
        <button onClick={buttonAllDec}>Tolak Hari</button>
      </div>
      <Cuaca2 addDay={addDay} />
      <Cuaca3 addDay={addDay} />
    </div>
  );
}
