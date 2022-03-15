
import './App.css';
import Bottom from './components/Bottom';
import Callactions from './components/Callaction';
import Cart from './components/Cart';
import Cartdata from './components/Cartdata';
import Client from './components/Clients';
import FAQ from './components/FAQ';
import Navbar from './components/Navbar';
import SkillbyVideo from './components/SkillbyVideo';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Price from './pages/Price';
import Servicesdata from './pages/Servicesdata';
import Team from './pages/Team';
import Teamdata from './pages/Teamdata';
import Testimonials from './pages/Testimonials';
import TestimonialsData from './pages/TestimonialsData';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Client />
      <SkillbyVideo />
      <TestimonialsData />
      <Servicesdata />
      <Callactions />
      <Teamdata />
      <Price />
      <FAQ />
      <Contact />
      <Bottom />
    </>

  );
}

export default App;
