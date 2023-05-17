const Hamburger = () => {
  return (
    <button className="space-y-2" aria-label="hamburger-menu">
      <span className="block w-8 h-0.5 bg-zinc-700 dark:bg-slate-100"></span>
      <span className="block w-8 h-0.5 bg-zinc-700 dark:bg-slate-100"></span>
      <span className="block w-5 h-0.5 bg-orange-600 dark:bg-purple-500"></span>
    </button>
  );
};
export default Hamburger;
