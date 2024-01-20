import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./component/Detail";
import TagDetail from "./pages/TagDetail";
import SearchResult from "./pages/SearchResult";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/tagdetail" element={<TagDetail />}></Route>
      <Route path="/searchresult" element={<SearchResult />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
    </Routes>
  );
}

export default App;
