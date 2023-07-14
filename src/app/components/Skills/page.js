"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="h-[175vh] md:h-[210vh] bg-gray-900 pt-10">
                <div className="bg-blue-100 bg-opacity-10  shadow-2xl shadow-blue-500/30 rounded-[5rem] h-[95%] w-screen md:w-[90%] md:m-auto box-border transition duration-200">
                    <h1 className="text-gray-200 font-bold text-5xl text-center pt-16 h-[120px] md:h-[100px] font-sans glow">Skills</h1>

                    <div className="web h-[400px]">
                        <h1 className="text-gray-300 text-center pt-10 md:pt-16 font-bold text-3xl">Development Skills</h1>

                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme w-[80%] mx-auto my-auto relative h-[300px] ">
                            <div className="item">
                                <img src={`meter1.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={`meter2.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={`meter3.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={`meter1.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>

                    <hr class="w-[80%] h-[0.1rem] mx-auto mt-0 bg-gray-700 border-0 rounded-3xl  "></hr>

                    <div className="web h-[400px]">
                        <h1 className="text-gray-300 text-center pt-16 md:pt-16 font-bold text-3xl">Programming Skills</h1>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme w-[80%] mx-auto my-auto relative h-[300px]">
                            <div className="item">
                                <img src={`meter1.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={`meter2.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={`meter3.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={`meter1.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>

                    <hr class="w-[80%] h-[0.1rem] mx-auto mt-4 bg-gray-700 border-0 rounded-3xl  "></hr>

                    <div className="web h-[400px]">
                        <h1 className="text-gray-300 text-center pt-16 md:pt-16 font-bold text-3xl">Soft Skills</h1>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme w-[80%] mx-auto my-auto relative h-[300px]">
                            <div className="item">
                                <img src={`meter1.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={`meter2.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={`meter3.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={`meter1.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Skills
