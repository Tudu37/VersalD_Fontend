import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditStudent = () => {

    let {id} = useParams();
    let [student, setStudent] = useState({});
    let navigate = useNavigate();


    function handleChange(e){
        setStudent({
            ...student,[e.target.name]:e.target.value
        })
    }

    async function fetchData() {
        try {
            let response = await axios.get(`http://localhost:3000/students/${id}`)
            console.log(response.data);
            setStudent(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/students/${id}`,student);
            alert("Student have Updated Successfully")
            navigate("/show")
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='p-5'>
            <h1>Edit Student</h1>
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
             <button type='submit' value='Add Student'>Update Student</button>
            </form>
        </div>
  )
}

export default EditStudent