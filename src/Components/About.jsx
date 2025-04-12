'use client'
import React from 'react';
import owner from '../app/images/portrait-of-ceo.webp';
import about from '../app/images/discover-hero-1.webp';
import Image from 'next/image';
import { CgPlayPause } from "react-icons/cg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='py-20 bg-white overflow-hidden'>
            <div className='grid lg:grid-cols-2 grid-cols-1 2xl:w-8/12 xl:w-10/12 w-full mx-auto px-7 md:px-12 xl:px-20 gap-20'>
                {/* Left Column */}
                <div>
                    <div className='space-y-10 pb-10'>
                        <h2 className='text-6xl font-thin leading-snug'>
                            <span className='font-medium'>Building</span> <br /> the <span className='font-medium'>Future</span>
                        </h2>
                        <p className='font-light text-gray-500'>
                            We are a forward-thinking solutions provider committed to empowering businesses through cost-effective, high-quality technology services. Our mission is to connect global talent with businesses, offering expert services in Web Development, Mobile App development, UX/UI design, Digital Marketing, and more. We believe in delivering scalable, sustainable solutions that not only address today’s challenges but also drive innovation and growth for tomorrow.
                        </p>
                        <p className='text-gray-500'>
                            To become a leading partner for businesses worldwide, providing exceptional IT outsourcing solutions that fuel success and innovation, all while maintaining a focus on quality, affordability, and long-term impact.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Owner Image with Play Icon */}
                        <div className="relative sm:w-24 sm:h-24 w-20 h-20 rounded-full">
                            <Image src={owner} alt="owner" className="w-full h-full object-cover rounded-full" />
                            <CgPlayPause className="absolute -bottom-1 -right-1 bg-[#FF9800] p-2 size-10 rounded-full shadow-md" />
                        </div>

                        {/* Caption Text */}
                        <div className="max-w-md">
                            <h6 className="text-sm md:text-base font-light leading-relaxed">
                                <span className='font-semibold'>
                                    Passionately Creating <span className='text-gray-500'>Design Wonders:</span> <br />
                                    <span className="font-semibold">Unleashing</span> <span className="font-semibold text-gray-500">Boundless Creativity</span>
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                {/* Right Column: Static Image with animated SVG background */}
                <div className="relative w-full flex justify-center items-center h-[500px] lg:h-[600px]">
                    {/* Animated SVG pattern */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [-50, 50, -50] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-full h-full"
                    >
                        <svg
                            width="250"
                            height="800"
                            viewBox="0 0 300 1404"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
                                fill="gray"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
                                fill="gray"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
                                fill="black"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M150 0L150 1404L149 1404L149 0L150 0Z"
                                fill="black"
                            />
                        </svg>
                    </motion.div>

                    {/* Static Image in front */}
                    <div className="relative z-10 w-[450px] h-[640px] shadow-xl bg-white">
                        <Image
                            src={about}
                            alt="About Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
