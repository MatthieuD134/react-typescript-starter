import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Button from './components/common/Button';

const THEMES = {
  LIGHT: 'theme_light',
  DARK: 'theme_dark',
};

function App() {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  return (
    <div className={`${styles.App} ${theme}`}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Button
          variant='primary'
          onClick={() => (theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT))}
        >
          Change theme
        </Button>
      </header>
    </div>
  );
}

export default App;
