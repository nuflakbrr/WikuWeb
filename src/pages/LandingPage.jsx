import React from "react";

import { Footer, Navbar } from "../components";
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/react/solid";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section>
          <div className="container">
            <div className="flex flex-wrap">
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
        {/* Hero Section End */}

        {/* Greetings Section */}
        <section>
          <div className="container w-full">
            <div className="bg-[#080809]">
              <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
                <div className="w-full px-4 flex justify-end items-center text-right">
                  <p className="text-white">
                    I am proud of my students who have graduated and who are
                    still students at SMK Telkom Malang, because they are the
                    future generation, and who play a big role in the progress
                    of this country, their achievements during school will
                    certainly never be forgotten
                  </p>
                </div>
                <div className="w-1/2 px-4 flex justify-end items-center">
                  <div>
                    <h1 className="text-white capitalize text-[30px] font-bold leading-[48px]">
                      Andi Firman
                    </h1>
                    <h2 className="text-white capitalize text-[24px] font-light leading-[28.8px]">
                      Kepala Sekolah
                    </h2>
                  </div>
                </div>
                <div className="w-full">
                  <img src="/KepalaSekolah.png" alt="Kepala Sekolah Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Greetings Section End */}

        {/* About Section */}
        <section>
          <div className="container">
            <div className="max-w-7xl mx-auto py-28 px-10">
              <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2">
                  <h1 className="font-bold text-[40px] leading-[48px]">
                    Thing you should <br />
                    know <span className="bg-[#F8BC37]">about us</span>
                  </h1>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  <p className="max-w-lg leading-[27px] text-[16px]">
                    Wikusama is a community organization for the alumni of SMK
                    Telkom Malang, from the first batch in 1993, and has
                    survived this long until 2022, alumni still maintain close
                    relationships even though they are no longer students at SMK
                    Telkom Malang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section End */}

        {/* Galery and Biodata Section */}
        <section className="grid grid-flow-col h-96 text-white">
          <div className="flex justify-center items-center grayscale hover:grayscale-0 transition-all delay-100 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60')]">
            <div className="text-center">
              <h1 className="font-bold text-[40px]">Gallery</h1>
              <p>
                Showing some recordings of beautiful memories at SMK Telkom
                Malang
              </p>
              <button>
                <ArrowNarrowLeftIcon className="text-white w-8 h-8" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center grayscale hover:grayscale-0 transition-all delay-100 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1615827133499-168ef44cbd77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80')]">
            <div className="text-center">
              <h1 className="font-bold text-[40px]">Biodata</h1>
              <p>
                Showing at a glance the biodata of all alumni of SMK Telkom
                Malang
              </p>
              <button>
                <ArrowNarrowRightIcon className="text-white w-8 h-8" />
              </button>
            </div>
          </div>
        </section>
        {/* Galery and Biodata Section End */}

        {/* Lulusan Section */}
        <section>Lulusan Section</section>
        {/* Lulusan Section End */}

        {/* Featured Section */}
        <section>
          <div className="container">
            <div className="max-w-7xl mx-auto py-28 px-10">
              <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2">
                  <div className="">
                    <h1 className="font-bold text-[40px] leading-[48px]">
                      What do the
                      <br />
                      <span className="bg-[#F8BC37]">graduates</span> of SMK
                      Telkom Malang say?
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Section End */}
      </div>
      <Footer />
    </>
  );
}
