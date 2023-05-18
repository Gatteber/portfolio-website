interface Props {
  handleClick: () => void;
}

const ModalMenu = ({handleClick}: Props) => {
  return (
    <div className="position: fixed top-0 right-0 w-full h-full z-100 bg-zinc-100 dark:bg-zinc-700 opacity-95 transition duration-500 text-slate-700 dark:text-slate-50">
      <div>
        <button onClick={handleClick} className="p-2 text-3xl">
          X
        </button>
      </div>
      <ul className="flex flex-col gap-5 items-center text-2xl">
        <li className="text-orange-600 dark:text-orange-300">Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default ModalMenu;
