import React from 'react'
import { ChevronDownIcon } from "@heroicons/react/solid";

import { BiodataCard, Footer, Navbar } from '../components'

export default function Gallery() {
    const filter = [
        { name: "Latest", value: "latest", selected: true },
        { name: "Newest", value: "newest" },
        { name: "Login", value: "login" },
    ];

    return (
        <>
            <Navbar />
            <div className="overflow-x-hidden bg-[#F7F7F7]">
                {/* Header section */}
                <section className="overflow-x-hidden">
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="flex-shrink-0 bg-cover bg-center w-[100vw] h-[24rem] sm:h-[32rem] items-center bg-[url('/GalleryPage.jpg')] px-4">
                                <div className="mt-24 md:mt-28">
                                    <h1 className="text-center text-white font-bold text-[32px] md:text-[56px] leading-[40px] md:leading-[60px]">
                                        Shown Your <br />
                                        Fav Memory
                                    </h1>
                                    <h3 className="text-center text-white font-light text-[16px] md:text-[18px] leading-[24px] md:leading-[26px]">
                                        Displaying some stock photos of memories while at SMK <br />
                                        Telkom Malang, and many other interesting photos
                                    </h3>
                                </div>
                            </div>
                        </div>
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
    )
}
