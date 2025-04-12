import Link from 'next/link';
import React from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import project1 from '../images/Projects/project-1-1.jpg'
import project2 from '../images/Projects/project-2-2.jpg'
import project3 from '../images/Projects/software-inno-9.webp'
import project4 from '../images/Projects/causer-1-1.webp'
import project5 from '../images/Projects/interviewer-5.webp'
import project6 from '../images/Projects/video-gift-3.webp'
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div className='py-10'>
            <div>

            </div>
            <div>
                <ul className="flex justify-center gap-2">
                    <li className="relative pl-4 font-semibold text-sm uppercase before:content-[''] before:absolute before:right-96 before:top-1/2 before:translate-y-[-50%] before:w-[100vw] before:h-[1px] before:bg-black/10">
                        <Link href="/">Home</Link>
                    </li>

                    <li className="text-gray-400 text-sm select-none">/</li>

                    <li className="text-gray-400 text-sm uppercase cursor-not-allowed pointer-events-none">
                        Portfolio
                    </li>
                </ul>
                <div className='lg:w-11/12 xl:w-10/12 mx-auto  w-full 2xl:px-24  px-4'>
                    <h1 className='text-6xl font-medium'><span className='font-semibold'>Designing a <br /> Better</span> <span className='font-thin'>World Today</span></h1>
                    <div className='py-16 inline-block'>
                        <Link href={'#work'} className='flex gap-5 items-center group'><span>Our Works</span><FaArrowDownLong className='bg-[#E5E5E5] p-3 rounded-full size-10 group-hover:scale-125 transition duration-300' /></Link>
                    </div>
                    <section id='work' className=''>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-7'>
                            {
                                [project1, project2, project4, project3, project5, project6].map((project, index) => (
                                    <div className='group p-7 border'>
                                        <div className='relative overflow-hidden  '>
                                            <Image
                                                key={index}
                                                src={project}
                                                alt={`product-${project}`}
                                                className='w-full h-full  transform group-hover:scale-125 transition duration-500 ease-in-out'

                                            />

                                        </div>
                                        <div className='flex flex-col'>
                                            <span><span className='text-amber-500'>Technology</span> November 14, 2023</span>
                                            <span>Interior design studio</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;