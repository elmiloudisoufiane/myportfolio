import { Form } from 'lucide-react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Header';
import Home from './components/Home';
import ContactForm from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;