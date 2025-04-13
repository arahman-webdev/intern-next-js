
import Link from 'next/link';
import React from 'react';

const TopMenu = ({title, color}) => {
    return (
        <div>
            <ul className="flex justify-center gap-2">
                <li className="relative pl-4 font-semibold text-sm uppercase before:content-[''] before:absolute before:right-14 before:top-1/2 before:translate-y-[-50%] before:w-[100vw] before:h-[1px] before:bg-black/10">
                    <Link href="/" className={`${color}`}>Home</Link>
                </li>

                <li className="text-gray-400 text-sm select-none">/</li>

                <li className="text-gray-400 text-sm uppercase cursor-not-allowed pointer-events-none">
                    {title}
                </li>
            </ul>
        </div>
    );
};

export default TopMenu;