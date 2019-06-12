import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BenchMarkChakraGraph from "./components/ChakraGraphs/BenchMarkChakraGraph";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header branding="Home Page" />
      <div className="container-fluid py-5 mt-5">
        <BenchMarkChakraGraph />
      </div>
      <Footer />
    </div>
  );
}

export default App;