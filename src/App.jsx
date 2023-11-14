import "./App.css";
import { useEffect } from "react";
import Aos from "aos";

import Home from './components/Home'
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <>
    <Nav />
    <Home />
    <Services />
    <Contact />
    </>
  );
}

export default App;
