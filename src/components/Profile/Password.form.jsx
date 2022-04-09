import React from "react";

export default function Password(props) {
  return (
    <div>
      <form action="#">
        <div className="flex flex-col gap-6 container w-5/6 py-8 mx-auto">
          <div className="flex">
            <label htmlFor="current-password" className="w-1/3">
              Current password
            </label>
            <input
              type="password"
              name="current-password"
              id="current-password"
              className="grow outline outline-1 outline-[#070708] p-2"
              placeholder="andiFirman123"
            />
          </div>

          <div className="flex">
            <label htmlFor="new-password" className="w-1/3">
              New password
            </label>
            <input
              type="password"
              name="new-password"
              id="new-password"
              className="grow outline outline-1 outline-[#070708] p-2"
              placeholder="firmanAndi321"
            />
          </div>

          <div className="flex">
            <label htmlFor="email" className="w-1/3">
              Confirm new password
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="grow outline outline-1 outline-[#070708] p-2"
              placeholder="Fill your email here"
            />
          </div>

          <div className="w-full mx-auto">
            <a href="#forgot-password">Forgot password?</a>
          </div>
        </div>
      </form>
    </div>
  );
}
