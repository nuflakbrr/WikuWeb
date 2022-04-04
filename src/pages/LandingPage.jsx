import React from "react";

import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="flex-shrink-0 bg-cover bg-center w-[100vw] h-[24rem] sm:h-[22rem] text-2xl text-center text-white bg-[url('/LandingPage.jpg')]">
              <span className="block">Ikatan Alumni SMK Telkom Malang</span>
            </div>
          </div>
        </div>
      </section>
      <section>Greeting section</section>
    </>
  );
}
