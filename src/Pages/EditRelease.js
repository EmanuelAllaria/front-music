import React from "react";
import Header from "../components/Header";
import CardRelease from "../components/CardRelease";
import Footer from "../components/Footer";
import "../components/css/EditRelease.css";

function EditRelease() {
  return (
    <section className="page page-edit">
      <Header />
      <div className="container">
        <CardRelease />
      </div>
      <div className="footer_edit">
        <Footer />
      </div>
    </section>
  );
}

export default EditRelease;
