import React from "react";
import { SearchIcon, CalendarIcon, BellIcon } from "@heroicons/react/outline";

import cookies from "../../config/cookies";

function HeaderSection(props) {
  // GET data from cookies
  const admin = cookies.getDecodedCookie();

  // Temporary GET user profile image
  const userImage = `http://103.176.79.55:3000/${admin.foto_profile}`;

  return (
    <section className="flex justify-between items-center mb-12">
      <div>
        <h1 className="font-extrabold text-3xl">{props.title}</h1>
        <p className="text-philippine-silver">{props.message} {admin.username}!</p>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative">
          <input
            type="text"
            placeholder={props.inputPlaceholder}
            className="p-2 rounded-lg"
          />
          <button className="absolute right-0 top-0 h-full rounded-lg px-3 bg-carmine-pink">
            <SearchIcon className="w-4 text-white" />
          </button>
        </div>
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
          alt="User Image Profile"
        />
      </div>
    </section>
  );
}

export default HeaderSection;
