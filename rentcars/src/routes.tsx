import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import AboutUs from './pages/aboutus/AboutUs';
/*import Models from './pages/models/Models';          <Route path="/models" element={<Models />} /> */


function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;