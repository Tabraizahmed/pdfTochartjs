import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BenchMarkChakraGraph from "./components/ChakraGraphs/BenchMarkChakraGraph";
import ClientInfo from "./components/AdminDashboard/ClientInfo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header branding="Home Page" />
        <div className="container-fluid py-5 mt-5">
          <Switch>
            <Route exact path="/" component={BenchMarkChakraGraph} />
            <Route exact path="/clientsdetail" component={ClientInfo} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
