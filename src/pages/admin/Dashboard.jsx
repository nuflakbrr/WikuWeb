import React from "react";
import Navbar from "./Navbar";

function Dashboard(props) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="absolute right-0 bg-ghost-white w-[94vw] min-h-screen py-6 px-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
        consectetur enim quisquam eligendi et non, reprehenderit debitis
        corrupti, illum dolor molestiae deserunt asperiores impedit numquam
        incidunt dolorum distinctio vero sit vitae sequi minima adipisci sunt.
        Expedita voluptas aspernatur doloribus veritatis.
      </div>
    </div>
  );
}

export default Dashboard;
