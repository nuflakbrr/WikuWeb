import React from "react";
import Navbar from "../../components/Admin/Navbar";
import EditForm from "../../components/Admin/EditBiodata.form";
import { SEO } from "../../components";

function EditBiodata(props) {
  // Setting SEO
  const SEOPage = {
    title: "Edit Biodata - WIKUSAMA",
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
      <Navbar biodataActive={true} />
      <div className="absolute right-0 bg-ghost-white w-[94vw] min-h-screen">
        <section className="bg-carmine-pink min-h-[14rem] flex items-center justify-center">
          <div className="flex items-center justify-between w-[90%] gap-8">
            <div className="bg-[url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')] w-36 h-36 bg-cover rounded-full"></div>
            <div className="grow text-white">
              <h1 className="font-semibold text-5xl">Andi Firman</h1>
              <p className="text-lg font-light">
                Update your photo & personal details
              </p>
            </div>
            <div className="flex gap-6">
              <button className="w-20 py-2 px-3 bg-white text-black">
                Cancel
              </button>
              <button
                className="w-20 py-2 px-3 bg-black text-white"
                form="edit-biodata-form"
              >
                Save
              </button>
            </div>
          </div>
        </section>

        <EditForm />
      </div>
    </div>
  );
}

export default EditBiodata;
