import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages and components
//import Home from './pages/Home'
import Navbar from './components/Navbar';
import ViewCoursesPage from './pages/ViewCoursesPage';
import ViewPrices from './pages/ViewPrices';

//pages and components
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Admin from './pages/admin';
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
            <Route path="/homePage" element={<Home />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>
        </div>


      </BrowserRouter>
    </div>
  );
}

export default App;
