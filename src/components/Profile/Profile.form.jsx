import React from "react";

export default function Profile(props) {
  return (
    <form action="#">
      <div className="flex flex-col gap-6 container w-5/6 py-8 mx-auto">
        <div className="flex">
          <label htmlFor="username" className="w-1/3">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="grow outline outline-1 outline-[#070708] p-2"
            placeholder="Fill your username here"
          />
        </div>

        <div className="flex">
          <label htmlFor="full-name" className="w-1/3">
            Full name
          </label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            className="grow outline outline-1 outline-[#070708] p-2"
            placeholder="Fill your name here"
          />
        </div>

        <div className="flex">
          <label htmlFor="email" className="w-1/3">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="grow outline outline-1 outline-[#070708] p-2"
            placeholder="Fill your email here"
          />
        </div>

        <div className="flex">
          <label htmlFor="phone-number" className="w-1/3">
            Phone number
          </label>
          <input
            name="phone-number"
            id="phone-number"
            type="tel"
            maxLength={12}
            className="grow outline outline-1 outline-[#070708] p-2"
            placeholder="Fill your phone number here"
          />
        </div>
      </div>
    </form>
  );
}
