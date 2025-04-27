import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />
      

    </Routes>
  </Router>
);

export default App;
