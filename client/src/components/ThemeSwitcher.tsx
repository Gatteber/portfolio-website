import {BsFillSunFill, BsMoonFill} from 'react-icons/bs';
import useDarkMode from '../hooks/useDarkMode';

const ThemeSwitcher = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <button
      onClick={() => setTheme(colorTheme)}
      className="cursor-pointer"
      aria-label="color-theme"
    >
      {colorTheme === 'dark' ? <BsFillSunFill /> : <BsMoonFill />}
    </button>
  );
};
export default ThemeSwitcher;
