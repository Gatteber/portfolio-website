import {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      <Routes>
        <Route path="/" element={<Home data={testApiData} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
