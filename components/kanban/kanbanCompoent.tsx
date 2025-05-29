// components/KanbanComponent.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { getTaskOfModules, updateTask } from "@/services";
import KanbanColumn from "../kanban/column";
import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Task {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: "todo" | "in_progress" | "completed" | "locked";
  description: string;
  submission_url?: string; // Add submission_url to track existing URLs
}

interface Tasks {
  todo: Task[];
  in_progress: Task[];
  completed: Task[];
}

const initialTasks: Tasks = {
  todo: [],
  in_progress: [],
  completed: [],
};

export default function KanbanComponent() {
  const [tasks, setTasks] = useState<Tasks>(initialTasks);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [inputValue, setInputValue] = useState("");

  const params = useSearchParams();
  const courseId = params.get("courseid") ?? "";
  const sprintId = params.get("sprintid") ?? "";
  const topicId = params.get("topicid") ?? "";

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // compute locked task IDs for disabling drag/open
  const lockedTaskIds = tasks.todo
    .filter((t) => t.status === "locked")
    .map((t) => t.id);

  // Fetch tasks and group by status (including "locked" in todo)
useEffect(() => {
  if (!courseId || !sprintId || !topicId) return;
  (async () => {
    try {
      const resp = await getTaskOfModules(courseId, sprintId, topicId);
      // Grab whatever "tasks" is, default to empty object/array
      const rawTasks = Array.isArray(resp)
        ? resp
        : resp.data?.module?.tasks ?? {};

      // If it's already an array, use it; otherwise pull out the values
      const fetched: Task[] = Array.isArray(rawTasks)
        ? rawTasks
        : Object.values(rawTasks);

      setTasks({
        todo: fetched.filter(
          (t) => t.status === "todo" || t.status === "locked"
        ),
        in_progress: fetched.filter((t) => t.status === "in_progress"),
        completed: fetched.filter((t) => t.status === "completed"),
      });
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to load tasks.");
    }
  })();
}, [courseId, sprintId, topicId]);

  const handleDragStart = (event: any) => {
    if (lockedTaskIds.includes(event.active.id)) {
      return;
    }

    // Find the task being dragged
    const draggedTask = Object.values(tasks)
      .flat()
      .find((t) => t.id === event.active.id);

    // Check if task has submission URL when trying to move from todo to in_progress
    if (draggedTask && draggedTask.status === "todo") {
      if (
        !draggedTask.submission_url ||
        draggedTask.submission_url.trim() === ""
      ) {
        toast.error(
          "Submission URL is required before moving task to In Progress"
        );
        return; // Prevent drag from starting
      }
    }

    setActiveId(event.active.id);
  };

  const handleDragEnd = async ({ active, over }: any) => {
    if (lockedTaskIds.includes(active.id)) return;
    setActiveId(null);
    if (!over || active.id === over.id) return;

    const cols = Object.keys(tasks) as (keyof Tasks)[];
    const fromCol = cols.find((col) =>
      tasks[col].some((t) => t.id === active.id)
    )!;
    let toCol = cols.find((col) => tasks[col].some((t) => t.id === over.id));
    if (!toCol && cols.includes(over.id as keyof Tasks)) {
      toCol = over.id as keyof Tasks;
    }
    if (!fromCol || !toCol) return;

    // Find the task being moved
    const movingTask = tasks[fromCol].find((t) => t.id === active.id)!;

    // Additional validation: Check submission URL when moving from todo to in_progress
    if (fromCol === "todo" && toCol === "in_progress") {
      if (
        !movingTask.submission_url ||
        movingTask.submission_url.trim() === ""
      ) {
        toast.error(
          "Submission URL is required before moving task to In Progress"
        );
        return;
      }
    }

    // reorder within same column
    if (fromCol === toCol) {
      const oldIndex = tasks[fromCol].findIndex((t) => t.id === active.id);
      const newIndex = tasks[toCol].findIndex((t) => t.id === over.id);
      if (oldIndex !== newIndex) {
        setTasks((prev) => ({
          ...prev,
          [fromCol]: arrayMove(prev[fromCol], oldIndex, newIndex),
        }));
      }
      return;
    }

    // only allow forward moves
    const valid: Record<keyof Tasks, (keyof Tasks)[]> = {
      todo: ["in_progress"],
      in_progress: ["completed"],
      completed: [],
    };
    if (!valid[fromCol].includes(toCol)) {
      toast.error(`Cannot move from ${fromCol} to ${toCol}`);
      return;
    }

    // update UI
    setTasks((prev) => {
      const copy = { ...prev };
      copy[fromCol] = copy[fromCol].filter((t) => t.id !== active.id);
      copy[toCol!] = [...copy[toCol!], movingTask];
      return copy;
    });

    // persist status change
    try {
      await updateTask({
        task_id: active.id,
        status: toCol,
        submission_url: movingTask.submission_url || "",
      });
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to update status.");
      // Revert the UI change if API call fails
      setTasks((prev) => {
        const copy = { ...prev };
        copy[toCol!] = copy[toCol!].filter((t) => t.id !== active.id);
        copy[fromCol] = [...copy[fromCol], movingTask];
        return copy;
      });
    }
  };

  const handleSubmit = async () => {
    if (!selectedTask || !inputValue.trim()) {
      toast.error("Please enter a submission URL");
      return;
    }

    try {
      // Update the task with submission URL
      await updateTask({
        task_id: selectedTask.id,
        status: selectedTask.status,
        submission_url: inputValue.trim(),
      });

      // Update local state to include the submission URL
      setTasks((prev) => {
        const copy = { ...prev };
        Object.keys(copy).forEach((col) => {
          copy[col as keyof Tasks] = copy[col as keyof Tasks].map((task) =>
            task.id === selectedTask.id
              ? { ...task, submission_url: inputValue.trim() }
              : task
          );
        });
        return copy;
      });

      toast.success("Submission URL saved successfully");
      setSelectedTask(null);
      setInputValue("");
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to save submission URL");
    }
  };

  // Set input value when task is selected
  useEffect(() => {
    if (selectedTask) {
      setInputValue(selectedTask.submission_url || "");
    }
  }, [selectedTask]);

  return (
    <div className="space-y-6">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KanbanColumn
            id="todo"
            title="To Do"
            tasks={tasks.todo}
            lockedTaskIds={lockedTaskIds}
            onTaskClick={(task) => {
              if (task.status !== "locked") setSelectedTask(task);
            }}
          />
          <KanbanColumn
            id="in_progress"
            title="In Progress"
            tasks={tasks.in_progress}
            onTaskClick={setSelectedTask}
          />
          <KanbanColumn
            id="completed"
            title="Completed"
            tasks={tasks.completed}
            onTaskClick={setSelectedTask}
          />
        </div>

        <DragOverlay>
          {activeId && (
            <Card className="w-full shadow-lg">
              <CardContent className="p-4">
                {
                  Object.values(tasks)
                    .flat()
                    .find((t) => t.id === activeId)?.title
                }
              </CardContent>
            </Card>
          )}
        </DragOverlay>
      </DndContext>

      {/* Modal for full description + input */}
      <Dialog
        open={!!selectedTask}
        onOpenChange={(open) => !open && setSelectedTask(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedTask?.title}</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: selectedTask?.description || "",
              }}
            />
          </DialogDescription>
          <DialogFooter className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Paste your relevant PR link here..."
              className="flex-1 border px-2 py-1 rounded"
              required
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
