'use client'
import React from 'react';
import owner from '../app/images/portrait-of-ceo.webp';
import about from '../app/images/discover-hero-1.webp';
import Image from 'next/image';
import { CgPlayPause } from "react-icons/cg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='py-14 bg-white overflow-hidden'>
            <div className='flex lg:flex-row flex-col  max-w-7xl  w-full mx-auto px-3 lg:px-12 xl:px-5 xl:gap-16 gap-7'>
                {/* Left Column */}
                <div className='pt-20 lg:w-[40%] w-full'>
                    <div className='space-y-10 pb-16'>
                        <h2 className='md:text-6xl text-3xl font-thin leading-snug' data-aos="fade-up">
                            <span className='font-medium'>Building</span> <br className='md:block hidden' /> the <span className='font-medium'>Future</span>
                        </h2>
                        <p className='font-light text-gray-500' data-aos="fade-up">
                            We are a forward-thinking solutions provider committed to empowering businesses through cost-effective, high-quality technology services. Our mission is to connect global talent with businesses, offering expert services in Web Development, Mobile App development, UX/UI design, Digital Marketing, and more. We believe in delivering scalable, sustainable solutions that not only address today’s challenges but also drive innovation and growth for tomorrow.
                        </p>
                        <p className='text-gray-500' data-aos="fade-up">
                            To become a leading partner for businesses worldwide, providing exceptional IT outsourcing solutions that fuel success and innovation, all while maintaining a focus on quality, affordability, and long-term impact.
                        </p>
                    </div>

                    <div className="flex items-center gap-6" data-aos="fade-up">
                        {/* Owner Image with Play Icon */}
                        <div className='max-[400px]:flex-1'>
                            <div className="relative  w-20 h-20 bg-[#f0f0f0] rounded-full">
                                <Image src={owner} alt="owner" className="w-20 h-20 object-cover rounded-full" />
                                <CgPlayPause className="absolute -bottom-1 -right-1 bg-[#FF9800] p-2 size-10 rounded-full shadow-md" />
                            </div>
                        </div>

                        {/* Caption Text */}
                        <div className="max-w-md">
                            <h6 className="text-sm md:text-base font-light leading-relaxed">
                                <span className='font-semibold'>
                                    Passionately Creating <span className='text-gray-500'>Design Wonders:</span> <br className='max-[400px]:hidden' />
                                    <span className="font-semibold">Unleashing</span> <span className="font-semibold text-gray-500">Boundless Creativity</span>
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                {/* Right Column: Static Image with animated SVG background */}
                <div className="relative flex justify-center items-center  h-[800px] " data-aos="fade-up">
                    {/* Animated SVG pattern */}

                    <div className="flex justify-center items-center lg:block hidden overflow-hidden">
                        <motion.svg

                            width="250"
                            viewBox="0 0 300 1404"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="animate-pulse text-gray-300"
                        >
                            <motion.path
                                initial={{ y: 0 }}
                                animate={{ y: [-50, 50, -50] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
                                fill="currentColor"
                            />
                            <motion.path
                                initial={{ y: 0 }}
                                animate={{ y: [-50, 50, -50] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
                                fill="currentColor"
                            />
                            <path

                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
                                fill="currentColor"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"
                                fill="currentColor"
                            />
                            <motion.path
                                initial={{ y: 0 }}
                                animate={{ y: [-50, 50, -50] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
                                fill="currentColor"
                            />
                            <motion.path
                                initial={{ y: 0 }}
                                animate={{ y: [-50, 50, -50] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M300 1175H0V1174H300V1175Z"
                                fill="currentColor"
                            />
                            <motion.path
                                initial={{ y: 0 }}
                                animate={{ y: [-50, 50, -50] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
                                fill="currentColor"
                            />
                            <motion.path
                                initial={{ y: 0 }}
                                animate={{ y: [-50, 50, -50] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z"
                                fill="currentColor"
                            />
                        </motion.svg>
                    </div>

                    {/* Static Image in front */}
                    <div className="relative z-10 mx-auto w-full lg:absolute lg:left-32 lg:top-10 lg:w-[450px] lg:h-[740px] h-full  overflow-hidden">
                        <Image
                            src={about}
                            alt="About Image"
                            className="object-cover w-full h-full"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
