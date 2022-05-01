import React from "react";
import Navbar from "../../components/Admin/Navbar";
import { SearchIcon, CalendarIcon, BellIcon } from "@heroicons/react/outline";
import { PencilAltIcon, PencilIcon, TrashIcon } from "@heroicons/react/solid";

export default function Image(props) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div className="absolute right-0 bg-ghost-white w-[94vw] min-h-screen py-6 px-10">
        <section className="flex justify-between items-center mb-12">
          <div>
            <h1 className="font-extrabold text-3xl">Biodata Management</h1>
            <p className="text-philippine-silver">Welcome back, Roy!</p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search user..."
                className="p-2 rounded-lg"
              />
              <button className="absolute right-0 top-0 h-full rounded-lg px-3 bg-carmine-pink">
                <SearchIcon className="w-4 text-white" />
              </button>
            </div>
            <button className="bg-white rounded-lg shadow-md p-1">
              <CalendarIcon className="w-5" />
            </button>
            <button className="relative first-letter:bg-white rounded-lg shadow-md p-1">
              <BellIcon className="w-5" />
              <div className="absolute rounded-full w-1.5 h-1.5 top-0.5 right-0.5 bg-red-500" />
            </button>
            <div className="bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] w-10 h-10 rounded-full bg-center bg-cover ml-2" />
          </div>
        </section>

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