"use client"

import Navbar from "@/components/Navbar";
import { UpdateIcon } from "@radix-ui/react-icons/";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import SolarData from "@/components/ui/solarData";
import { Skeleton } from "@/components/ui/skeleton";

const SolarWind = () => {
    const [refresh, setRefresh] = useState(0);
    const [solarWind, setSolarWind] = useState([]);
    const [lastIdx, setLastIdx] = useState(0);

    useEffect(() => {
        axios.get("https://services.swpc.noaa.gov/products/solar-wind/plasma-1-day.json")
            .then(res => {
                setSolarWind(res.data);
                setLastIdx(res.data.length - 1);
            })
    }, [refresh]);


    const renderData = () => {
        const changeDens = parseFloat((Number(solarWind[lastIdx][1]) - Number(solarWind[lastIdx - 1][1])).toFixed(1));
        const changeSpeed = parseFloat((Number(solarWind[lastIdx][2]) - Number(solarWind[lastIdx - 1][2])).toFixed(1));
        const changeTemp = parseFloat((Number(solarWind[lastIdx][3]) - Number(solarWind[lastIdx - 1][3])).toFixed(1));

        return (
            <section className="grid gap-14 h-96">
                <SolarData
                    data={solarWind[lastIdx][1]}
                    title="Density (g/cm3)"
                    trend={changeDens > 0 ? 2 : (changeDens === 0 ? 0 : 1)}
                    changed={changeDens}
                />
                <SolarData
                    data={solarWind[lastIdx][2]}
                    title="Speed (km/s)"
                    trend={changeSpeed > 0 ? 2 : (changeSpeed === 0 ? 0 : 1)}
                    changed={changeSpeed}
                />
                <SolarData
                    data={solarWind[lastIdx][3]}
                    title="Temperature (K)"
                    trend={changeTemp > 0 ? 2 : (changeTemp === 0 ? 0 : 1)}
                    changed={changeTemp}
                />
            </section>
        );
    }

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
                <div className="flex items-center justify-between lg:max-w-xs">
                    <div>
                        <h1>Solar Wind</h1>
                        <p className="opacity-60 text-xs">{solarWind[lastIdx] ? `Last update at ${solarWind[lastIdx][0]} UTC` : ""}</p>
                    </div>
                    <UpdateIcon className={`cursor-pointer rotate-[${refresh}deg] duration-200`} onClick={() => setRefresh(refresh ? 0 : 360)} />
                </div>

                <section className="mt-10 flex flex-col lg:flex-row lg:justify-between lg:items-center">

                    <section className="grid gap-14">
                        {

                            solarWind[lastIdx] ?
                                renderData()
                                :
                                Array.from({ length: 3 }).map((el, i) => <div key={i}>{renderSkeleton()}</div>)
                        }
                    </section>

                    <div className="mt-16 lg:mt-0">
                        <h2 className="font-semibold mb-4">Latest 24 hours</h2>
                        <img className="w-sm lg:w-[800px]" src="https://services.swpc.noaa.gov/images/geospace/geospace_1_day.png" alt="graph" />

                    </div>
                </section>


            </section>
        </main>
    );
}

export default SolarWind;