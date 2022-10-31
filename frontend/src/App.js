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
import Instructor from './pages/Instructor';
import PriceFilter from './pages/PriceFilter'

import CreateCourse from './pages/CreateCourse';
import CourseForm from './components/CourseForm';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<ViewPrices />}
            />
            <Route path="/" element={<Home />}></Route>
            <Route path="/homePage" element={<HomePage />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </div>


      </BrowserRouter>
    </div>
  );
}
export default App;
