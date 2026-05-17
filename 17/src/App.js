import { useState } from 'react';
import Nav from './component/Nav';
import Footer from './component/footer';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Nav />

      <div className="value">{value}</div>

      <button onClick={() => setValue(value + 1)}>
        +
      </button>

      <button onClick={() => setValue(value - 1)}>
        -
      </button>

      <Footer />
    </div>
  );
}

export default App;