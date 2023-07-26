import "./App.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Router>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/search" element={<Search />} />
          <Route path="/company" element={<Navigate to="/about" />} />
          {/*Qualquer Rota não definida ira chegar no "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
