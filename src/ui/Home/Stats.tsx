import { FaUserFriends } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import React from "react";

function Stats() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-2 pb-6">
      <div className="grow rounded-md bg-green-100 p-3">
        <div className="flex gap-3">
          <div className="bg-white p-1 rounded-md flex items-center justify-center">
            <FaUserFriends />
          </div>
          <h2 className="text-xl font-bold">14k+</h2>
        </div>
        <p className="font-semibold">
          Orders <br /> Completed
        </p>
      </div>
      <div className="grow rounded-md bg-rose-100 p-3">
        <div className="flex gap-3">
          <div className="bg-white p-1 rounded-md flex items-center justify-center">
            <FaAward />
          </div>
          <h2 className="text-xl font-bold">14k+</h2>
        </div>
        <p className="font-semibold">
          Won <br /> Awards
        </p>
      </div>
      <div className="grow rounded-md bg-yellow-100 p-3">
        <div className="flex gap-3">
          <div className="bg-white p-1 rounded-md flex items-center justify-center">
            <FaUsers />
          </div>
          <h2 className="text-xl font-bold">14k+</h2>
        </div>
        <p className="font-semibold">
          Happy <br /> Customers
        </p>
      </div>
      <div className="grow rounded-md bg-purple-100 p-3">
        <div className="flex gap-3">
          <div className="bg-white p-1 rounded-md flex items-center justify-center">
            <MdOutlineRateReview />
          </div>
          <h2 className="text-xl font-bold">14k+</h2>
        </div>
        <p className="font-semibold">
          Positive <br /> Reviews
        </p>
      </div>
    </div>
  );
}

export default Stats;
