
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Contact = ({title}) => {
    return (
        <div className='bg-[#F2F2F2] py-20'>
            <div className="md:flex justify-end items-center pb-20">
                <div className="relative inline-block  lg:pr-[26rem] max-w-full max-[900px]:w-full ">
                    <p className="text-lg md:text-xl font-light text-gray-700   max-[900px]:w-full text-center lg:text-left">
                        We offer a comprehensive range of solutions that <br /> Empower your business growth.
                    </p>
                    <div className="absolute bottom-10 font-thin -translate-y-1/2 right-0 w-96 h-[1px] bg-gray-700 lg:block hidden"></div>
                </div>
            </div>
            <div className='text-center text-black'>
                <h2 className='text-7xl font-medium leading-normal'>Ready to bring your <span className='font-thin'>ideas to</span> life? <br /> We're <span className='font-thin'>here to help</span></h2>
            </div>
            <div className='flex justify-center mt-7'>
                <button className="uppercase bg-[#FF9800] hover:bg-[#FFA700] transition ease-in duration-150 py-4 pl-10 pr-5 rounded-full flex items-center justify-between gap-8 group text-sm tracking-wide font-lightz text-black">
                    {title}
                    <FaArrowRight className="bg-black group-hover:scale-125 transition duration-300 text-[#FF9800] p-2 rounded-full w-9 h-9" />
                </button>
            </div>
        </div>
    );
};

export default Contact;