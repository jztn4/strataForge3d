import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black-900 text-white p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        <h1 className="text-3xl font-bold">StrataForge 3D</h1>
      </div>
    </header>
  );
};

export default Header;
