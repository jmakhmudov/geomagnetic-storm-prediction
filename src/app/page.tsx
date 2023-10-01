import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="px-8 relative h-screen">
      <Navbar />
      <h1 className=" my-5  text-4xl text-center">High intensity storm</h1>
      <img className="scale-150" src="/sun(1).svg" alt="" />

      <div className="absolute bottom-10 text-sm z-10">
        <p>Kp index</p>
        <h1 className="text-9xl font-thin">4</h1>
        <p className="opacity-50">2023/09/20</p>
      </div>
    </main>
  )
}
