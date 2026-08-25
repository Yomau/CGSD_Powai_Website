import { useEffect, useState, useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SocialSidebar from "./components/SocialSidebar";
import Preloader from "./components/Preloader";
import LogoSpinner from "./components/LogoSpinner";
import Home from "./pages/Home";
import About from "./pages/About";
import TeachingStaff from "./pages/TeachingStaff";
import MissionVision from "./pages/MissionVision";
import Administration from "./pages/Administration";
import Admission from "./pages/Admission";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function ScrollToTopHandler() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

// Shows the spinning-logo overlay briefly on every route change (demo of the reusable spinner)
function RouteLoader() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return; // initial load is handled by the full-screen Preloader
    }
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!loading) return null;
  return (
    <div className="loading-overlay" data-testid="route-loading-overlay">
      <LogoSpinner size={76} label="Loading..." />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Preloader />
      <BrowserRouter>
        <RouteLoader />
        <Header />
        <SocialSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/about-us" element={<About />} />
          <Route path="/about/teaching-staff" element={<TeachingStaff />} />
          <Route path="/about/mission-and-vision" element={<MissionVision />} />
          <Route path="/about/administration" element={<Administration />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/photo-gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
