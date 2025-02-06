import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        <h1 className="text-3xl font-bold">StrataForge 3D</h1>
      </div>
    </header>
  );
};

export default Header;
