import React, { useState } from "react";
import { useForm } from "react-hook-form";

import cookies from "../../config/cookies";
import SEO from "../SEO";

export default function Profile(props) {
  // Setting SEO
  const SEOPage = {
    title: "Edit Profil - WIKUSAMA",
    description: "WIKUSAMA",
    siteUrl: "https://wikusama.com",
    ogType: "website",
    ogImage: "https://wikusama.com/og.jpg",
    twitter: "@wikusama",
    twImage: "https://wikusama.com/tw.jpg",
  };

  // GET data from localStorage
  const account = cookies.getDecodedCookie();

  // Temporary GET user profile image
  const [userimageSource, setSource] = useState(
    `http://103.176.79.55:3000/${account.foto_profile}`
  );

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const handleFile = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSource(reader.result);
    };
  };

  const setProfileBlank = (event) => {
    event.preventDefault();
    setValue("profile-picture", null);
    setSource("/BlankProfile.jpg");
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <SEO
        title={SEOPage.title}
        description={SEOPage.description}
        siteUrl={SEOPage.siteUrl}
        ogType={SEOPage.ogType}
        ogImage={SEOPage.ogImage}
        twitter={SEOPage.twitter}
        twImage={SEOPage.twImage}
      />
      <form
        action="#"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F9F9F9]"
        id="edit-profile-form"
      >
        <div className="flex flex-col gap-6 container w-5/6 py-8 mx-auto">
          <div className="flex flex-wrap">
            <label htmlFor="username" className="w-1/3 font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
              placeholder="Fill your username here"
              value={account.username}
              {...register("username")}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="full-name" className="w-1/3 font-semibold">
              Full name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
              placeholder="Fill your name here"
              value={account.full_name}
              {...register("full-name")}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="email" className="w-1/3 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
              placeholder="Fill your email here"
              value={account.email}
              {...register("email")}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="phone-number" className="w-1/3 font-semibold">
              Phone number
            </label>
            <input
              name="phone-number"
              id="phone-number"
              type="tel"
              maxLength={12}
              className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
              placeholder="Fill your phone number here"
              value={account.phone_number}
              {...register("phone-number")}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="profile-picture" className="w-1/3">
              <h1 className="font-semibold">Your profile picture</h1>
              <p className="text-sm font-light">
                This will be displayed in your profile
              </p>
            </label>

            <div className="flex justify-between grow">
              <div
                className={`w-[6rem] h-[6rem] rounded-full bg-cover bg-center border-2 border-black`}
                style={{ backgroundImage: `url(${userimageSource})` }}
                id="profile-picture-preview"
              />
              <div className="flex flex-row-reverse gap-6 items-center">
                <div className="relative bg-black text-white flex justify-center items-center h-10 w-[6rem] shadow-lg cursor-pointer">
                  <div className="absolute">
                    <span className="block">Update</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="opacity-0 w-full h-full cursor-pointer"
                    name="profile-picture"
                    id="profile-picture"
                    onInput={handleFile}
                    {...register("profile-picture")}
                  />
                </div>
                <button
                  onClick={setProfileBlank}
                  className="h-10 w-[6rem] shadow-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="quotes" className="w-1/3 font-semibold">
              Quotes
            </label>
            <textarea
              name="quotes"
              id="quotes"
              cols="30"
              rows="10"
              className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
              placeholder="Fill your quotes here"
              value={account.quotes}
              {...register("quotes")}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="last-position" className="w-1/3 font-semibold">
              Last position
            </label>
            <input
              name="last-position"
              id="last-position"
              type="text"
              className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
              placeholder="Fill your last position here"
              value={account.last_position}
              {...register("last-position")}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="profession" className="w-1/3 font-semibold">
              Profession
            </label>
            <input
              name="profession"
              id="profession"
              type="text"
              className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
              placeholder="Fill your profession here"
              value={account.profession}
              {...register("profession")}
            />
          </div>

          <div className="flex">
            <label htmlFor="jurusan" className="w-1/3 font-semibold">
              Jurusan
            </label>
            <select
              name="jurusan"
              id="jurusan"
              className="grow p-2 bg-white shadow-lg outline-none"
              defaultValue={"rpl"}
              {...register("jurusan")}
            >
              <option value="rpl">Rekayasa Perangkat Lunak</option>
              <option value="tkj">Teknik Komputer & Jaringan</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="angkatan" className="w-1/3 font-semibold">
              Angkatan
            </label>
            <div className="grow">
              <input
                name="angkatan"
                id="angkatan"
                type="number"
                className={classNames(
                  "w-full outline outline-1 outline-[#070708] p-2 bg-transparent",
                  errors.angkatan && "outline-2 outline-red-600"
                )}
                placeholder="Fill here"
                value={account.angkatan}
                {...register("angkatan", { min: 1, max: 30 })}
              />
              {errors.angkatan && (
                <p className="text-red-600">Hanya terdapat angkatan 1-30</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="graduation-year" className="w-1/3 font-semibold">
              Graduation year
            </label>
            <input
              name="graduation-year"
              id="graduation-year"
              type="number"
              className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
              placeholder="Fill here"
              value={account.graduation_year}
              {...register("graduation-year")}
            />
          </div>

          <div className="flex flex-wrap">
            <label htmlFor="domicile" className="w-1/3 font-semibold">
              Hometown / domicile
            </label>
            {/* <input
              name="domicile"
              id="domicile"
              type="text"
              className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
              placeholder="Fill here"
              value={account.domicile}
              {...register("domicile")}
            /> */}
            <div className="grow flex gap-2">
              <select
                name="provinsi"
                id="provinsi"
                className="w-1/2 p-2 bg-white shadow-lg outline-none"
              >
                <option value="provinsi">Provinsi</option>
              </select>
              <select
                name="kota"
                id="kota"
                className="w-1/2 p-2 bg-white shadow-lg outline-none"
              >
                <option value="kota">Kota</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
