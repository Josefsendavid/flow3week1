import logo from './logo.svg';
import './App.css';
import StateDemo from './file1';
import fetchAny from './utils';
import { useEffect, useState } from 'react';

const UtilsEx = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch()
  }, []);
  return (
    <div>
      {data}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <StateDemo/>
    </div>
  );
}

export default App;
