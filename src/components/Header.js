import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { resources } from "../i18n";

function Header() {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "es"
  );
  const languages = ["es", "en", "fr", "ca", "po", "it"];

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickLanguage = () => {
    setShowLanguage(!showLanguage);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
    setShowLanguage(false);
    window.location.reload();
  };

  return (
    <header>
      <div className="logo">
        <Link to="/dashboard">
          <h1>Rotz Empire</h1>
        </Link>
      </div>
      <FontAwesomeIcon icon={faBars} onClick={handleShowMenu} />
      <nav className={`nav ${showMenu ? "visible" : ""}`}>
        <ul>
          <li>
            <Link to="/dashboard">
              {t(resources[selectedLanguage].translation.header.music)}
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              {t(resources[selectedLanguage].translation.header.artist)}
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              {t(resources[selectedLanguage].translation.header.reports)}
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              {t(resources[selectedLanguage].translation.header.support)}
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              {t(resources[selectedLanguage].translation.header.account)}
            </Link>
          </li>
          <li>
            <div className="language" onClick={handleClickLanguage}>
              <FontAwesomeIcon icon={faGlobe} />
              <p>{t(selectedLanguage)}</p>
              <span>›</span>
            </div>
            {showLanguage && (
              <ul className="language-menu">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    className={selectedLanguage === lang ? "selected" : ""}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
