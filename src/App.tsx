import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Button from './components/common/Button/Button';
import Slider from './components/common/Slider/Slider';

const THEMES = {
  LIGHT: 'theme_light',
  DARK: 'theme_dark',
};

function App() {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
      <Slider title='CONTACT ME'></Slider>
    </div>
  );
}

export default App;
