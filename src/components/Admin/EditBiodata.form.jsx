import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function EditBiodataForm(props) {
  const [source, setSource] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  );

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

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

  const setProfileBlank = (event) => {
    event.preventDefault();
    setValue("profile-picture", null);
    setSource("/BlankProfile.jpg");
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#F9F9F9]"
      id="edit-biodata-form"
    >
      <div className="flex flex-col gap-12 container w-5/6 py-8 mx-auto">
        <div className="flex">
          <label htmlFor="username" className="w-1/3 font-semibold">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
            placeholder="Fill your username here"
            {...register("username")}
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
            className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
            placeholder="Fill your name here"
            {...register("full-name")}
          />
        </div>

        <div className="flex">
          <label htmlFor="profile-picture" className="w-1/3">
            <h1 className="font-semibold">Your profile picture</h1>
            <p className="text-sm font-light">
              This will be displayed in your profile
            </p>
          </label>

          <div className="flex justify-between grow">
            <div
              className={`w-[6rem] h-[6rem] rounded-full bg-cover bg-center`}
              style={{ backgroundImage: `url(${source})` }}
              id="profile-picture-preview"
            />
            <div className="flex flex-row-reverse gap-6 items-center">
              <div className="relative bg-black text-white flex justify-center items-center h-10 w-[6rem] shadow-lg cursor-pointer">
                <div className="absolute">
                  <span className="block">Update</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="opacity-0 w-full h-full cursor-pointer"
                  name="profile-picture"
                  id="profile-picture"
                  onInput={handleFile}
                  {...register("profile-picture")}
                />
              </div>
              <button
                onClick={setProfileBlank}
                className="h-10 w-[6rem] shadow-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          <label htmlFor="jurusan" className="w-1/3 font-semibold">
            Jurusan
          </label>
          <select
            name="jurusan"
            id="jurusan"
            className="grow p-2 bg-white shadow-lg outline-none"
            defaultValue={"rpl"}
            {...register("jurusan")}
          >
            <option value="rpl">Rekayasa Perangkat Lunak</option>
            <option value="tkj">Teknik Komputer & Jaringan</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="flex">
          <label htmlFor="angkatan" className="w-1/3 font-semibold">
            Angkatan
          </label>
          <div className="grow">
            <input
              name="angkatan"
              id="angkatan"
              type="number"
              className={classNames(
                "w-full outline outline-1 outline-[#070708] p-2 bg-transparent",
                errors.angkatan && "outline-2 outline-red-600"
              )}
              placeholder="Fill here"
              {...register("angkatan", { min: 1, max: 30 })}
            />
            {errors.angkatan && (
              <p className="text-red-600">Hanya terdapat angkatan 1-30</p>
            )}
          </div>
        </div>

        <div className="flex">
          <label htmlFor="graduation-year" className="w-1/3 font-semibold">
            Graduation year
          </label>
          <input
            name="graduation-year"
            id="graduation-year"
            type="number"
            className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
            placeholder="Fill here"
            {...register("graduation-year")}
          />
        </div>

        <div className="flex">
          <label htmlFor="domicile" className="w-1/3 font-semibold">
            Hometown / domicile
          </label>
          <input
            name="domicile"
            id="domicile"
            type="text"
            className="grow outline outline-1 outline-[#070708] p-2 bg-transparent"
            placeholder="Fill here"
            {...register("domicile")}
          />
        </div>

        <div className="flex">
          <label htmlFor="delete-account" className="w-1/3 font-semibold">
            Delete account:
          </label>
          <button className="bg-carmine-pink text-white py-2 px-4">
            Delete
          </button>
        </div>
      </div>
    </form>
  );
}
