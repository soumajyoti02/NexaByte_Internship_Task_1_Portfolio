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
            <section id='skills' className="h-[230vh] md:h-[210vh] bg-gray-900  md:pt-24 pt-24">
                <div className="bg-blue-100 bg-opacity-10  shadow-2xl shadow-blue-800/80 rounded-[5rem] h-[95%] w-screen md:w-[90%] md:m-auto box-border transition duration-200">
                    <h1 className="text-gray-200 font-bold text-5xl text-center pt-16 h-[120px] md:h-[100px] font-sans glow">Skills</h1>

                    <div className="web h-[400px]">
                        <h1 className="text-gray-300 text-center pt-10 md:pt-16 font-bold text-3xl">Development Skills</h1>

                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme w-[80%] mx-auto my-auto relative h-[300px] ">
                            <div className="item">
                                <img src={`meter95.svg`} alt="html, css" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>HTML, CSS</h5>
                            </div>
                            <div className="item">
                                <img src={`meter95.svg`} alt="Javascript" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={`meter80.svg`} alt="React JS" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={`meter85.svg`} alt="Next JS" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Next JS</h5>
                            </div>
                            <div className="item">
                                <img src={`meter70.svg`} alt="Node JS" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={`meter60.svg`} alt="Express JS" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Express JS</h5>
                            </div>
                            <div className="item">
                                <img src={`meter50.svg`} alt="Django" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Django</h5>
                            </div>
                            <div className="item">
                                <img src={`meter85.svg`} alt="MongoDB" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>MongoDB</h5>
                            </div>

                        </Carousel>
                    </div>

                    <hr class="w-[80%] h-[0.1rem] mx-auto mt-0 bg-gray-700 border-0 rounded-3xl  "></hr>

                    <div className="web h-[400px]">
                        <h1 className="text-gray-300 text-center pt-16 md:pt-16 font-bold text-3xl">Programming Skills</h1>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme w-[80%] mx-auto my-auto relative h-[300px]">
                            <div className="item">
                                <img src={`meter95.svg`} alt="C" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>C</h5>
                            </div>
                            <div className="item">
                                <img src={`meter80.svg`} alt="C++" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>C++</h5>
                            </div>
                            <div className="item">
                                <img src={`meter90.svg`} alt="Java" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Java</h5>
                            </div>
                            <div className="item">
                                <img src={`meter95.svg`} alt="Python" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Python</h5>
                            </div>
                            <div className="item">
                                <img src={`meter50.svg`} alt="r" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>R</h5>
                            </div>
                        </Carousel>
                    </div>

                    <hr class="w-[80%] h-[0.1rem] mx-auto mt-4 bg-gray-700 border-0 rounded-3xl  "></hr>

                    <div className="web h-[400px]">
                        <h1 className="text-gray-300 text-center pt-16 md:pt-16 font-bold text-3xl">Soft Skills</h1>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme w-[80%] mx-auto my-auto relative h-[300px]">
                            <div className="item">
                                <img src={`meter70.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Leadership</h5>
                            </div>
                            <div className="item">
                                <img src={`meter80.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Communication</h5>
                            </div>
                            <div className="item">
                                <img src={`meter90.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Time Management</h5>
                            </div>
                            <div className="item">
                                <img src={`meter85.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Creativity</h5>
                            </div>
                            <div className="item">
                                <img src={`meter95.svg`} alt="Image" className='w-1/2 mx-auto mb-[15px]' />
                                <h5 className='text-white font-bold text-xl text-center '>Active Listening</h5>
                            </div>
                        </Carousel>
                    </div>




                </div>
            </section>
        </>
    )
}

export default Skills
