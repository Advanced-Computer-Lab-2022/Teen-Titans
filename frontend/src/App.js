import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages and components
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/homePage" element={<HomePage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
