import React, { useState } from "react";
import axios from "../config/axios";
import cookies from "../config/cookies";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import { SEO } from "../components";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(null);

  // Setting SEO
  const SEOPage = {
    title: "Daftar - WIKUSAMA",
    description: "WIKUSAMA",
    siteUrl: "https://wikusama.com",
    ogType: "website",
    ogImage: "https://wikusama.com/og.jpg",
    twitter: "@wikusama",
    twImage: "https://wikusama.com/tw.jpg",
  };

  // POST data from form
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/register", data);
      if (res.data.acces_token) {
        cookies.createCookie(res.data.acces_token);
        window.location.href = "/";
      } else {
        console.log(res.data);
        throw new Error(res.data.message.name);
      }
    } catch (error) {
      setError("Your e-mail has been used!");
    }
  };

  return (
    <div>
      <SEO
        title={SEOPage.title}
        description={SEOPage.description}
        siteUrl={SEOPage.siteUrl}
        ogType={SEOPage.ogType}
        ogImage={SEOPage.ogImage}
        twitter={SEOPage.twitter}
        twImage={SEOPage.twImage}
      />
      <section>
        <div className="container bg-[#F9F9F9]">
          <div className="mx-auto">
            <div className="flex flex-wrap">
              {/* Form Component */}
              <div className="w-full md:w-1/2 p-10 lg:p-20">
                {/* Greetings */}
                <div className="mb-16">
                  <h1 className="font-bold text-[36px] leading-[43.2px]">
                    Sign Up
                  </h1>
                  <p className="font-medium text-[16px] leading-[19.2px] mt-2">
                    Welcome to wikusama’s family, create your account first.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col">
                    <label htmlFor="username" className="font-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="mt-2 p-3 border-2 border-[#070708]"
                      placeholder="Enter your username"
                      {...register("username")}
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="email"
                      className={`font-semibold ${errors.email && "text-red-600"
                        }`}
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className={`mt-2 p-3 border-2 border-[#070708] ${errors.email && "border-red-600"
                        }`}
                      placeholder="Enter your email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-600 text-sm">Invalid email!</p>
                  )}
                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="password"
                      className={`font-semibold ${errors.password && "text-red-600"
                        }`}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      maxLength={20}
                      className={`mt-2 p-3 border-2 border-[#070708] ${errors.password && "border-red-600"
                        }`}
                      placeholder="Enter your password"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                      })}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-600 text-sm">
                      Password should be alphanumeric & 8 - 20 characters long!
                    </p>
                  )}
                  <div className="flex flex-col mt-5">
                    {error && (
                      <div className="bg-red-300 mb-3 p-4 text-red-800">
                        {error}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="bg-[#070708] hover:bg-[#1f1f24] text-white font-bold py-3 px-4"
                    >
                      Create Account
                    </button>
                  </div>
                </form>

                {/* Sign In */}
                <div className="flex items-center justify-center mt-5">
                  <p className="text-sm text-center">Already have account ?</p>
                  <NavLink
                    to="/login"
                    className="text-sm text-center font-semibold ml-2"
                  >
                    Log In
                  </NavLink>
                </div>
              </div>

              {/* Image Component */}
              <div className="w-full md:w-1/2">
                <div className="flex flex-col items-center">
                  <img
                    src="/Register.png"
                    alt="Register"
                    className="w-[100vw] md:h-screen bg-cover bg-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
