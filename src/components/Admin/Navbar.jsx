import React from "react";
import {
  UserIcon,
  LogoutIcon,
  UserGroupIcon,
  PhotographIcon,
  CogIcon,
} from "@heroicons/react/solid";
import { useResolvedPath, useMatch, Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="fixed bg-white w-[6vw] h-screen flex flex-col items-center justify-between py-5 overflow-hidden border border-[#acafc0]">
      <h1 className="text-carmine-pink font-black text-3xl">W</h1>

      <div className="grid gap-10">
        <CustomLink to="">
          <UserIcon className="w-6" />
        </CustomLink>
        <CustomLink to="manage/biodata">
          <UserGroupIcon className="w-6" />
        </CustomLink>
        <CustomLink to="manage/image">
          <PhotographIcon className="w-6" />
        </CustomLink>
      </div>

      <div className="grid gap-6">
        <CustomLink to="settings">
          <CogIcon className="w-6" />
        </CustomLink>
        <CustomLink to="logout">
          <LogoutIcon
            className="w-6"
            style={{ transform: "scale(-1,1)" }} //flipping horizontally
          />
        </CustomLink>
      </div>
    </nav>
  );
}

function CustomLink(props) {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`p-2 rounded-full ${match && "bg-lotion text-carmine-pink"} ${
        !match && "text-vampire-black"
      }`}
      to={props.to}
      {...props}
    >
      {props.children}
    </Link>
  );
}

export default Navbar;
