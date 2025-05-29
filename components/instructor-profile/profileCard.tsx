import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Linkedin, Instagram, TwitterIcon } from "lucide-react";

export default function ProfileCard() {
  return (
    <Card className="flex flex-col dark:bg-white items-center p-6 gap-4 border rounded-xl shadow-lg">
      <img src="" className="w-40 h-40 rounded-full bg-gray-200"/>

      <Button className="w-full bg-black text-white hover:bg-black">
        Send Message
      </Button>

      <div className="flex justify-center gap-7 mt-2">
        <div className="p-2 border border-gray-300 rounded-md">
          <Facebook className="w-6 h-6 dark:text-black cursor-pointer hover:scale-110 transition-transform" />
        </div>
        <div className="p-2 border border-gray-300 rounded-md">
        <Linkedin className="w-6 h-6  dark:text-black cursor-pointer hover:scale-110 transition-transform" />

        </div>
        <div className="p-2 border border-gray-300 rounded-md">
        <Instagram className="w-6 h-6  dark:text-black cursor-pointer hover:scale-110 transition-transform" />
         
      </div>
        <div className="p-2 border border-gray-300 rounded-md">
        <TwitterIcon className="w-6 h-6  dark:text-black cursor-pointer hover:scale-110 transition-transform" />

        </div>

      </div>
    </Card>
  );
}
