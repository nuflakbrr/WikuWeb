import React from "react";
import { CalendarIcon, BellIcon } from "@heroicons/react/outline";

import cookies from "../../config/cookies";
import Navbar from "../../components/Admin/Navbar";
import ReportButton from "../../components/Admin/ReportButton";
import NumberOf from "../../components/Admin/NumberOf";
import { SEO } from "../../components";

function Dashboard(props) {
  // Setting SEO
  const SEOPage = {
    title: "Dasbor Admin - WIKUSAMA",
    description: "WIKUSAMA",
    siteUrl: "https://wikusama.com",
    ogType: "website",
    ogImage: "https://wikusama.com/og.jpg",
    twitter: "@wikusama",
    twImage: "https://wikusama.com/tw.jpg",
  }

  // GET data from cookies
  const admin = cookies.getDecodedCookie();

  // Temporary GET user profile image
  const userImage = `http://103.176.79.55:3000/${admin.foto_profile}`;

  return (
    <div className="overflow-x-hidden">
      <SEO title={SEOPage.title} description={SEOPage.description} siteUrl={SEOPage.siteUrl} ogType={SEOPage.ogType} ogImage={SEOPage.ogImage} twitter={SEOPage.twitter} twImage={SEOPage.twImage} />
      <Navbar />
      <div className="absolute right-0 bg-ghost-white w-[94vw] min-h-screen py-6 px-10">
        <section className="flex justify-between items-center mb-12">
          <div>
            <h1 className="font-extrabold text-3xl">User Management</h1>
            <p className="text-philippine-silver">Welcome back, {admin.username}!</p>
          </div>

          <div className="flex gap-4 items-center">
            <button className="bg-white rounded-lg shadow-md p-1">
              <CalendarIcon className="w-5" />
            </button>
            <button className="relative first-letter:bg-white rounded-lg shadow-md p-1">
              <BellIcon className="w-5" />
              <div className="absolute rounded-full w-1.5 h-1.5 top-0.5 right-0.5 bg-red-500" />
            </button>
            <img
              className="h-10 w-10 object-cover rounded-full ml-2"
              src={userImage}
              alt="Admin Image Profile"
            />
          </div>
        </section>

        <h1 className="font-bold text-2xl mb-8">Users</h1>
        <div className="flex gap-4">
          <NumberOf />
          <NumberOf />
          <NumberOf />
        </div>
      </div>

      <ReportButton />
    </div>
  );
}

export default Dashboard;
