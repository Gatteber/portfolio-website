import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import HorizontalBreak from './components/HorizontalBreak';

function App() {
  const [projectList, setProjectList] = useState();
  const projectProxyUrl = '/api/project_list';

  useEffect(() => {
    fetch(projectProxyUrl)
      .then((res) => res.json())
      .then((data) => setProjectList(data));
  }, []);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-700 transition duration-250">
      <Navbar />
      <Home />
      <HorizontalBreak width={'w-32'} />
      <Projects projectList={projectList} />
      <HorizontalBreak width={'w-32'} />
      <About />
      <HorizontalBreak width={'w-32'} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
