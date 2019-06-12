import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientInfo from "./components/AdminDashboard/ClientInfo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header branding="Home Page" />
      <div className="container-fluid py-5 mt-5">
        <ClientInfo />
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
