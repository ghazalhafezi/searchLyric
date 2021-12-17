import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./components/Search";
import Lyric from "./components/lyric/lyric";
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/Lyric/:musicName/:artist" element={<Lyric />} />
      </Routes>
    </Router>
  )
}

export default App;
