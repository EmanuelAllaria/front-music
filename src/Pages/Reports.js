import React, { useState, useEffect } from "react";
import { getTranslate } from "../utils/i18nHelpers";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Reports() {
  const t = getTranslate();
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  // Simulated data
  const [analyticsData, setAnalyticsData] = useState({
    overview: {
      totalStreams: 0,
      totalRevenue: 0,
      totalPlays: 0,
      uniqueListeners: 0,
    },
    streams: [],
    revenue: [],
    platforms: [],
    topTracks: [],
    demographics: {},
  });

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setAnalyticsData({
        overview: {
          totalStreams: 1247832,
          totalRevenue: 3456.78,
          totalPlays: 892341,
          uniqueListeners: 45623,
        },
        streams: [
          { date: "2024-01-01", streams: 12450 },
          { date: "2024-01-02", streams: 15230 },
          { date: "2024-01-03", streams: 18920 },
          { date: "2024-01-04", streams: 14560 },
          { date: "2024-01-05", streams: 22340 },
          { date: "2024-01-06", streams: 19870 },
          { date: "2024-01-07", streams: 25120 },
        ],
        platforms: [
          {
            name: "Spotify",
            streams: 456789,
            percentage: 36.6,
            color: "#1DB954",
          },
          {
            name: "Apple Music",
            streams: 324567,
            percentage: 26.0,
            color: "#FA243C",
          },
          {
            name: "YouTube Music",
            streams: 234567,
            percentage: 18.8,
            color: "#FF0000",
          },
          {
            name: "Amazon Music",
            streams: 123456,
            percentage: 9.9,
            color: "#00A8E1",
          },
          { name: "Deezer", streams: 87654, percentage: 7.0, color: "#FEAA2D" },
          { name: "Otros", streams: 20799, percentage: 1.7, color: "#8B5CF6" },
        ],
        topTracks: [
          {
            title: "Midnight Dreams",
            artist: "Tu Artista",
            streams: 234567,
            revenue: 1234.56,
          },
          {
            title: "Summer Vibes",
            artist: "Tu Artista",
            streams: 198765,
            revenue: 987.65,
          },
          {
            title: "Electric Nights",
            artist: "Tu Artista",
            streams: 156789,
            revenue: 789.12,
          },
          {
            title: "Ocean Waves",
            artist: "Tu Artista",
            streams: 134567,
            revenue: 678.9,
          },
          {
            title: "City Lights",
            artist: "Tu Artista",
            streams: 123456,
            revenue: 567.89,
          },
        ],
        demographics: {
          countries: [
            { name: "Estados Unidos", percentage: 28.5, streams: 355634 },
            { name: "México", percentage: 22.1, streams: 275771 },
            { name: "España", percentage: 15.3, streams: 190779 },
            { name: "Argentina", percentage: 12.7, streams: 158475 },
            { name: "Colombia", percentage: 8.9, streams: 111077 },
            { name: "Otros", percentage: 12.5, streams: 155996 },
          ],
          ageGroups: [
            { range: "18-24", percentage: 32.1 },
            { range: "25-34", percentage: 28.7 },
            { range: "35-44", percentage: 19.4 },
            { range: "45-54", percentage: 12.3 },
            { range: "55+", percentage: 7.5 },
          ],
        },
      });
      setIsLoading(false);
    }, 2000);
  }, [selectedPeriod]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const renderOverview = () => (
    <div className="overview-grid">
      <div className="metric-card">
        <div className="metric-icon">🎵</div>
        <div className="metric-content">
          <h3>{t.reports?.total_streams || "Total Streams"}</h3>
          <div className="metric-value">
            {formatNumber(analyticsData.overview.totalStreams)}
          </div>
          <div className="metric-change positive">
            {t.reports?.change_prev_month_pos || "+12.5% vs mes anterior"}
          </div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon">💰</div>
        <div className="metric-content">
          <h3>{t.reports?.total_revenue || "Ingresos Totales"}</h3>
          <div className="metric-value">
            {formatCurrency(analyticsData.overview.totalRevenue)}
          </div>
          <div className="metric-change positive">
            {t.reports?.change_prev_month_pos || "+8.3% vs mes anterior"}
          </div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon">▶️</div>
        <div className="metric-content">
          <h3>{t.reports?.total_plays || "Reproducciones"}</h3>
          <div className="metric-value">
            {formatNumber(analyticsData.overview.totalPlays)}
          </div>
          <div className="metric-change positive">
            {t.reports?.change_prev_month_pos || "+15.7% vs mes anterior"}
          </div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon">👥</div>
        <div className="metric-content">
          <h3>{t.reports?.unique_listeners || "Oyentes Únicos"}</h3>
          <div className="metric-value">
            {formatNumber(analyticsData.overview.uniqueListeners)}
          </div>
          <div className="metric-change positive">
            {t.reports?.change_prev_month_pos || "+9.2% vs mes anterior"}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStreamsChart = () => (
    <div className="chart-container">
      <h3>{t.reports?.streams_per_day || "Streams por Día"}</h3>
      <div className="chart-area">
        <div className="chart-bars">
          {analyticsData.streams.map((day, index) => (
            <div key={index} className="chart-bar-container">
              <div
                className="chart-bar"
                style={{
                  height: `${
                    (day.streams /
                      Math.max(
                        ...analyticsData.streams.map((d) => d.streams)
                      )) *
                    100
                  }%`,
                }}
              >
                <div className="bar-tooltip">{formatNumber(day.streams)}</div>
              </div>
              <div className="chart-label">
                {new Date(day.date).toLocaleDateString("es-ES", {
                  weekday: "short",
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPlatforms = () => (
    <div className="platforms-section">
      <h3>
        {t.reports?.distribution_by_platform || "Distribución por Plataforma"}
      </h3>
      <div className="platforms-grid">
        <div className="platform-chart">
          <div className="donut-chart">
            {analyticsData.platforms.map((platform, index) => (
              <div
                key={index}
                className="donut-segment"
                style={{
                  "--percentage": platform.percentage,
                  "--color": platform.color,
                  "--rotation": analyticsData.platforms
                    .slice(0, index)
                    .reduce((acc, p) => acc + p.percentage * 3.6, 0),
                }}
              />
            ))}
            <div className="donut-center">
              <div className="donut-total">
                {formatNumber(
                  analyticsData.platforms.reduce((acc, p) => acc + p.streams, 0)
                )}
              </div>
              <div className="donut-label">
                {t.reports?.total_streams || "Total Streams"}
              </div>
            </div>
          </div>
        </div>

        <div className="platform-list">
          {analyticsData.platforms.map((platform, index) => (
            <div key={index} className="platform-item">
              <div className="platform-info">
                <div
                  className="platform-color"
                  style={{ backgroundColor: platform.color }}
                />
                <span className="platform-name">{platform.name}</span>
              </div>
              <div className="platform-stats">
                <div className="platform-streams">
                  {formatNumber(platform.streams)}
                </div>
                <div className="platform-percentage">
                  {platform.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTopTracks = () => (
    <div className="top-tracks-section">
      <h3>{t.reports?.top_tracks || "Top Canciones"}</h3>
      <div className="tracks-list">
        {analyticsData.topTracks.map((track, index) => (
          <div key={index} className="track-item">
            <div className="track-rank">#{index + 1}</div>
            <div className="track-info">
              <div className="track-title">{track.title}</div>
              <div className="track-artist">{track.artist}</div>
            </div>
            <div className="track-stats">
              <div className="track-streams">
                <span className="stat-icon">🎵</span>
                {formatNumber(track.streams)}
              </div>
              <div className="track-revenue">
                <span className="stat-icon">💰</span>
                {formatCurrency(track.revenue)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDemographics = () => (
    <div className="demographics-section">
      <div className="demographics-grid">
        <div className="demo-card">
          <h4>Países Principales</h4>
          <div className="countries-list">
            {analyticsData.demographics.countries?.map((country, index) => (
              <div key={index} className="country-item">
                <div className="country-info">
                  <span className="country-name">{country.name}</span>
                  <span className="country-percentage">
                    {country.percentage}%
                  </span>
                </div>
                <div className="country-bar">
                  <div
                    className="country-fill"
                    style={{ width: `${country.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-card">
          <h4>Grupos de Edad</h4>
          <div className="age-groups">
            {analyticsData.demographics.ageGroups?.map((group, index) => (
              <div key={index} className="age-group">
                <div className="age-range">{group.range}</div>
                <div className="age-bar">
                  <div
                    className="age-fill"
                    style={{ width: `${group.percentage}%` }}
                  />
                </div>
                <div className="age-percentage">{group.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <main className="page">
        <div className="reports-container">
          <div className="reports-header">
            <div className="header-content">
              <h1>📊 Analytics Dashboard</h1>
              <p>Analiza el rendimiento de tu música en tiempo real</p>
            </div>

            <div className="header-controls">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="period-selector"
              >
                <option value="7d">Últimos 7 días</option>
                <option value="30d">Últimos 30 días</option>
                <option value="90d">Últimos 90 días</option>
                <option value="1y">Último año</option>
              </select>

              <button className="export-btn">📥 Exportar Datos</button>
            </div>
          </div>

          <div className="reports-tabs">
            <button
              className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              📈 Resumen
            </button>
            <button
              className={`tab-btn ${activeTab === "streams" ? "active" : ""}`}
              onClick={() => setActiveTab("streams")}
            >
              🎵 Streams
            </button>
            <button
              className={`tab-btn ${activeTab === "platforms" ? "active" : ""}`}
              onClick={() => setActiveTab("platforms")}
            >
              🏪 Plataformas
            </button>
            <button
              className={`tab-btn ${activeTab === "tracks" ? "active" : ""}`}
              onClick={() => setActiveTab("tracks")}
            >
              🎤 Canciones
            </button>
            <button
              className={`tab-btn ${
                activeTab === "demographics" ? "active" : ""
              }`}
              onClick={() => setActiveTab("demographics")}
            >
              🌍 Audiencia
            </button>
          </div>

          {isLoading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <h3>Cargando datos analíticos...</h3>
              <p>Procesando información de todas las plataformas</p>
            </div>
          ) : (
            <div className="reports-content">
              {activeTab === "overview" && renderOverview()}
              {activeTab === "streams" && renderStreamsChart()}
              {activeTab === "platforms" && renderPlatforms()}
              {activeTab === "tracks" && renderTopTracks()}
              {activeTab === "demographics" && renderDemographics()}
            </div>
          )}
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .reports-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-8) var(--space-6);
        }

        .reports-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-8);
          gap: var(--space-6);
        }

        .header-content h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .header-content p {
          font-size: 1.125rem;
          color: var(--gray-600);
        }

        .header-controls {
          display: flex;
          gap: var(--space-3);
          align-items: center;
        }

        .period-selector {
          padding: var(--space-3) var(--space-4);
          border: 2px solid var(--gray-300);
          border-radius: var(--radius-lg);
          background: white;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-700);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .period-selector:focus {
          outline: none;
          border-color: var(--primary-500);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .export-btn {
          padding: var(--space-3) var(--space-4);
          background: var(--primary-500);
          color: white;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .export-btn:hover {
          background: var(--primary-600);
          transform: translateY(-1px);
        }

        .reports-tabs {
          display: flex;
          gap: var(--space-1);
          margin-bottom: var(--space-8);
          padding: var(--space-1);
          background: var(--gray-100);
          border-radius: var(--radius-xl);
          overflow-x: auto;
        }

        .tab-btn {
          padding: var(--space-3) var(--space-4);
          background: transparent;
          border: none;
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-600);
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .tab-btn.active {
          background: white;
          color: var(--primary-600);
          box-shadow: var(--shadow-sm);
        }

        .tab-btn:hover:not(.active) {
          color: var(--gray-900);
        }

        .loading-state {
          text-align: center;
          padding: var(--space-16) var(--space-8);
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 4px solid var(--gray-200);
          border-top: 4px solid var(--primary-500);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto var(--space-6);
        }

        .loading-state h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .loading-state p {
          color: var(--gray-600);
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-6);
        }

        .metric-card {
          background: white;
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--gray-200);
          display: flex;
          align-items: center;
          gap: var(--space-4);
          transition: all 0.2s ease;
        }

        .metric-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .metric-icon {
          font-size: 2.5rem;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-50);
          border-radius: var(--radius-lg);
        }

        .metric-content h3 {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-600);
          margin-bottom: var(--space-1);
        }

        .metric-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: var(--space-1);
        }

        .metric-change {
          font-size: 0.75rem;
          font-weight: 500;
        }

        .metric-change.positive {
          color: var(--success-600);
        }

        .chart-container {
          background: white;
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--gray-200);
        }

        .chart-container h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-6);
        }

        .chart-area {
          height: 300px;
          position: relative;
        }

        .chart-bars {
          display: flex;
          align-items: flex-end;
          height: 100%;
          gap: var(--space-2);
          padding: var(--space-4) 0;
        }

        .chart-bar-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }

        .chart-bar {
          width: 100%;
          background: linear-gradient(
            to top,
            var(--primary-500),
            var(--primary-400)
          );
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .chart-bar:hover {
          background: linear-gradient(
            to top,
            var(--primary-600),
            var(--primary-500)
          );
        }

        .bar-tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gray-900);
          color: white;
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-md);
          font-size: 0.75rem;
          font-weight: 500;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .chart-bar:hover .bar-tooltip {
          opacity: 1;
        }

        .chart-label {
          margin-top: var(--space-2);
          font-size: 0.75rem;
          color: var(--gray-600);
          font-weight: 500;
        }

        .platforms-section {
          background: white;
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--gray-200);
        }

        .platforms-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-6);
        }

        .platforms-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .platform-chart {
          display: flex;
          justify-content: center;
        }

        .donut-chart {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .donut-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .donut-total {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--gray-900);
        }

        .donut-label {
          font-size: 0.75rem;
          color: var(--gray-600);
          font-weight: 500;
        }

        .platform-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .platform-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-3);
          background: var(--gray-50);
          border-radius: var(--radius-lg);
        }

        .platform-info {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .platform-color {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .platform-name {
          font-weight: 500;
          color: var(--gray-900);
        }

        .platform-stats {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .platform-streams {
          font-weight: 600;
          color: var(--gray-700);
        }

        .platform-percentage {
          font-size: 0.875rem;
          color: var(--gray-600);
          min-width: 40px;
          text-align: right;
        }

        .top-tracks-section {
          background: white;
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--gray-200);
        }

        .top-tracks-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-6);
        }

        .tracks-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .track-item {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-4);
          background: var(--gray-50);
          border-radius: var(--radius-lg);
          transition: all 0.2s ease;
        }

        .track-item:hover {
          background: var(--gray-100);
        }

        .track-rank {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--primary-500);
          min-width: 32px;
        }

        .track-info {
          flex: 1;
        }

        .track-title {
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-1);
        }

        .track-artist {
          font-size: 0.875rem;
          color: var(--gray-600);
        }

        .track-stats {
          display: flex;
          gap: var(--space-6);
        }

        .track-streams,
        .track-revenue {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-700);
        }

        .stat-icon {
          font-size: 1rem;
        }

        .demographics-section {
          background: white;
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--gray-200);
        }

        .demographics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
        }

        .demo-card h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .countries-list,
        .age-groups {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .country-item,
        .age-group {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .country-info {
          display: flex;
          justify-content: space-between;
          min-width: 120px;
        }

        .country-name,
        .age-range {
          font-weight: 500;
          color: var(--gray-900);
          font-size: 0.875rem;
        }

        .country-percentage,
        .age-percentage {
          font-size: 0.75rem;
          color: var(--gray-600);
          font-weight: 500;
        }

        .country-bar,
        .age-bar {
          flex: 1;
          height: 8px;
          background: var(--gray-200);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .country-fill,
        .age-fill {
          height: 100%;
          background: linear-gradient(
            to right,
            var(--primary-500),
            var(--primary-400)
          );
          transition: width 0.3s ease;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .reports-header {
            flex-direction: column;
            align-items: stretch;
          }

          .header-controls {
            justify-content: space-between;
          }

          .platforms-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .demographics-grid {
            grid-template-columns: 1fr;
          }

          .track-stats {
            flex-direction: column;
            gap: var(--space-2);
            align-items: flex-end;
          }
        }
      `}</style>
    </div>
  );
}

export default Reports;
