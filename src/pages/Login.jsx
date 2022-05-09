import React, { useState } from "react";
import axios from "../config/axios";
import cookies from "../config/cookies";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import { SEO } from "../components";

export default function Login() {
  const [loginError, setLoginError] = useState(false);
  // Setting SEO
  const SEOPage = {
    title: "Masuk - WIKUSAMA",
    description: "WIKUSAMA",
    siteUrl: "https://wikusama.com",
    ogType: "website",
    ogImage: "https://wikusama.com/og.jpg",
    twitter: "@wikusama",
    twImage: "https://wikusama.com/tw.jpg",
  };

  const { handleSubmit, register } = useForm();

  // POST data from form
  const onSubmit = async (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("/login", body);
      if (res.data.status == "error") {
        throw new Error(res.data.status);
      } else if (res.data) {
        cookies.createCookie(res.data.acces_token);
        window.location.href = "/";
      }
    } catch (error) {
      setLoginError(true);
    }
  };

  // Function Remember Me
  const onRememberMe = (e) => {
    if (e.target.checked) {
      cookies.createCookie(res.data.acces_token);
    } else {
      cookies.deleteCookie();
    }
  }

  // Load Cookies Remember Me if exist
  function loadCookies() {
    if (cookies.getCookie() > 0) {
      window.location.href = "/";
    } else {
      return null;
    }
  }

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
        {loadCookies()}
        <div className="container bg-[#F9F9F9]">
          <div className="mx-auto">
            <div className="flex flex-wrap">
              {/* Form Component */}
              <div className="w-full md:w-1/2 p-10 lg:p-20">
                {/* Greetings */}
                <div className="mb-16">
                  <h1 className="font-bold text-[36px] leading-[43.2px]">
                    Login
                  </h1>
                  <p className="font-medium text-[16px] leading-[19.2px] mt-2">
                    Nice to see you again wikusama’s 👋
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-2 p-3 border-2 border-[#070708]"
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label htmlFor="password" className="font-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="mt-2 p-3 border-2 border-[#070708]"
                      placeholder="Enter your password"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                      <input type="checkbox" name="remember" id="remember" onClick={onRememberMe} />
                      <label htmlFor="remember" className="ml-2 text-sm">
                        Remember me
                      </label>
                    </div>
                    <div className="flex">
                      <NavLink to="/forgot-password" className="text-sm">
                        Forgot password ?
                      </NavLink>
                    </div>
                  </div>
                  <div className="flex flex-col mt-5">
                    {loginError && (
                      <div className="bg-red-300 mb-3 p-4 text-red-800">
                        Invalid login, please try again!
                      </div>
                    )}
                    <button
                      type="submit"
                      className="bg-[#070708] hover:bg-[#1f1f24] text-white font-bold py-3 px-4"
                    >
                      Login
                    </button>
                  </div>
                </form>

                {/* Sign Up */}
                <div className="flex items-center justify-center mt-5">
                  <p className="text-sm text-center">Don’t have an account ?</p>
                  <NavLink
                    to="/register"
                    className="text-sm text-center font-semibold ml-2"
                  >
                    Sign Up for Free
                  </NavLink>
                </div>
              </div>

              {/* Image Component */}
              <div className="w-full md:w-1/2">
                <div className="flex flex-col items-center">
                  <img
                    src="/Login.png"
                    alt="Login"
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
