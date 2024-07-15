import { Route, Routes } from "react-router-dom";
import "./App.css";
import Picturesearching from "./components/picturesearching";
import Main from "./components/main";

function App() {
  return (
    <Routes>
      <Route path="/Picturesearching" element={<Picturesearching />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
