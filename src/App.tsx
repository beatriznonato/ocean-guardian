import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import WelcomeSlider from "./components/WelcomeSlider/WelcomeSlider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeSlider />} />
        <Route path="/Dashboard/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
