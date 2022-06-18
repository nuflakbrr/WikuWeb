import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUploadIcon, XCircleIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { SocialIcon } from "react-social-icons";

import SEO from "../SEO";

export default function MediaForm(props) {
  // Setting SEO
  const SEOPage = {
    title: "Unggah Media - WIKUSAMA",
    description: "WIKUSAMA",
    siteUrl: "https://wikusama.com",
    ogType: "website",
    ogImage: "https://wikusama.com/og.jpg",
    twitter: "@wikusama",
    twImage: "https://wikusama.com/tw.jpg",
  }

  const [file, setFile] = useState(null);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      let image = acceptedFiles[acceptedFiles.length - 1];
      setFile(image);
    },
  });

  const setFileEmpty = () => {
    setFile(null);
  };

  const onSubmit = (data) => {
    var fields = {
      image: file,
      ...data,
    };
    console.log(fields);
  };

  return (
    <div className="bg-[#F9F9F9] pb-16">
      <SEO title={SEOPage.title} description={SEOPage.description} siteUrl={SEOPage.siteUrl} ogType={SEOPage.ogType} ogImage={SEOPage.ogImage} twitter={SEOPage.twitter} twImage={SEOPage.twImage} />
      <form
        action="#"
        className="w-4/5 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        id="media-form"
      >
        <section>
          <h1 className="text-xl font-bold py-5">Upload Album Image</h1>
          <div className="outline-2 outline-[#070708] outline-dashed flex justify-center items-center text-[#B6B6B6] py-6 text-center">
            {file == null ? (
              <div {...getRootProps()} className="flex flex-col items-center">
                <input {...getInputProps()} />
                <CloudUploadIcon className="w-40 h-40" />
                <p>
                  Upload a nice picture to be displayed in the biodata page!
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                <div
                  className="relative bg-center bg-cover w-[20.25rem] h-[12rem]"
                  style={{
                    backgroundImage: `url("${URL.createObjectURL(file)}")`,
                  }}
                >
                  <button
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 bg-opacity-50 hover:bg-opacity-100"
                    onClick={setFileEmpty}
                  >
                    Remove
                  </button>
                </div>
                <p className="text-xs">
                  Your album image will be exactly like this.
                </p>
              </div>
            )}
          </div>
        </section>

        <section>
          <h1 className="text-xl font-bold py-5">Social Media</h1>
          <div className="grid gap-6">
            <div className="flex items-center outline outline-1 outline-[#070708] p-2">
              <div>
                <SocialIcon
                  className="h-28"
                  network="instagram"
                  bgColor="#F9F9F9"
                  fgColor="#B6B6B6"
                />
              </div>
              <input
                type="text"
                name="instagram"
                id="instagram"
                className="w-full bg-transparent focus:outline-none"
                placeholder="Insert your Instagram username"
                {...register("instagram")}
              />
            </div>

            <div className="flex items-center outline outline-1 outline-[#070708] p-2">
              <div>
                <SocialIcon
                  className="h-28"
                  network="twitter"
                  bgColor="#F9F9F9"
                  fgColor="#B6B6B6"
                />
              </div>
              <input
                type="text"
                name="twitter"
                id="twitter"
                className="w-full bg-transparent focus:outline-none"
                placeholder="Insert your Twitter username"
                {...register("twitter")}
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
