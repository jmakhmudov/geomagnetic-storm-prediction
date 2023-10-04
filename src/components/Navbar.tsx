"use client"

import { useState } from "react";
import { Menu, X } from "react-feather";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState("-top-full");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if(isMenuOpen) {
            setMenuPosition("top-0");
        }
        else {
            setMenuPosition("-top-full");
        }
    }


    return (
        <nav className="py-4 px-8 flex justify-between items-center bg-[#03000F] fixed top-0 left-0 right-0 z-50">
            <Link href="/" className="font-orbitron text-xl z-50 cursor-pointer">
                GEOMAG
            </Link>

            <div className="z-50">
                {
                    isMenuOpen ?
                        <X className="cursor-pointer" size={30} onClick={toggleMenu} />
                        :
                        <Menu className="cursor-pointer" size={30} onClick={toggleMenu} />

                }
            </div>

            <section className={`fixed left-0 right-0 top-0 bottom-0 ${isMenuOpen ? "block" : "hidden"} grid place-items-center bg-[#03000F] bg-opacity-90 backdrop-blur-sm z-40 transition-opacity duration-300`}>
                <ul className="grid place-items-center gap-10 font-bold text-4xl">
                    <Link onClick={toggleMenu} className="navlinks" href="/kp">
                        Kp index
                    </Link>
                    <Link onClick={toggleMenu} className="navlinks" href="/solar-wind">
                        Solar wind
                    </Link>
                    <Link onClick={toggleMenu} className="navlinks" href="/aurora">
                        Aurora
                    </Link>
                    <Link onClick={toggleMenu} className="navlinks" href="/about">
                        About
                    </Link>
                </ul>

                <p className="absolute bottom-5">by <span className="font-orbitron">WYEDUST</span></p>
            </section>
        </nav>
    );
}

export default Navbar;