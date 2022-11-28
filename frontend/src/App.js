import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages and components
import Navbar from './components/Navbar';
import ViewPrices from './pages/ViewPrices';
//pages and components
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Admin from './pages/admin';
import InstructorSearch from './components/InstructorSearch'
import InstructorHome from "./pages/InstructorHomePage";
import './App.css';
import './index.css'
import Instructor from './pages/Instructor';
import PriceFilter from './pages/PriceFilter'
import CourseForm from './components/CourseForm';
import ForgotPassword from './pages/forgotPassword';
import ResetPassword from './pages/resetPassword';
import ChangePassword from './components/changePassword';
import CorporateTrainee from './pages/CorporateTraineeHomePage';
import IndividualTrainee from './pages/IndividualTraineeHomePage';
import CoursesPage from './pages/CoursesPage';
import DisplayVideo from './components/DisplayVideo';
import Exercise from './pages/Exercise';
import InstructorCourses from './pages/InstructorCourses';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<ViewPrices />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/courses" element={<index />}></Route>
            <Route path="/homePage" element={<Home />}></Route>
            <Route path='/instructor' element={<Instructor />} />
            <Route path='/instructorHomePage' element={<InstructorHome />}></Route>
            <Route path='/corporateTraineeHomePage' element={<CorporateTrainee />}></Route>
            <Route path='/individualTraineeHomePage' element={<IndividualTrainee />}></Route>
            <Route path="/instructorSearch" element={<InstructorSearch />}></Route>
            <Route path="/PriceFilter" element={<PriceFilter />}></Route>
            <Route path='/createCourse' element={<CourseForm />}></Route>
            <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
            <Route path='/resetPassword' element={<ResetPassword />}></Route>
            <Route path='/changePassword' element={<ChangePassword />}></Route>
            <Route path='/course' element={<CoursesPage />}></Route>
            <Route path='/watch' element={<DisplayVideo />}></Route>
            <Route path='/exercise' element={<Exercise />}></Route>

            <Route path='/instructorcourse' element={<InstructorCourses />}></Route>


          </Routes>
        </div>


      </BrowserRouter>
    </div>
  );
}
export default App;
