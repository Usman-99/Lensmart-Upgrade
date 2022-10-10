import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Webimg from "./components/Webimg";
import About from './components/About';
import Team from './components/Team';
import Eyeglasses from './components/Eyeglasses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Account from "./components/Account";
import Products from "./components/Products"
function App() {
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Webimg />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Eyeglasses" element={<Eyeglasses />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/Account" element={<Account/>}/>
        <Route path='/Products' element={<Products/>}/>
      </Routes>
      <Footer className="mt-5"/>
    </Router>
    </>
  );
}

export default App;
