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
      <div className="text-xl text-red-500">
        Here's the data: {data && data.name}
      </div>
      <div>testing update</div>
    </div>
  );
};
export default Home;
