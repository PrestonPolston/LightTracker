import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import LoadShow from "./components/LoadShow";
import SelectedShow from "./components/SelectedShow";
import SetLights from "./components/SetLights";
import LoadFile from "./components/LoadFile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loadFile" element={<LoadFile />} />
        <Route path="/show/:id" element={<LoadShow />} />
        <Route path="/selectedShow/:id" element={<SelectedShow />} />
        <Route path="/setLights/:setId" element={<SetLights />} />
      </Routes>
    </>
  );
}

export default App;
