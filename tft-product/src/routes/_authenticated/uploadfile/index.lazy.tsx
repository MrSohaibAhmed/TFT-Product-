import AssignmentUploader from '@/features/uploadfile'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/uploadfile/')({
  component: AssignmentUploader,
})