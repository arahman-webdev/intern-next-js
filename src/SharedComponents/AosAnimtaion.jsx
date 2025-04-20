'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useEffect } from 'react';

const AosAnimtaion = () => {
    useEffect(() =>{
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            once: true,
            repet: true,
            
          });
    },[])

    
  return null;
};

export default AosAnimtaion;