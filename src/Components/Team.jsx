'use client'
import Button from '@/SharedComponents/Button';
import React from 'react';
import { motion } from "framer-motion";
import member1 from '../app/images/portrait-of-ceo.webp'
import member2 from '../app/images/zahidul-islam.webp'

import member4 from '../app/images/dev-portrait.jpeg'
import Image from 'next/image';
const Team = () => {
    return (
        <div className="lg:py-5 py-24 bg-white overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-5 md:px-2 lg:px-16 xl:px-20 flex flex-col items-center justify-items-center lg:flex-row gap-16">

                {/* Left Content */}
                <div className="w-full lg:w-2/5 space-y-10">
                    <div className="space-y-10">
                        <h2 data-aos="fade-up" className="lg:text-[68px] md:text-5xl text-3xl leading-tight font-semibold">
                           <span>Meet</span>  <br className='md:block hidden' /> Our Team
                        </h2>
                        <p data-aos="fade-up" className="text-gray-500 font-light">
                            We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
                        </p>
                        <p data-aos="fade-up" className="text-gray-500">
                            Together, our creative team is committed to delivering impactful work that exceeds expectations.
                        </p>
                    </div>

                    <div data-aos="fade-up" className="pt-4">
                        <Button title="Read More" />
                    </div>

                    <div className="max-w-md">
                        <h6 data-aos="fade-up" className="text-base md:text-2xl font-thin leading-relaxed">
                            We <span className="font-semibold">deliver</span> <br className="hidden md:block" />
                            <span>exceptional</span> <span className="font-semibold">results.</span>
                        </h6>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-3/5 relative flex justify-between">
                    {/* SVG only visible on large screens */}
                    <div data-aos="fade-up" className="flex justify-center items-center lg:block hidden xl:h-[950px] lg:h-[750px] min-[1130px]:h-[900px] min-[1200px]:h-[900px]">
                        <motion.svg

                            width="250"
                            viewBox="0 0 300 1404"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="animate-pulse text-gray-200"
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

                    {/* Grid of Team Members */}
                    <div className="relative lg:absolute grid grid-cols-1 sm:grid-cols-2 lg:left-24 lg:top-36 gap-6 z-10" data-aos="fade-up">
                        {[member1, member2, member2, member4].map((member, i) => (
                            <div key={i} className="relative group overflow-hidden rounded-lg shadow-md">
                                <Image
                                    src={member}
                                    alt={`Team Member ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300" />
                                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-amber-500 transition-all duration-700" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                                    <span className="text-lg font-medium">Syed Shihab</span>
                                    <span className="text-sm">{
                                        i === 0 ? "CEO & Founder" : "Full-stack Developer"
                                    }</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Team;