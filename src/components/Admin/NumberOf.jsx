import React from "react";
import { UserGroupIcon, InformationCircleIcon } from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/outline";

function NumberOf(props) {
  return (
    <section className="bg-white rounded-xl w-1/3 p-4">
      <div className="flex gap-5 items-center mb-6">
        <div className="p-2 bg-ghost-white rounded-lg">
          <UserGroupIcon className="w-8 h-8 text-carmine-pink" />
        </div>
        <div className="grow">
          <h1 className="text-carmine-pink font-bold">Number of</h1>
          <h1>Users</h1>
        </div>
        <button>
          <InformationCircleIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-carmine-pink font-semibold">1021</h1>
          <p>Alumnus</p>
        </div>
        <div>
          <h1 className="text-carmine-pink font-semibold">458</h1>
          <p>Students</p>
        </div>
        <div>
          <h1 className="text-carmine-pink font-semibold">26</h1>
          <p>Teachers</p>
        </div>
      </div>

      <hr />

      <a href="manage" className="flex items-center mt-2 text-sm">
        Manage <ChevronRightIcon className="w-3 h-3" />
      </a>
    </section>
  );
}

export default NumberOf;
