"use client"
import React, { useEffect, useState } from 'react'
import { PiFacebookLogo } from 'react-icons/pi';
import { ImGithub } from 'react-icons/im';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Hero = () => {
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 400;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(period / 1.2);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <>
            <div className='min-h-screen bg-gray-900 md:flex md:w-screen relative'>
                <div className="left min-h-[90vh] flex flex-col  items-center pt-32  md:items-start md:justify-center md:w-[60%] md:h-[60vh] md:pl-20 md:space-y-3">
                    <h1 class="mb-4 text-5xl font-extrabold text-gray-100 md:text-5xl lg:text-6xl text-center md:text-left"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Hi, I&apos;m</span> Soumajyoti Sarkar</h1>

                    <h1 className="  h-16 " dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="text-yellow-300 font-bold text-4xl md:text-5xl">{text}|</span></h1>

                    <p class="text-lg font-normal text-gray-500 lg:text-xl p-5 text-center md:text-left md:p-0">
                        I&apos;m a skilled web developer and programmer, passionate about crafting elegant solutions. With expertise in coding and problem-solving, I create impactful websites and applications to bring ideas to life.
                    </p>
                    <div className="w-[90%] mt-5 flex flex-col items-center md:flex-row md:space-x-20 md:pt-7">
                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-3 text-center  items-center w-[60%] shadow-lg shadow-red-800/80 flex justify-center md:w-[30%]">
                            DOWNLOAD CV
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-800/80 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold  rounded-lg  px-5 py-3 text-center mb-2 w-[60%] mt-6 md:w-[25%] md:mb-0 md:mt-0">Hire Me</button>
                    </div>
                    <div className="">
                        <div className="h-16 w-80 flex justify-center items-center mt-10 space-x-9 mb-5 border-2 border-gray-700 rounded-xl ">
                            <PiFacebookLogo className='text-blue-300 text-5xl' />
                            <ImGithub className='text-blue-300 text-4xl' />
                            <TiSocialLinkedinCircular className='text-blue-300 text-5xl' />
                            <AiFillTwitterCircle className='text-blue-300 text-4xl' />
                        </div>
                    </div>
                </div>
                <div className="right md:block hidden w-1/2 h-[75vh]">
                    <div className="flex h-full w-full justify-center items-center">
                        <div className="h-full w-[80%]">

                            <img class=" transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="me.png" alt="image description" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
