import React from "react";
import { Link } from "react-router-dom";
import { getTranslate } from "../utils/i18nHelpers";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Music Platform</h3>
            <p
              style={{
                color: "var(--gray-400)",
                marginBottom: "var(--space-4)",
              }}
            >
              {getTranslate().footer?.description ||
                "Tu plataforma de música profesional para distribución y gestión de lanzamientos."}
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)" }}>
              <a
                href="mailto:contact@musicplatform.com"
                style={{ fontSize: "1.25rem" }}
              >
                📧
              </a>
              <a href="tel:+1234567890" style={{ fontSize: "1.25rem" }}>
                📱
              </a>
              <a
                href="https://musicplatform.com"
                style={{ fontSize: "1.25rem" }}
              >
                🌐
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>{getTranslate().navigation || "Navegación"}</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2)",
              }}
            >
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
            </div>
          </div>

          <div className="footer-section">
            <h3>{getTranslate().help || "Ayuda"}</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2)",
              }}
            >
              <Link to="/support">
                {getTranslate().header?.support || "Support"}
              </Link>
              <a href="/docs">
                {getTranslate().documentation || "Documentación"}
              </a>
              <a href="/faq">{getTranslate().faq || "FAQ"}</a>
              <a href="/contact">{getTranslate().contact || "Contacto"}</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>{getTranslate().legal || "Legal"}</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2)",
              }}
            >
              <a href="/privacy">{getTranslate().privacy || "Privacidad"}</a>
              <a href="/terms">{getTranslate().terms || "Términos"}</a>
              <a href="/cookies">{getTranslate().cookies || "Cookies"}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            {getTranslate().footer?.copy ||
              "© 2024 Music Platform. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
