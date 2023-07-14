import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="h-[100vh] w-screen bg-gray-900">
                <div className="">

                    <div className="left ">
                        <h1 className="text-3xl text-gray-200 font-bold text-center">Get In Touch</h1>

                        <div className="mb-6">
                            <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Base input</label>

                            <input type="text" id="base-input" className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </div>


                    <div className="right hideen md:block">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
