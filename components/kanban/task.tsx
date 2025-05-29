// components/kanban/task.tsx
"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  description: string;
}

interface KanbanTaskProps {
  task: Task;
  locked?: boolean;
  onClick: () => void;
}

export default function KanbanTask({
  task,
  locked = false,
  onClick,
}: KanbanTaskProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task.id });

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
      onClick={locked ? undefined : onClick}
      className={`
        relative border
        ${locked ? "opacity-50 pointer-events-none" : "cursor-grab active:cursor-grabbing"}
      `}
    >
      {/* lock icon */}
      {locked && (
        <Lock size={18} className="absolute top-2 right-2 text-gray-500" />
      )}
      
      <CardContent className="p-4">
        <div className="space-y-2">
          {/* Course badge, uncomment if needed */}
          {/* <div className="flex items-center justify-between">
            <Badge variant="outline">{task.course}</Badge>
          </div> */}

          <p
            className="mt-4 text-sm prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: task.description
                .split(" ")
                .slice(0, 4)
                .join(" ")
                .concat("……"),
            }}
          />

          {/* Due date, uncomment if needed */}
          {/* <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Due {new Date(task.dueDate).toLocaleDateString()}</span>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
