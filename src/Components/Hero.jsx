import Link from 'next/link';
import React from 'react';
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { HighlightText } from './animate-ui/highlight-text';
import Button from '@/SharedComponents/Button';

const Hero = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='pt-20'>
                    <div className="max-w-screen-xl mx-auto px-6 md:px-10 xl:px-0 py-32 md:py-44 flex flex-col lg:flex-row items-start justify-between gap-10">
                        {/* Text Section */}
                        <div className="flex-1">
                            {/* Heading + Description */}
                            <div className="space-y-14 max-w-xl mb-14">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin leading-10">
                                    <span className="font-semibold">Building</span> Today  for   Better
                                    <span className="font-semibold">Tomorrow</span>
                                    <HighlightText className="text-4xl font-semibold" text="Highlight Text" />
                                </h1>
                                <p className="text-gray-400 font-normal text-base md:text-lg">
                                    We empower businesses with cost-effective efficient solutions that not only solve today’s challenges but also set the stage for tomorrow’s growth, innovation, and long-term success.
                                </p>
                            </div>

                            {/* Buttons + Scroll */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-5 items-center">
                                    <Link href="/about">
                                    <Button title={'WHAT WE DO'} />
                                    </Link>
                                    <Link href="/about">
                                        <button className="flex items-center gap-4 group text-sm font-medium text-white">
                                            View Works
                                            <FaArrowRight className="bg-gray-800 text-white group-hover:scale-110 transition duration-300 p-2 rounded-full w-9 h-9" />
                                        </button>
                                    </Link>
                                </div>

                                {/* Scroll Button */}
                                <div className="hidden lg:block">
                                    <button>
                                        <a href="#footer"><FaArrowDown className="text-white animate-bounce" /></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;