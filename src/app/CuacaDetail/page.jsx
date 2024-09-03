"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Cuaca2 from "../../ui components/state";
import Cuaca3 from "../../ui components/district";

export default function Cuaca() {
  const [addDay, setAddDay] = useState(6);

  let countDay;
  if (addDay === 6) {
    countDay = <p>Hari ini</p>;
  } else if (addDay === 5) {
    countDay = <p>Esok</p>;
  } else if (addDay === 4) {
    countDay = <p>Lusa</p>;
  }

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
        <button onClick={increase}>Tambah Hari</button>
        <p>{countDay}</p>
        <button onClick={decrease}>Tolak Hari</button>
      </div>
      <Cuaca2 addDay={addDay} />
      <Cuaca3 addDay={addDay} />
    </div>
  );
}
