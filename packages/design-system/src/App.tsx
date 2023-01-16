import { useState } from 'react';
import { Box } from './components/Box/Box';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Typography } from './components/Typography';
import { sprinkles } from './theme/sprinkles.css';
import { themeClass } from './theme/theme.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/800.css';
import './app.css';

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
      <Typography variant="h2">Hi I'm a h2</Typography>
      <Typography variant="h3">Hi I'm a h3</Typography>
      <Typography variant="description">Hi I'm a description</Typography>
      <Typography variant="caption">Hi I'm a caption</Typography>
      <Typography variant="bodyM">Hi I'm a bodyM</Typography>
      <Typography variant="bodyL">Hi I'm a bodyL</Typography>
    </div>
  );
}

export default App;
