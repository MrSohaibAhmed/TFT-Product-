"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaClock, FaBullseye, FaBrain } from "react-icons/fa";

const allSkills: string[] = [
  "lorem ipsum dolor ",
  "lorem ipsum",
  "lorem ipsum dolor ",
  "lorem ipsum",
  "lorem ipsum dolor ",
  "lorem ipsum",
  "lorem ipsum dolor ",
  "lorem ipsum",
  "lorem ipsum dolor ",
  "lorem ipsum",
];
const lessSkills: string[] = [
  "lorem ipsum dolor ",
  "lorem ipsum",
  "lorem ipsum dolor ",
  "lorem ipsum",
];

const OverviewTop = ({ overview }) => {
  const [showMore, setShowMore] = React.useState(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }
  return (
    <div className="space-y-8 ">
      <div className="px-4 sm:px-6 md:px-10 lg:px-24 py-6">
        <h1 className="font-bold text-3xl">HTML</h1>
        <p className="font-semibold">Course Overview</p>
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-24 py-6   rounded-md ">
        <div className="bg-[#f5f5f5] px-6 py-10 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-left mb-4 text-[#0A0A0A] border-b-2 border-b-black ">
            Introduction
          </h2>

          <div
            className="text-sm sm:text-base dark:text-black mb-6"
            dangerouslySetInnerHTML={{ __html: overview }}
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewTop;
