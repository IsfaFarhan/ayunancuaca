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
import { Johor, Kedah } from "./district";

export default function PageDaerah({ hantarNamaDaerah }) {
  return (
    <div>
      <Select onValueChange={hantarNamaDaerah}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Pilih Negeri" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Malaysia</SelectLabel>
            {Johor.map((district, index) => (
              <SelectItem key={index} value={district}>
                {district}
              </SelectItem>
            ))}
            {Kedah.map((district, index) => (
              <SelectItem key={index} value={district}>
                {district}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {/*    <button onClick={navigateToCuaca}>Lihat Cuaca</button> */}
    </div>
  );
}
