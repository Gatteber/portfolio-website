import {AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/Gatteber"
        className="flex justify-center items-center bg-zinc-100 dark:bg-zinc-700 text-slate-700 dark:text-slate-50"
      >
        <span className="">
          &copy; 2023 <strong>Gatteber</strong>@Github
        </span>
        <AiFillGithub />
      </a>
    </footer>
  );
};
export default Footer;
