import React, { FC } from "react";
import { CiSearch } from "react-icons/ci";
import Cards from "../Cards/Cards";

const Card: FC = () => {
  return (
    <div className="p-5">
      <div className="text-3xl">The best movie reviews site!</div>
      <div className="mt-5">
        <div className="border-purple-700 border-2 w-80 flex justify-center items-center px-1">
          <CiSearch fontSize={24} />
          <input
            type="text"
            placeholder="Search for your favorite movie"
            className="w-80 p-2 focus:outline-none"
          />
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Card;
