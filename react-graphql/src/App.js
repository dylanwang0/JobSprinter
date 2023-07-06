import logo from "./logo.svg";
import "./App.css";
import PostingList from "./components/jobPostings";
import Header from "./components/header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Postings from "./components/Postings";
import Create from "./components/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postings" element={<Postings />} />
        <Route path="/create" element={<Create />} />

      </Routes>
    </Router>
  );
}

export default App;
