"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PageMuka({ hantarNamaNegeri }) {
  return (
    <div>
      <Select onValueChange={hantarNamaNegeri}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Pilih Negeri" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Malaysia</SelectLabel>
            <SelectItem value="Johor">Johor</SelectItem>
            <SelectItem value="Kedah">Kedah</SelectItem>
            <SelectItem value="Kelantan">Kelantan</SelectItem>
            <SelectItem value="Melaka">Melaka</SelectItem>
            <SelectItem value="Negeri Sembilan">Negeri Sembilan</SelectItem>
            <SelectItem value="Pahang">Pahang</SelectItem>
            <SelectItem value="Perak">Perak</SelectItem>
            <SelectItem value="Perlis">Perlis</SelectItem>
            <SelectItem value="Pulau Pinang">Pulau Pinang</SelectItem>
            <SelectItem value="Sabah">Sabah</SelectItem>
            <SelectItem value="Sarawak">Sarawak</SelectItem>
            <SelectItem value="Selangor">Selangor</SelectItem>
            <SelectItem value="Terengganu">Terengganu</SelectItem>
            <SelectItem value="Kuala Lumpur">Kuala Lumpur</SelectItem>
            <SelectItem value="Putrajaya">Putrajaya</SelectItem>
            <SelectItem value="Labuan">Labuan</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

/* export default function PageMuka() {
  const [namaNegeri, setNamaNegeri] = useState("");
  const router = useRouter();

  const hantarNamaNegeri = (value) => {
    setNamaNegeri(value);
  };
  const navigateToCuaca = () => {
    router.push(`/CuacaDetail?location=${encodeURIComponent(namaNegeri)}`);
  };

  return (
    <div>
      <Select onValueChange={hantarNamaNegeri}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Pilih Negeri" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Malaysia</SelectLabel>
            <SelectItem value="Johor">Johor</SelectItem>
            <SelectItem value="Kedah">Kedah</SelectItem>
            <SelectItem value="Kelantan">Kelantan</SelectItem>
            <SelectItem value="Melaka">Melaka</SelectItem>
            <SelectItem value="Negeri Sembilan">Negeri Sembilan</SelectItem>
            <SelectItem value="Pahang">Pahang</SelectItem>
            <SelectItem value="Perak">Perak</SelectItem>
            <SelectItem value="Perlis">Perlis</SelectItem>
            <SelectItem value="Pulau Pinang">Pulau Pinang</SelectItem>
            <SelectItem value="Sabah">Sabah</SelectItem>
            <SelectItem value="Sarawak">Sarawak</SelectItem>
            <SelectItem value="Selangor">Selangor</SelectItem>
            <SelectItem value="Terengganu">Terengganu</SelectItem>
            <SelectItem value="Kuala Lumpur">Kuala Lumpur</SelectItem>
            <SelectItem value="Putrajaya">Putrajaya</SelectItem>
            <SelectItem value="Labuan">Labuan</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <button onClick={navigateToCuaca}>Lihat Cuaca</button>
    </div>
  );
} */
