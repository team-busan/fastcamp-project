import Column from "../component/Column";
import CustomBottomSheet from "../component/CustomBottomSheet";
import HomeTagList from "../component/HomeTagList";
import LocalFoodPick from "../component/LocalFoodPick";
import Navbar from "../component/Navbar";
// import Search from "../component/Search";
import MbLocalFood from "../component/mbLocalFood";

function Home() {
  return (
    <div>
      <Navbar />
      <LocalFoodPick />
      <MbLocalFood />
      <Column />
      <HomeTagList />
      <CustomBottomSheet />
    </div>
  );
}

export default Home;
