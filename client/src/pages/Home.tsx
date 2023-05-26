import HorizontalBreak from '../components/HorizontalBreak';

const Home = () => {
  return (
    <div className="pt-20 flex flex-col items-center font-poppins text-slate-700 dark:text-slate-50 gap-5">
      <h1 className="text-3xl">
        &gt; &gt;
        <span className="text-orange-600 dark:text-purple-500">Hi</span>, I'm
        Garrett.
      </h1>
      <h2 className="text-xl">I'm a front-end engineer located in Japan.</h2>
      <HorizontalBreak width={'w-32'} />
      <img className="w-60 h-60 bg-purple-900 rounded-full"></img>
      <h2 className="pt-7">
        I like to build stuff. Check out my{' '}
        <button className="outline outline-1 rounded-lg p-1 hover:bg-orange-600 hover:text-purple-900 dark:hover:bg-purple-500 dark:hover:text-orange-300 transition duration-200">
          Projects
        </button>{' '}
        or{' '}
        <button className="outline outline-1 rounded-lg p-1 hover:bg-orange-600 hover:text-purple-900 dark:hover:bg-purple-500 dark:hover:text-orange-300 transition duration-200">
          Resume
        </button>
      </h2>
    </div>
  );
};
export default Home;
