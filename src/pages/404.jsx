import React from 'react'
import { NavLink } from 'react-router-dom'

import { Footer, Navbar } from '../components'

export default function NotFound() {
    return (
        <div className="bg-[#080809] min-h-screen">
            <Navbar />
            <section className="overflow-x-hidden">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="flex-shrink-0 bg-cover bg-center w-[100vw] h-[24rem] sm:h-[32rem] items-center bg-[url('/NotFound.png')] px-4">
                            <div className="mt-24 md:mt-28">
                                <h1 className="text-center text-white font-bold text-[32px] md:text-[56px] leading-[40px] md:leading-[60px]">
                                    404 <br />
                                    PAGE NOT FOUND
                                </h1>
                                <h3 className="text-center text-white font-light text-[16px] md:text-[18px] leading-[24px] md:leading-[26px]">
                                    We can’t find any page related to what you’re <br />
                                    looking for
                                </h3>
                                <div className="flex justify-center items-center my-4">
                                    <NavLink to="/" className="bg-[#080809] text-white px-12 py-4">Go Back</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
