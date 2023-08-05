import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="top_footer_top">
          <div className="logo">
            <h1>Rotz Empire</h1>
          </div>
          <div className="credit_card">
            <FontAwesomeIcon icon={faCreditCard} />
            <p>We accept all major credit & debit cards</p>
          </div>
        </div>
        <div className="button_footer_top">
          <div className="text">
            <p>augue eget arcu dictum varius duis at consectetur lorem donec</p>
            <p>urna nunc id cursus metus aliquam eleifend mi in nulla</p>
          </div>
          <div className="menu">
            <h4>Menu</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/prices">Prices</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_button">
        <p>
          &copy;Todos los derechos reservados.{" "}
          <Link to="https://typingtiming.com.ar">Typing Timing</Link>.
        </p>
        <div className="networks">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
