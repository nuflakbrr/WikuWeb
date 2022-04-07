import React from "react";
import { Footer, Navbar, BiodataCard } from "../components";

import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";

const filter = [
  { name: "All", value: "all", selected: true },
  { name: "RPL", value: "rpl" },
  { name: "TKJ", value: "tkj" },
  { name: "Others", value: "others" },
];

function Biodata(props) {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden bg-[#F7F7F7]">
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
        <section>
          <div className="flex justify-center gap-4 m-auto text-center w-2/3">
            <input
              type="text"
              name="search"
              id="search"
              className="rounded-lg shadow-lg shadow-slate-200 h-12 w-1/2 p-4 outline-none"
              placeholder="Find wikusama’s family here"
            />
            <button className="rounded-lg bg-[#070708] p-2 flex justify-center items-center">
              <SearchIcon className="text-white w-8 h-8" />
            </button>
          </div>
        </section>

        {/* Filter */}
        <section className="py-2">
          <div className="m-auto w-1/4">
            <ul class="flex justify-center items-center gap-x-5 m-10 max-w-md mx-auto">
              {filter.map((item) => (
                <li>
                  <input
                    class="sr-only peer"
                    type="radio"
                    value={item.value}
                    name="filter"
                    id={item.value}
                    defaultChecked={item.selected}
                  />
                  <label
                    class="block min-w-[4.5rem] px-3 py-2 text-center text-sm border-b-4 border-transparent cursor-pointer focus:outline-none hover:border-slate-200 peer-checked:border-[#F8BC37]"
                    for={item.value}
                  >
                    {item.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cards section */}
        <section>
          <div className="mx-auto w-[95%] lg:w-[90%] mb-4 grid gap-4 grid-cols-profile-cards justify-items-center">
            <BiodataCard />
            <BiodataCard />
            <BiodataCard />
            <BiodataCard />
            <BiodataCard />
            <BiodataCard />
            <BiodataCard />
            <BiodataCard />
            <BiodataCard />
            <BiodataCard />
            <BiodataCard />
            <BiodataCard />
          </div>
        </section>

        {/* Read more */}
        <section className="flex justify-center mt-6 mb-12">
          <button>
            <ChevronDownIcon className="w-14 h-10 text-gray-400 hover:text-black hover:scale-110 hover:translate-y-2 transition-all duration-150" />
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Biodata;
