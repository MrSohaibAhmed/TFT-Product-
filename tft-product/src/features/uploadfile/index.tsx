import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";

const AssignmentUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [comment, setComment] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!file) {
      alert("Please select a file before uploading!");
      return;
    }

    // Simulate upload
    // console.log("Uploading File:", file);
    // console.log("Comment:", comment);
    alert("Assignment uploaded successfully!");

    // Clear fields
    setFile(null);
    setComment("");
    (document.getElementById("file") as HTMLInputElement).value = "";
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10 shadow-lg border border-muted bg-background">
      <CardHeader className="border-b">
        <CardTitle className="text-xl font-bold">Upload Assignment</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Upload files with additional instructions for your students.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 py-6">
        {/* File Upload Section */}
        <div className="space-y-1">
          <Label
            htmlFor="file"
            className="flex items-center gap-2 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
          >
            <UploadCloud className="w-5 h-5" />
            <span className="underline">Click to select a file</span>
          </Label>
          <Input
            id="file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Preview file info with animation */}
          {file && (
            <div className="flex items-start gap-3 mt-2 border p-3 rounded-md bg-muted/30 animate-in fade-in zoom-in duration-300 relative group">
              {/* <UploadCloud className="w-6 h-6 text-primary mt-1" /> */}
              <i className="fa-solid fa-paperclip text-primary text-lg mt-1" />
              <div className="text-sm space-y-1 pr-6">
                <p className="font-semibold text-foreground break-all">
                  {file.name}
                </p>
                <p className="text-muted-foreground text-xs">
                  Size:{" "}
                  {file.size > 1024 * 1024
                    ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
                    : `${(file.size / 1024).toFixed(2)} KB`}{" "}
                  | Type: {file.type || "Unknown"}
                </p>
              </div>
              <button
                onClick={() => {
                  setFile(null);
                  (document.getElementById("file") as HTMLInputElement).value =
                    "";
                }}
                className="absolute top-2 right-2 text-muted-foreground hover:text-destructive transition-colors"
                aria-label="Remove file"
              >
                ❌
              </button>
            </div>
          )}
        </div>

        {/* Comment Section */}
        <div className="space-y-2">
          <Label htmlFor="comment" className="text-sm font-medium">
            Teacher’s Comments
          </Label>
          <Textarea
            id="comment"
            placeholder="E.g. Solve Q1 to Q5 and submit before Friday..."
            className="resize-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            className="w-full sm:w-auto"
            size="lg"
            onClick={handleSubmit}
          >
            Upload Assignment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssignmentUploader;
