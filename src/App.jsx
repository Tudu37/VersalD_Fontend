import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './Pages/Navbar.jsx';
import Home from './Pages/Home.jsx';
import AddStudents from './Pages/AddStudents.jsx';
import ShowStudents from './Pages/ShowStudents.jsx';
import EditStudent from './Pages/EditStudent.jsx';
import ViewStudent from './Pages/ViewStudent.jsx';


function App() {
  

  return (
    <>
      <BrowserRouter>

         <Navbar/>

         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/add' element={<AddStudents/>}></Route>
            <Route path='/show' element={<ShowStudents/>}></Route>
            <Route path='/edit/:id' element={<EditStudent/>}></Route>
            <Route path='/view/:id' element={<ViewStudent/>}></Route>
         </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
