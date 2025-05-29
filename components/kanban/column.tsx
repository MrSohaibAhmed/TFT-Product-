import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import KanbanTask from "./task";

interface Task {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  description: string;
  status: "todo" | "in_progress" | "completed" | "locked";
}

interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

export default function KanbanColumn({
  id,
  title,
  tasks,
  onTaskClick,
}: KanbanColumnProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <Card className="border">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <span className="text-sm bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full">
            {tasks.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={setNodeRef} className="space-y-3 min-h-[300px]">
          <SortableContext
            items={tasks.map((t) => t.id)}
            strategy={verticalListSortingStrategy}
          >
            {tasks.map((task) => {
              const locked = task.status === "locked";
              return (
                <KanbanTask
                  key={task.id}
                  task={task}
                  locked={locked}
                  onClick={() => !locked && onTaskClick(task)}
                />
              );
            })}
          </SortableContext>
        </div>
      </CardContent>
    </Card>
  );
}

 