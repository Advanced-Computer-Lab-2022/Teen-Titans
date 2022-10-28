import{BrowserRouter, Routes,Route} from 'react-router-dom'
//pages and components
//import Home from './pages/Home'
import Navbar from './components/Navbar';
import ViewCoursesPage from './pages/ViewCoursesPage';
import ViewPrices from './pages/ViewPrices';

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
        </Routes>
      </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
