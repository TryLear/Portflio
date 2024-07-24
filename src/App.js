import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar";
import Services from "./component/Service/Services";
import Work from "./component/Work/Work";


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
    
  );
}

export default App;
