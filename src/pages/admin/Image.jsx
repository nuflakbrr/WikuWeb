import React from "react";
import Navbar from "../../components/Admin/Navbar";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import HeaderSection from "../../components/Admin/HeaderSection";
import { SEO } from "../../components";

export default function Image(props) {
  const SEOPage = {
    title: "Managemen Galeri - WIKUSAMA",
    description: "WIKUSAMA",
    siteUrl: "https://wikusama.com",
    ogType: "website",
    ogImage: "https://wikusama.com/og.jpg",
    twitter: "@wikusama",
    twImage: "https://wikusama.com/tw.jpg",
  }

  return (
    <div className="overflow-x-hidden">
      <SEO title={SEOPage.title} description={SEOPage.description} siteUrl={SEOPage.siteUrl} ogType={SEOPage.ogType} ogImage={SEOPage.ogImage} twitter={SEOPage.twitter} twImage={SEOPage.twImage} />
      <Navbar />
      <div className="absolute right-0 bg-ghost-white w-[94vw] min-h-screen py-6 px-10">
        <HeaderSection
          title="Image management"
          inputPlaceholder="Search image..."
        />
        <div className="flex w-full min-h-[2.5rem] bg-carmine-pink text-white justify-between items-center px-4">
          <h1>Latest</h1>
          <button>View all</button>
        </div>

        <section className="w-full snap-proximity snap-x overflow-x-scroll hide-scrollbar overscroll-contain flex gap-8 mt-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>

        <div className="flex w-full min-h-[2.5rem] bg-carmine-pink text-white justify-between items-center px-4 mt-12">
          <h1>All images</h1>
          <button>View all</button>
        </div>

        <section className="w-full snap-proximity snap-x overflow-x-scroll hide-scrollbar overscroll-contain flex gap-8 mt-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="flex-shrink-0 p-1 snap-center w-56 h-56 bg-cover bg-center bg-[url('https://i.pinimg.com/originals/16/eb/85/16eb85c8f0ac8924cd2feac1c4c3bb73.jpg')] flex flex-col justify-between">
      <div className="self-end flex gap-4">
        <button className="bg-white p-1 rounded-sm">
          <PencilIcon className="w-4" />
        </button>
        <button className="bg-white p-1 rounded-sm">
          <TrashIcon className="w-4" />
        </button>
      </div>
      <div className="text-white">
        <p className="text-xs">20 Mei 2020</p>
        <h1 className="font-semibold">Depan sekolah</h1>
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-center bg-cover"></div>
          <h1 className="text-xs font-medium">Joko Anwar</h1>
        </div>
      </div>
    </div>
  );
}
