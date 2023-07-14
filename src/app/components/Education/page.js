import React from 'react'

const Education = () => {
    return (
        <>
            <div className="bg-gray-900">
                <h1 class="text-5xl font-bold text-white relative glow text-center">
                    Education
                </h1>
                <div className='flex'>
                    <ol class="relative border-l border-gray-700 w-[85%] m-auto mt-16 md:w-[40%] md:ml-24">
                        <li class="mb-10 ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
                                <svg class="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 class="flex items-center mb-1 text-lg font-semibold  text-white">Academy of Technology <span class="  text-sm font-medium mr-2 px-2.5 py-0.5 rounded  text-gray-100 ml-3 bg-blue-500 shadow-[-2px_2px_16px_0px_#2b6cb0]">Latest</span></h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">October 2021 - July 2025</time>
                            <p class="mb-4 text-base font-normal  text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                        </li>
                        <li class="mb-10 ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
                                <svg class="w-2.5 h-2.5  text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold  text-white">Flowbite Figma v1.3.0</h3>
                            <time class="block mb-2 text-sm font-normal leading-none  text-gray-500">Released on December 7th, 2021</time>
                            <p class="text-base font-normal  text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li class="ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
                                <svg class="w-2.5 h-2.5  text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold  text-white">Flowbite Library v1.2.2</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Released on December 2nd, 2021</time>
                            <p class="text-base font-normal text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>
                    </ol>

                    <div className="hidden md:block md:w-[50%] lg:w-[60%] pt-10">
                        <img class=" transition-all duration-300 rounded-lg cursor-pointer filter pt-7 hover:translate-y-4" src="education.png" alt="image description" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education