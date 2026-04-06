import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import Contact from './pages/contact';
import Vehicles from './pages/vehicles';
import Services from "./pages/services";

import Login from './pages/login';
import Error from './pages/error';
import Reviews from './pages/reviews';


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
        <Route path="/Login" element={<Login />} />
        <Route path="/Reviews" element={<Reviews />} />





        <Route path="/*" element={<Error />} />

      </Routes>
    </BrowserRouter>
        
        </>
      );
}
 
export default RoutingApp;
