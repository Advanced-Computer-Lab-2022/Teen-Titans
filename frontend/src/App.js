import{BrowserRouter, Routes,Route} from 'react-router-dom'
//pages and components
//import Home from './pages/Home'
import Navbar from './components/Navbar';
import ViewCoursesPage from './pages/ViewCoursesPage';
import ViewPrices from './pages/ViewPrices';
import index from './index';


//pages and components
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import Search from './components/Search'

import PriceFilter from './pages/PriceFilter'

import IndividualTraineeHomePage from './pages/IndividualTraineeHomePage';
import CorporateTraineeHomePage from './pages/CorporateTraineeHomePage';
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
          <Route path ="/courses" element={<index />}></Route>
            <Route path="/homePage" element={<HomePage />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/PriceFilter" element={<PriceFilter />}></Route>
            <Route path='/IndividualTraineeHomePage' element={<IndividualTraineeHomePage />}></Route>
            <Route path='/CorporateTraineeHomePage' element={<CorporateTraineeHomePage />}></Route>
        </Routes>
      </div>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
