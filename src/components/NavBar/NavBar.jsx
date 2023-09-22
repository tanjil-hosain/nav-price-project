import { useState } from "react";
import Link from "../Link/Link";
import {  AiOutlineMenu } from 'react-icons/ai';
import {  RxCross1 } from 'react-icons/rx';

const Navbar = () => {
    const [open , setOpen]=useState(false)

    const routes = [
        { id: 1, name: "Route 1", path: "/route1" },
        { id: 2, name: "Route 2", path: "/route2" },
        { id: 3, name: "Route 3", path: "/route3" },
        { id: 4, name: "Route 4", path: "/route4" },
        { id: 5, name: "Route 5", path: "/route5" },
      ];
    return (
        <nav className="bg-blue-400">
            <div className=" text-2xl md:hidden px-6 " onClick={() => setOpen(!open)}>
                {
                    open===true?
                    <AiOutlineMenu></AiOutlineMenu>
                    :<RxCross1></RxCross1>

                }
            
            </div>
            <ul className= {`md:flex duration-1000 absolute md:static ${open?"top-5": "-top-60"} bg-blue-400 px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;