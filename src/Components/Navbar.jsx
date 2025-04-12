

"use client"



import { IoMdClose } from "react-icons/io";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Button } from "./ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { useState } from "react";

import Image from "next/image";


const data = [
    { goal: 400 }, { goal: 300 }, { goal: 200 },
    { goal: 300 }, { goal: 200 }, { goal: 278 },
    { goal: 189 }, { goal: 239 }, { goal: 300 },
    { goal: 200 }, { goal: 278 }, { goal: 189 },
    { goal: 349 },
];

const Navbar = () => {

    const [isOpen, setIsopen] = useState(false)


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
                    <div className="">
                        <DrawerContent className="h-screen  bg-gray-900 text-white">
                            <div className="mx-auto w-full max-w-sm">
                                <DrawerHeader>
                                    <DrawerTitle>Move Goal</DrawerTitle>
                                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                                </DrawerHeader>
                                <div className="p-4 pb-0">
                                    <div className="flex items-center justify-center space-x-2">

                                        <div className="flex-1 text-center">
                                            <div className="text-7xl font-bold tracking-tighter">

                                            </div>
                                            <div className="text-[0.70rem] uppercase text-muted-foreground">
                                                Calories/day
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-3 h-[120px]">

                                    </div>
                                </div>
                                <DrawerFooter>
                                    <Button>Submit</Button>
                                    <DrawerClose asChild>
                                        <Button variant="outline" className='left-10'>Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </div>
                        </DrawerContent>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;
