import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ContactoForm from "./components/ContactoForm";
import Trabajo from "./components/Trabajo";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escribenos" element={<ContactoForm />} />
        <Route path="/trabajo" element={<Trabajo />} />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
