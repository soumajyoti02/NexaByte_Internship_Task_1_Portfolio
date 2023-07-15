"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from 'framer-motion';

const Education = () => {

    // Code for framer-motion effect
    // --------------------------------------
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.8; // Adjust the threshold as needed
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // --------------------------------------
    // After writing this, just add ref={ref} in main section. 
    // write motion.div into desired container and add initial, animate & transition options in that.

    return (
        <>
            <section ref={ref} id='education' className="bg-gray-900 pt-20 md:pt-0">
                <h1 className="text-5xl font-bold text-white relative glow text-center">
                    Education
                </h1>
                <div className='flex'>
                    <motion.ol initial={{ x: '30%' }}
                        animate={{ x: isVisible ? 0 : '30%' }}
                        transition={{ duration: 0.5 }} className="relative border-l border-gray-700 w-[85%] m-auto mt-16 md:w-[40%] md:ml-24 md:mt-24">
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold  text-white">Academy of Technology <span className="  text-sm font-medium mr-2 px-2.5 py-0.5 rounded  text-gray-100 ml-3 bg-blue-500 shadow-[-2px_2px_16px_0px_#2b6cb0]">Latest</span></h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">October 2021 - July 2025</time>
                            <p className="mb-4 text-base font-normal  text-gray-400">I completed my B.Tech in Electronics and Communication at Academy of Technology, achieving a remarkable GPA of 9.1. Ready to apply my strong foundation in circuit design, signal processing, and communication systems to contribute to technological advancements.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
                                <svg className="w-2.5 h-2.5  text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold  text-white">Hooghly Collegiate School</h3>
                            <time className="block mb-2 text-sm font-normal leading-none  text-gray-500">July 2018 - June 2020</time>
                            <p className="text-base font-normal  text-gray-400">I completed my 11th and 12th standard schooling in the Science stream at Hooghly Collegiate School, securing an impressive score of 90.42% in the Higher Secondary Exam. </p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
                                <svg className="w-2.5 h-2.5  text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold  text-white">Hooghly Collegiate School</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">August 2012 - March 2018</time>
                            <p className="text-base font-normal text-gray-400">I successfully completed my Secondary examination from Hooghly Collegiate School, achieving an outstanding score of 91.80%. This accomplishment reflects my dedication to academics and proficiency in various subjects.</p>
                        </li>
                    </motion.ol>

                    <div className="hidden md:block md:w-[50%] lg:w-[60%] pt-10">
                        <img className=" transition-all duration-300 rounded-lg cursor-pointer filter pt-7 hover:translate-y-4" src="education.png" alt="image description" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education
