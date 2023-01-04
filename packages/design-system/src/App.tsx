import { useState } from 'react';
import { Box } from './components/Box/Box';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { sprinkles } from './theme/sprinkles.css';
import { themeClass } from './theme/theme.css';

function App() {
  const [count, setCount] = useState(0);

  console.log('sprinkles boxShadow', sprinkles({ boxShadow: 'sm' }));
  console.log('sprinkles color', sprinkles({ color: 'deepGreen600' }));

  return (
    <div className={themeClass}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>I can try components quickly here!
      <Button></Button>
      <Card />
      <Card type="neutral" />
      <Card type="highlight" />
      <Card
        onClick={() => {
          console.log('hello');
        }}
      />
      <Box display="flex" color="white" background="green600">
        Hello box!
      </Box>
    </div>
  );
}

export default App;
