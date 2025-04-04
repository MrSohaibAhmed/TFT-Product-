'use client'
import SignUp from "@/components/signup/signup";
import { Card } from "@/components/ui/card";

function page() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Card className="p-6 w-96 shadow-lg rounded-lg bg-white">
        <h1 className="text-3xl font-bold text-center mb-4">SignUp</h1>
        <SignUp/>
      </Card>
    </div>
  );
}

export default page;
