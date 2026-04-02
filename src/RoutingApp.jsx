import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import Contact from './pages/contact';


const RoutingApp = () => {
    return (
        <>
        

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Contact-us" element={<Contact />} />

      </Routes>
    </BrowserRouter>
        
        </>
      );
}
 
export default RoutingApp;
