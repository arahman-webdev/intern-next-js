import Button from '@/SharedComponents/Button';
import React from 'react';

const Team = () => {
    return (
        <div className='py-20'>
            <div className='grid lg:grid-cols-2 grid-cols-1 2xl:w-8/12 xl:w-10/12  w-full mx-auto px-7 md:px-12 xl:px-20 gap-20'>
                <div className=''>
                    <div className='space-y-10 pb-10'>
                        <h2 className='text-6xl font-thin leading-snug'><span className='font-medium'>Meet</span> <br /> Our <span className='font-medium'>Team</span></h2>
                        <p className='font-light text-gray-500'>We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.</p>
                        <p className='text-gray-500'>Together, our creative team is committed to delivering impactful work that exceeds expectations.</p>
                    </div>
                    <div className='pb-10'>
                        <Button title='Read More' />
                    </div>
                    <div className="flex items-center gap-6">
                        {/* Text Section */}

                        <div className="max-w-md">
                            <h6 className="md:text-3xl text-base font-thin  leading-relaxed">
                                <span className=''>We <span className='font-semibold'>deliver</span>  <br /> <span className="">exceptional</span>  <span className="font-semibold"> results.</span></span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="flex items-stretch h-[640px]">

                </div>
            </div>
        </div>
    );
};

export default Team;