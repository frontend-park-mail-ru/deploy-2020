import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/')
      .then((response) => response.text())
      .then((text) => setData(text));
  }, []);

  return (
    <div className="app">
      <div className="panel">
        <b>Цена:</b>
        <br />
        {data || 'loading...'}
      </div>
    </div>
  );
}

export default App;
