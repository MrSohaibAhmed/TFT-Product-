// app/services.ts
import axiosWithAuth from "@/app/axiosConfig";

// LOGIN
export async function loginUser(credentials: {
  email: string;
  password: string;
}) {
  try {
    const response = await axiosWithAuth.post("/auth/login", credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed.");
  }
}

// REGISTER
export async function registerUser(user: {
  email: string;
  password: string;
  username: string;
}) {
  try {
    const response = await axiosWithAuth.post("/auth/register", user);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed.");
  }
}

// GET ALL COURSES
export async function getAllCourses() {
  try {
    const response = await axiosWithAuth.get("/course");
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch courses."
    );
  }
}

// GET REGISTERED COURSES
export async function getMyCourses() {
  try {
    const response = await axiosWithAuth.get("/course/registered");
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch registered courses."
    );
  }
}

// GET SPRINTS OF A COURSE
export async function getSprintsOfCourse(course_id: string) {
  try {
    const response = await axiosWithAuth.get(`/course/sprints/${course_id}`, {
      params: { course_id },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch sprints."
    );
  }
}

// GET MODULES OF A SPRINT
export async function getModulesOfSprint(courseId: string, sprintId: string) {
  try {
    const response = await axiosWithAuth.get(
      `/course/sprints/module/${courseId}/${sprintId}`,
      {
        params: {
          course_id: courseId,
          sprint_id: sprintId,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch modules."
    );
  }
}

// GET TASKS OF A MODULE
export async function getTaskOfModules(
  courseId: string,
  sprintId: string,
  moduleId: string
) {
  try {
    const response = await axiosWithAuth.get(
      `/course/sprints/module/tasks/${courseId}/${sprintId}/${moduleId}?course_id=${courseId}&sprint_id=${sprintId}&module_id=${moduleId}`
    );
    //console.log(response.data);

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch tasks.");
  }
}

// UPDATE TASK STATUS
export async function updateTask(payload: { task_id: string; status: string; submission_url: string }) {
  try {
    console.log(payload.submission_url);

    const response = await axiosWithAuth.patch("/task/update-status", payload);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update task.");
  }
}

// GET USER PROFILE
export async function getProfile() {
  try {
    const response = await axiosWithAuth.get("/user/profile");
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch profile."
    );
  }
}

export async function enrollInCourse(courseId: number, batchId: number) {
  try {
    const response = await axiosWithAuth.post("/course/register", {
      course_id: courseId,
      batch_id: batchId,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to enroll in course."
    );
  }
}
