import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Calculate password strength
    if (name === "password") {
      let strength = 0;
      if (value.length >= 8) strength++;
      if (/[A-Z]/.test(value)) strength++;
      if (/[a-z]/.test(value)) strength++;
      if (/[0-9]/.test(value)) strength++;
      if (/[^A-Za-z0-9]/.test(value)) strength++;
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Registration attempt:", formData);
      setIsLoading(false);
      // Handle successful registration redirect here
    }, 2000);
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return "Muy débil";
      case 2:
        return "Débil";
      case 3:
        return "Regular";
      case 4:
        return "Fuerte";
      case 5:
        return "Muy fuerte";
      default:
        return "";
    }
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return "#ef4444";
      case 2:
        return "#f97316";
      case 3:
        return "#eab308";
      case 4:
        return "#22c55e";
      case 5:
        return "#16a34a";
      default:
        return "#e5e7eb";
    }
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
                <h1 className="auth-title">Únete a la revolución musical</h1>
                <p className="auth-subtitle">
                  Crea tu cuenta y comienza a distribuir tu música globalmente
                </p>
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nombre Completo
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                </div>

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
                      placeholder="Crea una contraseña segura"
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
                  {formData.password && (
                    <div className="password-strength">
                      <div className="strength-bar">
                        <div
                          className="strength-fill"
                          style={{
                            width: `${(passwordStrength / 5) * 100}%`,
                            backgroundColor: getPasswordStrengthColor(),
                          }}
                        ></div>
                      </div>
                      <span
                        className="strength-text"
                        style={{ color: getPasswordStrengthColor() }}
                      >
                        {getPasswordStrengthText()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmar Contraseña
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔐</span>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Confirma tu contraseña"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                  {formData.confirmPassword &&
                    formData.password !== formData.confirmPassword && (
                      <div className="error-message">
                        Las contraseñas no coinciden
                      </div>
                    )}
                </div>

                <div className="form-terms">
                  <label className="checkbox-wrapper">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    Acepto los{" "}
                    <Link to="/terms" className="terms-link">
                      Términos y Condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link to="/privacy" className="terms-link">
                      Política de Privacidad
                    </Link>
                  </label>
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
                      Creando cuenta...
                    </>
                  ) : (
                    <>
                      <span>🚀</span>
                      Crear Cuenta Gratis
                    </>
                  )}
                </button>
              </form>

              <div className="auth-divider">
                <span>o regístrate con</span>
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
                  ¿Ya tienes cuenta?
                  <Link to="/login" className="auth-link">
                    Inicia sesión
                  </Link>
                </p>
              </div>
            </div>

            <div className="auth-features animate-fade-in">
              <h3>Beneficios de registrarte</h3>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <div>
                    <strong>Distribución Instantánea</strong>
                    <p>Sube tu música y distribúyela en minutos</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💎</span>
                  <div>
                    <strong>Sin Comisiones Ocultas</strong>
                    <p>Mantén el 100% de tus derechos y regalías</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📈</span>
                  <div>
                    <strong>Analytics Profesionales</strong>
                    <p>Insights detallados de tu audiencia</p>
                  </div>
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
            var(--secondary-50) 0%,
            var(--primary-50) 100%
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
              rgba(168, 85, 247, 0.05) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(99, 102, 241, 0.05) 0%,
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

        .password-strength {
          margin-top: var(--space-2);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .strength-bar {
          flex: 1;
          height: 4px;
          background: var(--gray-200);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .strength-fill {
          height: 100%;
          transition: all 0.3s ease;
          border-radius: var(--radius-full);
        }

        .strength-text {
          font-size: 0.75rem;
          font-weight: 600;
          min-width: 80px;
        }

        .error-message {
          color: var(--error-600);
          font-size: 0.875rem;
          margin-top: var(--space-2);
        }

        .form-terms {
          margin-bottom: var(--space-6);
        }

        .checkbox-wrapper {
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          font-size: 0.875rem;
          color: var(--gray-600);
          line-height: 1.5;
        }

        .checkbox-wrapper input {
          margin-right: var(--space-2);
          margin-top: 2px;
        }

        .terms-link {
          color: var(--primary-600);
          text-decoration: none;
          font-weight: 500;
        }

        .terms-link:hover {
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
          gap: var(--space-6);
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .feature-icon {
          font-size: 1.5rem;
          margin-top: var(--space-1);
        }

        .feature-item strong {
          display: block;
          color: var(--gray-900);
          margin-bottom: var(--space-1);
        }

        .feature-item p {
          color: var(--gray-600);
          font-size: 0.875rem;
          margin: 0;
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

export default Register;
