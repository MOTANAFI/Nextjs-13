'use client'
import {useState, useEffect} from 'react'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'
import LoadingPage from './loading'

const HomePage =  () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    }
    fetchCourse()
  },[])
  if(loading) {
    return <LoadingPage />
  }
  return (
    <div>
      <h1>Welcome to nextjs 13</h1>
      <CourseSearch getSearchResults={(result => setCourses(result))}/>
      <Courses courses={courses}/>
    </div>
  )
}

export default HomePage