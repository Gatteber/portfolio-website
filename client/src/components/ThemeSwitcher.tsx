import {BsFillSunFill, BsMoonFill} from 'react-icons/bs';
import useDarkMode from '../hooks/useDarkMode';

const ThemeSwitcher = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <button
      onClick={() => setTheme(colorTheme)}
      className="cursor-pointer text-slate-900 dark:text-slate-50 outline outline-1 rounded-xl p-2"
      aria-label="color-theme"
    >
      {colorTheme === 'dark' ? (
        <BsFillSunFill data-icon="sun" title="sun" />
      ) : (
        <BsMoonFill data-icon="moon" title="moon" />
      )}
    </button>
  );
};
export default ThemeSwitcher;
