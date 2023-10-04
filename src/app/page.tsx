import Navbar from "@/components/Navbar";
import { UpdateIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="px-8 relative h-screen">
      <Navbar />

      <div className="flex items-center justify-between">
        <h1 className="font-light text-4xl text-left">Quiet period</h1>
        <UpdateIcon className="cursor-pointer" />
      </div>

      <img className="w-[600px]" src="/sun(1).svg" alt="sun" />

      <div className="absolute bottom-10 text-sm z-10">
        <p>Kp index</p>
        <h1 className="text-9xl font-thin">4</h1>
        <p className="opacity-50">16:56 UTC</p>
      </div>
    </main>
  )
}
