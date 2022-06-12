import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Blogs from "./Components/Pages/Blogs/Blogs";
import NotFound from "./Components/Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      {/* Import All Routes And Route Component*/}

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
