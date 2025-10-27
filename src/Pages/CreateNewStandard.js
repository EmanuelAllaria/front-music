import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getTranslate } from "../utils/i18nHelpers";

function CreateNewStandard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    genre: "",
    subgenre: "",
    releaseDate: "",
    description: "",
    coverArt: null,
    audioFile: null,
    lyrics: "",
    isrc: "",
    language: "es",
    explicit: false,
    copyrightOwner: "",
    publishingRights: "",
  });

  const [dragActive, setDragActive] = useState({
    cover: false,
    audio: false,
  });

  const steps = [
    {
      id: 1,
      title: getTranslate().createRelease?.step_basic || "Información Básica",
      icon: "📝",
    },
    {
      id: 2,
      title: getTranslate().createRelease?.step_files || "Archivos",
      icon: "📁",
    },
    {
      id: 3,
      title:
        getTranslate().createRelease?.step_details || "Detalles Adicionales",
      icon: "⚙️",
    },
    {
      id: 4,
      title: getTranslate().createRelease?.step_review || "Revisión",
      icon: "✅",
    },
  ];

  const genres = [
    "Pop",
    "Rock",
    "Hip Hop",
    "R&B",
    "Electronic",
    "Jazz",
    "Classical",
    "Country",
    "Folk",
    "Reggae",
    "Blues",
    "Funk",
    "Latin",
    "World",
  ];

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const handleDrag = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive({ ...dragActive, [type]: true });
    } else if (e.type === "dragleave") {
      setDragActive({ ...dragActive, [type]: false });
    }
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive({ ...dragActive, [type]: false });

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const fieldName = type === "cover" ? "coverArt" : "audioFile";
      setFormData({ ...formData, [fieldName]: file });
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Release created:", formData);
      setIsLoading(false);
      // Handle successful creation redirect here
    }, 3000);
  };

  const renderStep1 = () => (
    <div className="step-content">
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            <span className="label-icon">🎵</span>
            {`${
              getTranslate().createMusic?.titleMusic || "Título de la Canción"
            } *`}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
            placeholder="Nombre de tu canción"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="artist" className="form-label">
            <span className="label-icon">🎤</span>
            {`${getTranslate().createMusic?.artist || "Artista Principal"} *`}
          </label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            className="form-input"
            placeholder="Nombre del artista"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre" className="form-label">
            <span className="label-icon">🎼</span>
            {`${
              getTranslate().createMusic?.genreRelease || "Género Musical"
            } *`}
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Seleccionar género</option>
            {genres.map((genre) => (
              <option key={genre} value={genre.toLowerCase()}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="releaseDate" className="form-label">
            <span className="label-icon">📅</span>
            {`${
              getTranslate().createMusic?.dateLaunch || "Fecha de Lanzamiento"
            } *`}
          </label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">
          <span className="label-icon">📄</span>
          {getTranslate().createRelease?.description || "Descripción"}
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-input"
          rows="4"
          placeholder="Cuéntanos sobre tu música, inspiración, colaboradores..."
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="step-content">
      <div className="upload-grid">
        <div className="upload-section">
          <h3>
            {`${
              getTranslate().createRelease?.cover_art || "Arte de Portada"
            } *`}
          </h3>
          <div
            className={`upload-area ${dragActive.cover ? "drag-active" : ""}`}
            onDragEnter={(e) => handleDrag(e, "cover")}
            onDragLeave={(e) => handleDrag(e, "cover")}
            onDragOver={(e) => handleDrag(e, "cover")}
            onDrop={(e) => handleDrop(e, "cover")}
          >
            {formData.coverArt ? (
              <div className="file-preview">
                <img
                  src={URL.createObjectURL(formData.coverArt)}
                  alt="Cover preview"
                  className="cover-preview"
                />
                <div className="file-info">
                  <span className="file-name">{formData.coverArt.name}</span>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline"
                    onClick={() => setFormData({ ...formData, coverArt: null })}
                  >
                    {getTranslate().createRelease?.change || "Cambiar"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="upload-placeholder">
                <span className="upload-icon">🖼️</span>
                <h4>
                  {getTranslate().createRelease?.drag_image_here ||
                    "Arrastra tu imagen aquí"}
                </h4>
                <p>
                  {getTranslate().createRelease?.or_click_to_select ||
                    "o haz clic para seleccionar"}
                </p>
                <small>
                  {getTranslate().createRelease?.cover_requirements_short ||
                    "JPG, PNG • Mínimo 3000x3000px"}
                </small>
                <input
                  type="file"
                  name="coverArt"
                  onChange={handleChange}
                  accept="image/*"
                  className="file-input"
                />
              </div>
            )}
          </div>
        </div>

        <div className="upload-section">
          <h3>Archivo de Audio *</h3>
          <div
            className={`upload-area ${dragActive.audio ? "drag-active" : ""}`}
            onDragEnter={(e) => handleDrag(e, "audio")}
            onDragLeave={(e) => handleDrag(e, "audio")}
            onDragOver={(e) => handleDrag(e, "audio")}
            onDrop={(e) => handleDrop(e, "audio")}
          >
            {formData.audioFile ? (
              <div className="file-preview">
                <div className="audio-preview">
                  <span className="file-icon">🎵</span>
                  <div className="file-info">
                    <span className="file-name">{formData.audioFile.name}</span>
                    <span className="file-size">
                      {(formData.audioFile.size / (1024 * 1024)).toFixed(2)} MB
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline"
                  onClick={() => setFormData({ ...formData, audioFile: null })}
                >
                  Cambiar
                </button>
              </div>
            ) : (
              <div className="upload-placeholder">
                <span className="upload-icon">🎵</span>
                <h4>Arrastra tu audio aquí</h4>
                <p>o haz clic para seleccionar</p>
                <small>WAV, FLAC, MP3 • Máximo 100MB</small>
                <input
                  type="file"
                  name="audioFile"
                  onChange={handleChange}
                  accept="audio/*"
                  className="file-input"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="step-content">
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="language" className="form-label">
            <span className="label-icon">🌍</span>
            Idioma
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="form-input"
          >
            <option value="es">Español</option>
            <option value="en">Inglés</option>
            <option value="fr">Francés</option>
            <option value="pt">Portugués</option>
            <option value="it">Italiano</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="isrc" className="form-label">
            <span className="label-icon">🔢</span>
            Código ISRC
          </label>
          <input
            type="text"
            id="isrc"
            name="isrc"
            value={formData.isrc}
            onChange={handleChange}
            className="form-input"
            placeholder="USRC17607839"
          />
        </div>

        <div className="form-group">
          <label htmlFor="copyrightOwner" className="form-label">
            <span className="label-icon">©️</span>
            Propietario del Copyright
          </label>
          <input
            type="text"
            id="copyrightOwner"
            name="copyrightOwner"
            value={formData.copyrightOwner}
            onChange={handleChange}
            className="form-input"
            placeholder="Nombre del propietario"
          />
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              name="explicit"
              checked={formData.explicit}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            <span className="checkbox-label">
              <span className="label-icon">🔞</span>
              Contenido Explícito
            </span>
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="lyrics" className="form-label">
          <span className="label-icon">📝</span>
          Letra de la Canción
        </label>
        <textarea
          id="lyrics"
          name="lyrics"
          value={formData.lyrics}
          onChange={handleChange}
          className="form-input"
          rows="8"
          placeholder="Escribe aquí la letra de tu canción..."
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="step-content">
      <div className="review-section">
        <h3>Revisa tu Release</h3>

        <div className="review-grid">
          <div className="review-card">
            <h4>Información Básica</h4>
            <div className="review-item">
              <strong>Título:</strong> {formData.title || "Sin título"}
            </div>
            <div className="review-item">
              <strong>Artista:</strong> {formData.artist || "Sin artista"}
            </div>
            <div className="review-item">
              <strong>Género:</strong> {formData.genre || "Sin género"}
            </div>
            <div className="review-item">
              <strong>Fecha:</strong> {formData.releaseDate || "Sin fecha"}
            </div>
          </div>

          <div className="review-card">
            <h4>Archivos</h4>
            <div className="review-item">
              <strong>Portada:</strong>{" "}
              {formData.coverArt ? "✅ Subida" : "❌ Faltante"}
            </div>
            <div className="review-item">
              <strong>Audio:</strong>{" "}
              {formData.audioFile ? "✅ Subido" : "❌ Faltante"}
            </div>
          </div>

          <div className="review-card">
            <h4>Detalles</h4>
            <div className="review-item">
              <strong>Idioma:</strong> {formData.language}
            </div>
            <div className="review-item">
              <strong>Contenido Explícito:</strong>{" "}
              {formData.explicit ? "Sí" : "No"}
            </div>
            <div className="review-item">
              <strong>ISRC:</strong> {formData.isrc || "No especificado"}
            </div>
          </div>
        </div>

        {formData.coverArt && (
          <div className="final-preview">
            <h4>Vista Previa</h4>
            <div className="release-preview">
              <img
                src={URL.createObjectURL(formData.coverArt)}
                alt="Release preview"
                className="preview-cover"
              />
              <div className="preview-info">
                <h5>{formData.title}</h5>
                <p>{formData.artist}</p>
                <span className="genre-tag">{formData.genre}</span>
              </div>
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
        <div className="create-container">
          <div className="create-header">
            <h1>🚀 Crear Nueva Release</h1>
            <p>Sube tu música y distribúyela globalmente en minutos</p>
          </div>

          <div className="progress-bar">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`progress-step ${
                  currentStep >= step.id ? "active" : ""
                } ${currentStep > step.id ? "completed" : ""}`}
              >
                <div className="step-circle">
                  {currentStep > step.id ? "✅" : step.icon}
                </div>
                <span className="step-title">{step.title}</span>
                {index < steps.length - 1 && <div className="step-line"></div>}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="create-form">
            <div className="form-container">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
            </div>

            <div className="form-actions">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={prevStep}
                >
                  ← Anterior
                </button>
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={nextStep}
                >
                  Siguiente →
                </button>
              ) : (
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${
                    isLoading ? "loading" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span>
                      Creando Release...
                    </>
                  ) : (
                    <>🎉 Crear Release</>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .create-container {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-8) var(--space-6);
        }

        .create-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .create-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .create-header p {
          font-size: 1.125rem;
          color: var(--gray-600);
        }

        .progress-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-12);
          padding: var(--space-6);
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--gray-200);
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          flex: 1;
        }

        .step-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          background: var(--gray-200);
          color: var(--gray-500);
          margin-bottom: var(--space-2);
          transition: all 0.3s ease;
        }

        .progress-step.active .step-circle {
          background: var(--primary-500);
          color: white;
        }

        .progress-step.completed .step-circle {
          background: var(--success-500);
          color: white;
        }

        .step-title {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-600);
          text-align: center;
        }

        .progress-step.active .step-title {
          color: var(--primary-600);
          font-weight: 600;
        }

        .step-line {
          position: absolute;
          top: 24px;
          left: 60%;
          right: -40%;
          height: 2px;
          background: var(--gray-300);
          z-index: -1;
        }

        .progress-step.completed .step-line {
          background: var(--success-500);
        }

        .create-form {
          background: white;
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--gray-200);
          overflow: hidden;
        }

        .form-container {
          padding: var(--space-8);
        }

        .step-content {
          min-height: 400px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-6);
          margin-bottom: var(--space-6);
        }

        .form-group {
          margin-bottom: var(--space-6);
        }

        .form-group.checkbox-group {
          grid-column: span 2;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-weight: 600;
          color: var(--gray-700);
          margin-bottom: var(--space-2);
          font-size: 0.875rem;
        }

        .label-icon {
          font-size: 1rem;
        }

        .form-input {
          width: 100%;
          padding: var(--space-4);
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

        .upload-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
        }

        .upload-section h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .upload-area {
          border: 2px dashed var(--gray-300);
          border-radius: var(--radius-xl);
          padding: var(--space-8);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .upload-area:hover,
        .upload-area.drag-active {
          border-color: var(--primary-500);
          background: var(--primary-50);
        }

        .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
        }

        .upload-icon {
          font-size: 3rem;
          margin-bottom: var(--space-2);
        }

        .upload-placeholder h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--gray-900);
          margin: 0;
        }

        .upload-placeholder p {
          color: var(--gray-600);
          margin: 0;
        }

        .upload-placeholder small {
          color: var(--gray-500);
          font-size: 0.75rem;
        }

        .file-input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        .file-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
        }

        .cover-preview {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }

        .audio-preview {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4);
          background: var(--gray-50);
          border-radius: var(--radius-lg);
          width: 100%;
        }

        .file-icon {
          font-size: 2rem;
        }

        .file-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          text-align: center;
        }

        .file-name {
          font-weight: 500;
          color: var(--gray-900);
          font-size: 0.875rem;
        }

        .file-size {
          font-size: 0.75rem;
          color: var(--gray-500);
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          cursor: pointer;
          gap: var(--space-3);
        }

        .checkbox-wrapper input {
          margin: 0;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-weight: 500;
          color: var(--gray-700);
        }

        .review-section h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-6);
          text-align: center;
        }

        .review-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-6);
          margin-bottom: var(--space-8);
        }

        .review-card {
          background: var(--gray-50);
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          border: 1px solid var(--gray-200);
        }

        .review-card h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .review-item {
          margin-bottom: var(--space-3);
          font-size: 0.875rem;
        }

        .review-item strong {
          color: var(--gray-700);
          margin-right: var(--space-2);
        }

        .final-preview {
          text-align: center;
        }

        .final-preview h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .release-preview {
          display: inline-flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-4);
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--gray-200);
        }

        .preview-cover {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: var(--radius-md);
        }

        .preview-info {
          text-align: left;
        }

        .preview-info h5 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--gray-900);
          margin: 0 0 var(--space-1) 0;
        }

        .preview-info p {
          font-size: 0.875rem;
          color: var(--gray-600);
          margin: 0 0 var(--space-2) 0;
        }

        .genre-tag {
          display: inline-block;
          padding: var(--space-1) var(--space-2);
          background: var(--primary-100);
          color: var(--primary-700);
          border-radius: var(--radius-md);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .form-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-6) var(--space-8);
          background: var(--gray-50);
          border-top: 1px solid var(--gray-200);
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: var(--space-2);
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .form-grid,
          .upload-grid {
            grid-template-columns: 1fr;
          }

          .progress-bar {
            flex-direction: column;
            gap: var(--space-4);
          }

          .step-line {
            display: none;
          }

          .form-actions {
            flex-direction: column;
            gap: var(--space-3);
          }
        }
      `}</style>
    </div>
  );
}

export default CreateNewStandard;
