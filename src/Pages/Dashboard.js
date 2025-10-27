import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import "../components/css/Dashboard.css";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <section className="page page-dashboard">
      <Header />
      <Home />
      <Footer />
    </section>
  );
}

export default Dashboard;
