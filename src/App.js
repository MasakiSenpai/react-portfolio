import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import Project from './components/Project';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/react-portfolio' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='/resume' element={<Resume />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
