import React from "react";

export default function Password(props) {
  return (
    <div>
      <form action="#">
        <div className="flex flex-col gap-6 container w-5/6 py-8 mx-auto">
          <div className="flex">
            <label htmlFor="current-password" className="w-1/3 font-semibold">
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
            <label htmlFor="new-password" className="w-1/3 font-semibold">
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
            <label htmlFor="email" className="w-1/3 font-semibold">
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

          <div className="flex">
            <div className="w-1/3" />
            <div className="grid gap-4">
              <button className="bg-black text-white p-2">
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
