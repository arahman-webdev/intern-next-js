import Image from 'next/image';
import React from 'react';
import bulb from '../app/images/bulb-e1736190893232.webp'
import { FaArrowRight } from 'react-icons/fa6';
import Title from '@/SharedComponents/Title';
const Services = () => {
    const services = [
        {
            "title": "Outsourcing Experts and Resources",
            "description": "We outsource the worlds most talents and experts for your business.",
            "icon": "briefcase"
        },
        {
            "title": "Website Design and Development",
            "description": "We build robust, scalable, and user-friendly websites tailored to your business needs.",
            "icon": "globe"
        },
        {
            "title": "Mobile App Development",
            "description": "Transform your business with custom mobile apps designed for both iOS and Android.",
            "icon": "smartphone"
        },
        {
            "title": "WordPress Development",
            "description": "Leverage the power of WordPress with our custom themes, plugins, and integrations.",
            "icon": "wordpress"
        },
        {
            "title": "UX/UI Design",
            "description": "Our design team combines creativity with user-centered strategies to create beautiful, intuitive interfaces that enhance user experiences.",
            "icon": "layout"
        },
        {
            "title": "Digital Marketing and SEO",
            "description": "Increase your online visibility and reach your target audience with our comprehensive digital marketing services.",
            "icon": "chart-line"
        },
        {
            "title": "Content Writing",
            "description": "Our experienced writers creates high-quality, SEO-optimized content that resonates with your audience.",
            "icon": "file-text"
        },
        {
            "title": "Business Consultancy",
            "description": "Support with them and include icon here",
            "icon": "user-tie"
        }
    ]

    return (
        <div className='py-20 bg-black text-slate-50'>
            {/* Title here from component ---------------------------- */}
            
            <Title />
            <div className="flex justify-center md:flex-row flex-col items-center ">
                <span className="w-[290px] h-[70px] inline-block overflow-hidden rounded-full  group px-10 mr-5"><Image className='rounded-full  w-full h-auto object-top object-cover group-hover:scale-110 transition ease-out duration-300' decoding="async" src={bulb} alt="http://idea-thumbnail" /></span>
                <h2 className="lg:text-7xl md:text-5xl text-3xl text-center"><span className='font-semibold'>Expert <span className="font-thin">Collaborations</span></span></h2>
            </div>

            <div className="flex justify-center md:flex-row flex-col items-center gap-7 py-5">
                <h2 className='lg:text-7xl md:text-5xl text-3xl'><span className='font-semibold'>For Your <span class="font-thin">Business.</span></span></h2>
                <button className="uppercase bg-[#FF9800] hover:bg-[#FFA700] transition ease-in duration-150 py-4 pl-10 pr-5 rounded-full flex items-center justify-between gap-8 group text-sm tracking-wide font-semibold text-black">
                    What We Do
                    <FaArrowRight className="bg-black group-hover:scale-125 transition duration-300 text-[#FF9800] p-2 rounded-full w-9 h-9" />
                </button>
            </div>

            {/* services card start --------------- */}

            <div className='py-10'>

                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
                    {
                        services.map((service, index) => <>
                            <div key={index} className='relative group text-white bg-black p-7 overflow-hidden border border-gray-800'>
                                <div className='absolute top-0 left-0 h-1 bg-amber-500 w-0 group-hover:w-full transition-all duration-1000'></div>

                                <div className='space-y-8 pb-4'>
                                    <h2 className='text-xl font-bold'>{service?.title}</h2>
                                    <p className='text-gray-400 mt-4 opacity-0 translate-y-4 group-hover:opacity-100 max-[992px]:opacity-100 group-hover:translate-y-0 transition-all duration-700'>{service?.description}</p>
                                </div>

                                <div className="w-6 h-6 flex items-center justify-center bg-gray-400 rounded-full group-hover:bg-amber-500 max-[992px]:bg-amber-500 transform max-[992px]:scale-[2] group-hover:scale-[2] transition-transform duration-700 my-7">
                                    <FaArrowRight className="text-black size-2 " />
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>

            {/* services card end ------------- */}

        </div>
    );
};

export default Services;