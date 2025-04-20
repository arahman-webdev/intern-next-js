"use client"
import * as React from "react"
import { useState } from "react"
import client1 from '../app/images/client1.jpg'
import client2 from '../app/images/client2.jpg'
import client3 from '../app/images/client3.jpg'
import Title from "@/SharedComponents/Title"
import Image from "next/image"
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa6"
import Marquee from "react-fast-marquee"
import product1 from '../app/images/dell.png'

import product3 from '../app/images/ibm.png'
import product4 from '../app/images/microsoft.png'
import product5 from '../app/images/university.png'
import product7 from '../app/images/boeing.png'
import product8 from '../app/images/penny.png'
import product9 from '../app/images/lucasfilm.ef28c5a6.png'

const reviews = [
    {
        name: "Sophia Lee",
        role: "Product Manager",
        review: "Working with this team was a fantastic experience. Their attention to detail and commitment to delivering quality results exceeded our expectations.",
        image: client1
    },
    {
        name: "James Carter",
        role: "Founder & CEO",
        review: "Professional, responsive, and highly skilled. I’m extremely satisfied with the final product and the seamless collaboration throughout the project.",
        image: client2
    },
    {
        name: "Emily Johnson",
        role: "Marketing Director",
        review: "They truly understand user needs and business goals. The outcome not only looks great but performs exceptionally well. Highly recommended!",
        image: client3
    }
]

export function Clients() {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleAvatarClick = (index) => {
        setActiveIndex(index)
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % reviews.length)
    }

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    const activeReview = reviews[activeIndex]

    return (
        <div className="bg-[#F2F2F2] py-16 px-4">
            <div>
                <Title />
            </div>

            <div className="text-center pb-14">
                <h2 className="lg:text-6xl text-4xl font-medium leading-normal">Customer <span className="font-thin">Voices:</span> <br /><span>Hear What</span> <span className="font-thin">They Say!</span></h2>
            </div>

            <div className="max-w-3xl mx-auto text-center space-y-6">
                {/* Avatar Section */}
                <div className="flex justify-center gap-4 mb-6">
                    {reviews.map((review, index) => (
                        <button
                            key={index}
                            onClick={() => handleAvatarClick(index)}
                            className={`rounded-full p-2 border-4 transition-all duration-300 
                            ${index === activeIndex ? "border-amber-500" : "border-transparent"}
                            ${index === 1 ? "translate-y-4" : ""}`} // ✅ lower the middle one
                        >
                            <div className="w-24 h-24 rounded-full bg-[#f0f0f0]  overflow-hidden">
                                <Image
                                    src={review.image}
                                    alt={review.name}

                                    className="rounded-full  object-cover"
                                />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Quote Icon */}
                <div className="text-4xl text-amber-500 flex justify-center ">
                    <i><FaQuoteRight /></i>
                </div>

                {/* Name & Role */}
                <div key={activeIndex} className="transition-opacity duration-500 ease-in-out">
                    <h3 className="text-xl font-semibold">{activeReview.name}</h3>
                    <p className="uppercase text-sm text-gray-500 tracking-widest">{activeReview.role}</p>
                    <div className="flex justify-center items-center md:gap-20 gap-7 mt-8">
                        <button onClick={handlePrev} className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition">
                            <FaArrowLeft />
                        </button>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mt-4">
                            {activeReview.review}
                        </p>
                        <button onClick={handleNext} className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                {/* Arrows */}

            </div>
            <div className="pt-20">
                <Marquee pauseOnHover={true} className="flex gap-5">
                    <div className="flex flex-wrap justify-center items-center gap-6 py-10">
                        {[product1, product3, product4, product5, product7, product8, product9].map((product, index) => (
                            <Image
                                key={index}
                                src={product}
                                alt={`product-${index}`}
                                width={100} // equivalent to w-52
                                height={50} // equivalent to h-16
                                className="mr-36 transition-transform duration-300 hover:scale-105"
                            />
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}
