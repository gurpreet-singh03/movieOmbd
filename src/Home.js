import Header from "./Header";
import Movies from "./Movies";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header/>
        <Search />
        <Movies/>
      </div>
    </>
  );
};

export default Home;