import React from "react";
import {
  UserIcon,
  LogoutIcon,
  UserGroupIcon,
  PhotographIcon,
  CogIcon,
} from "@heroicons/react/solid";
import { useResolvedPath, useMatch, Link } from "react-router-dom";

import cookies from "../../config/cookies";

function Navbar(props) {
  const admin = cookies.getDecodedCookie();

  // Block Access if Login Role is not Admin
  if (admin.role !== 'admin') {
    alert('Anda tidak memiliki akses ke halaman ini')
    window.location.href = '/'
  }

  // logout function
  const logout = () => {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/admin;"
    window.location.href = '/admin/login'
  }

  return (
    <nav className="fixed bg-white w-[6vw] h-screen flex flex-col items-center justify-between py-5 overflow-hidden border border-[#acafc0]">
      <h1 className="text-carmine-pink font-black text-3xl">W</h1>

      <div className="grid gap-10">
        <CustomLink to="/admin/dashboard" active={props.adminActive}>
          <UserIcon className="w-6" />
        </CustomLink>
        <CustomLink to="/admin/biodata" active={props.biodataActive}>
          <UserGroupIcon className="w-6" />
        </CustomLink>
        <CustomLink to="/admin/image" active={props.imageActive}>
          <PhotographIcon className="w-6" />
        </CustomLink>
      </div>

      <div className="grid gap-6">
        <CustomLink to="settings">
          <CogIcon className="w-6" />
        </CustomLink>
        <button className="p-2 rounded-full" onClick={logout}>
          <LogoutIcon
            className="w-6"
            style={{ transform: "scale(-1,1)" }} //flipping horizontally
          />
        </button>
      </div>
    </nav>
  );
}

function CustomLink(props) {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`p-2 rounded-full ${(match || props.active) && "bg-lotion text-carmine-pink"
        } ${!match && !props.active && "text-vampire-black"}`}
      to={props.to}
      {...props}
    >
      {props.children}
    </Link>
  );
}

export default Navbar;
