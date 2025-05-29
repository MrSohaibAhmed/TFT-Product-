import ProfileHeader from "@/components/instructor-profile/profileHeader";
import React from "react";
import ProfileCard from "@/components/instructor-profile/profileCard";
import AboutSection from "@/components/instructor-profile/aboutSection";

export default function InstructorPage() {
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-20 py-10">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
        <div className="flex flex-col gap-6 w-full lg:w-2/3">
          <ProfileHeader />
          <div className="w-full">
            <AboutSection />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}
