import React from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';

const TopTitle = ({scrollToWork, title, color, bgColor}) => {
    return (
        <div>
            
            <div className='py-16 inline-block'>
                <button onClick={scrollToWork} className='flex gap-5 items-center group'><span className={`${color}`}>{title}</span><FaArrowDownLong className={`${bgColor}  ${color} p-3 rounded-full size-10 group-hover:scale-125 transition duration-300`} /></button>
            </div>
        </div>
    );
};

export default TopTitle;