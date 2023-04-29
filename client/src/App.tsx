import {useState, useEffect} from 'react';

interface testApiData {
  name: 'string';
}

function App() {
  const [testApiData, setTestApiData] = useState<testApiData>();
  const proxyUrl = '/api/v1';

  useEffect(() => {
    fetch(proxyUrl)
      .then((res) => res.json())
      .then((data) => setTestApiData(data));
  }, []);
  return (
    <>
      <div className="text-xl text-red-500">
        Here's the data: {testApiData && testApiData.name}
      </div>
      <div>testing update</div>
    </>
  );
}

export default App;
