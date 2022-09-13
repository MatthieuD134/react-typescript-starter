import React, { useState } from 'react';
import styles from './App.module.scss';
import Button from './components/common/Button/Button';

const THEMES = {
  LIGHT: 'theme_light',
  DARK: 'theme_dark',
};

function App() {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  const handleChangeTheme = (theme: string) => {
    document.body.className = theme;
    setTheme(theme);
  };
  return (
    <div className={`${styles.App}`}>
      <h1>Website template with React</h1>
      <Button
        variant='primary'
        onClick={() =>
          theme === THEMES.LIGHT ? handleChangeTheme(THEMES.DARK) : handleChangeTheme(THEMES.LIGHT)
        }
      >
        Change theme
      </Button>
    </div>
  );
}

export default App;
