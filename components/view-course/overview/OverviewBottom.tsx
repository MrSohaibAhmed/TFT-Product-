"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const OverviewBottom = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="space-y-12">
      {/* Swiper Testimonials Section */}
      <div className="py-12 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="mt-8 flex justify-center md:justify-end">
            <Link href={`/view-course?id=${id}`}>
              <Button className="px-6 text-sm sm:text-base">
                Go to Sprints
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewBottom;
