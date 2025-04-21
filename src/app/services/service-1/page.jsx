'use client'


import Button from '@/SharedComponents/Button';
import TopTitle from '@/SharedComponents/TopTitle';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRightLong, FaMinus, FaPlus } from 'react-icons/fa6';

// Reusable Accordion Component
const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    const toggleAccordion = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="">
            <button
                onClick={toggleAccordion}
                className="flex justify-between items-center w-full pt-5 text-left animate-fade-up opacity-0 translate-y-4"
            >
                <span className="text-[13px] font-medium text-[#000000] tracking-[2px]  ">{title}</span>
                <span className='group'>
                    <span
                        className={`transition-all duration-300 ease-in-out size-9 p-3 rounded-full flex items-center justify-center ${isOpen ? 'bg-amber-500 text-white rotate-180' : 'bg-[#E5E5E5] text-black'}`}
                    >
                        {isOpen ? <FaMinus size={18} /> : <FaPlus size={18} />}
                    </span>
                </span>
            </button>

            <div
                ref={contentRef}
                className="transition-all duration-500 ease-in-out overflow-hidden text-gray-600"
                style={{ maxHeight: `${height}px` }}
            >
                <div className="pb-4 space-y-6">{content}</div>
            </div>
            <div className='border-b border-gray-300 pt-9 animate-fade-up opacity-0 translate-y-9'></div>
        </div>
    );
};

const Service_1 = () => {
    const accordionTitles = ['UX Audits', 'Design thinking', 'Wireframing', 'Aesthetics', 'Methodologies'];
    const workRef = useRef(null);

    const scrollToWork = () => {
        workRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const accordionContent = (
        <>
            <p>A UX audit is a service that evaluates the user experience (UX) of a website. It involves analyzing the website's design, functionality, and content to identify areas of improvement that can enhance the user's overall experience.</p>
            <p>During a UX audit, a team of UX experts will conduct a thorough review of the website and provide a comprehensive report that outlines specific recommendations for improving the website's usability, accessibility, and overall user experience.</p>
            <p>The audit may cover various aspects of the website, such as navigation, layout, visual design, content structure, and mobile responsiveness. The goal is to identify any pain points or obstacles that users may encounter while browsing the website and provide actionable recommendations to improve their experience.</p>
        </>
    );

    return (
        <>
            <div className='pt-24 pb-16'>
                <div className='py-14'>
                    <div className='w-3/6 '>
                        <ul className="flex justify-center gap-2">
                            <li className="relative pl-4  text-sm uppercase before:content-[''] before:absolute before:right-14 before:top-1/2 before:translate-y-[-50%] before:w-[100vw] before:h-[1px] before:bg-slate-200">
                                <Link href="/" className=''>Home</Link>
                            </li>
                            <li className="text-gray-400 text-sm select-none">/</li>
                            <li className=" text-sm uppercase cursor-not-allowed">
                                <Link href="/services/service-1" className=''>Services</Link>
                            </li>
                            <li className="text-gray-400 text-sm select-none">/</li>
                            <li className="text-gray-400 text-sm uppercase cursor-not-allowed">
                                Branding and Identity Design</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className='max-w-7xl mx-auto  w-full 2xl:px-12 xl:px-16 px-4'>
                        <h1 className='text-8xl font-medium leading-tight mt-5 animate-fade-up opacity-0 translate-y-4'>
                            <span className='font-semibold'>Branding  <br /> and</span> <span className='font-thin'>Identity Design</span>
                        </h1>

                        <TopTitle bgColor='bg-[#E5E5E5]' title={'ABOUT SERVICE'} scrollToWork={scrollToWork} />

                        <section ref={workRef}>
                            <div className="flex py-10">
                                <div className='pr-[20%] w-3/6'>
                                    <div className='space-y-5'>
                                        <h4 className='font-medium text-3xl'>
                                            <span>Your <span className="font-thin">Approach</span> <br />and <span className="font-thin">Work Specifics</span></span>
                                        </h4>
                                        <p className='font-light text-[16px] text-[#00000080] animate-fade-up opacity-0 translate-y-4'>
                                            At our agency, we have a unique approach to web design and development. We believe in creating websites that not only look great but also perform well in terms of user experience, functionality, and search engine optimization.
                                        </p>
                                    </div>
                                    <div className='py-16 inline-block'>
                                        <button className='flex gap-5 items-center group'>
                                            <span className=''>VIEW WORKS</span>
                                            <FaArrowRightLong className="bg-[#E5E5E5] p-3 rounded-full size-10 group-hover:scale-125 transition duration-300" />
                                        </button>
                                    </div>
                                </div>

                                <div className='w-3/6'>
                                    {/* Render multiple accordions */}
                                    {accordionTitles.map((title, i) => (
                                        <AccordionItem
                                            key={i}
                                            title={title}
                                            content={accordionContent}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className='bg-black  pt-20 '>
                <div className='max-w-7xl mx-auto  w-full 2xl:px-12 xl:px-16 px-4'>
                    <div className='text-white text-center space-y-6'>
                        <h2 className='text-[68px] font-medium text-white text-center'>Reasonable <span className='font-thin'>prices</span> <span><br /></span> for innovative <span className='font-thin'>solutions</span></h2>
                        <p className='text-[#FFFFFF66]'>At our agency, we have a unique approach to web design and development. <br /> We believe in creating in terms of user experience, functionality.</p>
                    </div>
                    <div className=' py-32'>
                        <div className='flex lg:flex-row flex-col lg:items-center lg:gap-3 gap-6 border-b border-t border-[#ffffff1a] group py-10 cursor-pointer'>
                            <div className='w-[16%]'>
                                <span className='text-[#FFFFFFE6]'>$</span>
                                <span className='text-[#FF9800] text-[54px] font-medium'>19</span>
                            </div>
                            <div className='text-[#FFFFFFE6] w-[34%] text-xl font-medium'>
                                <span>Tailored Designs for <br />
                                    Every Budget</span>
                            </div>
                            <div className='w-[34%]'>
                                <p className='text-[#FFFFFF66]'><span>Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.</span></p>
                            </div>
                            <div className='w-[16%] flex lg:justify-end '>
                                <button className='flex gap-5 items-center '>
                                    <FaArrowRightLong className="bg-[#FF9800] p-3 rounded-full size-10 group-hover:scale-125 transition duration-300" />
                                </button>
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col lg:items-center lg:gap-3 gap-6 border-b border-t border-[#ffffff1a] group py-10 cursor-pointer'>
                            <div className='w-[16%]'>
                                <span className='text-[#FFFFFFE6]'>$</span>
                                <span className='text-[#FF9800] text-[54px] font-medium'>49</span>
                            </div>
                            <div className='text-[#FFFFFFE6] w-[34%] text-xl font-medium'>
                                <span>Tailored Designs for <br />
                                    Every Budget</span>
                            </div>
                            <div className='w-[34%]'>
                                <p className='text-[#FFFFFF66]'><span>Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.</span></p>
                            </div>
                            <div className='w-[16%] flex lg:justify-end '>
                                <button className='flex gap-5 items-center '>
                                    <FaArrowRightLong className="bg-[#FF9800] p-3 rounded-full size-10 group-hover:scale-125 transition duration-300" />
                                </button>
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col lg:items-center lg:gap-3 gap-6 border-b border-t border-[#ffffff1a] group py-10 cursor-pointer'>
                            <div className='w-[16%]'>
                                <span className='text-[#FFFFFFE6]'>$</span>
                                <span className='text-[#FF9800] text-[54px] font-medium'>59</span>
                            </div>
                            <div className='text-[#FFFFFFE6] w-[34%] text-xl font-medium'>
                                <span>Tailored Designs for <br />
                                    Every Budget</span>
                            </div>
                            <div className='w-[34%]'>
                                <p className='text-[#FFFFFF66]'><span>Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.</span></p>
                            </div>
                            <div className='w-[16%] flex lg:justify-end '>
                                <button className='flex gap-5 items-center '>
                                    <FaArrowRightLong className="bg-[#FF9800] p-3 rounded-full size-10 group-hover:scale-125 transition duration-300" />
                                </button>
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col lg:items-center lg:gap-3 gap-6 border-b border-t border-[#ffffff1a] group py-10 cursor-pointer'>
                            <div className='w-[16%]'>
                                <span className='text-[#FFFFFFE6]'>$</span>
                                <span className='text-[#FF9800] text-[54px] font-medium'>89</span>
                            </div>
                            <div className='text-[#FFFFFFE6] w-[34%] text-xl font-medium'>
                                <span>Tailored Designs for <br />
                                    Every Budget</span>
                            </div>
                            <div className='w-[34%]'>
                                <p className='text-[#FFFFFF66]'><span>Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.</span></p>
                            </div>
                            <div className='w-[16%] flex lg:justify-end '>
                                <button className='flex gap-5 items-center '>
                                    <FaArrowRightLong className="bg-[#FF9800] p-3 rounded-full size-10 group-hover:scale-125 transition duration-300" />
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-center pt-14'>
                            <Link href="/">
                                <Button title={'individual solution'} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className='max-w-7xl mx-auto  w-full 2xl:px-12 xl:px-16 px-4'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-[42px] font-medium'>Other services</h3>
                        <button className='flex gap-5 items-center group'>
                            <span className=''>VIEW ALL</span>
                            <FaArrowRightLong className="bg-[#E5E5E5] p-3 rounded-full size-10 group-hover:scale-125 transition duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service_1;
