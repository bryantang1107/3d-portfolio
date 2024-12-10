import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import About2 from "./sections/About2";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <About2 />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
