import { createFileRoute } from '@tanstack/react-router'
// import Users from '@/features/teachers-detail'
import TeacherDetails from '@/features/teachers-detail'
export const Route = createFileRoute('/_authenticated/teachers-detail/$teacherId')({
  component: TeacherDetails,
})