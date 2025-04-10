// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { Link } from "@tanstack/react-router";
// import { useParams } from "@tanstack/react-router";
// import { users } from "../users/data/users";
// import { userListSchema } from "../users/data/schema";
// export default function UserDetailsPage() {
//   const { userId } = useParams({from: "/_authenticated/userDetails/$userId" });
//   const userList = userListSchema.parse(users)
//   const user=users.find((user) => user.id === userId);
// console.log(user?.firstName)
//   return (
//     <div
//       className="min-h-screen px-6 py-10"
//       style={{ backgroundColor: "#020817", color: "white" }}
//     >
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold mb-6 text-white">User Details</h1>
//         <Separator className="bg-white/20 mb-8" />
//         <div className="grid gap-4 text-base">
//           <div className="flex justify-between items-center px-4 py-3 rounded-xl border border-white/10 hover:bg-[#1E293B] transition">
//             <span className="font-semibold text-white/80">Name:</span>
//             <span className="font-medium">{user}</span>
//           </div>
//           <div className="flex justify-between items-center px-4 py-3 rounded-xl border border-white/10 hover:bg-[#1E293B] transition">
//             <span className="font-semibold text-white/80">Email:</span>
//             <span className="font-medium">{user.email}</span>
//           </div>
//           <div className="flex justify-between items-center px-4 py-3 rounded-xl border border-white/10 hover:bg-[#1E293B] transition">
//             <span className="font-semibold text-white/80">Status:</span>
//             <Badge className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
//               {user.status.toUpperCase()}
//             </Badge>
//           </div>
//           <div className="flex justify-between items-center px-4 py-3 rounded-xl border border-white/10 hover:bg-[#1E293B] transition">
//             <span className="font-semibold text-white/80">Phone Number:</span>
//             <span className="font-medium">{user.phone}</span>
//           </div>
//           <div className="flex justify-between items-center px-4 py-3 rounded-xl border border-white/10 hover:bg-[#1E293B] transition">
//             <span className="font-semibold text-white/80">Role:</span>
//             <span className="font-medium">{user.role}</span>
//           </div>
//           <div className="flex justify-between items-center px-4 py-3 rounded-xl border border-white/10 hover:bg-[#1E293B] transition">
//             <span className="font-semibold text-white/80">Joined At:</span>
//             <span className="font-medium">{user.joinedAt}</span>
//           </div>
//           <div className="flex justify-between items-center px-4 py-3 rounded-xl border border-white/10 hover:bg-[#1E293B] transition">
//             <span className="font-semibold text-white/80">Manager:</span>
//             <span className="font-medium">{user.manager}</span>
//           </div>
//           <Link to="/users">
//             <Button>Go Back</Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Link } from '@tanstack/react-router'
import { useParams } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Header } from '@/components/layout/header'
// import { Search } from "@/components/search";
import { ThemeSwitch } from '@/components/theme-switch'
import UsersProvider from '../users/context/users-context'
import { userListSchema } from '../users/data/schema'
import { users } from '../users/data/users'

export default function UserDetailsPage() {
  const { userId } = useParams({ from: '/_authenticated/userDetails/$userId' })

  const userList = userListSchema.parse(users)

  const user = userList.find((user) => user.id === userId)

  if (!user) {
    return <div>User not found</div>
  }

  return (
    <UsersProvider>
      <Header fixed>
        {/* //         <Search /> */}
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          {/* //           <ProfileDropdown /> */}
        </div>
      </Header>

      <div className='min-h-screen px-6 py-10 mt-10'>
        <div className='mx-auto max-w-4xl'>
          <h1 className='mb-6 text-4xl font-bold'>User Details</h1>
          <Separator className='mb-8 bg-white/20' />

          <div className='grid gap-4 text-base'>
            <div className='flex items-center justify-between rounded-xl border px-4 py-3 transition'>
              <span className='font-semibold'>Name:</span>
              <span className='font-medium'>
                {user.firstName} {user.lastName}
              </span>
            </div>

            <div className='flex items-center justify-between rounded-xl border px-4 py-3 transition'>
              <span className='font-semibold'>Email:</span>
              <span className='font-medium'>{user.email}</span>
            </div>

            <div className='borde flex items-center justify-between rounded-xl border px-4 py-3 transition'>
              <span className='font-semibold'>Status:</span>
              <Badge className='rounded-full bg-green-600 px-3 py-1 text-sm'>
                {user.status.toUpperCase()}
              </Badge>
            </div>

            <div className='flex items-center justify-between rounded-xl border px-4 py-3 transition'>
              <span className='font-semibold'>Phone Number:</span>
              <span className='font-medium'>{user.phoneNumber}</span>
            </div>

            <div className='flex items-center justify-between rounded-xl border px-4 py-3 transition'>
              <span className='font-semibold'>Role:</span>
              <span className='font-medium'>{user.role}</span>
            </div>

            {/* <div className="flex justify-between items-center px-4 py-3 rounded-xl border border-white/10 hover:bg-[#1E293B] transition">
            <span className="font-semibold text-white/80">Joined At:</span>
            <span className="font-medium">{user.}</span>
          </div> */}
            {/*
          <div className="flex justify-between items-center px-4 py-3 rounded-xl border border-white/10 hover:bg-[#1E293B] transition">
            <span className="font-semibold text-white/80">Manager:</span>
            <span className="font-medium">{user.}</span>
          </div> */}

            <Link to='/users'>
              <Button>Go Back</Button>
            </Link>
          </div>
        </div>
      </div>
    </UsersProvider>
  )
}
