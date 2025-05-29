import { CheckCircle2, Clock } from "lucide-react";

const assignments = [
  {
    id: 1,
    title: "Research Paper Draft",
    course: "ENG104",
    dueDate: "2025-04-10",
    status: "pending",
  },
  {
    id: 2,
    title: "Problem Set 3",
    course: "MATH202",
    dueDate: "2025-04-12",
    status: "pending",
  },
  {
    id: 3,
    title: "Lab Report",
    course: "PHY303",
    dueDate: "2025-04-15",
    status: "pending",
  },
  {
    id: 4,
    title: "Case Study Analysis",
    course: "CS101",
    dueDate: "2025-04-18",
    status: "pending",
  },
];

export default function UpcomingAssignments() {
  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div
          key={assignment.id}
          className="flex items-center justify-between space-x-4 rounded-md border p-3 transition-all hover:bg-accent"
        >
          <div className="space-y-1">
            <p className="font-medium leading-none">{assignment.title}</p>
            <p className="text-sm text-muted-foreground">
              {assignment.course}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {new Date(assignment.dueDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}