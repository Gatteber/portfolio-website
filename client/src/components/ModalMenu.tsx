import NavLinks from './NavLinks';

interface Props {
  handleClick: () => void;
}

const ModalMenu = ({handleClick}: Props) => {
  return (
    <div
      className="position: fixed top-0 right-0 w-full z-100 bg-zinc-100 dark:bg-zinc-700 duration-500 text-slate-700 dark:text-slate-50 pb-10"
      id="mobilemenu"
    >
      <div>
        <button onClick={handleClick} className="p-2 text-3xl">
          X
        </button>
      </div>
      <ul className="flex flex-col gap-5 items-center text-2xl">
        <NavLinks handleClick={handleClick} />
      </ul>
    </div>
  );
};
export default ModalMenu;
