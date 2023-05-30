import {useState} from 'react';
import useViewPort from '../hooks/useViewport';
import Hamburger from './Hamburger';
import ThemeSwitcher from './ThemeSwitcher';
import ModalMenu from './ModalMenu';
import gaLogo from '../assets/logo.svg';

const Navbar = () => {
  const {width} = useViewPort();
  const breakpoint = 640;
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  const handleChange = () => {
    displayMenu === false ? setDisplayMenu(true) : setDisplayMenu(false);
  };

  return (
    <div className="p-2 sticky top-0 bg-zinc-100 dark:bg-zinc-700">
      {width < breakpoint ? (
        <div className="flex justify-between">
          <div onClick={handleChange} className="p-1" aria-label="test">
            <Hamburger />
          </div>
          <ThemeSwitcher />
        </div>
      ) : (
        <>
          <div className="flex justify-end gap-10 items-center">
            <img
              src={gaLogo}
              alt="Garrett's Logo"
              className="w-12 h-12 mr-auto"
            />
            <ul className="flex gap-2 items-start text-slate-700 dark:text-slate-50">
              <li className="text-orange-600 dark:text-orange-300">Home</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ThemeSwitcher />
          </div>
        </>
      )}
      {displayMenu && <ModalMenu handleClick={handleChange} />}
    </div>
  );
};
export default Navbar;
