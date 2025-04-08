import { createLazyFileRoute } from '@tanstack/react-router'
import Users from '@/features/teachers-data'

export const Route = createLazyFileRoute('/_authenticated/teachers-data/')({
  component: Users,
})