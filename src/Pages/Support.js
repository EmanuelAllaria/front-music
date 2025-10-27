import React from "react";
import Header from "../components/Header";
import CreateSupport from "../components/CreateSupport";
import Footer from "../components/Footer";
import "../components/css/Support.css";

function Support() {
  return (
    <section className="page page-support">
      <Header />
      <CreateSupport />
      <Footer />
    </section>
  );
}

export default Support;
