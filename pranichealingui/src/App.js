import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import ClientInfo from "./components/AdminDashboard/ClientInfo";
import ClientDashboard from "./components/ClientReportDashboard/ClientDashboard";
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
            <Route exact path="/clientsdetail" component={ClientInfo} />
            <Route exact path="/chakaragraph" component={ClientDashboard} />
            <Route exact path="/GraphView" component={GraphViewHandler} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
