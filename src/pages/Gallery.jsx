import React from 'react'
import { ChevronDownIcon } from "@heroicons/react/solid";

import { Footer, GalleryCard, Navbar, NavBeforeLogin, SEO } from '../components'
import cookies from "../config/cookies";
import BlockPage from './BlockPage';

export default function Gallery() {
    // Setting SEO
    const SEOPage = {
        title: "Galeri - WIKUSAMA",
        description: "WIKUSAMA",
        siteUrl: "https://wikusama.com",
        ogType: "website",
        ogImage: "https://wikusama.com/og.jpg",
        twitter: "@wikusama",
        twImage: "https://wikusama.com/tw.jpg",
    }

    const filter = [
        { name: "Latest", value: "latest", selected: true },
        { name: "Newest", value: "newest" },
        { name: "Login", value: "login" },
    ];

    // looping image
    const images = [
        {
            id: 1,
            img: "/Gallery-1.jpg",
            alt: "Gallery 1",
        },
        {
            id: 2,
            img: "/Gallery-2.jpg",
            alt: "Gallery 2",
        },
        {
            id: 3,
            img: "/Gallery-3.jpg",
            alt: "Gallery 3",
        },
        {
            id: 4,
            img: "/Gallery-4.jpg",
            alt: "Gallery 4",
        },
        {
            id: 5,
            img: "/Gallery-5.jpg",
            alt: "Gallery 5",
        },
        {
            id: 6,
            img: "/Gallery-6.jpg",
            alt: "Gallery 6",
        },
        {
            id: 7,
            img: "/Gallery-7.jpg",
            alt: "Gallery 7",
        },
        {
            id: 8,
            img: "/Gallery-8.jpg",
            alt: "Gallery 8",
        },
        {
            id: 9,
            img: "/Gallery-9.jpg",
            alt: "Gallery 9",
        },
        {
            id: 10,
            img: "/Gallery-10.jpg",
            alt: "Gallery 10",
        },
        {
            id: 11,
            img: "/Gallery-11.jpg",
            alt: "Gallery 11",
        },
        {
            id: 12,
            img: "/Gallery-12.jpg",
            alt: "Gallery 12",
        },
    ]

    // GET data from localStorage
    const token = cookies.getCookie();

    return (
        <>
            <SEO title={SEOPage.title} description={SEOPage.description} siteUrl={SEOPage.siteUrl} ogType={SEOPage.ogType} ogImage={SEOPage.ogImage} twitter={SEOPage.twitter} twImage={SEOPage.twImage} />
            {/* Logical before login and after login here */}
            {token ? (
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
                                <ul className="flex justify-center items-center gap-x-5 m-10 max-w-md mx-auto">
                                    {filter.map((item) => (
                                        <li key={item.name}>
                                            <input
                                                className="sr-only peer"
                                                type="radio"
                                                value={item.value}
                                                name="filter"
                                                id={item.value}
                                                defaultChecked={item.selected}
                                            />
                                            <label
                                                className="block min-w-[4.5rem] px-3 py-2 text-center text-sm border-b-4 border-transparent cursor-pointer focus:outline-none hover:border-slate-200 peer-checked:border-[#F8BC37]"
                                                htmlFor={item.value}
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
                            <div className="mx-auto w-[95%] lg:w-[90%] py-4 px-4 grid gap-10 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
                                {images.map((item) => (
                                    <GalleryCard
                                        key={item.id}
                                        imgSrc={item.img}
                                        imgAlt={item.alt}
                                    />
                                ))}
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
            ) : (
                <>
                    <NavBeforeLogin />
                    <BlockPage />
                </>
            )}
            {/* Logical before login and after login End */}
        </>
    )
}
