//Professional Order of importing followed
// 1. Third-party modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 2. Styles
import './App.css';
// 3. Static assets
//import Photo from './Photo.jpg';
// 4. Local components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
