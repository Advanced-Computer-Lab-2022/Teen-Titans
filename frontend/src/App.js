import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages and components
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import Search from './components/Search'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
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
