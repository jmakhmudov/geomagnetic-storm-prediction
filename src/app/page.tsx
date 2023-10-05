"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {

  return (
    <main className="px-8 relative mb-14">
      <Navbar />

      <div className="md:mt-[-150px] md:flex items-center justify-between">
        <div className=" grid gap-11">
          <h1 className="font-thin md:text-7xl">High intensity storm</h1>
          <div className="hidden md:block">
            <p>Kp index</p>
            <h1 className="text-9xl font-thin">4</h1>
            <p className="opacity-50">16:56 UTC</p>
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
          <h1 className="text-9xl font-thin">4</h1>
          <p className="opacity-50">16:56 UTC</p>
        </div>
      </div>

      <p className="max-w-lg opacity-60">The K-index, and by extension the Planetary K-index, are used to characterize the magnitude of geomagnetic storms. Kp is an excellent indicator of disturbances in the Earth's magnetic field and is used by SWPC to decide whether geomagnetic alerts and warnings need to be issued for users who are affected by these disturbances.</p>
    </main>
  )
}
