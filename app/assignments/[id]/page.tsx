"use client";

import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function AssignmentPage({ params }: { params: { id: string } }) {
  const [code, setCode] = useState("");
  
  const assignment = {
    id: params.id,
    title: "Programming Assignment 2",
    description: "Implement a sorting algorithm in Python",
    deadline: "2025-04-10",
    language: "python",
    template: `def bubble_sort(arr):
    # Implement bubble sort algorithm here
    pass

# Test your implementation
test_array = [64, 34, 25, 12, 22, 11, 90]
sorted_array = bubble_sort(test_array)
print(sorted_array)`,
  };

  const handleSubmit = () => {
    toast.success("Assignment submitted successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{assignment.title}</h1>
        <p className="text-muted-foreground">Due: {assignment.deadline}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Assignment Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{assignment.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Code Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <Editor
            height="400px"
            defaultLanguage={assignment.language}
            defaultValue={assignment.template}
            theme="vs-dark"
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              automaticLayout: true,
            }}
          />
          <div className="mt-4 flex justify-end space-x-2">
            <Button variant="outline">Save Draft</Button>
            <Button onClick={handleSubmit}>Submit Assignment</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}