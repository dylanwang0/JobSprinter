import logo from "./logo.svg";
import "./App.css";
import PostingList from "./components/jobPostings";
import Header from "./components/header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CreateJob from "./components/createJob";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateJob />} />
      </Routes>
    </Router>
  );
}

export default App;
