import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ThemeSwitcher />
    </div>
  );
};
export default Navbar;
