
import './App.css';
import About from './components/About';
import Backtop from './components/Backtop';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import RoadMap from './components/RoadMap';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
document.body.classList.add("overflow-hidden")
function App() {
  const [preloder, setpreloder] = useState(true)
  setTimeout(() => {
    setpreloder(false)
    document.body.classList.remove("overflow-hidden")

  }, 4000);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="App overflow-x-clip">
      {preloder && <Loader />}
      <Header />
      <About />
      <Tokenomics />
      <Utility />
      <RoadMap />
      <Faq />
      <Footer />
      <Backtop />
    </div>
  );
}

export default App;
