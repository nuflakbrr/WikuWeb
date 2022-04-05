import React from "react";
import { Footer, Navbar } from "../components";

import { SearchIcon } from "@heroicons/react/solid";

function Biodata(props) {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Header section */}
        <section className="py-16">
          <div className="container mx-auto w-2/3 text-center">
            <h1 className="font-[400] text-[30px] tracking-[.55em]">
              WIKUSAMA
            </h1>
            <h1 className="font-[700] text-[64px]">Together We Are Family</h1>
            <p className="font-[350] text-[24px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
        </section>

        {/* Search bar */}
        <section className="py-4">
          <div className="flex justify-center gap-4 m-auto text-center w-2/3">
            <input
              type="text"
              name="search"
              id="search"
              className="rounded-lg drop-shadow-md h-12 w-1/2 p-4"
              placeholder="Find wikusama’s family here"
            />
            <div className="rounded-lg bg-[#070708] p-2 flex justify-center items-center">
              <SearchIcon className="text-white w-8 h-8" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Biodata;
