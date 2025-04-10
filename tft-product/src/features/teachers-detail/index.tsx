import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link} from "@tanstack/react-router";
import { useParams } from "@tanstack/react-router";
  // Parse user list
import { users } from "../teachers-data/data/users";
import { userListSchema } from "../teachers-data/data/schema";
import { ThemeSwitch } from "@/components/theme-switch";
import UsersProvider from "../users/context/users-context";
import { Header } from "@/components/layout/header";

export default function TeacherDetails() {
  const {teacherId}=useParams({from:'/_authenticated/teachers-detail/$teacherId'})
  const userList = userListSchema.parse(users)
  const user=userList.find((teacher)=>teacher.id===teacherId)
  if(!user){
    return <div>No Teacher Found</div>
  }
  return (
  
    <UsersProvider>
      <Header>
        <div className="flex ml-auto items-center space-x-4">
    <ThemeSwitch />
    </div>
    </Header>
    <div
      className="min-h-screen px-6 py-10"
    
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Teacher Details</h1>
        <Separator className="bg-white/20 mb-8" />

        <div className="grid gap-4 text-base">

        <div className="flex justify-between items-center px-4 py-3 rounded-xl border transition hover:bg-gray-100 dark:hover:bg-gray-800
">
            <span className="font-semibold ">Id:</span>
            <span className="font-medium">{user.id}</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 rounded-xl border  transition">
            <span className="font-semibold ">Name:</span>
            <span className="font-medium">{user.firstName}{user.lastName}</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 rounded-xl border transition">
            <span className="font-semibold">Email:</span>
            <span className="font-medium">{user.email}</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 rounded-xl border transition">
            <span className="font-semibold ">Phone Number:</span>
            <span className="font-medium">{user.phoneNumber}</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 rounded-xl border transition">
            <span className="font-semibold ">Teaching Since:</span>
            <span className="font-medium">{user.role}</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 rounded-xl border transition">
            <span className="font-semibold">Status:</span>
            <Badge className="bg-green-600  px-3 py-1 rounded-full text-sm">
              {user.status.toUpperCase()}
            </Badge>
          </div>

          <Link to="/teachers">
            <Button>Go Back</Button>
          </Link>
        </div>
      </div>
    </div>
    </UsersProvider>
  );
}








