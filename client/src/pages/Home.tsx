type HomeData = {
  name: string;
};

interface IHomeData {
  data: HomeData | undefined;
}

const Home = ({data}: IHomeData) => {
  console.log(data);
  return (
    <div>
      <h1>Hi, I'm Garrett.</h1>
      <div className="text-xl text-red-500 dark:text-blue-500">
        Here's the data: {data && data.name}
      </div>
      <div>testing update</div>
    </div>
  );
};
export default Home;
