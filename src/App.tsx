import { useState } from 'react';

import Icon from '@mui/material/Icon';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} type="button">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-red-400 text-4xl font-bold underline">
        Hello world!
      </h1>
      <Icon>star</Icon>
    </>
  );
};

export { App };
