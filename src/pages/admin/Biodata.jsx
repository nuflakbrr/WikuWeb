import React from "react";
import Navbar from "../../components/Admin/Navbar";
import { CalendarIcon, BellIcon, SearchIcon } from "@heroicons/react/outline";

export default function Biodata(props) {
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
      </div>
    </div>
  );
}
