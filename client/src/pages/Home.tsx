type HomeData = {
  name: string;
};

interface IHomeData {
  data: HomeData | undefined;
}

const Home = ({data}: IHomeData) => {
  console.log(data);
  return (
    <div className="pt-20 flex flex-col items-center text-slate-700 dark:text-slate-50 gap-5">
      <h1 className="text-3xl font-poppins">&gt; &gt;Hi, I'm Garrett.</h1>
      <img className="w-60 h-60 bg-red-950 rounded-full"></img>
      <h2 className="font-poppins">
        I like to build stuff. Check out my <button>Projects</button> or{' '}
        <button>Resume</button>
      </h2>
      <div className="text-xl text-red-500 dark:text-blue-500">
        Here's the data: {data && data.name}
      </div>
    </div>
  );
};
export default Home;
