// import { createLazyFileRoute } from '@tanstack/react-router'

// export const Route = createLazyFileRoute('/_authenticated/students/')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/_authenticated/students/"!</div>
// }


import { createLazyFileRoute } from '@tanstack/react-router'
import Users from '@/features/students'

export const Route = createLazyFileRoute('/_authenticated/students/')({
  component: Users,
})
