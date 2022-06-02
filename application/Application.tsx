/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Fragment, useState } from 'react';

import {
  Global,
  ThemeProvider,
  globalStyles,
  createTheme,
} from './design-system';

const PlaceholderCard = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="surface">
      <p>Hello Vite + React!</p>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
    </div>
  );
};

export default function Component() {
  const theme = createTheme();
  const [bpm, setBpm] = useState(120);
  const [volume, setVolume] = useState(120);

  return (
    <Fragment>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="logo"
          >
            <rect x={2} y={2} width={20} height={20} rx="4" />
          </svg>
          <h1
            css={(theme) => ({ color: theme.palette.accent })}
            className="title"
          >
            Euclidean Sequencer
          </h1>
          <div className="controls">
            <label>
              BPM
              <input
                type="number"
                id="bpm"
                name="bpm"
                min={30}
                max={400}
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
              />
            </label>
            <button>Play</button>
            <label>
              Volume
              <input
                type="range"
                id="volume"
                name="volume"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
              />
            </label>
          </div>
          <div className="actions">
            <button>Add sequence</button>
          </div>
        </header>

        <main className="container">
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
        </main>

        <footer>
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </footer>
      </ThemeProvider>
    </Fragment>
  );
}
