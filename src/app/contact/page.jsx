import Button from '@/SharedComponents/Button';
import TopMenu from '@/SharedComponents/TopMenu';
import TopTitle from '@/SharedComponents/TopTitle';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div className='py-16'>
            <div>
                <TopMenu title={'Contact Us'} />
            </div>
            <div className='text-center pt-14'>
                <h1 className='xl:text-8xl md:text-6xl text-4xl font-medium'>Get in touch!</h1>
                <TopTitle title={'Send message'} bgColor={'bg-[#E5E5E5]'} />
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58015.8090586366!2d89.4359063417117!3d24.65853910397665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1744534268039!5m2!1sen!2sbd" width="100%" height="450" className="border;" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='xl:w-4/6 w-full mx-auto py-16 px-5'>
                <div className='text-center py-9'>
                    <h3 className='text-6xl font-normal'>Let's <span className='font-thin'>Talk</span></h3>
                </div>
                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-7'>
                    <div className='border-b W-full py-5'>
                        <input className='w-full focus:outline-none' type="text" placeholder="WHAT'S YOUR NAME" />
                    </div>
                    <div className='border-b W-full py-5'>
                        <input className='w-full focus:outline-none' type="text" placeholder="YOUR EMAIL" />
                    </div>
                    <div className='border-b W-full md:col-span-2 py-5 h-64'>
                        <textarea className='w-full focus:outline-none' name="" placeholder="TELL US ABOUT OUR PROJECT" id=""></textarea>
                    </div>
                </div>
                <div className='flex justify-between md:flex-row flex-col md:items-center mt-9 gap-6'>
                    <p className='opacity-55'><span className='text-amber-500'>*</span> We promise not to disclose your personal information to third parties.</p>
                    <Button title={'SEND MESSAGE'} />
                </div>
                <div>
                    <div className="flex items-center justify-center">
                        <div className="relative w-24 h-24">
                            {/* Circular Text with SVG */}
                            <svg
                                viewBox="0 0 200 200"
                                className="w-full h-full  text-gray-400"
                            >
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                                    />
                                </defs>
                                <text fontSize="30" fontWeight="bold">
                                    <textPath  href="#circlePath" startOffset="0%">
                                        SCROLL DOWN - SCROLL DOWN -
                                    </textPath>
                                </text>
                            </svg>

                            {/* Center orange ring with arrow */}
                            <div className="absolute top-1/2 left-1/2 w-9 h-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-orange-500 flex items-center justify-center bg-black z-10">
                                <FaArrowDown className="text-orange-500 text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;