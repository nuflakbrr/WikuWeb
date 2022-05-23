import React from "react";
import Navbar from "../../components/Admin/Navbar";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

import TableRow from "../../components/Admin/TableRow";
import ReportButton from "../../components/Admin/ReportButton";
import HeaderSection from "../../components/Admin/HeaderSection";
import { SEO } from "../../components";

export default function Biodata(props) {
  // Setting SEO
  const SEOPage = {
    title: "List Biodata - WIKUSAMA",
    description: "WIKUSAMA",
    siteUrl: "https://wikusama.com",
    ogType: "website",
    ogImage: "https://wikusama.com/og.jpg",
    twitter: "@wikusama",
    twImage: "https://wikusama.com/tw.jpg",
  }

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
      <SEO title={SEOPage.title} description={SEOPage.description} siteUrl={SEOPage.siteUrl} ogType={SEOPage.ogType} ogImage={SEOPage.ogImage} twitter={SEOPage.twitter} twImage={SEOPage.twImage} />
      <Navbar />
      <div className="absolute right-0 bg-ghost-white w-[94vw] min-h-screen py-6 px-10">
        <HeaderSection
          title="Biodata management"
          message="Welcome back, "
          inputPlaceholder="Search user..."
        />

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
