import Column from "../component/Column";
import HomeTagList from "../component/HomeTagList";
import LocalFoodPick from "../component/LocalFoodPick";
import Navbar from "../component/Navbar";
// import Search from "../component/Search";
import MbLocalFood from "../component/mbLocalFood";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-lightGray ">
      <LocalFoodPick />
      <MbLocalFood />
      <Column />
      <HomeTagList />
      </div>
      
    </div>
  );
}

export default Home;
