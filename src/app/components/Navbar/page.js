"use client"
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineBook, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const toggleSidebar = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        const handleNavigation = () => {
            if (toggle) {
                setToggle(false);
            }
        };

        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [toggle]);

    return (
        <>
            <div className='sticky z-[9999] top-0 bg-gray-900 '>
                <div className="h-16 md:h-20 w-screen bg-gray-900 ">
                    <nav className=' flex justify-between w-[90%] m-auto h-full'>
                        <Link to="home"
                            spy={true}
                            smooth={true}
                            duration={500} className="logo cursor-pointer md:w-[30%] md:my-auto">
                            <h1 className="text-2xl text-white pt-4 md:pt-1 pl-4 font-extrabold glow">Soumajyoti.</h1>
                        </Link>
                        <div className="icon mt-5 cursor-pointer md:hidden block">
                            <AiOutlineMenu className='text-white text-2xl font-bold' onClick={toggleSidebar} />
                        </div>

                        {/* LAPTOP SCREEN */}
                        <div className="md:block hidden w-[50%] h-[94%] pt-2">
                            <ul className="flex justify-evenly items-center h-full bg-blue-100 bg-opacity-10 rounded-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
                                <li><Link to="home"
                                    spy={true}
                                    smooth={true}
                                    duration={500} className="cursor-pointer h-10 font-semibold text-white p-1 neon-text hover:yglow transition duration-200">Home</Link></li>
                                <li><Link to="education"
                                    spy={true}
                                    smooth={true}
                                    duration={500} className="cursor-pointer h-10 font-semibold text-white p-1 neon-text hover:yglow transition duration-200">Education</Link></li>
                                <li><Link to="skills"
                                    spy={true}
                                    smooth={true}
                                    duration={500} className="cursor-pointer h-10 font-semibold text-white p-1 neon-text hover:yglow transition duration-200">Skills</Link></li>
                                <li><Link to="projects"
                                    spy={true}
                                    smooth={true}
                                    duration={500} className="cursor-pointer h-10 font-semibold text-white p-1 neon-text hover:yglow transition duration-200">Project</Link></li>
                                <Link to="contact"
                                    spy={true}
                                    smooth={true}
                                    duration={500} className="cursor-pointer h-10 font-semibold text-white p-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l w-32 text-center rounded-lg pt-[0.35rem] transition duration-300 ">Let&apos; Connect</Link>
                            </ul>
                        </div>

                    </nav>

                </div>

                {/* MOBILE VIEW */}
                <div className={`h-[22rem] w-screen rounded-b-[3rem] ${toggle ? "absolute top-16 backdrop-blur-3xl transition  duration-500" : "hidden"} `}>
                    <ul className="w-[90%] m-auto space-y-3 flex flex-col items-center pt-4">
                        <li><Link to="home"
                            spy={true}
                            smooth={true}
                            duration={500} className="text-white font-semibold p-2 space-y-3 cursor-pointer ml-2 w-24 text-center  text-lg inline-flex justify-between"><AiOutlineHome className='text-lg mt-1' /> Home</Link></li>
                        <li><Link to="education"
                            spy={true}
                            smooth={true}
                            duration={500} className="text-white font-semibold p-2 space-y-3 cursor-pointer ml-2  text-center text-lg  w-32 inline-flex justify-between"><AiOutlineBook className='text-lg mt-1' /> Education</Link></li>
                        <li><Link to="skills"
                            spy={true}
                            smooth={true}
                            duration={500} className="text-white font-semibold p-2 space-y-3 cursor-pointer ml-2  text-center text-lg w-[5.5rem] inline-flex justify-between"><GiSkills className='text-lg mt-1' /> Skills</Link></li>
                        <li><Link to="projects"
                            spy={true}
                            smooth={true}
                            duration={500} className="text-white font-semibold p-2 space-y-3 cursor-pointer ml-2  text-center text-lg w-[6.5rem] inline-flex justify-between"><AiOutlineFundProjectionScreen className='text-lg mt-1' /> Project</Link></li>
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            duration={500} className="cursor-pointer h-10 font-semibold text-white p-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l w-40 text-center rounded-lg pt-[0.35rem] transition duration-300  ">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75   rounded-md group-hover:bg-opacity-0 text-lg ">
                                Let&apos; Connect
                            </span>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
