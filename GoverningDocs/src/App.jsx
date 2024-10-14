import "./App.css";
import Footer from "./compnents/Footer";
import { Navbar } from "./compnents/Navbar";
import {Hero} from "./compnents/Home/Hero"
import ProblemSloution from "./compnents/Home/ProblemSloution";



function App() {
  return (
    <main className="font-Nunito-sans bg-[url(/img/hero-bg.svg)] bg-no-repeat min-h-svh top-0">
      <Navbar />
      <Hero/>
      <ProblemSloution/>
     
      <Footer/>
      
    </main>
  );
}

export default App;
