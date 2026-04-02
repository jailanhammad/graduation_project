import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';


const RoutingApp = () => {
    return (
        <>
        

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<About />} />

      </Routes>
    </BrowserRouter>
        
        </>
      );
}
 
export default RoutingApp;
