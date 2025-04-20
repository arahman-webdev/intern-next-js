// components/Hero.tsx
 // adjust path if needed
import Link from 'next/link'
import { FaArrowDown, FaArrowRight } from "react-icons/fa6"
import Button from '@/SharedComponents/Button'
import DodecahedronBackground from './DodecahedronBackground '

const Hero = () => {
  return (
      <>

          <div className='bg-black pt-24 pb-6'>
              <div className='pt-20'>
                  <div className="max-w-7xl w-full mx-auto px-2 md:px-10 xl:px-0 py-11 md:py-16 xl:py-32 flex flex-col lg:flex-row  justify-between gap-10">
                      {/* Text Section */}
                      <div className="flex-1">
                          {/* Heading + Description */}
                          <div className="space-y-10  mb-14">
                              <h1 data-aos="fade-up" className='leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl  text-[#ffffffe6] max-w-full'>
                                  Building <span className='font-thin'>Today for</span> <span><br className='md:block hidden' /> </span> <span className='font-thin'>Better</span> Tomorrow
                              </h1>
                              <p className="text-[#ffffff66] font-normal text-base md:text-lg max-w-xl">
                                  We empower businesses with cost-effective efficient solutions that not only solve today’s challenges but also set the stage for tomorrow’s growth, innovation, and long-term success.
                              </p>
                          </div>

                          {/* Buttons + Scroll */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-items-center sm:justify-between gap-8">
                              {/* Buttons */}
                              <div className="flex flex-col sm:flex-row gap-5 items-center">
                                  <Link href="/about">
                                      <Button title={'WHAT WE DO'} />
                                  </Link>
                                  <Link href="/about">
                                      <button className="flex items-center gap-4 group text-sm font-medium text-white">
                                          View Works
                                          <FaArrowRight className="bg-gray-800 text-white group-hover:scale-110 transition duration-300 p-2 rounded-full w-9 h-9" />
                                      </button>
                                  </Link>
                              </div>

                              {/* Scroll Button */}
                              <div className="hidden lg:block">
                                  <div className="flex items-center justify-center">
                                      <div className="relative w-32 h-32 group">
                                          {/* Circular Text with SVG */}
                                          <svg
                                              viewBox="0 0 200 200"
                                              className="w-full h-full  text-[#ffffff66] "
                                          >
                                              <defs>
                                                  <path
                                                      id="circlePath"
                                                      d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                                                  />
                                              </defs>
                                              <text fontSize="24" fontWeight="thin" className="fill-[#ffffff66] group-hover:fill-[#ffffffe6] transition duration-300 ease-in-out">
                                                  <textPath href="#circlePath" startOffset="0%">
                                                      SCROLL&nbsp;&nbsp;&nbsp;&nbsp;DOWN&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;SCROLL&nbsp;&nbsp;&nbsp;&nbsp;DOWN&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                                                  </textPath>
                                              </text>

                                          </svg>

                                          {/* Center orange ring with arrow */}
                                          <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[12px] border-[#FF9800] flex items-center justify-center bg-black z-10">
                                              <FaArrowDown className="text-amber-500 text-xl" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div>

                  </div>
              </div>
          </div>
      </>
  );
};

export default Hero
