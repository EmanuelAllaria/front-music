import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardRelease from "./CardRelease";
import { getTranslate } from "../utils/i18nHelpers";

// Using centralized i18n helpers; no local language map needed here.

function Home() {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  // Centralized i18n access via helpers

  useEffect(() => {
    // Simulate loading releases with delay for better UX
    setTimeout(() => {
      const mockReleases = [
        {
          id: 1,
          title: "Mi Primer Álbum",
          artist: "Artista Demo",
          cover: "/img/no-image.png",
          status: "published",
          date: "2024-01-15",
          streams: "12.5K",
          revenue: "$245.80",
        },
        {
          id: 2,
          title: "Single de Prueba",
          artist: "Otro Artista",
          cover: "/img/no-image.png",
          status: "draft",
          date: "2024-01-20",
          streams: "0",
          revenue: "$0.00",
        },
        {
          id: 3,
          title: "EP Experimental",
          artist: "Nuevo Artista",
          cover: "/img/no-image.png",
          status: "published",
          date: "2024-01-10",
          streams: "8.2K",
          revenue: "$156.40",
        },
      ];
      setReleases(mockReleases);
      setLoading(false);
    }, 800);
  }, []);

  const stats = {
    totalReleases: releases.length,
    publishedReleases: releases.filter((r) => r.status === "published").length,
    totalStreams: releases.reduce(
      (sum, r) => sum + parseFloat(r.streams?.replace("K", "000") || "0"),
      0
    ),
    totalRevenue: releases.reduce(
      (sum, r) => sum + parseFloat(r.revenue?.replace("$", "") || "0"),
      0
    ),
  };

  return (
    <div className="page">
      <div className="container">
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "var(--space-8)",
            flexWrap: "wrap",
            gap: "var(--space-4)",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                color: "var(--gray-900)",
                marginBottom: "var(--space-2)",
              }}
            >
              {getTranslate().dashboard}
            </h1>
            <p
              style={{
                color: "var(--gray-600)",
                fontSize: "1.125rem",
              }}
            >
              {getTranslate().dashboard_subtitle ||
                "Gestiona tus lanzamientos musicales"}
            </p>
          </div>
          <Link
            to="/create-new-version"
            className="btn btn-primary btn-lg animate-fade-in"
          >
            <span>✨</span>
            {getTranslate().create_new_version}
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid animate-fade-in">
          <div className="stat-card">
            <span className="stat-number">{stats.totalReleases}</span>
            <span className="stat-label">
              {getTranslate().total_releases || "Total Lanzamientos"}
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.publishedReleases}</span>
            <span className="stat-label">
              {getTranslate().published || "Publicados"}
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              {(stats.totalStreams / 1000).toFixed(1)}K
            </span>
            <span className="stat-label">
              {getTranslate().total_streams || "Total Streams"}
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              ${stats.totalRevenue.toFixed(2)}
            </span>
            <span className="stat-label">
              {getTranslate().revenue || "Ingresos"}
            </span>
          </div>
        </div>

        {/* Releases Section */}
        <div style={{ marginBottom: "var(--space-6)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "var(--space-6)",
            }}
          >
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "700",
                color: "var(--gray-900)",
              }}
            >
              {getTranslate().your_releases || "Tus Lanzamientos"}
            </h2>
            {releases.length > 0 && (
              <Link to="/reports" className="btn btn-outline">
                <span>📊</span>
                {getTranslate().view_reports || "Ver Reportes"}
              </Link>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="card animate-fade-in"
                  style={{
                    background:
                      "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s infinite",
                  }}
                >
                  <div className="card-body">
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        background: "#e5e7eb",
                        borderRadius: "var(--radius-lg)",
                        marginBottom: "var(--space-4)",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "20px",
                        background: "#e5e7eb",
                        borderRadius: "var(--radius-md)",
                        marginBottom: "var(--space-2)",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "16px",
                        background: "#e5e7eb",
                        borderRadius: "var(--radius-md)",
                        width: "70%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ) : releases.length > 0 ? (
            <div className="grid grid-cols-3 animate-fade-in">
              {releases.map((release, index) => (
                <div
                  key={release.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardRelease release={release} />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="animate-fade-in"
              style={{ textAlign: "center", padding: "var(--space-16)" }}
            >
              <div
                style={{
                  fontSize: "4rem",
                  marginBottom: "var(--space-6)",
                }}
              >
                🎵
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "var(--gray-900)",
                  marginBottom: "var(--space-4)",
                }}
              >
                {getTranslate().no_releases || "No hay lanzamientos"}
              </h3>
              <p
                style={{
                  color: "var(--gray-600)",
                  fontSize: "1.125rem",
                  marginBottom: "var(--space-8)",
                  maxWidth: "500px",
                  margin: "0 auto var(--space-8)",
                }}
              >
                {getTranslate().create_first_release ||
                  "Crea tu primer lanzamiento para comenzar a distribuir tu música en todas las plataformas digitales."}
              </p>
              <Link to="/create-new-version" className="btn btn-primary btn-lg">
                <span>🚀</span>
                {getTranslate().create_new_version}
              </Link>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
