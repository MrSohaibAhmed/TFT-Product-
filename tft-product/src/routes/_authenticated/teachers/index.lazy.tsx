import { createLazyFileRoute } from '@tanstack/react-router'
import Users from '@/features/teachers'

export const Route = createLazyFileRoute('/_authenticated/teachers/')({
  component: Users,
})