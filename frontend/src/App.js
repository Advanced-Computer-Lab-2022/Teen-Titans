import{BrowserRouter, Routes,Route} from 'react-router-dom'
//pages and components
//import Home from './pages/Home'
import Navbar from './components/Navbar';
import ViewCoursesPage from './pages/ViewCoursesPage';
import ViewPrices from './pages/ViewPrices';

//pages and components
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import Search from './components/Search'
import CreateCourse from './pages/CreateCourse';
import CourseForm from './components/CourseForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">       
        <Routes>
          <Route
          path='/'
          element= {<ViewPrices/>}
          />
          <Route path="/" element={<Home />}></Route>
            <Route path="/homePage" element={<HomePage />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path='/createCourse' element={<CourseForm/>}></Route> 
        </Routes>
      </div>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
