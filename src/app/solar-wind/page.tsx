"use client"

import Navbar from "@/components/Navbar";
import { UpdateIcon } from "@radix-ui/react-icons/";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import SolarData from "@/components/ui/solarData";

const SolarWind = () => {
    const [solarWind, setSolarWind] = useState({});

    useEffect(() => {
        axios.get("https://services.swpc.noaa.gov/products/solar-wind/plasma-1-day.json")
            .then(res => setSolarWind(res.data))
    }, []);

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

                <section>
                    <SolarData data="232323" title="sdsd" trend={1} changed={2323} />
                </section>
            </section>
        </main>
    );
}

export default SolarWind;