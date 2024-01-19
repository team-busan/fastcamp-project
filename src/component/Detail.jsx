import Blog from "./Blog";
import Information from "./Information";
import Map from "./Map";
import RecommendedRestaurants from "./RecommendedRestaurants";
import Title from "./Title";
import VisitRating from './VisitRating';
export default function Detail() {
  return (
    <div className = "flex flex-row center w-screen justify-evenly bg-lightGray">
      <Map/>
      <main className = "w-6/12">
        <Title/>
        <Information/>
        <RecommendedRestaurants/>
        <VisitRating/>
        <Blog/>
      </main>
    </div>
  )
}
