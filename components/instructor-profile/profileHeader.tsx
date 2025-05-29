"use client";

export default function ProfileHeader() {
  return (
    <div className="space-y-4">
      <h2 className="text-4xl font-bold">INSTRUCTOR</h2>
      <p className="text-lg font-medium ">NAME</p>

      <div className="flex flex-col gap-5">
        <p className="w-fit">Online Education</p>
        <span className="bg-purple-200 font-bold w-fit text-purple-700 py-1 px-3 rounded-md">
          Techoverflow Instructor Partner
        </span>
      </div>
    </div>
  );
}
