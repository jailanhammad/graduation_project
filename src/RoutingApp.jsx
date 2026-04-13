import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import Contact from './pages/contact';
import Vehicles from './pages/vehicles';
import Services from "./pages/services";
import Login from './pages/login';
import Error from './pages/error';
import Reviews from './pages/reviews';
import Gallery from "./pages/gallery";

import Interior from "./components/interior";
import Exterior from "./components/exterior";
import Showroom from "./components/showroom";
import Tvshows from "./components/tvshows";
import Installments from "./pages/installments";
import TestDrive from "./pages/testdrive";
import CarDetails from "./pages/cardetails";
import Scroll from "./Scroll";
import Recommended from "./pages/recommended";
import ComingSoon from './pages/comingsoon';


const RoutingApp = () => {

    return (
        <>
        

    <BrowserRouter>
    <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Installments" element={<Installments />} />
        <Route path="/Test-Drive" element={<TestDrive />} />
        <Route path="/View-Details" element={<CarDetails />} />
        <Route path="/View-Details" element={<CarDetails />} />
        <Route path="/Recommended" element={<Recommended />} />
        <Route path="/Coming-Soon" element={<ComingSoon />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Interior" element={<Interior />} />
        <Route path="/Exterior" element={<Exterior />} />
        <Route path="/Showroom" element={<Showroom />} />
        <Route path="/Tv-shows" element={<Tvshows />} />







        <Route path="/*" element={<Error />} />

      </Routes>
    </BrowserRouter>
        
        </>
      );
}
 
export default RoutingApp;
