import React, { useState } from "react";
import { Link } from "react-router-dom";
import { resources } from "../i18n";
import {
  availableLanguages,
  getLanguageResourceKey,
  setLanguage,
  getTranslate,
} from "../utils/i18nHelpers";

function Header() {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const language = getLanguageResourceKey();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setShowLanguageMenu(false);
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/dashboard" className="header-logo">
            <img src="/logo.png" alt="Music Platform" />
            <span>Music Platform</span>
          </Link>

          <nav className="header-nav">
            <Link to="/dashboard">
              {getTranslate().header?.music || "Music"}
            </Link>
            <Link to="/create-new-version">
              {getTranslate().home?.buttonReleaseCreate || "Crear Nuevo"}
            </Link>
            <Link to="/support">
              {getTranslate().header?.support || "Support"}
            </Link>
            <Link to="/reports">
              {getTranslate().header?.reports || "Reportes"}
            </Link>
            <Link to="/account">
              {getTranslate().header?.account || "Mi Cuenta"}
            </Link>
          </nav>

          <div className="header-actions">
            <div
              className="language-selector"
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              style={{
                position: "relative",
                cursor: "pointer",
                padding: "8px 16px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                color: "white",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s ease",
              }}
            >
              <span>🌐</span>
              <span>{language}</span>
              <span
                style={{
                  transform: showLanguageMenu
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                ▼
              </span>

              {showLanguageMenu && (
                <div
                  className="language-menu"
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: "0",
                    marginTop: "8px",
                    background: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    padding: "8px",
                    minWidth: "150px",
                    zIndex: 1000,
                  }}
                >
                  {availableLanguages.map((key) => (
                    <div
                      key={key}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLanguageChange(key);
                      }}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        color: "#374151",
                        fontWeight: language === key ? "600" : "400",
                        background:
                          language === key ? "#f0f4ff" : "transparent",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (language !== key) {
                          e.target.style.background = "#f9fafb";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (language !== key) {
                          e.target.style.background = "transparent";
                        }
                      }}
                    >
                      {key}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
