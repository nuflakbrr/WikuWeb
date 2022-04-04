import React from "react";

import { Footer, Navbar } from "../components";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="flex flex-wrap overflow-x-hidden">
            <div className="flex-shrink-0 bg-cover bg-center w-[100vw] h-[24rem] sm:h-[24rem] items-center bg-[url('/LandingPage.png')] px-4">
              <div className="mt-24 md:mt-20">
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
      <section>
        <div className="container">
          <div className="lg:flex-row bg-[#080809]">
            <div className="max-w-[100vw] flex">
              <div className="w-full pl-24 flex items-center text-right">
                <p className="text-white">
                  I am proud of my students who have graduated and who are still
                  students at SMK Telkom Malang, because they are the future
                  generation, and who play a big role in the progress of this
                  country, their achievements during school will certainly never
                  be forgotten
                </p>
              </div>
              <div className="w-1/2 flex flex-col justify-center items-end">
                <h1 className="text-white capitalize text-[30px] font-bold leading-[48px]">
                  Andi Firman
                </h1>
                <h2 className="text-white capitalize text-[24px] font-light leading-[28.8px]">
                  Kepala Sekolah
                </h2>
              </div>
              <div className="w-full flex justify-end">
                <img src="/KepalaSekolah.png" alt="Kepala Sekolah Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
