import "./index.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;