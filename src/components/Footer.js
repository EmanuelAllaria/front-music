import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { resources } from "../i18n";

function Footer() {
  const language = localStorage.getItem("language");
  const translate = resources[language].translation;
  return (
    <footer>
      <div className="footer_button">
        <p>
          &copy;{translate.footer.copy}{" "}
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
