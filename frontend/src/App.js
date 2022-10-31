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
            <Route path="/instructorSearch" element={<InstructorSearch />}></Route>
            <Route path="/PriceFilter" element={<PriceFilter />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
