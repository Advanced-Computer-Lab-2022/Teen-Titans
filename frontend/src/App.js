import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages and components
import Navbar from './components/Navbar';
import ViewPrices from './pages/ViewPrices';

//pages and components
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Admin from './pages/admin';
import InstructorSearch from './components/InstructorSearch'

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
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/homePage" element={<Home />}></Route>
            <Route path="/instructorSearch" element={<InstructorSearch />}></Route>
          </Routes>
        </div>


      </BrowserRouter>
    </div>
  );
}
export default App;
