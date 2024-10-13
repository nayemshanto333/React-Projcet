import "./App.css";
import Footer from "./compnents/Footer";
import { Navbar } from "./compnents/Navbar";
import MobileMenu from "./shareComponents/MobileMenu";


function App() {
  return (
    <main className="">
      <Navbar />
      <div className="min-h-[50svh]"></div>
      <Footer/>
      
    </main>
  );
}

export default App;
