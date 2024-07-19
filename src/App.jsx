import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Programs from "./Components/Programs";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Gallery />
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
