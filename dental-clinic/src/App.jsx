import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import About from "./pages/About";
import AboutDoctor from "./pages/AboutUs/AboutDoctor";
import AboutClinic from "./pages/AboutUs/AboutClinic"; 
import Aligners from "./pages/Services/aligners";
import Braces from "./pages/Services/braces";
import Checkup from "./pages/Services/checkup";
import crowns from "./pages/Services/crowns";
import Implants from "./pages/Services/implants";
import Kidsdentistry from "./pages/Services/kids-dentistry";
import RootCanal from "./pages/Services/root-canal";
import Crowns from "./pages/Services/crowns";

function App() {
  return (
    <BrowserRouter>

    <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/about-doctor" element={<AboutDoctor />} />
        <Route path="/about-clinic" element={<AboutClinic />} />
        <Route path="/aligners" element={<Aligners/>} />
        <Route path="/crowns" element={<Crowns/>} />
        <Route path="/checkup" element={<Checkup/>} />
        <Route path="/implants" element={<Implants/>} />
        <Route path="/braces" element={<Braces/>} />
        <Route path="/root-canal" element={<RootCanal/>} />
        <Route path="/kids-dentistry" element={<Kidsdentistry/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;