import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState(new Date())

  function tick() {
    setDate(new Date())
  }
  setInterval(() => tick(), 1000)

  return (
    <div className="App py-5 text-black">
      <h1>Realtime CLOCK</h1>
      <hr/>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
