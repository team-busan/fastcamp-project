import { useEffect, useState } from "react"
import { axiosInstance, API_URL } from "../stores/API";
import { CiCircleCheck, CiCircleChevDown } from "react-icons/ci";

export default function RecommendedRestaurants() {
  const [selectedButton, setSelectedButton] = useState('nearby');
  const [restaurantList, setRestaurantList] = useState({});
  const [test, setTest] = useState([]);
  const [isMoreVisible, setMorevisible] = useState(false);

  useEffect(() => {
    axiosInstance.get(API_URL.TAGDETAIL).then((res) => {
      setRestaurantList(res.data[0]);
      setTest(res.data[0].pick.nearbyRestaurants);
    });
  }, []);

  useEffect(() => {
    if(restaurantList.pick){
      console.log(restaurantList);
      if(selectedButton === 'nearby'){
        setTest(restaurantList.pick.nearbyRestaurants);
      }
      else if(selectedButton === 'popular'){
        setTest(restaurantList.pick.popularRestaurants);
      }
      else if(selectedButton === "same"){
        setTest(restaurantList.pick.sameRestaurants);
      }
    }
  },[selectedButton])

  return (
    <div className = "bg-white mb-4 p-5">
      <div className = "">
        <h3 className = "font-bold mb-5"><span className = "text-myblue">배비장보쌈</span>과 비슷한 맛집</h3>
        <div>
          <div className = "flex mb-5">
            <button
              className={`flex justify-center items-center w-36 h-10 rounded-xl mr-4 ${selectedButton === "nearby" ? "bg-myblue text-white" : "bg-gray-200 text-black"}`}
              onClick = {() => setSelectedButton('nearby')}>
                <CiCircleCheck />현재 식당 근처
            </button>
            <button
              className={`flex justify-center items-center w-36 h-10 rounded-xl mr-4 ${selectedButton === "popular" ? "bg-myblue text-white" : "bg-gray-200 text-black"}`}
              onClick = {() => setSelectedButton('popular')}>
              <CiCircleCheck />점수가 높은
            </button>
            <button
              className={`flex justify-center items-center w-36 h-10 rounded-xl mr-4 ${selectedButton === "same" ? "bg-myblue text-white" : "bg-gray-200 text-black"}`}
              onClick = {() => setSelectedButton('same')}
            >
              <CiCircleCheck />가장 유사한
            </button>
          </div>
          <ul className="flex flex-wrap justify-between mb-4" >
          {isMoreVisible ? (
            // 전체 목록을 보여줄 때는 slice를 사용하지 않음
            test && test.map((value, i) => (
              <li key={i}>
                <img className="w-36 h-36 rounded-md" src={value.imgLink} alt={`Restaurant ${i + 1}`} />
                <div className="font-bold mt-3">{value.name}</div>
                <div className="font-bold bg-mintlight w-20 rounded-md">
                  <span className="text-mint">{value.same}일치</span>
                </div>
              </li>
            ))
          ) : (
            // 처음 4개 요소만 보여줄 때는 slice 사용
            test && test.slice(0, 4).map((value, i) => (
              <li key={i}>
                <img className="w-36 h-36 rounded-md" src={value.imgLink} alt={`Restaurant ${i + 1}`} />
                <div className="font-bold mt-3">{value.name}</div>
                <div className="font-bold bg-mintlight w-20 rounded-md">
                  <span className="text-mint">{value.same}일치</span>
                </div>
              </li>
            ))
          )}
        </ul>
            <div>
              <button
                className = "bg-lightGray h-16 w-full rounded-lg flex items-center justify-center"
                onClick = {() => {setMorevisible(!isMoreVisible)}}
                >더보기<CiCircleChevDown/>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}