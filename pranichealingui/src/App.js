import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Dashboard from "./components/AdminDashboard/Dashboard";
import ClientDashboard from "./components/ClientDashboard/ClientDashboard";
import GraphViewHandler from "./components/Graphs/GraphViewHandler";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header branding="Home Page" />
        <div className="container-fluid py-5 mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/ClientDashboard" component={ClientDashboard} />
            <Route exact path="/GraphView" component={GraphViewHandler} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
