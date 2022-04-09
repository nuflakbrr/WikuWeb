import React from "react";
import {
  Link,
  Routes,
  Route,
  useMatch,
  useResolvedPath,
  Navigate,
} from "react-router-dom";
import { Navbar, Footer, ProfileForm, PasswordForm } from "../components";

function Profile(props) {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Profile section */}
        <section className="bg-[#F8BC37] min-h-[14rem] flex items-center justify-center">
          <div className="flex items-center justify-between w-[90%] gap-8">
            <div className="bg-[url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')] w-36 h-36 bg-cover rounded-full"></div>
            <div className="grow text-white">
              <h1 className="font-semibold text-5xl">Andi Firman</h1>
              <p className="text-lg font-light">
                Update your photo & personal details
              </p>
            </div>
            <div className="flex gap-6">
              <button className="w-20 py-2 px-3 bg-white text-black">
                Cancel
              </button>
              <button className="w-20 py-2 px-3 bg-black text-white">
                Save
              </button>
            </div>
          </div>
        </section>

        {/* Form navigation */}
        <section className="flex justify-center gap-6 py-3">
          <CustomLink to="edit">Profile change</CustomLink>
          <CustomLink to="change-password">Password change</CustomLink>
          <CustomLink to="upload-media">Upload media</CustomLink>
        </section>

        <Routes>
          <Route path="/">
            <Route index element={<Navigate to={"edit"} replace />} />
            <Route path="edit" element={<ProfileForm />} />
            <Route path="change-password" element={<PasswordForm />} />
            <Route path="*" element={<Navigate to={"/404"} replace />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function CustomLink(props) {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const activeClass = "text-black py-3 border-b-[3px] border-[#F8BC37]";
  const inActiveClass = "text-[#B6B6B6] py-3";

  return (
    <Link
      className={match ? activeClass : inActiveClass}
      to={props.to}
      {...props}
    >
      {props.children}
    </Link>
  );
}

export default Profile;
