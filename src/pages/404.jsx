import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../config/cookies";

import { Footer, Navbar, NavBeforeLogin, SEO } from "../components";

export default function NotFound() {
  // Setting SEO
  const SEOPage = {
    title: "Halaman Tidak Ditemukan",
    description: "WIKUSAMA",
    siteUrl: "https://wikusama.com",
    ogType: "website",
    ogImage: "https://wikusama.com/og.jpg",
    twitter: "@wikusama",
    twImage: "https://wikusama.com/tw.jpg",
  }

  // GET data from localStorage
  const token = cookies.getCookie();

  const navigate = useNavigate();
  return (
    <div className="bg-[#080809] min-h-screen">
      <SEO title={SEOPage.title} description={SEOPage.description} siteUrl={SEOPage.siteUrl} ogType={SEOPage.ogType} ogImage={SEOPage.ogImage} twitter={SEOPage.twitter} twImage={SEOPage.twImage} />
      {/* Logical before login and after login here */}
      {token ? (
        <>
          <Navbar />
        </>
      ) : (
        <NavBeforeLogin />
      )}
      {/* Logical before login and after login End */}
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
                  <button
                    onClick={() => navigate(-1)}
                    className="bg-[#080809] text-white px-12 py-4"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
