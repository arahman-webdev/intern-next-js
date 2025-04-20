
'use client'
import Link from 'next/link';
import React, { useRef } from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import project1 from '../images/Projects/project-1-1.jpg'
import project2 from '../images/Projects/project-2-2.jpg'
import project3 from '../images/Projects/software-inno-9.webp'
import project4 from '../images/Projects/causer-1-1.webp'
import project5 from '../images/Projects/interviewer-5.webp'
import project6 from '../images/Projects/video-gift-3.webp'
import Image from 'next/image';
import TopTitle from '@/SharedComponents/TopTitle';
import TopMenu from '@/SharedComponents/TopMenu';
import Contact from '@/SharedComponents/Contact';


const Portfolio = () => {
    const workRef = useRef(null)

    const scrollToWork = () => {
        workRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='pt-14'>

            <div className='pb-14'>
                <div className='py-16'>
                    <TopMenu title='Portfolio' />
                </div>
                <div className='lg:w-11/12 xl:w-10/12 2xl:w-4/6 mx-auto  w-full 2xl:px-14 xl:px-16  px-4'>
                    <h1 className='text-8xl font-medium leading-tight mt-5'><span className='font-semibold'>Designing a <br /> Better</span> <span className='font-thin'>World Today</span></h1>
                    <TopTitle bgColor='bg-[#E5E5E5]' title={'Our works'} scrollToWork={scrollToWork} />
                    <section ref={workRef}>
                        <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-7'>
                            {
                                [project1, project2, project6, project5, project4, project3].map((project, index) => (
                                    <div className={`group p-7 w-full`}>
                                        <div className="relative overflow-hidden ">
                                            <Image
                                                key={index}
                                                src={project}
                                                alt={`product-${project}`}
                                                className={`w-full transform group-hover:scale-105 transition duration-500 ease-in-out object-cover
                                                  ${index === 0 || index === 3 || index === 4 ? 'h-[590px] w-[90%] self-start ' : ''} ${index === 1 || index === 3 || index === 5 ? 'place-self-end' : ''}  `}
                                            />
                                        </div>
                                        <div className='flex flex-col space-y-6 mt-6'>
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
            <Contact title={'CONTACT US'} />
        </div>
    );
};

export default Portfolio;