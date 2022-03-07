import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Container from './layout/Container';
import Navbar from './layout/partials/Navbar'
import Footer from './layout/partials/Footer'
import Project from './components/pages/Project';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>


      <Footer />
    </Router>

  );
}

export default App;
