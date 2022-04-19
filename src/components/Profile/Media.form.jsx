import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUploadIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { SocialIcon } from "react-social-icons";

export default function MediaForm(props) {
  const [file, setFile] = useState();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      let image = acceptedFiles[acceptedFiles.length - 1];
      setFile(image);
    },
  });

  const onSubmit = (data) => {
    var fields = {
      image: file,
      ...data,
    };
    console.log(fields);
  };

  return (
    <div className="bg-[#F9F9F9] pb-16">
      <form
        action="#"
        className="w-4/5 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section>
          <h1 className="text-xl font-bold py-5">Upload Album Image</h1>
          <div
            className="outline-2 outline-[#070708] outline-dashed flex flex-col items-center text-[#B6B6B6] py-6 text-center"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <CloudUploadIcon className="w-40 h-40" />
            <p>Upload a nice picture to be displayed in the biodata page!</p>
          </div>
        </section>

        <section>
          <h1 className="text-xl font-bold py-5">Social Media</h1>
          <div className="grid gap-6">
            <div className="flex items-center outline outline-1 outline-[#070708] p-2">
              <div>
                <SocialIcon
                  className="h-28"
                  network="instagram"
                  bgColor="#F9F9F9"
                  fgColor="#B6B6B6"
                />
              </div>
              <input
                type="text"
                name="instagram"
                id="instagram"
                className="w-full bg-transparent focus:outline-none"
                placeholder="Insert your Instagram’s username"
                {...register("instagram")}
              />
            </div>

            <div className="flex items-center outline outline-1 outline-[#070708] p-2">
              <div>
                <SocialIcon
                  className="h-28"
                  network="twitter"
                  bgColor="#F9F9F9"
                  fgColor="#B6B6B6"
                />
              </div>
              <input
                type="text"
                name="twitter"
                id="twitter"
                className="w-full bg-transparent focus:outline-none"
                placeholder="Insert your twitter’s username"
                {...register("twitter")}
              />
            </div>
          </div>
        </section>
        <button>submit</button>
      </form>
    </div>
  );
}
