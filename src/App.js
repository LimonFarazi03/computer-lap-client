import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
    <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
