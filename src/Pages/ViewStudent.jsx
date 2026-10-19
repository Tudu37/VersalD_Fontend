import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

const ViewStudent = () => {

    let {id} = useParams();
    let [student,setStudent]  = useState({});

    async function fetchData() {
        try {
            let response = await axios.get(`http://localhost:3000/students/${id}`)
            console.log(response.data);
            setStudent(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function handlePatch(id) {
        
        try {
            await axios.patch(`http://localhost:3000/students/${id}`,
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
               await axios.delete(`http://localhost:3000/students/${id}`,
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
        <h1>View Student</h1>
        <div className="card col-12 col-md-6 col-xl-3 p-5 text-center text-bg-dark mx-auto">
                    <div className="card-body">
                        <h5 className="card-title">Name: {student.name}</h5>
                        <h4 className="card-title">Email: {student.email}</h4>
                        <h4 className="card-title">Course: {student.course}</h4>
                        
                          <button className='btn btn-success mx-1' onClick={()=>handlePatch(student.id)}>patch</button>
                          <button className='btn btn-danger mx-1'  onClick={()=>handleDelete(student.id)}>Delete</button>


                          <Link to={`/edit/${student.id}`}><button className='btn btn-success mx-1'>Edit</button></Link>
                          <Link to='/show'><button className='btn btn-primary mx-1'>Back Student List</button></Link>
                    </div>
                </div>
    </div>
  )
}

export default ViewStudent