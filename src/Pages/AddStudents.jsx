import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddStudents = () => {

    let navigate = useNavigate();
   let [student,setStudent] = useState({
    name:"",
    email:"",
    course:""
   })

   function handleChange(e) {
    setStudent({...student,[e.target.name]:e.target.value})
   }

   async function handleSubmit(e) {
    e.preventDefault();

    try {
        await axios.post("http://localhost:3000/students",student)
        alert("Student successfully Added!!!!!")
        navigate('/show')
    } catch (error) {
        console.log(error)
    }
   }

    return (
        <div className='p-5'>
            <h1>Add Students</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Enter Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" onChange={handleChange} name='name' value={student.name}/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput1" className="form-label">Enter Email</label>
                <input type="email" className="form-control" id="formGroupExampleInput1" placeholder="Email" onChange={handleChange} name='email' value={student.email}/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Enter Course</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Course" onChange={handleChange} name='course' value={student.course}/>
            </div>
             <button type='submit' value='Add Student'>Add Student</button>
            </form>
        </div>
    )
}

export default AddStudents