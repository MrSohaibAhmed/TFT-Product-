"use client";
import React, { useRef, useState, useEffect } from "react";
import { Card } from "../ui/card";
import TeacherComment from "./comment";
import ReactPlayer from "react-player";

const Video: React.FC = ({ data }) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const teacherComments = [
    "This video is really helpful.",
    "Don’t forget to review chapter 5.",
    "Try to write your own summary.",
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    const currentTime = playerRef.current?.getCurrentTime() || 0;

    if (e.code === "ArrowRight") {
      playerRef.current?.seekTo(currentTime + 5);
    } else if (e.code === "ArrowLeft") {
      playerRef.current?.seekTo(Math.max(0, currentTime - 5));
    } else if (e.code === "Space") {
      e.preventDefault();
      setPlaying((prev) => !prev);
      setShowOverlay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOverlayClick = () => {
    setPlaying(true);
    setShowOverlay(false);
  };

  return (
    <Card className="w-full h-full flex flex-col items-center justify-center p-4 space-y-4">
      <Card className="rounded-md shadow-lg w-full dark:bg-gray-50 relative">
        <div className="relative pb-[56.25%] h-0 w-full">
          <ReactPlayer
            ref={playerRef}
            url={data?.videoUrl}
            playing={playing}
            controls={true}
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />
          {showOverlay && (
            <div
              className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center cursor-pointer z-10"
              onClick={handleOverlayClick}
            >
              <button className="bg-white w-16 rounded-md p-4 shadow-md text-black text-xl font-bold">
                ▶
              </button>
            </div>
          )}
        </div>
      </Card>

      {/* <Card className="w-full">
        <TeacherComment comments={teacherComments} />
      </Card> */}
    </Card>
  );
};

export default Video;
