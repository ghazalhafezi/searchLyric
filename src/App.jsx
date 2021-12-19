import "./App.css";
import Search from "./components/Search";
import Lyric from "./components/lyric/lyric";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Search />} />
        <Route path="Lyric/:musicName/:artist" element={<Lyric />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
