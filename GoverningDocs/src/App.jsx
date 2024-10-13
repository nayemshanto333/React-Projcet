import "./App.css";
import Footer from "./compnents/Footer";
import {Hero} from "./compnents/Home/Hero";
import { Navbar } from "./compnents/Navbar";



function App() {
  return (
    <main className="font-Nunito-sans bg-[url(/img/hero-bg.svg)] bg-no-repeat min-h-svh top-0">
      <Navbar />
      <Hero/>
     
      <Footer/>
      
    </main>
  );
}

export default App;
