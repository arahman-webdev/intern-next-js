'use client'

import { WritingText } from '@/Components/animate-ui/writing-text';
import React, { useEffect, useState } from 'react';

const Spinner = ({ children }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-black">
                <div className='flex  flex-row justify-center items-center text-slate-50'>
                    <WritingText
                        className="md:text-4xl text-2xl"
                        text="Building Today for Tomorrow"
                        spacing={9}
                    />

         
                    
                </div>
            </div>
        </div>
    );

    return <>{children}</>
};

export default Spinner;