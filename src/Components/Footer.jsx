import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-black text-[#AEAEAE] py-28'>
            <div className='md:w-4/6 w-full mx-auto'>
                <div className='flex justify-between md:flex-row flex-col md:px-20 mx-auto gap-6'>
                    <div className='flex flex-col space-y-6'>
                        <div className='space-y-6 flex flex-col'>
                            <span>logo</span>
                            <span>Subscribe our newsletter:</span>
                        </div>
                        <div className="flex items-center bg-[#ffffff1f] hover:bg-white transition ease-in duration-150 py-4 pl-10 pr-4 rounded-full md:w-full w-10/12  group">
                            <input
                                type="text"
                                placeholder="Your gmail here..."
                                className="flex-1 bg-transparent outline-none uppercase text-sm tracking-wide font-light text-black placeholder:text-gray-500"
                            />
                            <button type="submit" className="bg-black text-[#FF9800] p-2 rounded-full transition-transform duration-300 group-hover:scale-125">
                                <FaArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 text-3xl font-semibold max-[640px]:overflow-hidden'>
                        <Link href={'/'} className='hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300 will-change-transform'>Home</Link>
                        <Link href={'/portfolio'} className='hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300'>Portfolio</Link>
                        <Link href={'/services'} className='hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300'>Services</Link>
                        <Link href={'/contact'} className='hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300'>Contact</Link>
                    </div>



                    <div className='flex flex-col gap-4 text-xl overflow-hidden'>
                        <Link href={'/'} className=' hover:translate-x-2 transition-all duration-300'>Privacy Policy</Link>
                        <Link href={'/portfolio'} className=' hover:translate-x-2 transition-all duration-300'>Terms and conditions</Link>
                        <Link href={'/services'} className=' hover:translate-x-2 transition-all duration-300'>Cookie Policy</Link>
                        <Link href={'/contact'} className=' hover:translate-x-2 transition-all duration-300'>Careers</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;