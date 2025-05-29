import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, FileText, Filter, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const assignments = [
  {
    id: 1,
    title: "Research Paper Draft",
    course: "ENG104",
    courseCode: "ENG104",
    dueDate: "2025-04-10",
    status: "upcoming",
    description:
      "Draft of research paper on a selected literary work (minimum 5 pages)",
    grade: null,
  },
  {
    id: 2,
    title: "Problem Set 3",
    course: "Advanced Calculus",
    courseCode: "MATH202",
    dueDate: "2025-04-12",
    status: "upcoming",
    description:
      "Solve problems related to multivariable calculus (15 problems)",
    grade: null,
  },
  {
    id: 3,
    title: "Lab Report",
    course: "Quantum Physics",
    courseCode: "PHY303",
    dueDate: "2025-04-15",
    status: "upcoming",
    description:
      "Report on the double-slit experiment simulation (include data and analysis)",
    grade: null,
  },
  {
    id: 4,
    title: "Case Study Analysis",
    course: "Introduction to Computer Science",
    courseCode: "CS101",
    dueDate: "2025-04-18",
    status: "upcoming",
    description:
      "Analyze the provided case study on ethical implications of AI",
    grade: null,
  },
  {
    id: 5,
    title: "Programming Assignment 2",
    course: "Introduction to Computer Science",
    courseCode: "CS101",
    dueDate: "2025-03-25",
    status: "completed",
    description: "Implement a sorting algorithm in Python",
    grade: 92,
  },
  {
    id: 6,
    title: "Quiz 3",
    course: "Advanced Calculus",
    courseCode: "MATH202",
    dueDate: "2025-03-28",
    status: "completed",
    description: "Quiz covering partial derivatives and gradient",
    grade: 88,
  },
  {
    id: 7,
    title: "Midterm Exam",
    course: "World History: Modern Era",
    courseCode: "HIS205",
    dueDate: "2025-03-15",
    status: "completed",
    description: "Comprehensive exam covering material from weeks 1-7",
    grade: 85,
  },
  {
    id: 8,
    title: "Project Proposal",
    course: "Digital Media Design",
    courseCode: "ART106",
    dueDate: "2025-03-10",
    status: "completed",
    description:
      "Proposal for final design project including concept and timeline",
    grade: 95,
  },
];

export default function AssignmentsPage() {
  const upcomingAssignments = assignments.filter(
    (a) => a.status === "upcoming"
  );
  const completedAssignments = assignments.filter(
    (a) => a.status === "completed"
  );

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
        <p className="text-muted-foreground">
          Track and manage your course assignments.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search assignments..."
            className="w-full pl-8"
          />
        </div>
        <Button variant="outline" size="sm" className="sm:ml-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          Calendar View
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">
            Upcoming
            <Badge variant="secondary" className="ml-2">
              {upcomingAssignments.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed
            <Badge variant="secondary" className="ml-2">
              {completedAssignments.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {assignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface Assignment {
  id: number;
  title: string;
  course: string;
  courseCode: string;
  dueDate: string;
  status: string;
  description: string;
  grade: number | null;
}

function AssignmentCard({ assignment }: { assignment: Assignment }) {
  const dueDate = new Date(assignment.dueDate);
  const formattedDate = dueDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between">
          <div>
            <Badge variant="outline" className="mb-2">
              {assignment.courseCode}
            </Badge>
            <CardTitle className="text-lg">{assignment.title}</CardTitle>
            <CardDescription>{assignment.course}</CardDescription>
          </div>
          <div className="text-right">
            {assignment.status === "upcoming" ? (
              <Badge className="bg-yellow-500">Upcoming</Badge>
            ) : (
              <Badge className="bg-green-500">Completed</Badge>
            )}
            {assignment.grade !== null && (
              <div className="mt-2 font-semibold text-lg">
                Grade: {assignment.grade}%
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground mb-4">
          {assignment.description}
        </p>
        <Separator className="my-2" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Due: {formattedDate}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              View Details
            </Button>
            {assignment.status === "upcoming" && (
              <Button size="sm">Submit</Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
