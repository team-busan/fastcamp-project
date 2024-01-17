import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TagDetail from "./pages/TagDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tagdetail" element={<TagDetail />}></Route>
    </Routes>
  );
}

export default App;
