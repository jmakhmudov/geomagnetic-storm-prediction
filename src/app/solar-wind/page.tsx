"use client"

import Navbar from "@/components/Navbar";
import { UpdateIcon } from "@radix-ui/react-icons/";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import SolarData from "@/components/ui/solarData";
import { Skeleton } from "@/components/ui/skeleton";

const lastIdx = 1419;

const SolarWind = () => {
    const [solarWind, setSolarWind] = useState([]);

    useEffect(() => {
        axios.get("https://services.swpc.noaa.gov/products/solar-wind/plasma-1-day.json")
            .then(res => setSolarWind(res.data))
    }, []);


    const renderData = () => (
        <section className="mt-10">

            <SolarData
                data={"1"}
                title="Density (g/cm3)"
                trend={1}
                changed={0}
            />
            <SolarData data="9.23" title="Density (g/cm3)" trend={2} changed={0.3} />
        </section>
    )

    const renderSkeleton = () => (
        <section className="grid gap-2">
            <Skeleton className="w-[80px] h-4" />
            <Skeleton className="w-[120px] h-10" />
        </section>
    )


    return (
        <main>
            <Navbar />
            <section className="page-main-section">
                <div className="flex items-center justify-between">
                    <div>
                        <h1>Solar Wind</h1>
                        <p className="opacity-60 text-xs">Last update at 2023-09-07 08:10:00.000</p>
                    </div>
                    <UpdateIcon className="cursor-pointer" />
                </div>

                <section className="mt-10 grid gap-14">
                    {Array.from({length: 3}).map(() => renderSkeleton())}
                </section>
            </section>
        </main>
    );
}

export default SolarWind;