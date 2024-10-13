import "./App.css";
import Footer from "./compnents/Footer";
import { Navbar } from "./compnents/Navbar";
import MobileMenu from "./shareComponents/MobileMenu";


function App() {
  return (
    <main className="bg-cyan-300/50">
      <Navbar />
      <Footer/>
      
    </main>
  );
}

export default App;
