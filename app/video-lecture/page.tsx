"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Video from "@/components/video-lecture/video";
import { LectureCard } from "@/components/video-lecture/lecture";
import KanbanComponent from "@/components/kanban/kanbanCompoent";
const lectures = [
  {
    title: "Intro to Programming",
    content:
      "Programming is the process of creating instructions for a computer to follow. It helps solve problems by breaking them into logical steps.",
    datePosted: "23 days",
    comments: [
      {
        id: 1234567,
        content:
          "Learn what programming is and how computers follow instructions...",
        datePosted: "23 days",
        instructorReplyDate: "23 days",
        author: "Instructor",
      },
    ],
  },
];

function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const savedTopic = localStorage.getItem("selectedTopic");
    if (savedTopic) {
      const topic = JSON.parse(savedTopic);
      setData(topic);
      // Do something with topic
    }
  }, []);
  return (
    <div>
      <Tabs defaultValue="video" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="reading">Material</TabsTrigger>
            <TabsTrigger value="task">Task</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="video" className="space-y-4">
          <div className="flex-col gap-4">
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <Video data={data} />
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reading">
          <Card>
            <main className="w-full mx-auto p-6 space-y-6">
              {lectures.map((lecture, index) => (
                <LectureCard
                  data={data}
                  key={index}
                  title={lecture.title}
                  content={lecture.content}
                  datePosted={lecture.datePosted}
                  comments={lectures[index].comments}
                />
              ))}
            </main>
          </Card>
        </TabsContent>
        <TabsContent value="task">
          <Card className="p-5 border">
            <KanbanComponent data={data} />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Page;
