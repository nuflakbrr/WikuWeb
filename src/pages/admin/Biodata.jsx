import React from "react";
import Navbar from "../../components/Admin/Navbar";
import {
  CalendarIcon,
  BellIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import TableRow from "../../components/Admin/TableRow";
import ReportButton from "../../components/Admin/ReportButton";

export default function Biodata(props) {
  const data = [
    {
      nama: "Michael Keaton",
      angkatan: 27,
      domisili: "Malang",
      jurusan: "RPL",
    },
    { nama: "Richardo Roy", angkatan: 27, domisili: "Malang", jurusan: "RPL" },
    { nama: "Trevis Ahmad", angkatan: 27, domisili: "Tuban", jurusan: "TKJ" },
    {
      nama: "Bintara Affan",
      angkatan: 27,
      domisili: "Jakarta",
      jurusan: "TKJ",
    },
    { nama: "Michelle Putri", angkatan: 27, domisili: "Bali", jurusan: "RPL" },
    { nama: "Muhammad Arya", angkatan: 27, domisili: "Blitar", jurusan: "TKJ" },
    {
      nama: "Ahmad Sulistyo",
      angkatan: 28,
      domisili: "Blitar",
      jurusan: "TKJ",
    },
    {
      nama: "Andreas Stanley",
      angkatan: 28,
      domisili: "Nganjuk",
      jurusan: "TKJ",
    },
    {
      nama: "Steven Susanto",
      angkatan: 28,
      domisili: "Tulungagung",
      jurusan: "TKJ",
    },
    {
      nama: "Brandon Salim",
      angkatan: 28,
      domisili: "Trenggalek",
      jurusan: "RPL",
    },
    {
      nama: "Rando Putra",
      angkatan: 28,
      domisili: "Probolinggo",
      jurusan: "RPL",
    },
    {
      nama: "Rudy Ahmad Salim",
      angkatan: 29,
      domisili: "Probolinggo",
      jurusan: "TKJ",
    },
  ];
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

        <section>
          <table className="w-full border-collapse text-base">
            <thead>
              <tr className="bg-carmine-pink text-white">
                <th className="py-2">Name</th>
                <th>Angkatan</th>
                <th>Domisili</th>
                <th>Jurusan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => (
                <TableRow
                  nama={value.nama}
                  angkatan={value.angkatan}
                  domisili={value.domisili}
                  jurusan={value.jurusan}
                  userId={index + 1}
                />
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-10 flex justify-center gap-6">
          <button className="bg-white py-2 px-3">
            <ChevronLeftIcon className="text-carmine-pink w-5" />
          </button>
          <button className="bg-carmine-pink text-white py-2 px-4">1</button>
          <button className="bg-white py-2 px-4">2</button>
          <button className="bg-white p-2 px-4">3</button>
          <button className="bg-white p-2 px-4">...</button>
          <button className="bg-white p-2 px-4">99</button>
          <button className="bg-white p-2 px-3">
            <ChevronRightIcon className="text-carmine-pink w-5" />
          </button>
        </section>
      </div>

      <ReportButton />
    </div>
  );
}
