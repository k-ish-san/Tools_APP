// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import RandomStringGenerator from "./pages/RandomString";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/random-string" element={<RandomStringGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;


