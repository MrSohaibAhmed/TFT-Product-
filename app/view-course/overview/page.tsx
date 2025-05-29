"use client";
import React, { useEffect, useState } from "react";
import OverviewHeader from "@/components/view-course/overview/OverviewHeader";
import OverviewBottom from "@/components/view-course/overview/OverviewBottom";

function page() {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    const savedOverview = localStorage.getItem("courseOverview");
    if (savedOverview) {
      setOverview(JSON.parse(savedOverview));
    }
  }, []);

  return (
    <div>
      <OverviewHeader overview={overview} />
      <OverviewBottom />
    </div>
  );
}

export default page;
