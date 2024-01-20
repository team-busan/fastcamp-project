import { useEffect, useState } from "react";
import { axiosInstance, API_URL } from "../stores/API";
import { SiNaver } from "react-icons/si";
import { CiCircleChevDown } from "react-icons/ci";

export default function Blog() {
  const [restaurantList, setRestaurantList] = useState({});
  const blog = restaurantList.blog;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(API_URL.TAGDETAIL);
        setRestaurantList(res.data[0]);
      } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white mb-4 p-5">
      <div>
        <h3 className="font-bold mb-5">블로그 후기</h3>
        <hr />
        <ul>
          {blog &&
            blog.map((value, i) => (
              <li key={i}>
                <p className="mt-4 font-bold">{value.title}</p>
                <p>{value.text}</p>
                <div className="flex items-center mb-4">
                  <SiNaver className="text-darkGray" />
                  <p>{value.id}</p>
                </div>
                <hr />
              </li>
            ))}
        </ul>
        <button className="bg-lightGray h-16 w-full rounded-lg flex items-center justify-center">
          더보기
          <CiCircleChevDown />
        </button>
      </div>
    </div>
  );
}
