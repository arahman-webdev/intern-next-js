import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Button = ({title}) => {
    return (
        <div>
            <button className="uppercase bg-[#FF9800] hover:bg-[#FFA700] transition ease-in duration-150 py-4 pl-10 pr-5 rounded-full flex items-center justify-between gap-8 group text-sm tracking-wide font-lightz text-black">
                {title}
                <FaArrowRight className="bg-black group-hover:scale-125 transition duration-300 text-[#FF9800] p-2 rounded-full w-9 h-9" />
            </button>
        </div>
    );
};

export default Button;