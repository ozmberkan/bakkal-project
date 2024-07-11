import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import MainBase from "./containers/MainBase";
import { ProductData } from "./data/ProductData";

const App = () => {
  const [mainData, setMainData] = useState(ProductData);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home mainData={mainData} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
