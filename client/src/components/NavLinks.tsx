import {Link} from 'react-scroll';
import useViewPort from '../hooks/useViewport';

const NavLinks = () => {
  const {width} = useViewPort();
  const breakpoint = 640;

  //no classname on <Link> tag, so need this to find corresponding li item and add active for scroll
  //kind of hacky but it works for now, consider fixing?
  const handleSetActive = (e: string) => {
    const searchString = e.charAt(0).toUpperCase() + e.slice(1);
    for (const li of document.querySelectorAll('li')) {
      if (li.textContent?.includes(searchString)) {
        li.classList.add('active');
      }
    }
  };

  const handleSetInactive = (e: string) => {
    const searchString = e.charAt(0).toUpperCase() + e.slice(1);
    for (const li of document.querySelectorAll('li')) {
      if (li.textContent?.includes(searchString)) {
        li.classList.remove('active');
      }
    }
  };
  return (
    <>
      <li className="cursor-pointer hover:text-orange-600 transition transition-duration-500 [&.active]:text-orange-600 dark:hover:text-purple-600 dark:[&.active]:text-purple-600">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={(e) => handleSetActive(e)}
          onSetInactive={(e) => handleSetInactive(e)}
        >
          Home
        </Link>
      </li>
      <li className="cursor-pointer hover:text-orange-600 transition transition-duration-500 [&.active]:text-orange-600 dark:hover:text-purple-600 dark:[&.active]:text-purple-600">
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={(e) => handleSetActive(e)}
          onSetInactive={(e) => handleSetInactive(e)}
        >
          Projects
        </Link>
      </li>
      <li className="cursor-pointer hover:text-orange-600 transition transition-duration-500 [&.active]:text-orange-600 dark:hover:text-purple-600 dark:[&.active]:text-purple-600">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={(e) => handleSetActive(e)}
          onSetInactive={(e) => handleSetInactive(e)}
        >
          About
        </Link>
      </li>
      <li className="cursor-pointer hover:text-orange-600 transition transition-duration-500 [&.active]:text-orange-600 dark:hover:text-purple-600 dark:[&.active]:text-purple-600">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          //different scroll for different breakpoints
          offset={width < breakpoint ? -93 : -205}
          duration={500}
          onSetActive={(e) => handleSetActive(e)}
          onSetInactive={(e) => handleSetInactive(e)}
        >
          Contact
        </Link>
      </li>
    </>
  );
};
export default NavLinks;
