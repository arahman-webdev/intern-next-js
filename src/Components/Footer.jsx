'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaArrowRight, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from "react-icons/fa";
import logo from '../app/images/logo-with-text-black.webp'
const Footer = () => {
    const pathname = usePathname()
    return (
        <div className="bg-black text-[#AEAEAE] py-28">
            <div className="max-w-7xl mx-auto px-2 md:px-4">
                <div className="grid grid-cols-1  md:grid-cols-4 gap-14">

                    {/* Column 1 - Logo + Newsletter */}
                    <div className="flex flex-col gap-6 md:col-span-2" data-aos="fade-up">
                        <div className="space-y-4 flex flex-col">
                            <span className=" text-3xl text-white font-semibold">T2<span className='opacity-75 text-2xl'>devs</span> </span>
                            <span className="text-sm">Subscribe our newsletter:</span>
                        </div>

                        {/* Email Input */}
                        <form className="flex items-center bg-[#ffffff1f] hover:bg-white transition duration-200 py-4 px-4 rounded-full w-full max-w-sm group">
                            <input
                                type="email"
                                placeholder="Your email here..."
                                className="flex-1 bg-transparent outline-none text-sm text-black placeholder:text-gray-500 uppercase tracking-wide"
                            />
                            <button type="submit" className="bg-black text-[#FF9800] p-2 rounded-full transition-transform duration-300 group-hover:scale-125">
                                <FaArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                    {/* Column 2 - Navigation */}
                    <div className="flex flex-col col-span-1 gap-4  text-white text-2xl" data-aos="fade-up">
                        <Link href="/" className={`${pathname === '/' ? 'text-[#FF9800] font-bold' : 'text-gray-300'} hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300`}>
                            Home
                        </Link>
                        <Link href="/portfolio" className={`${pathname === '/portfolio' ? 'text-[#FF9800] font-bold' : 'text-gray-300'} hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300`}>
                            Portfolio
                        </Link>
                        <Link href="/services" className="text-gray-300 hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300">
                            Services
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300">
                            Contact
                        </Link>
                    </div>

                    {/* Column 3 - Policies */}
                    <div className="flex flex-col col-span-1 gap-4 text-base opacity-80" data-aos="fade-up">
                        <Link href="/" className="hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/portfolio" className="hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300">
                            Terms & Conditions
                        </Link>
                        <Link href="/services" className="hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300">
                            Cookie Policy
                        </Link>
                        <Link href="/contact" className="hover:text-[#FF9800] hover:translate-x-2 transition-all duration-300">
                            Careers
                        </Link>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-14 pt-20'>
                    <div className='md:col-span-2 ' data-aos="fade-up">
                        <div className='flex gap-4'>
                            <i className='text-xl text-white'><FaGithub className='' /></i>
                            <i className='text-xl text-white'><FaLinkedin className='' /></i>
                            <i className='text-xl text-white'><FaXTwitter /></i>
                        </div>
                        <div className='text-[#ffffff66] font-normal py-5'>
                            <p>+1 (833) 4670010</p>
                            <p>support@t2devs.com</p>
                        </div>
                        <div className='font-normal  text-[#ffffff66]'>
                            <p>© 2025 T2devs. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className='col-span-1' data-aos="fade-up">
                        <div className=''>
                            <h1 className='text-[#E6E6E6] text-xl font-medium'>USA</h1>
                        </div>
                        <div className='text-[#ffffff66] py-5'>
                            <p>131 Continental Dr <br />Suite 305<br />Newark, DE 19713</p>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='' data-aos="fade-up">
                            <h1 className='text-[#E6E6E6] text-xl font-medium '>Bangladesh</h1>
                        </div>
                        <div className='text-[#ffffff66] py-5' data-aos="fade-up">
                            <p>Sherpur, Bogura, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;