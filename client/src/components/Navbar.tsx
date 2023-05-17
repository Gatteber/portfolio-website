import {useState} from 'react';
import useViewPort from '../hooks/useViewport';
import Hamburger from './Hamburger';
import ThemeSwitcher from './ThemeSwitcher';
import ModalMenu from './ModalMenu';

const Navbar = () => {
  const {width} = useViewPort();
  const breakpoint = 620;
  const [displayMenu, setDisplayMenu] = useState<boolean>(true);

  const handleChange = () => {
    displayMenu === false ? setDisplayMenu(true) : setDisplayMenu(false);
  };

  return (
    <div className="p-2">
      {width < breakpoint ? (
        <div className="flex justify-between">
          <div onClick={handleChange} className="p-1" aria-label="test">
            <Hamburger />
          </div>
          <ThemeSwitcher />
        </div>
      ) : (
        <>
          <ul className="text-purple-900 dark:text-purple-500">
            <li className="text-orange-600 dark:text-orange-300">Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ThemeSwitcher />
        </>
      )}
      {displayMenu && <ModalMenu handleClick={handleChange} />}
    </div>
  );
};
export default Navbar;
