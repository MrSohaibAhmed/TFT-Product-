import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

export interface Comment {
  id: number;
  content: string;
  author: string;
  datePosted: string;
  instructorReplyDate: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">No comments available.</p>
    );
  }

  return (
    <div className="space-y-4">
      <div
        className="flex flex-col w-full gap-4
  sm:flex-row sm:justify-between sm:items-center
  md:justify-between
  lg:justify-between
  xl:justify-between"
      >
        <CardTitle className="text-md font-semibold m-0 p-0">
          Moderated Discussion Board <span>(Closed)</span>
          <span className="font-normal ml-1">(85 QUESTIONS)</span>
        </CardTitle>
        <Button variant="outline" className="mt-3" size="sm">
          Show My Comments
        </Button>
      </div>
      {comments.map((comment, index) => (
        <Card key={index}>
          <CardHeader className="border-b p-4">
            <div className="flex flex-row justify-between items-center w-full">
              <CardTitle className="text-md font-semibold m-0 p-0">
                {comment.id}
              </CardTitle>
              <p className="text-xs ">{comment.author}</p>
            </div>
            <div className="mt-2">
              <p className="text-xs ">Posted {comment.datePosted} ago</p>
            </div>
          </CardHeader>

          <CardContent>
            <p className="mb-3 mt-7 text-sm whitespace-pre-line">
              {comment.content}
            </p>
            <div className=" text-sm p-3 rounded-md">
              <strong>
                Instructor's Reply ({comment.instructorReplyDate} ago):
              </strong>
              <br />
              {comment.content}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommentSection;
