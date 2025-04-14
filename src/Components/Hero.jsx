import Link from 'next/link';
import React from 'react';
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { HighlightText } from './animate-ui/highlight-text';
import Button from '@/SharedComponents/Button';

const Hero = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='pt-10'>
                    <div className="max-w-screen-xl mx-auto px-6 md:px-10 xl:px-0 py-11 md:py-16 xl:py-32 flex flex-col lg:flex-row items-start justify-between gap-10">
                        {/* Text Section */}
                        <div className="flex-1">
                            {/* Heading + Description */}
                            <div className="space-y-14 max-w-2xl mb-14">
                                <h1 className='md:text-7xl text-5xl max-[590px]:text-3xl font-thin leading-snug'>
                                    <span className='font-medium'>Building</span> <span className='font-thin'>Today for</span> <span className='md:block hidden'><br /></span>  <span className='font-medium'><span className='font-thin'>Better</span> Tomorrow</span>
                                </h1>
                                <p className="text-gray-400 font-normal text-base md:text-lg max-w-xl">
                                    We empower businesses with cost-effective efficient solutions that not only solve today’s challenges but also set the stage for tomorrow’s growth, innovation, and long-term success.
                                </p>
                            </div>

                            {/* Buttons + Scroll */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-items-center sm:justify-between gap-8">
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
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-36 h-36">
                                            {/* Circular Text with SVG */}
                                            <svg
                                                viewBox="0 0 200 200"
                                                className="w-full h-full  text-gray-50"
                                            >
                                                <defs>
                                                    <path
                                                        id="circlePath"
                                                        d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                                                    />
                                                </defs>
                                                <text fontSize="30" fontWeight="thin" className='fill-gray-400'>
                                                    <textPath href="#circlePath" startOffset="0%">
                                                        SCROLL DOWN - SCROLL DOWN -
                                                    </textPath>
                                                </text>
                                            </svg>

                                            {/* Center orange ring with arrow */}
                                            <div className="absolute top-1/2 left-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-[#FF9800] flex items-center justify-center bg-black z-10">
                                                <FaArrowDown className="text-amber-500 text-xl" />
                                            </div>
                                        </div>
                                    </div>
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