import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Gallery from "./pages/Gallery.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Live from "./pages/Live.jsx";
import Updates from "./pages/Updates.jsx";
import UpdateDetail from "./pages/UpdateDetail.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/live" element={<Live />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/:id" element={<UpdateDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
