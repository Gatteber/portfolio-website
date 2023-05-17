import {useEffect, useState} from 'react';
const useDarkMode = () => {
  //get theme from local storage if it exists
  const localTheme = localStorage?.getItem('theme');
  const [theme, setTheme] = useState(localTheme || 'light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
};

export default useDarkMode;
