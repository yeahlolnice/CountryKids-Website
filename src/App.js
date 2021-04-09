import './App.css';
import Navbar from"./componets/NavBar";
import About from "./componets/about"
import Gallery from "./componets/gallery"
import Pricing from "./componets/pricing"
import Contact from "./componets/contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Gallery />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
