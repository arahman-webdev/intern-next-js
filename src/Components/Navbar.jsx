

"use client"



import { IoMdClose } from "react-icons/io";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Button } from "./ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCross } from "react-icons/fa6";


const data = [
    { goal: 400 }, { goal: 300 }, { goal: 200 },
    { goal: 300 }, { goal: 200 }, { goal: 278 },
    { goal: 189 }, { goal: 239 }, { goal: 300 },
    { goal: 200 }, { goal: 278 }, { goal: 189 },
    { goal: 349 },
];

const Navbar = () => {

    const [isOpen, setIsopen] = useState(false)
    const pathname = usePathname()

    return (

        <div className="bg-black py-12">
            <div className="w-11/12 mx-auto">
                <Drawer>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-white">Arahman</h2>
                        </div>
                        <DrawerTrigger asChild>
                            <Button variant="outline">{isOpen ? <IoMdClose /> : <HiBars3BottomLeft />}</Button>
                        </DrawerTrigger>
                    </div>

                    <DrawerContent className="h-screen bg-black  text-white">
                        <div className="flex h-full max-w-full mx-auto w-full px-6 py-10 justify-between gap-10">
                            {/* Left Side Menu */}
                            <div className="flex flex-col max-[640px]:flex-1 gap-6 text-2xl font-medium">
                                <Link
                                    href="/"
                                    className={`${pathname === '/' ? 'text-[#FF9800] font-bold' : 'text-gray-300 hover:text-white'} hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300 will-change-transform`}
                                >
                                    Homepage
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className={`${pathname === '/portfolio' ? 'text-[#FF9800] font-bold' : 'text-gray-300 hover:text-white'} hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300 will-change-transform`}
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    href="/services"
                                    className={`${pathname === '/services' ? 'text-[#FF9800] font-bold' : 'text-gray-300 hover:text-white'} hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300 will-change-transform`}
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/contact"
                                    className={`${pathname === '/contact' ? 'text-[#FF9800] font-bold' : 'text-gray-300 hover:text-white'}hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300 will-change-transform`}
                                >
                                    Contact
                                </Link>
                            </div>

                            <div className="">
                                <h3 className="font-semibold md:block hidden mb-4">Projects</h3>
                                <ul className="flex flex-col gap-2 text-gray-400 md:block hidden">
                                    <li><Link href="#">Interior design studio</Link></li>
                                    <li><Link href="#">Home Security Camera</Link></li>
                                    <li><Link href="#">Video Gift</Link></li>
                                    <li><Link href="#">Interviewer</Link></li>
                                    <li><Link href="#">Causer</Link></li>
                                    <li><Link href="#">Tony’s Chocolonely</Link></li>
                                </ul>
                            </div>
                            {/* Right Side Links */}
                            <div className="grid grid-cols-2 gap-10 text-sm">
                                <div>
                                    <DrawerFooter className={'p-1'}>
                                        <DrawerClose asChild className="text-white p-1">
                                            <button variant="outline" className=' text-black'><IoMdClose size={25} /></button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </div>
                            </div>
                        </div>
                    </DrawerContent>


                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;
