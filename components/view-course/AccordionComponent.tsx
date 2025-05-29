import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Tabs as TabsRoot,
} from "../ui/tabs";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const pfTopics = [
  {
    id: "item-1",
    title: "1. Introduction to PF",
    content:
      "Learn what programming is, why it’s important, and how computers understand instructions.",
    status: "remaining",
  },
  {
    id: "item-2",
    title: "2. Variables and Data Types",
    content:
      "Understand how to store data using variables and explore different data types like int, float, and string.",
    status: "completed",
  },
  {
    id: "item-3",
    title: "3. Operators",
    content:
      "Learn about arithmetic, comparison, logical, and assignment operators used in programming.",
    status: "completed",
  },
  {
    id: "item-4",
    title: "4. Conditional Statements",
    content:
      "Use if, else if, and else statements to make decisions in your code.",
    status: "completed",
  },
  {
    id: "item-5",
    title: "5. Loops",
    content: "Repeat tasks efficiently using for loops and while loops.",
    status: "completed",
  },
  {
    id: "item-6",
    title: "6. Functions",
    content:
      "Organize code into reusable blocks using functions with parameters and return values.",
    status: "remaining",
  },
  {
    id: "item-7",
    title: "7. Arrays and Lists",
    content: "Store and manage multiple values using arrays or lists.",
    status: "remaining",
  },
  {
    id: "item-8",
    title: "8. Input and Output",
    content:
      "Learn how to take input from users and display output on the screen.",
    status: "locked", // 👈 Locked topic example
  },
  {
    id: "item-9",
    title: "9. Debugging and Error Handling",
    content:
      "Understand common programming errors and how to fix them effectively.",
    status: "remaining",
  },
  {
    id: "item-10",
    title: "10. Introduction to OOP",
    content:
      "Get a basic idea of OOP concepts like classes, objects, and inheritance.",
    status: "remaining",
  },
  {
    id: "item-11",
    title: "11. Basics of OOP",
    content:
      "Get a basic idea of OOP concepts like classes, objects, and inheritance.",
    status: "remaining",
  },
];

const AccordionSection = ({ data }) => {
  const router = useRouter();

  const handleStart = (topic) => {
    localStorage.setItem("moduleId", topic.id);
    localStorage.setItem("selectedTopic", JSON.stringify(topic));
    router.push(
      `video-lecture?courseid=${localStorage.getItem(
        "courseId"
      )}&sprintid=${localStorage.getItem(
        "sprintId"
      )}&topicid=${localStorage.getItem("moduleId")}`
    );
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((topic) => {
        const isLocked = topic.status === "locked";

        return (
          <AccordionItem
            key={topic.id}
            value={isLocked ? "" : topic.id} // Disable opening for locked
            className={isLocked ? "opacity-50 pointer-events-none" : ""}
          >
            <AccordionTrigger
              className={isLocked ? "cursor-not-allowed opacity-50" : ""}
            >
              <div className="flex justify-between items-center w-full sm:flex-nowrap">
                <span className="text-sm sm:text-base block w-full sm:w-auto text-left">
                  {topic.title}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    topic.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : topic.status === "locked"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {topic.status}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="flex flex-col text-center items-center justify-between w-full space-y-3">
                <p className="text-sm sm:text-base">{topic.content}</p>

                {topic.description && (
                  <p className="text-xs sm:text-sm">{topic.description}</p>
                )}

                <Button
                  onClick={() => handleStart(topic)}
                  className="text-xs mt-4 sm:text-sm self-end sm:self-auto"
                  disabled={isLocked} // 👈 Disable button if locked
                >
                  {isLocked ? "Locked" : "Start"}
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

const AccordionComponent = ({ modules, selectedSprint }) => {
  return (
    <div className="w-full h-[88vh]">
      <TabsRoot defaultValue="all">
        <TabsList className="grid grid-cols-3 w-full mb-3 py-1">
          <TabsTrigger value="all" className="text-xs sm:text-sm">
            All
          </TabsTrigger>
          <TabsTrigger value="remaining" className="text-xs sm:text-sm">
            Remaining
          </TabsTrigger>
          <TabsTrigger value="completed" className="text-xs sm:text-sm">
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="border rounded-md p-4 h-[82vh] overflow-y-auto">
            <AccordionSection data={modules} />
          </div>
        </TabsContent>

        <TabsContent value="remaining">
          <div className="border rounded-md p-4 h-[82vh] overflow-y-auto">
            <AccordionSection
              data={modules.filter((m) => m.status === "remaining")}
            />
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="border rounded-md p-4 h-[82vh] overflow-y-auto">
            <AccordionSection
              data={modules.filter((m) => m.status === "completed")}
            />
          </div>
        </TabsContent>
      </TabsRoot>
    </div>
  );
};

export default AccordionComponent;
