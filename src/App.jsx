import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import TagDetail from "./pages/TagDetail";
import SearchResult from "./pages/SearchResult";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
      <Route path="/tagdetail" element={<TagDetail />}></Route>
      <Route path="/search" element={<SearchResult />}></Route>
      <Route path="/mypage/:username" element={<MyPage />}></Route>
    </Routes>
  );
}

export default App;
