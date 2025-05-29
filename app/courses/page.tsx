'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { getMyCourses, getAllCourses, enrollInCourse } from '@/services'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

interface Course {
  id: number
  name: string
  apiName: string
  excerpt: string
  image: string
  overview: string
  overviewVideoUrl: string
  mentors: string[]
  batches: {
    id: number
    name: string
    startDate: string
    endDate: string
  }[]
  mentorName?: string
  progress?: number
}

export default function CoursesPage () {
  const router = useRouter()
  const { toast } = useToast()
  const [allCourses, setAllCourses] = useState<Course[]>([])
  const [activeTab, setActiveTab] = useState('courses')
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    if (activeTab === 'courses') {
      getMyCourses().then(res => setCourses(res.data))
    } else if (activeTab === 'allcourses') {
      getAllCourses().then(res => setAllCourses(res.data))
    }
  }, [activeTab])

  const handleClick = async (course: Course) => {
    localStorage.setItem('courseOverview', JSON.stringify(course.overview))

    if (activeTab === 'courses') {
      router.push(`/view-course/overview?id=${course.id}`)
    } else {
      const batchId = course.batches?.[0]?.id
      if (!batchId) {
        toast({
          title: 'Enrollment Error',
          description: 'No batch available for this course.',
          variant: 'destructive'
        })
        return
      }

      try {
        console.log('Trying to enroll:', course.id, batchId)

        await enrollInCourse(course.id, batchId)
        console.log('Trying to enroll:', course.id, batchId)

        toast({
          title: 'Enrollment Successful',
          description: `You have successfully enrolled in "${course.name}"!`,
          variant: 'default'
        })
      } catch (error: any) {
        toast({
          title: 'Enrollment Failed',
          description: error.message || 'Enrollment failed.',
          variant: 'destructive'
        })
      }
    }
  }

  return (
    <div className='flex flex-col space-y-6'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Courses</h1>
        <p className='text-muted-foreground'>
          View and manage your enrolled courses.
        </p>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={value => setActiveTab(value)}
        className='space-y-4'
      >
        <div className='flex items-center justify-between'>
          <TabsList>
            <TabsTrigger value='courses'>My Courses</TabsTrigger>
            <TabsTrigger value='allcourses'>All Courses</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value='courses' className='space-y-4'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {courses.map(course => (
              <Card key={course.id} className='overflow-hidden hover:shadow-md'>
                <CardHeader className='p-4 pb-2'>
                  <div className='flex justify-between items-start'>
                    <Badge variant='outline'>101</Badge>
                  </div>
                  <CardTitle className='mt-2'>{course.name}</CardTitle>
                  <CardDescription>
                    Mentor: {course.mentorName || 'Mentor'}
                  </CardDescription>
                </CardHeader>
                <CardContent className='p-4 pt-0'>
                  <p className='text-sm mb-4 line-clamp-2'>{course.excerpt}</p>
                  <div className='space-y-1'>
                    <div className='flex justify-between text-sm'>
                      <span>Progress</span>
                      <span>{course.progress ?? course.completionPercentage
}%</span>
                    </div>
                    <Progress value={course.progress ?? course.completionPercentage} max={100} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {/* <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.credits} Credits</span>
                    </div> */}
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      {/* <Users className="h-4 w-4" />
                      <span>{course.students} Students</span> */}
                    </div>
                    <Progress value={course.progress} className='h-2' />
                  </div>
                </CardContent>
                <CardFooter className='p-4 pt-0 flex gap-2'>
                  <Button
                    onClick={() => handleClick(course)}
                    variant='default'
                    size='sm'
                    className='w-full'
                  >
                    View Course
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value='allcourses'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {allCourses.map(course => (
              <Card
                key={course.id}
                className='overflow-hidden hover:shadow-lg shadow'
              >
                <CardHeader className='p-4 pb-2'>
                  <div className='flex justify-between items-start'>
                    <Badge variant='outline'>
                      {course.batches?.[0]?.name || 'Course'}
                    </Badge>
                  </div>
                  <CardTitle className='mt-2'>{course.name}</CardTitle>
                  <CardDescription>
                    Mentor: {course.mentors?.[0] || 'Mentor'}
                  </CardDescription>
                </CardHeader>
                <CardContent className='p-4 pt-0'>
                  <p className='text-sm mb-4 line-clamp-2'>{course.excerpt}</p>
                  <div className='space-y-1'>
                    <div className='flex justify-between text-sm'>
                      <span>Progress</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className='h-2' />
                  </div>
                </CardContent>
                <CardFooter className='p-4 pt-0 flex gap-2'>
                  <Button
                    onClick={() => handleClick(course)}
                    variant='default'
                    size='sm'
                    className='w-full'
                  >
                    Enroll Course
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
