import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CommentSection, { Comment } from "./commentSection";
import Link from "next/link";
import { Download } from "lucide-react";

interface LectureCardProps {
  title: string;
  content: string;
  datePosted: string;
  comments?: Comment[];
  data: {
    material: string; // HTML content
  };
}

export const LectureCard = ({
  title,
  content,
  datePosted,
  comments = [],
  data,
}: LectureCardProps) => {
  return (
    <div className="space-y-4">
      <Card className="border">
        <CardHeader>
          {/* <CardTitle className="text-xl font-semibold">{title}</CardTitle> */}
        </CardHeader>
        <CardContent>
          {/* <p className="text-sm text-muted-foreground">{content}</p> */}

          {/* 🔽 Insert HTML content */}
          {data.material && (
            <div
              className="mt-4 text-sm prose max-w-none"
              dangerouslySetInnerHTML={{ __html: data.material }}
            />
          )}

          <div className="text-xs flex justify-between text-right mt-6">
            <Link href={"#"}>
              <Download size={20} />
            </Link>
            <p>Posted {datePosted} ago</p>
          </div>
        </CardContent>
      </Card>

      {/* Render comments dynamically */}
      {/* <CommentSection comments={comments} /> */}
    </div>
  );
};
