import React from 'react';

const Animate = () => {
    return (
        <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
            <svg
                width="250"
                height="800"
                viewBox="0 0 300 1404"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
                    fill="gray"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
                    fill="gray"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
                    fill="black"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M150 0L150 1404L149 1404L149 0L150 0Z"
                    fill="black"
                />
            </svg>
        </div>
    );
};

export default Animate;
