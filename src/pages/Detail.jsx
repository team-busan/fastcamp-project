import Blog from "../component/Blog";
import Information from "../component/Information";
import Map from "../component/Map";
import RecommendedRestaurants from "../component/RecommendedRestaurants";
import Title from "../component/Title";
import VisitRating from "../component/VisitRating";

export default function Detail() {
  return (
    <>
      <div className="flex flex-row center w-screen justify-evenly bg-lightGray">
        <Map />
      <main className="w-6/12">
        <Title />
        <Information />
        <RecommendedRestaurants />
        <VisitRating />
        <Blog />
      </main>
      </div>
    
    </>
  );
}
