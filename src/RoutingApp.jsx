import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import Contact from './pages/contact';
import Vehicles from './pages/vehicles';
import Services from "./pages/services";


const RoutingApp = () => {
    return (
        <>
        

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/Services" element={<Services />} />

      </Routes>
    </BrowserRouter>
        
        </>
      );
}
 
export default RoutingApp;
