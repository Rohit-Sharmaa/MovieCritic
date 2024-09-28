import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="p-5 flex justify-between items-center bg-slate-300 w-full">
      <div>
        <h3 className="font-bold cursor-pointer" onClick={() => navigate("/")}>
          MOVIECRITIC
        </h3>
      </div>
      <div className="flex justify-center items-center flex-row gap-4">
        <div className="border-purple-900 border-2 bg-white w-40 text-center">
          <button
            className="text-purple-900 font-bold"
            onClick={() => navigate("/movie")}
          >
            Add new movie
          </button>
        </div>
        <div className="bg-purple-900 w-40 text-center border-2 border-purple-900">
          <button
            className="text-white font-bold"
            onClick={() => navigate("/review")}
          >
            Add new review
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
