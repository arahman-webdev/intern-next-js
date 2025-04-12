import React from 'react';

const Title = () => {
    return (
        <>
            <div className="md:flex justify-end items-center pb-20">
                <div className="relative inline-block  lg:pr-[26rem] max-w-full max-[900px]:w-full ">
                    <p className="text-lg md:text-xl font-light text-gray-700   max-[900px]:w-full text-center lg:text-left">
                        We offer a comprehensive range of solutions that <br /> Empower your business growth.
                    </p>
                    <div className="absolute bottom-10 font-thin -translate-y-1/2 right-0 w-96 h-[1px] bg-gray-700 lg:block hidden"></div>
                </div>
            </div>
        </>
    );
};

export default Title;