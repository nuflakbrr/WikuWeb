import React, { useState } from "react";

export default function Profile(props) {
  const [source, setSource] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [fileInput, setFileInput] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSource(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!source) return;
    console.log(source);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6 container w-5/6 py-8 mx-auto">
        <div className="flex">
          <label htmlFor="username" className="w-1/3 font-semibold">
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
          <label htmlFor="full-name" className="w-1/3 font-semibold">
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
          <label htmlFor="email" className="w-1/3 font-semibold">
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
          <label htmlFor="phone-number" className="w-1/3 font-semibold">
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

        <div className="flex">
          <label htmlFor="phone-number" className="w-1/3">
            <h1 className="font-semibold">Your profile picture</h1>
            <p className="text-sm font-light">
              This will be displayed in your profile
            </p>
          </label>
          <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center">
            <div class="absolute">
              <div class="flex flex-col items-center">
                <span class="block">Browse files</span>
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              class="h-full w-full opacity-0"
              name=""
              onChange={handleFile}
              value={fileInput}
            />
          </div>
          <img src={source} className="w-16 h-16" />
        </div>

        <button type="submit">submit</button>
      </div>
    </form>
  );
}
