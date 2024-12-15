import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { TypingArea } from "./components/TypingArea";
import { Leaderboard } from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TypingArea />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;