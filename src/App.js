import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Switch } from 'react-router';
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
        <Switch>
          <Route path='/react-portfolio' element={<Home />} />
          <Route path='/react-portfolio/portfolio' element={<Portfolio />}/>
          <Route path='/react-portfoliocontact' element={<Contact />}/>
          <Route path='/react-portfolio/resume' element={<Resume />}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
