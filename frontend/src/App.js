import{BrowserRouter, Routes,Route} from 'react-router-dom'
//pages and components
//import Home from './pages/Home'
import Navbar from './components/Navbar';
import ViewCoursesPage from './pages/ViewCoursesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">       
        <Routes>
          <Route
          path='/'
          element= {<ViewCoursesPage/>}
          />
        </Routes>
      </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
