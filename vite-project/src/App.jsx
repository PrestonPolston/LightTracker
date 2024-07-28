import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import LoadShow from "./components/LoadShow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/show/:id" element={<LoadShow />} />
      </Routes>
    </>
  );
}

export default App;
