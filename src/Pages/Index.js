import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { getTranslate } from "../utils/i18nHelpers";

function Index() {
  return (
    <div>
      <Header />
      <main className="page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="hero-gradient"></div>
            <div className="hero-pattern"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge animate-fade-in">
                <span>🎵</span>
                <span>{getTranslate().index?.new_music_era}</span>
              </div>
              <h1 className="hero-title animate-fade-in">
                {getTranslate().index?.hero_title_prefix}
                <span className="gradient-text">
                  {" "}
                  {getTranslate().index?.hero_title_suffix}
                </span>
              </h1>
              <p className="hero-subtitle animate-fade-in">
                {getTranslate().index?.hero_subtitle}
              </p>
              <div className="hero-actions animate-fade-in">
                <Link
                  to="/dashboard"
                  className="btn btn-primary btn-lg hero-btn"
                >
                  <span>🚀</span>
                  {getTranslate().index?.start_now}
                </Link>
                <Link
                  to="/create-new-version"
                  className="btn btn-outline btn-lg hero-btn"
                >
                  <span>✨</span>
                  {getTranslate().index?.create_release}
                </Link>
              </div>
              <div className="hero-stats animate-fade-in">
                <div className="stat">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">
                    {getTranslate().index?.stat_platforms_label}
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">
                    {getTranslate().index?.stat_artists_label}
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">
                    {getTranslate().index?.stat_songs_label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {getTranslate().index?.why_choose_platform}
              </h2>
              <p className="section-subtitle">
                {getTranslate().index?.features_subtitle}
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card animate-fade-in">
                <div className="feature-icon">🌍</div>
                <h3>{getTranslate().index?.feature_distribution_title}</h3>
                <p>{getTranslate().index?.feature_distribution_desc}</p>
              </div>
              <div className="feature-card animate-fade-in">
                <div className="feature-icon">📊</div>
                <h3>{getTranslate().index?.feature_analytics_title}</h3>
                <p>{getTranslate().index?.feature_analytics_desc}</p>
              </div>
              <div className="feature-card animate-fade-in">
                <div className="feature-icon">💰</div>
                <h3>{getTranslate().index?.feature_revenue_title}</h3>
                <p>{getTranslate().index?.feature_revenue_desc}</p>
              </div>
              <div className="feature-card animate-fade-in">
                <div className="feature-icon">⚡</div>
                <h3>{getTranslate().index?.feature_fast_title}</h3>
                <p>{getTranslate().index?.feature_fast_desc}</p>
              </div>
              <div className="feature-card animate-fade-in">
                <div className="feature-icon">🎨</div>
                <h3>{getTranslate().index?.feature_creative_title}</h3>
                <p>{getTranslate().index?.feature_creative_desc}</p>
              </div>
              <div className="feature-card animate-fade-in">
                <div className="feature-icon">🛡️</div>
                <h3>{getTranslate().index?.feature_protection_title}</h3>
                <p>{getTranslate().index?.feature_protection_desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">{getTranslate().index?.cta_title}</h2>
              <p className="cta-subtitle">
                {getTranslate().index?.cta_subtitle}
              </p>
              <div className="cta-actions">
                <Link to="/register" className="btn btn-primary btn-lg">
                  <span>🎯</span>
                  {getTranslate().index?.cta_create_account}
                </Link>
                <Link to="/support" className="btn btn-outline btn-lg">
                  <span>💬</span>
                  {getTranslate().index?.cta_support}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: var(--space-20) 0;
          background: linear-gradient(
            135deg,
            var(--gray-900) 0%,
            var(--gray-800) 100%
          );
          color: white;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            var(--primary-600) 0%,
            var(--secondary-600) 100%
          );
          opacity: 0.9;
        }

        .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(
              circle at 25% 25%,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(255, 255, 255, 0.05) 0%,
              transparent 50%
            );
          background-size: 100px 100px;
        }

        .hero-content {
          text-align: center;
          color: white;
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-16) 0;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: var(--space-6);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: var(--space-6);
        }

        .gradient-text {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: var(--space-8);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: var(--space-12);
        }

        .hero-btn {
          min-width: 200px;
          display: flex;
          align-items: center;
          gap: var(--space-2);
          justify-content: center;
        }

        .hero-stats {
          display: flex;
          gap: var(--space-8);
          justify-content: center;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: #fbbf24;
        }

        .stat-label {
          display: block;
          font-size: 0.875rem;
          opacity: 0.8;
          margin-top: var(--space-1);
        }

        .features-section {
          padding: var(--space-20) 0;
          background: var(--gray-50);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-16);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: var(--gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-8);
        }

        .feature-card {
          background: white;
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid var(--gray-200);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-2xl);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: var(--space-4);
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-3);
        }

        .feature-card p {
          color: var(--gray-600);
          line-height: 1.6;
        }

        .cta-section {
          padding: var(--space-20) 0;
          background: linear-gradient(
            135deg,
            var(--gray-900) 0%,
            var(--gray-800) 100%
          );
          color: white;
        }

        .cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: var(--space-4);
        }

        .cta-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: var(--space-8);
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-btn {
            width: 100%;
            max-width: 300px;
          }

          .hero-stats {
            gap: var(--space-6);
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-actions .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}

export default Index;
