import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="h-[75vh] w-screen bg-gray-900 md:h-[100vh]">
                <div className="md:flex md:w-[90vw] md:m-auto md:justify-between md:h-[80%]">

                    <div className="left bg-gray-900 py-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-[3.5rem] md:w-[30%] md:shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)] md:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] md:transition md:duration-300">
                        <div className=" px-4">
                            <h2 className="text-4xl text-white font-bold mb-6 text-center glow">Contact Us</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-white font-medium mb-1">Name</label>
                                    <input type="text" id="name" placeholder="Your Name" className="w-full bg-gray-800 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-white font-medium mb-1">Email</label>
                                    <input type="email" id="email" placeholder="Your Email" className="w-full bg-gray-800 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="contact" className="block text-white font-medium mb-1">Contact Number</label>
                                    <input type="tel" id="contact" placeholder="Your Contact Number" className="w-full bg-gray-800 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-white font-medium mb-1">Message</label>
                                    <textarea id="message" placeholder="Your Message" className="w-full bg-gray-800 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
                                </div>
                                <div className="w-[80%] flex justify-center m-auto">
                                    <button type="button" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center   focus:ring-2 focus:outline-none  rounded-lg text-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-800/80 focus:ring-blue-800 w-[70%] justify-center">
                                        <svg className="w-3.5 h-3.5 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="right hidden md:block w-[60%]  my-auto">
                        <img src="contact.png" alt="contact" className='w-full transition duration-20000 hover:-translate-y-14' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
