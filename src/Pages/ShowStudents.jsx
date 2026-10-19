import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import API from '../service/API';

function ShowStudents() {

    let [students,setStudents] = useState([]);

    async function fetchData() {
        try {
            // let response = await axios.get("http://localhost:3000/students")
            let response = await API.get("/students")
            console.log(response.data);
            setStudents(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function handlePatch(id) {
        
        try {
            // await axios.patch(`http://localhost:3000/students/${id}`,
            await API.patch(`/students/${id}`,
               {course: "Course Update"}
            )
            alert("Course Updated Succesffully")
            fetchData();
            
        } catch (error) {
            console.log(error)
        }

    }

    async function handleDelete(id) {
        
        try {

            let confirmMsg = confirm("Are You Sure ? ")

            if(confirmMsg){
            //    await axios.delete(`http://localhost:3000/students/${id}`,
            await API.delete(`/students/${id}`,
               {course: "Course Update"}
            )
            alert("Course Deleted Succesffully")
            fetchData();
            }

            
            
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
            <h1>Student Data</h1>
            <div className="row justify-content-evenly">
                 {
                    students.length>0 ?
                     students.map((student)=>(
                         <div className="card col-12 col-md-6 col-xl-3 p-5 text-center text-bg-dark">
                    <div className="card-body">
                        <h5 className="card-title">Name: {student.name}</h5>
                        <h4 className="card-title">Email: {student.email}</h4>
                        <h4 className="card-title">Course: {student.course}</h4>
                        
                          <button className='btn btn-success mx-1' onClick={()=>handlePatch(student.id)}>patch</button>
                          <button className='btn btn-danger mx-1'  onClick={()=>handleDelete(student.id)}>Delete</button>


                          <Link to={`/edit/${student.id}`}><button className='btn btn-success mx-1'>Edit</button></Link>
                          <Link to={`/view/${student.id}`}><button className='btn btn-primary mx-1'>View</button></Link>
                    </div>
                </div>
                     ))
                     :
                     (<h1>Student Data Not Found</h1>)
                 }
            </div>
        </div>
  )
}

export default ShowStudents