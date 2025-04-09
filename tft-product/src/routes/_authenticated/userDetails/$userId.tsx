import UserDetails from '@/features/userDetails'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/userDetails/$userId')({
 component: UserDetails,
})

