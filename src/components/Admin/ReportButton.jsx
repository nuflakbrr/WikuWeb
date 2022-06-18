import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";

function ReportButton(props) {
  return (
    <a
      href="report-centre"
      className=" fixed right-8 bottom-6 bg-white shadow-md rounded-full p-4"
    >
      <PhoneIcon className="w-6" />
    </a>
  );
}

export default ReportButton;
