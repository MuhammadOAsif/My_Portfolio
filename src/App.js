import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Blogs from "./Components/Pages/Blogs/Blogs";
import NotFound from "./Components/Pages/NotFound/NotFound";
import PageSliderBTN from "./Components/PageSliderBTN";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
      <PageSliderBTN />
    </div>
  );
}

export default App;
