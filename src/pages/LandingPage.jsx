import React from "react";
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import cookies from "../config/cookies";

import { Footer, Navbar, NavBeforeLogin, SEO } from "../components";

export default function LandingPage() {
  // Setting SEO
  const SEOPage = {
    title: "WIKUSAMA",
    description: "WIKUSAMA",
    siteUrl: "https://wikusama.com",
    ogType: "website",
    ogImage: "https://wikusama.com/og.jpg",
    twitter: "@wikusama",
    twImage: "https://wikusama.com/tw.jpg",
  };

  // GET data from localStorage
  const token = cookies.getCookie();

  return (
    <>
      <SEO
        title={SEOPage.title}
        description={SEOPage.description}
        siteUrl={SEOPage.siteUrl}
        ogType={SEOPage.ogType}
        ogImage={SEOPage.ogImage}
        twitter={SEOPage.twitter}
        twImage={SEOPage.twImage}
      />

      {/* Logical before login and after login here */}
      {token ? (
        <>
          <Navbar />
        </>
      ) : (
        <NavBeforeLogin />
      )}
      {/* Logical before login and after login End */}

      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section>
          <div className="container">
            <div className="flex flex-wrap">
              <div className="flex-shrink-0 bg-cover bg-center w-[100vw] h-[24rem] sm:h-[24rem] lg:h-[44vh] items-center bg-[url('/LandingPage.png')] px-4">
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
            <div className="bg-[#080809] lg:h-[48vh] w-screen">
              <div className="flex flex-col lg:flex-row mx-auto h-full">
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
                <div className="bg-[url('/KepalaSekolah.png')] h-full w-full bg-contain bg-no-repeat bg-center" />
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
                  <h1 className="font-bold text-[32px] md:text-[40px] leading-[48px]">
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
          <NavLink to="/gallery">
            <div className="h-full flex justify-center items-center grayscale hover:grayscale-0 transition-all delay-100 bg-cover bg-center bg-[url('/Gallery.jpg')]">
              <div className="text-center">
                <h1 className="font-bold text-[40px]">Gallery</h1>
                <p>
                  Showing some recordings of beautiful memories at SMK Telkom
                  Malang
                </p>
                <ArrowNarrowLeftIcon className="mx-auto text-white w-8 h-8" />
              </div>
            </div>
          </NavLink>
          <NavLink to="/biodata">
            <div className="h-full flex justify-center items-center grayscale hover:grayscale-0 transition-all delay-100 bg-cover bg-center bg-[url('/Biodata.jpg')]">
              <div className="text-center">
                <h1 className="font-bold text-[40px]">Biodata</h1>
                <p>
                  Showing at a glance the biodata of all alumni of SMK Telkom
                  Malang
                </p>
                <ArrowNarrowRightIcon className="mx-auto text-white w-8 h-8" />
              </div>
            </div>
          </NavLink>
        </section>
        {/* Galery and Biodata Section End */}

        {/* Graduates Section */}
        <section className="relative text-[#F3F3F3]">
          <div className="h-96 bg-[#080809] pt-[5rem]">
            <div className="grayscale-[60%] bg-[url('/GraduatesSection.jpg')] bg-cover bg-fixed h-64 w-full"></div>
          </div>
          <div className="absolute grid grid-flow-row bg-[#101010] h-full max-w-sm top-0 right-[15%] py-10 px-8">
            <h1 className="text-3xl font-semibold text-right leading-[48px]">
              SMK Telkom Malang Family
            </h1>
            <p className="text-right">
              <span className="font-bold">Wikusama</span> is a community
              organization for the alumni of SMK Telkom Malang, from the first
              batch in 1993, and has survived this long until 2022
            </p>
            <div id="stats" className="w-full flex justify-between text-white">
              <div id="alumnus-count">
                <h1 className="font-extrabold text-lg tracking-wider">1021</h1>
                <p>Alumnus</p>
              </div>
              <div id="students-count">
                <h1 className="font-extrabold text-lg tracking-wider">458</h1>
                <p>Students</p>
              </div>
              <div id="alumnus-count">
                <h1 className="font-extrabold text-lg tracking-wider">26</h1>
                <p>Teachers</p>
              </div>
            </div>
          </div>
        </section>
        {/* Graduates Section End */}

        {/* Testimonials Section */}
        <section>
          <div className="container">
            <div className="max-w-7xl mx-auto py-28 px-10">
              <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2">
                  <div>
                    <h1 className="font-bold text-[32px] md:text-[40px] leading-[48px]">
                      What do the
                      <br />
                      <span className="bg-[#F8BC37]">graduates</span> of SMK
                      Telkom Malang say?
                    </h1>

                    <div className="mt-10 flex flex-wrap">
                      <div className="w-full lg:w-1/2">
                        <div>
                          <h2 className="font-bold text-[24px] leading-[28.8px] mb-2.5">
                            Best IT curriculum
                          </h2>
                          <p className="text-[#B6B6B6]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Venenatis dolor senectus cursus sagittis
                            turpis condimentum. Dictum ut sociis in scelerisque
                            quisque massa.
                          </p>
                        </div>
                        <div className="mt-5">
                          <h2 className="font-bold text-[24px] leading-[28.8px] mb-2.5">
                            Productive environment
                          </h2>
                          <p className="text-[#B6B6B6]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Venenatis dolor senectus cursus sagittis
                            turpis condimentum. Dictum ut sociis in scelerisque
                            quisque massa.
                          </p>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2">
                        <div>
                          <h2 className="font-bold text-[24px] leading-[28.8px] mb-2.5">
                            Complete facilities
                          </h2>
                          <p className="text-[#B6B6B6]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Venenatis dolor senectus cursus sagittis
                            turpis condimentum. Dictum ut sociis in scelerisque
                            quisque massa.
                          </p>
                        </div>
                        <div className="mt-5">
                          <h2 className="font-bold text-[24px] leading-[28.8px] mb-2.5">
                            Best IT curriculum
                          </h2>
                          <p className="text-[#B6B6B6]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Venenatis dolor senectus cursus sagittis
                            turpis condimentum. Dictum ut sociis in scelerisque
                            quisque massa.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 mt-8 lg:mt-0">
                  <div className="bg-[#080809] -z-10 p-5">
                    <h2 className="text-white text-right font-bold text-[40px] leading-[48px]">
                      Dea Ivana
                    </h2>
                    <h4 className="text-white text-right font-medium text-[16px] leading-[19.2px]">
                      Product designer at Shoope
                    </h4>
                    <h4 className="text-white text-right font-light text-[16px] leading-[19.2px]">
                      Mokleters 21
                    </h4>
                  </div>
                  <img
                    src="/AlumniWanita.png"
                    alt="Alumni Wanita Image"
                    className="lg:-mt-52 xl:-mb-28"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section End */}
      </div>
      <Footer />
    </>
  );
}
