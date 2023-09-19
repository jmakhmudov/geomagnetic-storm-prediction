import { Menu } from "react-feather";

const Navbar = () => {


    return (
        <nav className="py-4 flex justify-between items-center">
            <div className="font-orbitron text-xl">
                GEOMAG
            </div>

            <Menu className="cursor-pointer" size={30} />
        </nav>
    );
}

export default Navbar;