import useViewPort from '../hooks/useViewport';
import Hamburger from './Hamburger';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const {width} = useViewPort();
  const breakpoint = 620;

  return (
    <div className="text-purple-900 dark:text-purple-500">
      <ul>
        <li className="text-orange-600 dark:text-orange-300">Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ThemeSwitcher />
      {width < breakpoint ? <Hamburger /> : null}
    </div>
  );
};
export default Navbar;
