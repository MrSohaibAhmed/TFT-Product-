'use client'

import CardsComponent from "../components/viewCoursesCards/CardsComponent"

function View_Courses(){
    return (
        <>
        <div className="flex flex-col gap-4  p-4 rounded-lg">
        <CardsComponent/>
        
        </div>
        </>
    )
}
export default View_Courses