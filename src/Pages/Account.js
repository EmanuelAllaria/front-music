import React, { useState } from "react";
import { getTranslate } from "../utils/i18nHelpers";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Account() {
  const t = getTranslate();
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // User data state
  const [userData, setUserData] = useState({
    name: "Emanuel Allaria",
    email: "emanuel@musicplatform.com",
    phone: "+54 11 1234-5678",
    country: "Argentina",
    city: "Buenos Aires",
    bio: "Productor musical y artista independiente apasionado por crear música que conecte con las emociones.",
    website: "https://emanuelallaria.com",
    instagram: "@emanuelallaria",
    twitter: "@emanuelallaria",
    spotify: "Emanuel Allaria",
    joinDate: "2023-01-15",
    totalReleases: 12,
    totalStreams: 1247832,
    profileImage: null,
  });

  const [editData, setEditData] = useState({ ...userData });
  const [notifications, setNotifications] = useState({
    emailMarketing: true,
    releaseUpdates: true,
    analyticsReports: false,
    newFeatures: true,
    securityAlerts: true,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSaveProfile = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUserData({ ...editData });
      setIsLoading(false);
      alert(
        t.account?.messages?.profile_updated ||
          "Perfil actualizado exitosamente"
      );
    }, 1500);
  };

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert(
        t.account?.messages?.passwords_not_match ||
          "Las contraseñas no coinciden"
      );
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setShowPasswordChange(false);
      setIsLoading(false);
      alert(
        t.account?.messages?.password_updated ||
          "Contraseña actualizada exitosamente"
      );
    }, 1500);
  };

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleLogout = () => {
    if (
      window.confirm(
        t.account?.messages?.logout_confirm ||
          "¿Estás seguro de que quieres cerrar sesión?"
      )
    ) {
      // Simulate logout
      alert(
        t.account?.messages?.logout_success || "Sesión cerrada exitosamente"
      );
      window.location.href = "/login";
    }
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        t.account?.messages?.delete_confirm ||
          "¿Estás COMPLETAMENTE seguro? Esta acción no se puede deshacer."
      )
    ) {
      alert(
        t.account?.messages?.delete_success ||
          "Cuenta eliminada. Lamentamos verte partir."
      );
      window.location.href = "/";
    }
  };

  const renderProfileTab = () => (
    <div className="profile-section">
      <div className="profile-header">
        <div className="profile-image-section">
          <div className="profile-image">
            {userData.profileImage ? (
              <img src={userData.profileImage} alt="Profile" />
            ) : (
              <div className="profile-placeholder">
                <span className="profile-initials">
                  {userData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            )}
          </div>
          <button className="change-photo-btn">
            {t.account?.actions?.change_photo || "📷 Cambiar Foto"}
          </button>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-value">{userData.totalReleases}</div>
            <div className="stat-label">
              {t.account?.stats?.releases || "Releases"}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              {(userData.totalStreams / 1000000).toFixed(1)}M
            </div>
            <div className="stat-label">
              {t.account?.stats?.streams || "Streams"}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              {Math.floor(
                (new Date() - new Date(userData.joinDate)) /
                  (1000 * 60 * 60 * 24 * 30)
              )}
            </div>
            <div className="stat-label">
              {t.account?.stats?.months || "Meses"}
            </div>
          </div>
        </div>
      </div>

      <div className="profile-form">
        <div className="form-grid">
          <div className="form-group">
            <label>{t.account?.fields?.name || "Nombre Completo"}</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>{t.account?.fields?.email || "Email"}</label>
            <input
              type="email"
              value={editData.email}
              onChange={(e) =>
                setEditData({ ...editData, email: e.target.value })
              }
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>{t.account?.fields?.phone || "Teléfono"}</label>
            <input
              type="tel"
              value={editData.phone}
              onChange={(e) =>
                setEditData({ ...editData, phone: e.target.value })
              }
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>{t.account?.fields?.country || "País"}</label>
            <select
              value={editData.country}
              onChange={(e) =>
                setEditData({ ...editData, country: e.target.value })
              }
              className="form-input"
            >
              <option value="Argentina">Argentina</option>
              <option value="México">México</option>
              <option value="España">España</option>
              <option value="Colombia">Colombia</option>
              <option value="Chile">Chile</option>
              <option value="Perú">Perú</option>
            </select>
          </div>

          <div className="form-group">
            <label>Ciudad</label>
            <input
              type="text"
              value={editData.city}
              onChange={(e) =>
                setEditData({ ...editData, city: e.target.value })
              }
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Sitio Web</label>
            <input
              type="url"
              value={editData.website}
              onChange={(e) =>
                setEditData({ ...editData, website: e.target.value })
              }
              className="form-input"
              placeholder="https://tu-sitio.com"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Biografía</label>
          <textarea
            value={editData.bio}
            onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
            className="form-textarea"
            rows="4"
            placeholder="Cuéntanos sobre ti y tu música..."
          />
        </div>

        <div className="social-section">
          <h3>Redes Sociales</h3>
          <div className="social-grid">
            <div className="form-group">
              <label>📷 Instagram</label>
              <input
                type="text"
                value={editData.instagram}
                onChange={(e) =>
                  setEditData({ ...editData, instagram: e.target.value })
                }
                className="form-input"
                placeholder="@tuusuario"
              />
            </div>

            <div className="form-group">
              <label>🐦 Twitter</label>
              <input
                type="text"
                value={editData.twitter}
                onChange={(e) =>
                  setEditData({ ...editData, twitter: e.target.value })
                }
                className="form-input"
                placeholder="@tuusuario"
              />
            </div>

            <div className="form-group">
              <label>🎵 Spotify</label>
              <input
                type="text"
                value={editData.spotify}
                onChange={(e) =>
                  setEditData({ ...editData, spotify: e.target.value })
                }
                className="form-input"
                placeholder="Tu nombre de artista"
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button
            onClick={handleSaveProfile}
            disabled={isLoading}
            className="save-btn"
          >
            {isLoading ? "💾 Guardando..." : "💾 Guardar Cambios"}
          </button>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="security-section">
      <div className="security-card">
        <h3>🔐 Cambiar Contraseña</h3>
        <p>Mantén tu cuenta segura con una contraseña fuerte</p>

        {!showPasswordChange ? (
          <button
            onClick={() => setShowPasswordChange(true)}
            className="change-password-btn"
          >
            Cambiar Contraseña
          </button>
        ) : (
          <div className="password-form">
            <div className="form-group">
              <label>Contraseña Actual</label>
              <input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    currentPassword: e.target.value,
                  })
                }
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Nueva Contraseña</label>
              <input
                type="password"
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Confirmar Nueva Contraseña</label>
              <input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value,
                  })
                }
                className="form-input"
              />
            </div>

            <div className="password-actions">
              <button
                onClick={handlePasswordChange}
                disabled={isLoading}
                className="save-btn"
              >
                {isLoading ? "Actualizando..." : "Actualizar Contraseña"}
              </button>
              <button
                onClick={() => setShowPasswordChange(false)}
                className="cancel-btn"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="security-card">
        <h3>📱 Autenticación de Dos Factores</h3>
        <p>Añade una capa extra de seguridad a tu cuenta</p>
        <div className="two-factor-status">
          <span className="status-indicator disabled">Deshabilitado</span>
          <button className="enable-2fa-btn">Habilitar 2FA</button>
        </div>
      </div>

      <div className="security-card">
        <h3>📋 Sesiones Activas</h3>
        <p>Revisa dónde está iniciada tu sesión</p>
        <div className="sessions-list">
          <div className="session-item current">
            <div className="session-info">
              <div className="session-device">💻 Windows - Chrome</div>
              <div className="session-location">Buenos Aires, Argentina</div>
              <div className="session-time">Sesión actual</div>
            </div>
            <span className="session-status current">Actual</span>
          </div>

          <div className="session-item">
            <div className="session-info">
              <div className="session-device">📱 iPhone - Safari</div>
              <div className="session-location">Buenos Aires, Argentina</div>
              <div className="session-time">Hace 2 días</div>
            </div>
            <button className="revoke-session-btn">Revocar</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="notifications-section">
      <div className="notifications-card">
        <h3>📧 Notificaciones por Email</h3>
        <p>Controla qué emails quieres recibir</p>

        <div className="notification-items">
          <div className="notification-item">
            <div className="notification-info">
              <div className="notification-title">Marketing y Promociones</div>
              <div className="notification-desc">
                Ofertas especiales y noticias del producto
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={notifications.emailMarketing}
                onChange={() => handleNotificationChange("emailMarketing")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <div className="notification-info">
              <div className="notification-title">
                Actualizaciones de Releases
              </div>
              <div className="notification-desc">
                Notificaciones sobre el estado de tus lanzamientos
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={notifications.releaseUpdates}
                onChange={() => handleNotificationChange("releaseUpdates")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <div className="notification-info">
              <div className="notification-title">Reportes de Analytics</div>
              <div className="notification-desc">
                Resúmenes semanales de rendimiento
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={notifications.analyticsReports}
                onChange={() => handleNotificationChange("analyticsReports")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <div className="notification-info">
              <div className="notification-title">Nuevas Funcionalidades</div>
              <div className="notification-desc">
                Anuncios sobre nuevas características
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={notifications.newFeatures}
                onChange={() => handleNotificationChange("newFeatures")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <div className="notification-info">
              <div className="notification-title">Alertas de Seguridad</div>
              <div className="notification-desc">
                Notificaciones importantes sobre tu cuenta
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={notifications.securityAlerts}
                onChange={() => handleNotificationChange("securityAlerts")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDangerZoneTab = () => (
    <div className="danger-section">
      <div className="danger-card">
        <h3>⚠️ Zona de Peligro</h3>
        <p>Estas acciones son irreversibles. Procede con precaución.</p>

        <div className="danger-actions">
          <div className="danger-item">
            <div className="danger-info">
              <div className="danger-title">Cerrar Sesión</div>
              <div className="danger-desc">
                Cierra tu sesión en este dispositivo
              </div>
            </div>
            <button onClick={handleLogout} className="logout-btn">
              🚪 Cerrar Sesión
            </button>
          </div>

          <div className="danger-item">
            <div className="danger-info">
              <div className="danger-title">Eliminar Cuenta</div>
              <div className="danger-desc">
                Elimina permanentemente tu cuenta y todos tus datos
              </div>
            </div>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="delete-btn"
            >
              🗑️ Eliminar Cuenta
            </button>
          </div>
        </div>

        {showDeleteConfirm && (
          <div className="delete-confirmation">
            <h4>¿Estás absolutamente seguro?</h4>
            <p>
              Esta acción eliminará permanentemente tu cuenta, todos tus
              releases, datos analíticos y no podrá ser revertida.
            </p>
            <div className="confirmation-actions">
              <button
                onClick={handleDeleteAccount}
                className="confirm-delete-btn"
              >
                Sí, eliminar mi cuenta
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="cancel-btn"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <main className="page">
        <div className="account-container">
          <div className="account-header">
            <h1>👤 Mi Cuenta</h1>
            <p>Gestiona tu perfil, seguridad y preferencias</p>
          </div>

          <div className="account-layout">
            <div className="account-sidebar">
              <nav className="account-nav">
                <button
                  className={`nav-item ${
                    activeTab === "profile" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  <span className="nav-icon">👤</span>
                  Perfil
                </button>

                <button
                  className={`nav-item ${
                    activeTab === "security" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("security")}
                >
                  <span className="nav-icon">🔐</span>
                  Seguridad
                </button>

                <button
                  className={`nav-item ${
                    activeTab === "notifications" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  <span className="nav-icon">🔔</span>
                  Notificaciones
                </button>

                <button
                  className={`nav-item ${
                    activeTab === "danger" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("danger")}
                >
                  <span className="nav-icon">⚠️</span>
                  Zona de Peligro
                </button>
              </nav>
            </div>

            <div className="account-content">
              {activeTab === "profile" && renderProfileTab()}
              {activeTab === "security" && renderSecurityTab()}
              {activeTab === "notifications" && renderNotificationsTab()}
              {activeTab === "danger" && renderDangerZoneTab()}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .account-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-8) var(--space-6);
        }

        .account-header {
          margin-bottom: var(--space-8);
        }

        .account-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .account-header p {
          font-size: 1.125rem;
          color: var(--gray-600);
        }

        .account-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: var(--space-8);
        }

        .account-sidebar {
          background: white;
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--gray-200);
          height: fit-content;
          position: sticky;
          top: var(--space-6);
        }

        .account-nav {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) var(--space-4);
          background: transparent;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-700);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .nav-item:hover {
          background: var(--gray-50);
          color: var(--gray-900);
        }

        .nav-item.active {
          background: var(--primary-50);
          color: var(--primary-600);
        }

        .nav-icon {
          font-size: 1.125rem;
        }

        .account-content {
          background: white;
          border-radius: var(--radius-xl);
          padding: var(--space-8);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--gray-200);
        }

        .profile-header {
          display: flex;
          gap: var(--space-8);
          margin-bottom: var(--space-8);
          padding-bottom: var(--space-8);
          border-bottom: 1px solid var(--gray-200);
        }

        .profile-image-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
        }

        .profile-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--primary-100);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-placeholder {
          width: 100%;
          height: 100%;
          background: var(--primary-500);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-initials {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
        }

        .change-photo-btn {
          padding: var(--space-2) var(--space-4);
          background: var(--gray-100);
          border: 1px solid var(--gray-300);
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-700);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .change-photo-btn:hover {
          background: var(--gray-200);
        }

        .profile-stats {
          display: flex;
          gap: var(--space-8);
          align-items: center;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: var(--space-1);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--gray-600);
          font-weight: 500;
        }

        .profile-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--gray-700);
        }

        .form-input,
        .form-textarea {
          padding: var(--space-3);
          border: 2px solid var(--gray-300);
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          color: var(--gray-900);
          transition: all 0.2s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary-500);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .social-section {
          margin-top: var(--space-6);
          padding-top: var(--space-6);
          border-top: 1px solid var(--gray-200);
        }

        .social-section h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          padding-top: var(--space-6);
          border-top: 1px solid var(--gray-200);
        }

        .save-btn {
          padding: var(--space-3) var(--space-6);
          background: var(--primary-500);
          color: white;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .save-btn:hover:not(:disabled) {
          background: var(--primary-600);
          transform: translateY(-1px);
        }

        .save-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .security-section,
        .notifications-section,
        .danger-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .security-card,
        .notifications-card,
        .danger-card {
          padding: var(--space-6);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          background: var(--gray-50);
        }

        .security-card h3,
        .notifications-card h3,
        .danger-card h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .security-card p,
        .notifications-card p,
        .danger-card p {
          color: var(--gray-600);
          margin-bottom: var(--space-4);
        }

        .change-password-btn,
        .enable-2fa-btn {
          padding: var(--space-3) var(--space-4);
          background: var(--primary-500);
          color: white;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .change-password-btn:hover,
        .enable-2fa-btn:hover {
          background: var(--primary-600);
        }

        .password-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .password-actions {
          display: flex;
          gap: var(--space-3);
        }

        .cancel-btn {
          padding: var(--space-3) var(--space-4);
          background: var(--gray-200);
          color: var(--gray-700);
          border: none;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cancel-btn:hover {
          background: var(--gray-300);
        }

        .two-factor-status {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .status-indicator {
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .status-indicator.disabled {
          background: var(--error-100);
          color: var(--error-700);
        }

        .sessions-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .session-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-4);
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--gray-200);
        }

        .session-item.current {
          border-color: var(--primary-300);
          background: var(--primary-25);
        }

        .session-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .session-device {
          font-weight: 500;
          color: var(--gray-900);
        }

        .session-location,
        .session-time {
          font-size: 0.875rem;
          color: var(--gray-600);
        }

        .session-status.current {
          padding: var(--space-1) var(--space-3);
          background: var(--primary-500);
          color: white;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .revoke-session-btn {
          padding: var(--space-2) var(--space-3);
          background: var(--error-500);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .revoke-session-btn:hover {
          background: var(--error-600);
        }

        .notification-items {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .notification-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-4);
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--gray-200);
        }

        .notification-info {
          flex: 1;
        }

        .notification-title {
          font-weight: 500;
          color: var(--gray-900);
          margin-bottom: var(--space-1);
        }

        .notification-desc {
          font-size: 0.875rem;
          color: var(--gray-600);
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 24px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--gray-300);
          transition: 0.2s;
          border-radius: 24px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.2s;
          border-radius: 50%;
        }

        input:checked + .toggle-slider {
          background-color: var(--primary-500);
        }

        input:checked + .toggle-slider:before {
          transform: translateX(24px);
        }

        .danger-actions {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .danger-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-4);
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--gray-200);
        }

        .danger-info {
          flex: 1;
        }

        .danger-title {
          font-weight: 500;
          color: var(--gray-900);
          margin-bottom: var(--space-1);
        }

        .danger-desc {
          font-size: 0.875rem;
          color: var(--gray-600);
        }

        .logout-btn {
          padding: var(--space-3) var(--space-4);
          background: var(--warning-500);
          color: white;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .logout-btn:hover {
          background: var(--warning-600);
        }

        .delete-btn {
          padding: var(--space-3) var(--space-4);
          background: var(--error-500);
          color: white;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .delete-btn:hover {
          background: var(--error-600);
        }

        .delete-confirmation {
          margin-top: var(--space-6);
          padding: var(--space-6);
          background: var(--error-50);
          border: 1px solid var(--error-200);
          border-radius: var(--radius-lg);
        }

        .delete-confirmation h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--error-900);
          margin-bottom: var(--space-2);
        }

        .delete-confirmation p {
          color: var(--error-700);
          margin-bottom: var(--space-4);
        }

        .confirmation-actions {
          display: flex;
          gap: var(--space-3);
        }

        .confirm-delete-btn {
          padding: var(--space-3) var(--space-4);
          background: var(--error-600);
          color: white;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .confirm-delete-btn:hover {
          background: var(--error-700);
        }

        @media (max-width: 768px) {
          .account-layout {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }

          .account-sidebar {
            position: static;
          }

          .account-nav {
            flex-direction: row;
            overflow-x: auto;
            gap: var(--space-1);
          }

          .nav-item {
            white-space: nowrap;
            min-width: fit-content;
          }

          .profile-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Account;
