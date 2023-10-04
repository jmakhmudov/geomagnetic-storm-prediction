import Navbar from "@/components/Navbar";

const Aurora = () => {

    return (
        <main>
            <Navbar />
            <section className="page-main-section">
                <h1>Aurora - 30 Minute Forecast</h1>

                <p className="opacity-70 text-sm mt-4 z-0 max-w-lg">This is a short-term forecast of the location and intensity of the aurora.  This product is based on the OVATION model and provides a 30 to 90 minute forecast of the location and intensity of the aurora.  The forecast lead time is the time it takes for the solar wind to travel from the L1 observation point to Earth.</p>
                <section className="mt-10 flex gap-20 flex-col sm:flex-row">

                    <div className="font-semibold grid gap-5">
                        <h2>Nothern Semisphere</h2>
                        <img src="https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg" alt="Nothern Semisphere" />
                    </div>

                    <div className="font-semibold grid gap-5">
                        <h2>Southern Semisphere</h2>
                        <img src="https://services.swpc.noaa.gov/images/animations/ovation/south/latest.jpg" alt="Southern Semisphere" />
                    </div>

                </section>
            </section>
        </main>
    );
}

export default Aurora;