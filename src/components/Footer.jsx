import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <div className="bg-[#080809]">
            <footer className="pt-24 pb-12 max-w-7xl mx-auto">
                <div className="container">
                    <div className="flex flex-wrap">
                        {/* Logo */}
                        <div className="w-full px-4 mb-12 md:w-1/5">
                            <h2 className="font-bold text-[30px] text-white">
                                WIKUSAMA
                            </h2>
                        </div>
                        {/* Logo End */}

                        {/* About Us */}
                        <div className="w-full px-4 mb-12 md:w-1/5">
                            <h2 className="font-semibold text-xl text-white mb-5">
                                About Us
                            </h2>
                            <ul>
                                <li>
                                    <Link to="/" className='inline-block text-base text-slate-300 hover:text-zinc-50'>Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className='inline-block text-base text-slate-300 hover:text-zinc-50'>About</Link>
                                </li>
                                <li>
                                    <Link to="/developers" className='inline-block text-base text-slate-300 hover:text-zinc-50'>Developers</Link>
                                </li>
                                <li>
                                    <Link to="/alumni" className='inline-block text-base text-slate-300 hover:text-zinc-50'>Alumni</Link>
                                </li>
                            </ul>
                        </div>
                        {/* About Us End */}

                        {/* Social Media */}
                        <div className="w-full px-4 mb-12 md:w-1/5">
                            <h2 className="font-semibold text-xl text-white mb-5">
                                Social Media
                            </h2>
                            <ul>
                                <li>
                                    <a href="#" target="_blank" className='inline-block text-base text-slate-300 hover:text-zinc-50'>Instagram</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" className='inline-block text-base text-slate-300 hover:text-zinc-50'>Twitter</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" className='inline-block text-base text-slate-300 hover:text-zinc-50'>TikTok</a>
                                </li>
                            </ul>
                        </div>
                        {/* Social Media End */}

                        {/* Contact */}
                        <div className="w-full px-4 mb-12 md:w-1/5">
                            <h2 className="font-semibold text-xl text-white mb-5">
                                Contact
                            </h2>
                            <ul>
                                <li>
                                    <a href="#" target="_blank" className='inline-block text-base text-slate-300 hover:text-zinc-50'>WhatsApp</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" className='inline-block text-base text-slate-300 hover:text-zinc-50'>LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        {/* Contact End */}

                        {/* Social Icons */}
                        <div className="w-full px-4 mb-12 md:w-1/5">
                            <div className="flex">

                                {/* Instagram */}
                                <a href="#" target="_blank">
                                    <span className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#222326] text-slate-100 hover:bg-[#323337] hover:text-zinc-50">
                                        <svg
                                            role="img"
                                            width={20}
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current"
                                        >
                                            <title>Instagram</title>
                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                        </svg>
                                    </span>
                                </a>

                                {/* Twitter */}
                                <a href="#" target="_blank">
                                    <span className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#222326] text-slate-100 hover:bg-[#323337] hover:text-zinc-50">
                                        <svg
                                            role="img"
                                            width={20}
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current"
                                        >
                                            <title>Twitter</title>
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </span>
                                </a>

                                {/* TikTok */}
                                <a href="#" target="_blank">
                                    <span className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#222326] text-slate-100 hover:bg-[#323337] hover:text-zinc-50">
                                        <svg
                                            role="img"
                                            width={20}
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current"
                                        >
                                            <title>TikTok</title>
                                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* Social Icons End */}
                    </div>
                    <div className="w-full pt-5 text-sm">
                        <div className="block text-center md:flex md:flex-wrap justify-between">
                            <div className="px-4">
                                <a href="#" className="text-[#B6B6B6] hover:text-[#989797]">Report</a>
                                <a href="#" className="text-[#B6B6B6] hover:text-[#989797] ml-3">Terms of Privacy</a>
                                <a href="#" className="text-[#B6B6B6] hover:text-[#989797] ml-3">Terms and Use</a>
                            </div>
                            <div className="px-4 pt-2 md:pt-0">
                                <span className="text-[#B6B6B6]">&copy; {year} Wikusama</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}
