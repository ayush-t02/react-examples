import './App.css';
import {useState} from 'react';

function App() {

  const [name, setname] = useState("art");

  return (
    <>
    <h1>{name}</h1>
    <button onClick={() => setname("ayush")}>Change state</button><br></br><br></br>
    <button onClick={() => setname("art")}>Back to normal</button>
    </>
  );
}

export default App;
