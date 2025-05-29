'use client';
import React from 'react';
import { Card } from '../ui/card';

interface TeacherCommentProps {
  comments: string[];
}

const TeacherComment: React.FC<TeacherCommentProps> = ({ comments }) => {
  return (
    <Card className="w-full p-4 flex flex-col justify-center items-center border-none">
      <h2 className="text-lg font-semibold mb-4">Teacher's Comments</h2>

      {/* Comments Container with fixed width */}
      <div className="w-full max-w-4xl space-y-3">
        {comments.map((c, index) => (
          <div
            key={index}
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow-sm"
          >
            {c}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TeacherComment;
