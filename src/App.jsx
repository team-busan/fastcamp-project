import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Detail from "./component/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/detail" element={<Detail/>}></Route>
    </Routes>
  );
}

export default App;