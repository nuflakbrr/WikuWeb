import React from "react";

import Navbar from "../components/Navbar";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <section>
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="flex-shrink-0 bg-cover bg-center w-[100vw] h-[24rem] sm:h-[22rem] items-center bg-[url('/LandingPage.png')] px-4">
                            <div className="mt-24 md:mt-14">
                                <h1 className="text-center text-white font-bold text-[32px] md:text-[56px] leading-[40px] md:leading-[60px]">
                                    Ikatan Alumni <br />
                                    SMK Telkom Malang
                                </h1>
                                <h3 className="text-center text-white font-light text-[16px] md:text-[18px] leading-[24px] md:leading-[26px]">
                                    Review a few memories during SMK and strengthen the <br />
                                    relationship between alumni
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>Greeting section</section>
        </>
    );
}
