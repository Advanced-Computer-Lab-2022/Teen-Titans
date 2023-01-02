import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages and components
import Navbar from './components/Navbar';
import ViewPrices from './pages/ViewPrices';
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Admin from './pages/admin';
import InstructorSearch from './components/InstructorSearch'
import InstructorHome from "./pages/InstructorHomePage";
import './App.css';
import './index.css'
import Instructor from './components/InstructorViewCourses';
import PriceFilter from './pages/PriceFilter'
import CourseForm from './components/CourseForm';
import ForgotPassword from './pages/forgotPassword';
import ResetPassword from './pages/resetPassword';
import ChangePassword from './components/changePassword';
import CorporateTrainee from './pages/CorporateTraineeHomePage';
import IndividualTrainee from './pages/IndividualTraineeHomePage';
import CoursesPage from './pages/CoursesPage';
import DisplayVideo from './components/DisplayVideo';
import DisplayPreviewVideo from './components/DisplayPreviewVideo';
import Exercise from './pages/Exercise';
import InstructorCourses from './pages/InstructorCourses';
import DefinePromotion from './components/InstructorDefinePromotion';
import ExamForm from './components/CreateExam';
import CourseExamForm from './components/CreateCourseExam';
import ViewInstructorRating from './components/ViewInstructorRating';
import CourseSettings from './pages/CourseSettings';
import RegisterPage from './pages/RegisterPage';
import Copyrights from './components/Copyrights';
import CreditCardForm from './components/CreditCard';
import AdminDiscount from './components/AdminDiscount';
import PaymentMethod from './components/PaymentMethod';
import Login from './components/Login';
import Requests from './pages/Requests';
import Refunds from './pages/Refunds';
import Reports from './pages/Reports';
import InstructorCoursesPage from './pages/InstructorCoursesPage';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path='/homePage' element={<ViewPrices />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/courses" element={<index />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path='/instructorHomePage' element={<Instructor />} />
            {/* <Route path='/instructor' element={<InstructorHome />}></Route> */}
            <Route path='/corporateTraineeHomePage' element={<CorporateTrainee />}></Route>
            <Route path='/individualTraineeHomePage' element={<IndividualTrainee />}></Route>
            <Route path="/instructorSearch" element={<InstructorSearch />}></Route>
            <Route path="/PriceFilter" element={<PriceFilter />}></Route>
            <Route path='/createCourse' element={<CourseForm />}></Route>
            <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
            <Route path='/resetPassword' element={<ResetPassword />}></Route>
            <Route path='/changePassword' element={<ChangePassword />}></Route>
            <Route path='/course' element={<CoursesPage />}></Route>
            <Route path='/Icourse' element={<InstructorCoursesPage />}></Route>
            <Route path='/watch' element={<DisplayVideo />}></Route>
            <Route path='/watchVideo' element={<DisplayPreviewVideo />}></Route>
            <Route path='/country' element={<Home />}></Route>
            <Route path='/exercise' element={<Exercise />}></Route>
            <Route path='/instructorcourse' element={<InstructorCourses />}></Route>
            <Route path='/discount' element={<DefinePromotion />}></Route>
            <Route path='/createExam' element={<ExamForm />}></Route>
            <Route path='/createCourseExam' element={<CourseExamForm />}></Route>
            <Route path='/viewInstructorRating' element={<ViewInstructorRating />}></Route>
            <Route path='/courseSettings' element={<CourseSettings />}></Route>
            <Route path='/RegisterPage' element={<RegisterPage />}></Route>
            <Route path='/CopyrightsPage' element={<Copyrights />}></Route>
            <Route path='/viewCoursesForDiscount' element={<AdminDiscount />}></Route>
            <Route path='/paymentMethod' element={<PaymentMethod />}></Route>
            <Route path='/pay' element={<CreditCardForm />}></Route>
            <Route path='/requests' element={<Requests />}></Route>
            <Route path='/refunds' element={<Refunds />}></Route>
            <Route path='/reports' element={<Reports />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
