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
    localStorage.getItem("language") || "Español"
  );
  const languages = ["Español", "Ingles", "Frances", "Catalan", "Portugues", "Italiano"];

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

  const currentURL = window.location.href;
  const urlApp = process.env.REACT_APP_URL_APP;
  const shouldShowLinks = currentURL === urlApp;
  
  return (
    <header>
      <div className="logo">
        <Link to={shouldShowLinks ? "/" : "/dashboard"}>
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
              {t(resources[selectedLanguage].translation.header.reports)}
            </Link>
          </li>
          <li>
            <Link to="/support">
              {t(resources[selectedLanguage].translation.header.support)}
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              {t(resources[selectedLanguage].translation.header.account)}
            </Link>
          </li>
          {shouldShowLinks && (
            <>
              <li>
                <Link to="/login">
                  {t(resources[selectedLanguage].translation.header.login)}
                </Link>
              </li>
              <li>
                <Link to="/register">
                  {t(resources[selectedLanguage].translation.header.register)}
                </Link>
              </li>
            </>
          )}
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
