import React from "react";
import { useForm } from "react-hook-form";

import SEO from "../SEO";

export default function Password(props) {
  // Setting SEO
  const SEOPage = {
    title: "Edit Kata Sandi - WIKUSAMA",
    description: "WIKUSAMA",
    siteUrl: "https://wikusama.com",
    ogType: "website",
    ogImage: "https://wikusama.com/og.jpg",
    twitter: "@wikusama",
    twImage: "https://wikusama.com/tw.jpg",
  }

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SEO title={SEOPage.title} description={SEOPage.description} siteUrl={SEOPage.siteUrl} ogType={SEOPage.ogType} ogImage={SEOPage.ogImage} twitter={SEOPage.twitter} twImage={SEOPage.twImage} />
      <form
        action="#"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F9F9F9]"
      >
        <div className="flex flex-col gap-6 container w-5/6 py-8 mx-auto">
          <div className="flex">
            <label htmlFor="current-password" className="w-1/3 font-semibold">
              Current password
            </label>
            <input
              type="password"
              name="current-password"
              id="current-password"
              className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
              placeholder="andiFirman123"
              {...register("current-password")}
            />
          </div>

          <div className="flex">
            <label htmlFor="new-password" className="w-1/3 font-semibold">
              New password
            </label>
            <input
              type="password"
              name="new-password"
              id="new-password"
              className="grow outline outline-1 outline-[#070708] p-2  bg-transparent"
              placeholder="firmanAndi321"
              {...register("new-password")}
            />
          </div>

          <div className="flex">
            <label htmlFor="confirm-password" className="w-1/3 font-semibold">
              Confirm new password
            </label>
            <div className="grow">
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="w-full outline outline-1 outline-[#070708] p-2  bg-transparent"
                {...register("confirm-password", {
                  validate: (value) => value == watch("new-password"),
                })}
              />
              {errors["confirm-password"] && <p>ndak sama</p>}
            </div>
          </div>

          <div className="flex">
            <div className="w-1/3" />
            <div className="grid gap-4">
              <button className="bg-black text-white p-2" type="submit">
                Change password
              </button>
              <a href="#forgot-password" className="hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
