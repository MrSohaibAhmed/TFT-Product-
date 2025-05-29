"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

function SprintSidebar({ setSelectedSprint, selectedSprint, sprints }) {
  return (
    <div>
      <div
        id="sidebar"
        className="bg-[#F5F5F5] dark:bg-[#262626] overflow-y-auto h-[88vh] border flex flex-col w-24 md:w-60 p-2 md:p-5 rounded-lg space-y-2 md:space-y-4"
      >
        {sprints.map((item) => {
          const isSelected = selectedSprint === item.id;
          const isLocked = item.status === "locked"; // 👈 Update this line to match your actual locked status

          return (
            <Button
              key={item.id}
              onClick={() => {
                // 👇 If it's not locked, allow selection
                if (!isLocked) {
                  setSelectedSprint(item.id);
                }
              }}
              variant="default"
              size="default"
              className={`
                relative justify-center
                text-[11px] md:text-base
                py-3 md:py-7
                whitespace-normal
                px-2 pr-6 text-center truncate
                md:max-h-16
                transition-all duration-500 ease-in-out
                ${isSelected ? "bg-black text-white" : "bg-white text-black"}
                ${
                  isSelected
                    ? "dark:bg-white dark:text-black"
                    : "dark:bg-[#0A0A0A] dark:text-white"
                }
                ${isLocked ? "opacity-50 cursor-not-allowed" : "hover:bg-inherit! hover:text-inherit!"}
              `}
              disabled={isLocked} // 👈 Disable the button if locked
            >
              {item.title}

              {isLocked && (
                <span
                  className={`
                    absolute bottom-1 right-1 md:bottom-2 md:right-2 rounded-full p-1
                    transition-all duration-300 ease-in-out
                    ${isSelected ? "bg-white dark:bg-black" : "bg-black dark:bg-white"}
                  `}
                >
                  <Lock
                    className={`
                      w-2.5 h-2.5 md:w-4 md:h-4
                      transition-all duration-300 ease-in-out
                      ${isSelected ? "text-black dark:text-white" : "text-white dark:text-black"}
                    `}
                  />
                </span>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default SprintSidebar;





