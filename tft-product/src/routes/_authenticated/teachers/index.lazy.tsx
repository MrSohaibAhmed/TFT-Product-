import Users from '@/features/teachers-data'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/teachers/')({
  component: Users,
})