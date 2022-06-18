import React from "react";
import {
  Link,
  Routes,
  Route,
  useMatch,
  useResolvedPath,
  Navigate,
} from "react-router-dom";
import cookies from "../config/cookies";

import { Navbar, Footer, ProfileForm, PasswordForm, SEO } from "../components";
import MediaForm from "../components/Profile/Media.form";

function Profile(props) {
  // GET data from localStorage
  const account = cookies.getDecodedCookie();

  // Temporary GET user profile image
  const userImage = `http://103.176.79.55:3000/${account.foto_profile}`

  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Profile section */}
        <section className="bg-[#F8BC37] min-h-[14rem] flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-between w-full xl:w-[90%] gap-2 xl:gap-8 px-4 py-4 xl:py-0">
            <img src={userImage} alt="User Image Profile" className="flex mx-auto w-36 h-36 object-cover rounded-full" />
            <div className="grow text-white">
              <h1 className="font-semibold text-5xl">{account.username}</h1>
              <p className="text-lg font-light">
                Update your photo & personal details
              </p>
            </div>
            <div className="flex gap-6 mx-auto">
              <button className="w-20 py-2 px-3 bg-white text-black">
                Cancel
              </button>
              <button
                className="w-20 py-2 px-3 bg-black text-white"
                // form="edit-profile-form"
                form={
                  useMatch({
                    path: "profile/edit",
                    end: true,
                  })
                    ? "edit-profile-form"
                    : "media-form"
                }
              >
                Save
              </button>
            </div>
          </div>
        </section>

        {/* Form navigation */}
        <section className="flex justify-center gap-6 py-3 bg-[#F9F9F9]">
          <CustomLink to="edit">Profile change</CustomLink>
          <CustomLink to="change-password">Password change</CustomLink>
          <CustomLink to="upload-media">Upload media</CustomLink>
        </section>

        <Routes>
          <Route path="/">
            <Route index element={<Navigate to={"edit"} replace />} />
            <Route path="edit" element={<ProfileForm />} />
            <Route path="change-password" element={<PasswordForm />} />
            <Route path="upload-media" element={<MediaForm />} />
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
