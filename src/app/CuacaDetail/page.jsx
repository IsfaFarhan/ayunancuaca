"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Cuaca2 from "../../ui components/state";
import Cuaca3 from "../../ui components/district";

export default function Cuaca() {
  return (
    <div>
      <Cuaca2 />
      <Cuaca3 />
    </div>
  );
}
