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
import { daerah } from "./district";

export default function PageDaerah({ hantarNamaDaerah, namaNegeri }) {
  const filterDaerah = daerah[namaNegeri] || [];

  return (
    <div>
      <Select onValueChange={hantarNamaDaerah}>
        <SelectTrigger className="max-w-[350px] m-2">
          <SelectValue placeholder="Pilih Daerah" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Daerah {namaNegeri}</SelectLabel>
            {filterDaerah.map((district, index) => (
              <SelectItem key={index} value={district}>
                {district}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
