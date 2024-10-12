import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Filters from './components/filters';
import TrandingCard from './components/TrandingCard';
import BestSelling from './components/BestSelling';
import Reviews from './components/Reviews';
import FindVehicels from './components/FindVehicles';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Filters/>
      <TrandingCard/>
      <BestSelling/>
      <Reviews/>
      <FindVehicels/>
      <Footer/>
    </>
  )
}

export default App
