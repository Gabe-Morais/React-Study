import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
