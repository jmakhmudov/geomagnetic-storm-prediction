"use client"

import Navbar from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const stormType = [
  "Quiet period",
  "Quiet period",
  "Quiet period",
  "Quiet period",
  "Quiet period",
  "Mid activity",
  "Mid activity",
  "High intensity storm",
  "High intensity storm",
  "High intensity storm",
]

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
        <div className=" gap-11 hidden md:grid ">
          {
            kp[1] ?
              <>
                <h1 className="font-thin md:text-7xl">{stormType[Math.round(Number(kp[1]))]}</h1>

                <section className="gap-10 flex">
                  <div>
                    <p>Kp index</p>
                    <h1 className="text-9xl font-bold">{kp[1]}</h1>
                    <p className="opacity-50">Now</p>
                  </div>
                  <div>
                    <div>
                      <p className="opacity-50 text-sm">Kp index</p>
                      <h1 className="text-5xl font-thin">{kp[1]}</h1>
                      <p className="opacity-50 text-sm">Now</p>
                    </div>
                    <div className="mt-4 text-2xl text-green-400">+1.33</div>
                  </div>
                </section>

              </>
              :
              <>
                <Skeleton className="w-52 h-24" />
                <div className="flex gap-10">
                  <Skeleton className="my-2 w-56 h-24" />
                  <div>
                    <Skeleton className="w-20 h-10 mb-4" />
                    <Skeleton className="w-20 h-10" />
                  </div>
                </div>
              </>

          }
        </div>

        <Image
          className="mr-[-50px] md:scale-[0.85]"
          src="/sun(1).svg"
          alt="sun"
          width={400}
          height={400}
          layout="responsive"
        />

        <div className="mt-16 text-sm md:hidden">
          {
            kp[1] ?
              <>
                <h1 className="font-thin md:text-7xl">{stormType[Math.round(Number(kp[1]))]}</h1>
                <section className="gap-10 flex items-center justify-between md:hidden mt-4">
                  <div>
                    <p>Kp index</p>
                    <h1 className="text-7xl font-bold">{kp[1]}</h1>
                    <p className="opacity-50">Now</p>
                  </div>
                  <div>
                    <div>
                      <p className="opacity-50 text-sm">Kp index</p>
                      <h1 className="text-4xl font-thin">{kp[1]}</h1>
                      <p className="opacity-50 text-sm">Now</p>
                    </div>
                    <div className="mt-2 text-xl text-green-400">+1.33</div>
                  </div>
                </section>
              </>
              :
              <>
                <Skeleton className="w-52 h-10" />
                <div className="flex gap-10">
                  <Skeleton className="my-2 w-56 h-24" />
                  <div>
                    <Skeleton className="w-20 h-10 mb-4" />
                    <Skeleton className="w-20 h-10" />
                  </div>
                </div>
              </>

          }
        </div>
      </div>

      <p className="max-w-lg opacity-60">The K-index, and by extension the Planetary K-index, are used to characterize the magnitude of geomagnetic storms. Kp is an excellent indicator of disturbances in the Earth&apos;s magnetic field and is used by SWPC to decide whether geomagnetic alerts and warnings need to be issued for users who are affected by these disturbances.</p>
    </main>
  )
}
