'use client'
import TopMenu from '@/SharedComponents/TopMenu';
import React from 'react';
import { motion } from "framer-motion";
import TopTitle from '@/SharedComponents/TopTitle';
import Link from 'next/link';
import { FaArrowDownLong, FaArrowRight } from 'react-icons/fa6';
import Contact from '@/SharedComponents/Contact';
const Services = () => {
    return (
        <div className='bg-black py-14 text-white'>
            <div>
                <TopMenu title={'Services'} color='text-white' />
            </div>
            <div className='lg:w-11/12 xl:w-10/12 2xl:w-4/6 mx-auto  w-full 2xl:px-24 xl:px-16  px-4 '>
                <div className='text-white'>
                    <h1 className='text-7xl font-medium leading-normal mt-5'><span className='font-semibold'>This is</span>  <span className='font-thin'>what</span> <br /> <span className='font-semibold'>we do</span> <span className='font-thin'>best</span></h1>
                    <TopTitle title={'Our services'} color='text-amber-500' bgColor='bg-[#1A1A1A]' />
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-40'>
                    <div className="flex justify-center items-center lg:block hidden">
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
                    <div className='col-span-2 grid md:grid-cols-2 grid-cols-1'>
                        <div className='mt-8 p-7'>
                            <div className='space-y-7 mb-7'>
                                <h4 className='text-3xl font-normal'><span>Branding and</span> <br className='md:block hidden' /> <span>Identity Design</span></h4>
                                <p className='opacity-80'><span>Our creative agency is a team of professionals focused on helping your brand grow.</span></p>
                            </div>
                            <ul className='flex flex-col gap-6'>
                                <li><Link href={'#'}>UX Audits</Link></li>
                                <li><Link href={'#'}>Design thinking</Link></li>
                                <li><Link href={'#'}>Methodologies</Link></li>
                                <li><Link href={'#'}>Wireframing</Link></li>
                            </ul>
                            <div>
                                <div className='py-16 inline-block'>
                                    <button  className='flex gap-5 items-center group text-amber-500'><span>Read More</span><FaArrowRight className={`bg-[#1A1A1A] text-amber-500 p-3 rounded-full size-10 group-hover:scale-125 transition duration-300`} /></button>
                                </div>
                            </div>
                        </div>
                        <div className=' p-7'>
                            <div className='space-y-7 mb-7'>
                                <h4 className='text-3xl font-normal'><span>Website Design</span> <br className='md:block hidden' /> <span>and Development</span></h4>
                                <p className='opacity-80'><span>Our creative agency is a team of professionals focused on helping your brand grow.</span></p>
                            </div>
                            <ul className='flex flex-col gap-6'>
                                <li><Link href={'#'}>UX Audits</Link></li>
                                <li><Link href={'#'}>Design thinking</Link></li>
                                <li><Link href={'#'}>Methodologies</Link></li>
                                <li><Link href={'#'}>Wireframing</Link></li>
                            </ul>
                            <div>
                                <div className='py-16 inline-block'>
                                    <button  className='flex gap-5 items-center group text-amber-500'><span>Read More</span><FaArrowRight className={`bg-[#1A1A1A] text-amber-500 p-3 rounded-full size-10 group-hover:scale-125 transition duration-300`} /></button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8 p-7'>
                            <div className='space-y-7 mb-7'>
                                <h4 className='text-3xl font-normal'><span>Branding and</span> <br className='md:block hidden' /><span>Identity Design</span></h4>
                                <p className='opacity-80'><span>Our creative agency is a team of professionals focused on helping your brand grow.</span></p>
                            </div>
                            <ul className='flex flex-col gap-6'>
                                <li><Link href={'#'}>UX Audits</Link></li>
                                <li><Link href={'#'}>Design thinking</Link></li>
                                <li><Link href={'#'}>Methodologies</Link></li>
                                <li><Link href={'#'}>Wireframing</Link></li>
                            </ul>
                            <div>
                                <div className='py-16 inline-block'>
                                    <button  className='flex gap-5 items-center group text-amber-500'><span>Read More</span><FaArrowRight className={`bg-[#1A1A1A] text-amber-500 p-3 rounded-full size-10 group-hover:scale-125 transition duration-300`} /></button>
                                </div>
                            </div>
                        </div>
                        <div className=' p-7'>
                            <div className='space-y-7 mb-7'>
                                <h4 className='text-3xl font-normal'><span>Branding and</span> <br className='md:block hidden' /> <span>Identity Design</span></h4>
                                <p className='opacity-80'><span>Our creative agency is a team of professionals focused on helping your brand grow.</span></p>
                            </div>
                            <ul className='flex flex-col gap-6'>
                                <li><Link href={'#'}>UX Audits</Link></li>
                                <li><Link href={'#'}>Design thinking</Link></li>
                                <li><Link href={'#'}>Methodologies</Link></li>
                                <li><Link href={'#'}>Wireframing</Link></li>
                            </ul>
                            <div>
                                <div className='py-16 inline-block'>
                                    <button  className='flex gap-5 items-center group text-amber-500'><span>Read More</span><FaArrowRight className={`bg-[#1A1A1A] text-amber-500 p-3 rounded-full size-10 group-hover:scale-125 transition duration-300`} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
            <Contact title='CONTACT US' />
        </div>
    );
};

export default Services;