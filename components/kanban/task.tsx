// task.tsx
"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface Task {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  description: string;
}

interface KanbanTaskProps {
  task: Task;
  onClick: () => void;
}

export default function KanbanTask({ task, onClick }: KanbanTaskProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab active:cursor-grabbing border"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="space-y-2">
          {/* <div className="flex items-center justify-between">
            <Badge variant="outline">{task.course}</Badge>
          </div> */}
<p
              className="mt-4 text-sm prose max-w-none"
              dangerouslySetInnerHTML={{ __html: task.description.split(" ").slice(0,4).join(' ').concat('......')  }}
            ></p>
                      {/* <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Due {new Date(task.dueDate).toLocaleDateString()}</span>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
