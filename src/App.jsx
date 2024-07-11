import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import MainBase from "./containers/MainBase";
import { ProductData } from "./data/ProductData";

const App = () => {
  const [mainData, setMainData] = useState(ProductData);
  const [isOpen, setIsOpen] = useState(false);
  const [basket, setBasket] = useState([]);
  const [filtered, setFiltered] = useState("");

  return (
    <div>
      <Router>
        <Navbar
          setIsOpen={setIsOpen}
          basket={basket}
          setFiltered={setFiltered}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                mainData={mainData}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setBasket={setBasket}
                basket={basket}
                filtered={filtered}
                setFiltered={setFiltered}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
