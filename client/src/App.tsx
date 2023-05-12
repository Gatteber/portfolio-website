import {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [testApiData, setTestApiData] = useState();
  const proxyUrl = '/api/v1';

  useEffect(() => {
    fetch(proxyUrl)
      .then((res) => res.json())
      .then((data) => setTestApiData(data));
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={testApiData} />} />
      </Routes>
    </>
  );
}

export default App;
