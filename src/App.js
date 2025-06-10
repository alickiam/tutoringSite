import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Experience/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Offer from "./components/Offer/offer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills />
      <Works />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
