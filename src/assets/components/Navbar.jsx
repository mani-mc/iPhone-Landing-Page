import { useState } from "react";
import logo from "../images/apple-173-svgrepo-com.svg"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods",
        "TV & Home", "Entertainment", "Accessories", "Support"
    ];

    return (
        <nav className="bg-[#fafafc] shadow-sm top-0 w-full sticky z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 ">
                        <img className="h-6" src={logo} alt="" />
                    </div>


                    {/*Desktop View  */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {links.map((link) => (
                            <a key={link} href="#" className="text-gray-600 px-2 py-1 text-xs relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#1d1d1f] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex justify-end mr-2 w-full lg:w-0 space-x-4">
                        <button className="p-2 hover:bg-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 text-[#1d1d1f]">
                                <path strokeLinejoin="round" strokeLinecap="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 
                                5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </button>
                        <button className="p-2 hover:bg-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 text-[#1d1d1f]">
                                <path strokeLinejoin="round" strokeLinecap="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                        </button>
                    </div>

                    {/* Toggle Button */}
                    <div className="lg:hidden flex items-center ">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-gray-200">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 text-[#1d1d1f]">
                                    <path strokeLinejoin="round" strokeLinecap="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 text-[#1d1d1f]">
                                    <path strokeLinejoin="round" strokeLinecap="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Toggle View */}
            <div className={`lg:hidden fixed top-0 left-0 w-[50%] h-full bg-white z-40 transform transition-transform duration-600 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"
                }`}>
                <div className="relative h-full">
                    {/* Close Button – Fixed on top */}
                    <div className="absolute top-0 right-0 p-4">
                        <button onClick={() => setIsOpen(false)} className="p-2 rounded-md hover:bg-gray-100" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="pt-16 px-4 pb-4 overflow-y-auto h-full">
                        {links.map((link) => (
                            <a key={link} href="#" className="block p-2 text-gray-700 hover:bg-gray-100 rounded-md">{link}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav >

    );
}

export default Navbar;