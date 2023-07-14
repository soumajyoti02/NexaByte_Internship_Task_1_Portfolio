"use client"
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const toggleSidebar = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className='sticky z-[9999] top-0 bg-gray-900 '>
                <div className="h-16 w-screen bg-gray-900 ">
                    <nav className=' flex justify-between w-[90%] m-auto h-full'>
                        <div className="logo md:w-[30%]">
                            <h1 className="text-2xl text-white pt-4 pl-4 font-extrabold glow">Soumajyoti.</h1>
                        </div>
                        <div className="icon mt-5 cursor-pointer md:hidden block">
                            <AiOutlineMenu className='text-white text-2xl font-bold' onClick={toggleSidebar} />
                        </div>

                        {/* LAPTOP SCREEN */}
                        <div2 className="md:block hidden w-[50%] h-full">
                            <ul className="flex justify-evenly items-center h-full">
                                <li className="cursor-pointer h-10 font-semibold text-white p-1 neon-text hover:yglow transition duration-200">Home</li>
                                <li className="cursor-pointer h-10 font-semibold text-white p-1 neon-text hover:yglow transition duration-200">Education</li>
                                <li className="cursor-pointer h-10 font-semibold text-white p-1 neon-text hover:yglow transition duration-200">Skills</li>
                                <li className="cursor-pointer h-10 font-semibold text-white p-1 neon-text hover:yglow transition duration-200">Project</li>
                                <li className="cursor-pointer h-10 font-semibold text-white p-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l w-32 text-center rounded-lg pt-[0.35rem] transition duration-300 ">Let&apos; Connect</li>
                            </ul>
                        </div2>

                    </nav>

                </div>

                {/* MOBILE VIEW */}
                <div className={`h-56 bg-gray-900 ${toggle ? "block" : "hidden"} transition  duration-500 `}>
                    <ul className="w-[90%] m-auto ">
                        <li className="text-white font-semibold p-2 space-y-3 cursor-pointer ml-2  text-center border-b-2 border-b-gray-800">Home</li>
                        <li className="text-white font-semibold p-2 space-y-3 cursor-pointer ml-2  text-center border-b-2 border-b-gray-800">Education</li>
                        <li className="text-white font-semibold p-2 space-y-3 cursor-pointer ml-2  text-center border-b-2 border-b-gray-800">Skills</li>
                        <li className="text-white font-semibold p-2 space-y-3 cursor-pointer ml-2  text-center border-b-2 border-b-gray-800">Project</li>
                        <li className="text-white font-semibold p-2 space-y-3 cursor-pointer ml-2 text-center ">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
