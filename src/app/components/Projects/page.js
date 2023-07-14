import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-900 pb-20">
                <div className="">
                    <h1 className="text-5xl text-white font-bold text-center pt-8 glow">Projects</h1>

                    {/* Project Card 1 */}
                    <div className="w-screen mt-10 mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_102,_124,_0.6)] md:w-[90%] md:flex md:flex-wrap md:justify-between md:items-center md:p-3 md:shadow-[0_20px_50px_rgba(8,_102,_124,_0.4)] md:hover:shadow-[0_20px_50px_rgba(8,_102,_124,_0.8)] transition duration-200 ">

                        <div className="left w-[95%] m-auto pt-10 md:w-1/2 md:pt-0">
                            <Link href={'https://huntingcoder-azure.vercel.app/'} target='_blank' className="text-3xl text-yellow-100 pl-5 font-bold md:text-4xl">Hunting Coder  </Link>
                            <p className="text-base text-gray-300 pl-5 pr-3 pt-5">
                                Our coding blogging website is a platform designed specifically for coding enthusiasts and programmers. It serves as a central hub for publishing and sharing insightful and informative coding-related blogs.
                            </p>
                        </div>

                        <Link href={`https://huntingcoder-azure.vercel.app/`} target='_blank' className="right mt-14 pl-2 md:mt-[0.5rem]">
                            <img src="huntingcoder.jpg" alt="huntingcoder" className='h-[300px] w-full md:pb-2 md:rounded-lg  md:hover:-translate-y-5 transition duration-300' />
                        </Link>
                    </div>


                    {/* Project Card 2 */}
                    <div className="w-screen mt-10 mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_102,_124,_0.6)] md:w-[90%] md:flex md:flex-row-reverse md:flex-wrap md:justify-between md:items-center md:p-3 md:shadow-[0_20px_50px_rgba(8,_102,_124,_0.4)] md:hover:shadow-[0_20px_50px_rgba(8,_102,_124,_0.8)] transition duration-200 ">
                        <div className="left w-[95%] m-auto pt-10 md:w-1/2 md:pt-0">
                            <Link href={`https://devwear-production.vercel.app/`} target='_blank' className="text-3xl text-yellow-100 pl-5 font-bold">Devwear : </Link>
                            <p className="text-base text-gray-300 pl-5 pt-5 pr-3 ">
                                Welcome to our ecommerce website, the ultimate destination for coding enthusiasts to express their passion with style. We specialize in selling high-quality coding-themed t-shirts and hoodies, designed to showcase your love for programming while keeping you comfortable and fashionable.
                            </p>
                        </div>
                        <Link href={`https://devwear-production.vercel.app/`} target='_blank' className="right mt-14 pl-2 md:w-1/2">
                            <img src="devwear.jpg" alt="devwear" className=' w- md:w-[90%] md:pb-10 md:rounded-lg md:overflow-hidden md:hover:-translate-y-10 transition duration-300 opacity-90' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
