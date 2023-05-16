import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <div className="text-slate-900 dark:text-slate-50">
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
