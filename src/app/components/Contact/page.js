'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    // Code for framer-motion effect
    // --------------------------------------
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.9; // Adjust the threshold as needed
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

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, email, phone, message } = user;

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, phone, message }),
            });

            if (response.ok) {
                toast.success("Message Sent Successfully!", {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
                console.log('Email sent successfully');
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
            } else {
                console.log('Error sending email');
            }
        } catch (error) {
            console.log('Error sending email');
            console.error(error);
        }
    };



    return (
        <>
            <section id='contact' className="h-[75vh] w-screen bg-gray-900 md:h-[100vh]  box-border">
                <ToastContainer
                    position="top-left"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />

                <div ref={ref} className="md:flex md:w-[90vw] md:m-auto md:justify-between md:h-[80%]">

                    <motion.div initial={{ x: '30%' }}
                        animate={{ x: isVisible ? 0 : '30%' }}
                        transition={{ duration: 0.1 }} className="left bg-gray-900 py-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-[3.5rem] md:w-[30%] md:shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)] md:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] md:transition md:duration-300">
                        <div className=" px-4">
                            <h2 className="text-4xl text-white font-bold mb-6 text-center glow">Contact Me</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-white font-medium mb-1">Name</label>
                                    <input type="text" id="username" name="username" value={user.username} onChange={handleChange} placeholder="Your Name" className="w-full bg-gray-800 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-white font-medium mb-1">Email</label>
                                    <input type="email" id="email" name="email" value={user.email} onChange={handleChange} placeholder="Your Email" className="w-full bg-gray-800 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-white font-medium mb-1">Contact Number</label>
                                    <input type="text" id="phone" name="phone" value={user.phone} onChange={handleChange} placeholder="Your Contact Number" className="w-full bg-gray-800 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-white font-medium mb-1">Message</label>
                                    <textarea id="message" name="message" value={user.message} onChange={handleChange} placeholder="Your Message" className="w-full bg-gray-800 text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" requirdd></textarea>
                                </div>
                                <div className="w-[80%] flex justify-center m-auto">
                                    <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center   focus:ring-2 focus:outline-none  rounded-lg text-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-800/80 focus:ring-blue-800 w-[70%] justify-center">
                                        <svg className="w-3.5 h-3.5 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                        Send Message
                                    </button>
                                </div>
                            </form>

                        </div>
                    </motion.div>


                    <div className="right hidden md:block w-[60%]  my-auto">
                        <img src="contact.png" alt="contact" className='w-full opacity-60 hover:opacity-80 transition duration-300' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
