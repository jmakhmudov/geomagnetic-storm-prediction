"use client"

import Navbar from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [kp, setKp] = useState([]);

  useEffect(() => {
    axios.get("https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json")
      .then(res => setKp(res.data.slice(-1)[0]))
  }, []);

  return (
    <main className="px-8 relative mb-14">
      <Navbar />

      <div className="h-screen md:flex items-center justify-between">
        <div className=" grid gap-11">
          <h1 className="font-thin md:text-7xl">High intensity storm</h1>
          <div className="hidden md:block">
            <p>Kp index</p>
            {
              kp[1] ?
                <h1 className="text-9xl font-bold">{kp[1]}</h1>
                :
                <Skeleton className="my-2 w-36 h-24" />
            }
            <p className="opacity-50">Now</p>
          </div>
        </div>

        <Image
          className="mr-[-50px] md:scale-[0.85]"
          src="/sun(1).svg"
          alt="sun"
          width={400}
          height={400}
          layout="responsive"
        />

        <div className="mb-16 text-sm md:hidden">
          <p className="opacity-50">Kp index</p>
          {
            kp[1] ?
              <h1 className="text-7xl font-bold">{kp[1]}</h1>
              :
              <Skeleton className="w-20 h-10" />
          }
          <p className="opacity-50">Now</p>
        </div>
      </div>

      <p className="max-w-lg opacity-60">The K-index, and by extension the Planetary K-index, are used to characterize the magnitude of geomagnetic storms. Kp is an excellent indicator of disturbances in the Earth&apos;s magnetic field and is used by SWPC to decide whether geomagnetic alerts and warnings need to be issued for users who are affected by these disturbances.</p>
    </main>
  )
}
