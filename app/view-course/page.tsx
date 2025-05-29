"use client";

import AccordionComponent from "@/components/view-course/AccordionComponent";
import SprintSidebar from "@/components/view-course/SprintSidebar";
import { getModulesOfSprint, getSprintsOfCourse } from "@/services";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [sprints, setSprints] = React.useState([]);
  const [modules, setModules] = React.useState([]);
  const [selectedSprint, setSelectedSprint] = React.useState(null);
  const [selectedModule, setSelectedModule] = React.useState(null);


  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response = await getSprintsOfCourse(id);
        console.log("Response Data",response.data);
        setSprints(response.data.sprints);
        console.log("Sprints",sprints);
        setSelectedSprint(response.data[0]?.id); // Set the first sprint as selected by default
      }
    };

    fetchData();
  }, [id]);






  const fetchModules = async (sprintId) => {
    localStorage.setItem("sprintId", sprintId);
    const response = await getModulesOfSprint(id, sprintId);
    console.log("Module data",response.data);
    setSelectedModule(response.data)
    setModules(response.data.modules);
  };
  useEffect(() => {
    if (selectedSprint) {
      fetchModules(selectedSprint);
    }
  }, [selectedSprint]);

  return (
    <div className="flex sm:space-x-5 space-x-2 -ml-4 sm:-ml-0">
      <SprintSidebar
        sprints={sprints}
        selectedSprint={selectedSprint}
        setSelectedSprint={setSelectedSprint}
      />
      <AccordionComponent modules={modules} selectedSprint={selectedSprint} />
    </div>
  );
}

export default Page;
