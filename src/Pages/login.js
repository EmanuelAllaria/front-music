import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", formData);
      setIsLoading(false);
      // Handle successful login redirect here
    }, 1500);
  };

  return (
    <div>
      <Header />
      <main className="page">
        <div className="auth-container">
          <div className="auth-background">
            <div className="auth-gradient"></div>
            <div className="auth-pattern"></div>
          </div>

          <div className="auth-content">
            <div className="auth-card animate-fade-in">
              <div className="auth-header">
                <div className="auth-icon">🎵</div>
                <h1 className="auth-title">Bienvenido de vuelta</h1>
                <p className="auth-subtitle">
                  Inicia sesión para acceder a tu plataforma musical
                </p>
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">📧</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔒</span>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Tu contraseña"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-wrapper">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Recordarme
                  </label>
                  <Link to="/forgot-password" className="forgot-link">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg auth-submit ${
                    isLoading ? "loading" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span>
                      Iniciando sesión...
                    </>
                  ) : (
                    <>
                      <span>🚀</span>
                      Iniciar Sesión
                    </>
                  )}
                </button>
              </form>

              <div className="auth-divider">
                <span>o continúa con</span>
              </div>

              <div className="social-login">
                <button className="btn btn-social google">
                  <span>🔍</span>
                  Google
                </button>
                <button className="btn btn-social spotify">
                  <span>🎵</span>
                  Spotify
                </button>
              </div>

              <div className="auth-footer">
                <p>
                  ¿No tienes cuenta?
                  <Link to="/register" className="auth-link">
                    Regístrate gratis
                  </Link>
                </p>
              </div>
            </div>

            <div className="auth-features animate-fade-in">
              <h3>¿Por qué elegir nuestra plataforma?</h3>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">🌍</span>
                  <span>Distribución global en 150+ plataformas</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>Analytics detallados en tiempo real</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💰</span>
                  <span>100% de tus derechos y regalías</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: var(--space-8) 0;
        }

        .auth-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .auth-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            var(--primary-50) 0%,
            var(--secondary-50) 100%
          );
        }

        .auth-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(
              circle at 25% 25%,
              rgba(99, 102, 241, 0.05) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(168, 85, 247, 0.05) 0%,
              transparent 50%
            );
          background-size: 100px 100px;
        }

        .auth-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-16);
          align-items: center;
        }

        .auth-card {
          background: white;
          padding: var(--space-12);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-2xl);
          border: 1px solid var(--gray-200);
          max-width: 500px;
          width: 100%;
        }

        .auth-header {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .auth-icon {
          font-size: 3rem;
          margin-bottom: var(--space-4);
        }

        .auth-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .auth-subtitle {
          color: var(--gray-600);
          font-size: 1.125rem;
        }

        .auth-form {
          margin-bottom: var(--space-8);
        }

        .form-group {
          margin-bottom: var(--space-6);
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: var(--gray-700);
          margin-bottom: var(--space-2);
          font-size: 0.875rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: var(--space-4);
          z-index: 1;
          font-size: 1.125rem;
        }

        .form-input {
          width: 100%;
          padding: var(--space-4) var(--space-4) var(--space-4) var(--space-12);
          border: 2px solid var(--gray-300);
          border-radius: var(--radius-lg);
          font-size: 1rem;
          transition: all 0.2s ease;
          background: white;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-500);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .password-toggle {
          position: absolute;
          right: var(--space-4);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.125rem;
          padding: var(--space-1);
          border-radius: var(--radius-md);
          transition: background-color 0.2s ease;
        }

        .password-toggle:hover {
          background: var(--gray-100);
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-6);
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 0.875rem;
          color: var(--gray-600);
        }

        .checkbox-wrapper input {
          margin-right: var(--space-2);
        }

        .forgot-link {
          color: var(--primary-600);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .forgot-link:hover {
          color: var(--primary-700);
        }

        .auth-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          margin-bottom: var(--space-6);
        }

        .auth-submit.loading {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .auth-divider {
          text-align: center;
          margin: var(--space-6) 0;
          position: relative;
          color: var(--gray-500);
          font-size: 0.875rem;
        }

        .auth-divider::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--gray-300);
          z-index: -1;
        }

        .auth-divider span {
          background: white;
          padding: 0 var(--space-4);
        }

        .social-login {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3);
          margin-bottom: var(--space-8);
        }

        .btn-social {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-3);
          border: 2px solid var(--gray-300);
          background: white;
          color: var(--gray-700);
          border-radius: var(--radius-lg);
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .btn-social:hover {
          border-color: var(--gray-400);
          background: var(--gray-50);
        }

        .btn-social.google:hover {
          border-color: #4285f4;
          color: #4285f4;
        }

        .btn-social.spotify:hover {
          border-color: #1db954;
          color: #1db954;
        }

        .auth-footer {
          text-align: center;
          color: var(--gray-600);
        }

        .auth-link {
          color: var(--primary-600);
          text-decoration: none;
          font-weight: 600;
          margin-left: var(--space-1);
        }

        .auth-link:hover {
          color: var(--primary-700);
        }

        .auth-features {
          padding: var(--space-8);
        }

        .auth-features h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-6);
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          color: var(--gray-700);
        }

        .feature-icon {
          font-size: 1.25rem;
        }

        @media (max-width: 768px) {
          .auth-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .auth-card {
            padding: var(--space-8);
          }

          .auth-features {
            order: -1;
            text-align: center;
          }

          .social-login {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;
