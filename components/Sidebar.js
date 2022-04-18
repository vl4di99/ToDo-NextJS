import React from "react";

function Sidebar() {
  return (
    <div className="flex p-3 bg-gradient-to-b from-blue-600 to-lime-100 h-52 max-h-screen w-72 border-solid border-2 border-indigo-600 rounded-3xl mt-5 mb-5 ml-5">
      <div>
        <div className="border-solid border-x-8 border-indigo-900 rounded-5xl">
          <h1>Here comes the profile image</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
