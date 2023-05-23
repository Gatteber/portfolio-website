import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import HorizontalBreak from './components/HorizontalBreak';

function App() {
  const [testApiData, setTestApiData] = useState();
  const proxyUrl = '/api/v1';

  useEffect(() => {
    fetch(proxyUrl)
      .then((res) => res.json())
      .then((data) => setTestApiData(data));
  }, []);
  return (
    <div className="bg-zinc-100 dark:bg-zinc-700 transition duration-250">
      <Navbar />
      <Home data={testApiData} />
      <HorizontalBreak />
      <Projects />
      <HorizontalBreak />
      <About />
      <HorizontalBreak />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
