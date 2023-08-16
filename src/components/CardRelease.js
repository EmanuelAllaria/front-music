import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { PayPalButton } from "react-paypal-button-v2";
import {
  getMysql,
  getMysqlMusics,
  postMysqlMusics,
  putMysqlMusics,
  deleteMysqlMusics,
  checkDuplicateMusicsTitle,
  putMysql,
} from "../db/DatabaseComponent";
import { resources } from "../i18n";

class CardRelease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releases: {},
      musics: [],
      editMusic: {},
      showModalPaypal: false,
      showModal: false,
      showModalEdit: false,
      paymentComplete: false,
      language: localStorage.getItem("language") || "es",
    };
    // this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
  }
  componentDidMount() {
    this.getReleases();
    this.getMusics();
  }

  getReleases = () => {
    const user_id = parseInt(localStorage.getItem("user_id"));
    const targetReleaseId = parseInt(window.location.href.split("/")[4]);

    getMysql(user_id)
      .then((response) => {
        const targetRelease = response.find(
          (release) => release.id === targetReleaseId
        );

        if (targetRelease) {
          this.setState({
            releases: targetRelease,
          });
        } else {
          console.error("Versión no encontrada.");
        }
      })
      .catch((error) => {
        console.error("Error getting releases:", error);
      });
  };

  getMusics = () => {
    const release_id = parseInt(window.location.href.split("/")[4]);

    getMysqlMusics(release_id)
      .then((response) => {
        this.setState({
          musics: response,
        });
      })
      .catch((error) => {
        console.error("Error getting releases:", error);
      });
  };

  sendMusic = async (event) => {
    event.preventDefault();

    const { musics } = this.state;
    const { releases } = this.state;
    const duplicateTitle = await checkDuplicateMusicsTitle(
      musics.titleMusic,
      releases.id
    );

    if (duplicateTitle) {
      alert(
        "Ya existe una musica con el mismo título. No se puede crear otro."
      );
      return;
    }

    const formData = new FormData();
    formData.append("release_id", releases.id);

    for (const key in musics) {
      if (musics[key] instanceof File) {
        formData.append(key, musics[key]);
      } else {
        formData.append(key, musics[key] || "");
      }
    }

    try {
      await postMysqlMusics(formData);
      window.location.reload();
    } catch (error) {
      console.error("Error sending music:", error);
    }
  };

  putMusic = async (id) => {
    console.log(id);
    const { editMusic } = this.state;

    try {
      await putMysqlMusics(id, { editMusic });
      window.location.reload();
    } catch (error) {
      console.error("Error sending music:", error);
    }
  };

  handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (!files) {
      this.setState((prevState) => ({
        musics: {
          ...prevState.musics,
          [name]: value,
        },
      }));
    } else {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);

      this.setState((prevState) => ({
        musics: {
          ...prevState.musics,
          [name]: file,
        },
        addMusic: fileUrl,
      }));
    }
  };

  handleEditInputChange = (event) => {
    const { name, value, files } = event.target;

    if (!files) {
      this.setState((prevState) => ({
        editMusic: {
          ...prevState.editMusic,
          [name]: value,
        },
      }));
      console.log(this.state.editMusic);
    }
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleEditClick = (music) => {
    this.setState({ editMusic: music, showModalEdit: true });
  };

  handleCloseEditClick = () => {
    this.setState({ showModalEdit: false });
  };

  handleDeleteClick = (id) => {
    const deleteConfirmed = window.confirm(
      "¿Estás seguro de borrar esta versión?"
    );
    if (deleteConfirmed) {
      deleteMysqlMusics(id);
      window.location.reload();
    }
  };

  renderAddMusicModal() {
    return this.state.showModal ? (
      <div className="add_modal">
        <h2>Agrega la música</h2>
        <InputField
          label="Titulo de la canción"
          id="titleMusic"
          name="titleMusic"
          value={this.state.musics.titleMusic || null}
          onChange={this.handleInputChange}
          required={true}
        />
        <InputField
          label="Verión de la canción"
          id="releaseMusic"
          name="releaseMusic"
          value={this.state.musics.releaseMusic || null}
          onChange={this.handleInputChange}
          required={false}
        />
        <InputField
          label="Agrega el artista secundario"
          id="addArtistSecondary"
          name="addArtistSecondary"
          value={this.state.musics.addArtistSecondary || null}
          onChange={this.handleInputChange}
          required={false}
        />
        <div className="form_music">
          <div className="conteiner_audios">
            {this.state.addMusic ? (
              <div className="audio_container">
                <label htmlFor="audio_music">
                  {this.state.musics.addMusic.name}
                </label>
                <audio controls id="audio_music">
                  <source src={this.state.addMusic} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ) : null}
          </div>
          <InputMusic
            id="add_music"
            label="Sube tu audio `.wav` aquí!"
            name="addMusic"
            onChange={(event) => this.handleInputChange(event)}
          />
        </div>
        <SelectField
          label="Ingrese el tipo de contenido"
          id="typeContent"
          name="typeContent"
          value={this.state.musics.typeContent || null}
          options={["Explisito", "Limpio"]}
          onChange={(event) => this.handleInputChange(event)}
          required={true}
        />
        <SelectField
          label="Estuvo esta canción en las tiendas?"
          id="wasInStores"
          name="wasInStores"
          value={this.state.musics.wasInStores || null}
          options={["Si", "No"]}
          onChange={this.handleInputChange}
          required={true}
        />
        {this.state.musics.wasInStores === "Si" ? (
          <>
            <InputField
              label="Agrega el codigo ISRC"
              id="codeISRC"
              name="codeISRC"
              value={this.state.musics.codeISRC || null}
              onChange={this.handleInputChange}
              required={true}
            />
            <SelectDate
              label="Ingrese la fecha en la que salió la canción"
              id="dateLaunchMusic"
              name="dateLaunchMusic"
              value={this.state.musics.dateLaunchMusic || null}
              onChange={(event) => this.handleInputChange(event)}
              required={true}
            />
          </>
        ) : null}

        <button onClick={this.sendMusic}>Guardar</button>
        <button onClick={this.closeModal}>Cancelar</button>
      </div>
    ) : null;
  }

  handleOpenPaypal = () => {
    this.setState({ showModalPaypal: true });
  };

  handleClosePaypal = () => {
    this.setState({ showModalPaypal: false });
  };

  handlePaymentSuccess = (details, release) => {
    console.log("Pago completado:", details);
    this.setState({
      paymentComplete: true,
    });
    putMysql(release.id, { pagado: 1 })
      .then(() => {
        this.handleSubmitEmail(release);
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.error("Error al actualizar release:", error);
      });
  };

  renderPaypalModal(release) {
    const { paymentComplete, showModalPaypal } = this.state;

    if (showModalPaypal) {
      return (
        <div className="button_paypal">
          <FontAwesomeIcon icon={faX} onClick={this.handleClosePaypal} />
          <h2>Pagar con PayPal</h2>
          {!paymentComplete ? (
            <PayPalButton
              id="paypal"
              amount="10.00"
              currency="USD"
              onSuccess={() => this.handlePaymentSuccess(release)}
              onError={(err) => console.log("error" + err)}
              options={{
                clientId:
                  "AYSWUWk3WY0kjWfvWAvyxXUwa_25hULgufIV8vMz6_bekBfp-Ew8x-qMgLc2ZHcBTXWFuSUsMf4Azcj-",
              }}
              ref={this.paypalButtonRef}
            />
          ) : (
            <>
              <p>Pago completado. ¡Gracias por tu compra!</p>
              <button onClick={this.closeModal}>Cerrar</button>
            </>
          )}
        </div>
      );
    } else {
      return null;
    }
  }

  renderEditMusicModal() {
    return this.state.showModalEdit ? (
      <div className="add_modal">
        <h2>Edita la música</h2>
        <InputField
          label="Titulo de la canción"
          id="titleMusic"
          name="titleMusic"
          value={this.state.editMusic.titleMusic || null}
          onChange={this.handleEditInputChange}
          required={true}
        />
        <InputField
          label="Verión de la canción"
          id="releaseMusic"
          name="releaseMusic"
          value={this.state.editMusic.releaseMusic || null}
          onChange={this.handleEditInputChange}
          required={false}
        />
        <InputField
          label="Edita el artista secundario"
          id="addArtistSecondary"
          name="addArtistSecondary"
          value={this.state.editMusic.addArtistSecondary || null}
          onChange={this.handleEditInputChange}
          required={false}
        />
        <SelectField
          label="Ingrese el tipo de contenido"
          id="typeContent"
          name="typeContent"
          value={this.state.editMusic.typeContent || null}
          options={["Explisito", "Limpio"]}
          onChange={(event) => this.handleEditInputChange(event)}
          required={true}
        />

        <button onClick={() => this.putMusic(this.state.editMusic.id)}>
          Guardar
        </button>
        <button onClick={() => this.handleCloseEditClick()}>Cancelar</button>
      </div>
    ) : null;
  }

  render() {
    const { releases, language } = this.state;
    if (!releases || !releases.dateLaunch) {
      return <div>Loading...</div>;
    }
    const translate = resources[language].translation;
    const typeRelease = releases.typeRelease === "Album" ? translate.createRelease.addTypeLaunch.optionQuarter : releases.typeRelease === "EP" ? translate.createRelease.addTypeLaunch.optionTertiary : releases.typeRelease === "Sencillo" ? translate.createRelease.addTypeLaunch.optionSecondary : null;

    console.log(typeRelease);

    return (
      <section>
        <div className="header_release">
          <div className="img_header_release">
            <img
              src={`http://localhost:5000/uploads/${releases.addImageLaunch}`}
              alt="Portada de la versión"
            />
          </div>
          <div className="name_header_release">
            <h1>{releases.titleRelease}</h1>
          </div>
        </div>
        <hr className="hr" />
        <div className="body_release">
          <div className="info_release">
            <div className="info_type_launch">
              <p>
                {translate.createMusic.typeRelease} <br />
                <span>{releases.typeLaunch}</span>
              </p>
            </div>
            <div className="info_artist">
              <p>
                {translate.createMusic.artist} <br />
                <span>{releases.addArtist}</span>
              </p>
            </div>
            <div className="info_genre">
              <p>
                {translate.createMusic.genreRelease} {releases.typeLaunch}:{" "}
                <br />
                <span>{releases.addGenres}</span>
              </p>
            </div>
            <div className="info_date_launch">
              <p>
                {translate.createMusic.dateLaunch} <br />
                <span>{releases.dateLaunch.split("T")[0]}</span>
              </p>
            </div>
            {this.state.releases.timeLaunch ? (
              <div className="info_time_launch">
                <p>
                  {translate.createMusic.timeLaunch} <br />
                  <span>{releases.timeLaunch}</span>
                </p>
              </div>
            ) : null}
            <div className="info_record_label">
              <p>
                {translate.createMusic.recordLabel} <br />
                <span>
                  {releases.recordLabel ? releases.recordLabel : "Rotz Empire"}
                </span>
              </p>
            </div>
            {this.state.releases.urlSpotify ? (
              <div className="info_time_launch">
                <p>
                  {translate.createMusic.urlSpotify} <br />
                  <span>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={releases.urlSpotify}
                    >
                      {releases.urlSpotify}
                    </a>
                  </span>
                </p>
              </div>
            ) : null}
            {this.state.releases.urlAppleMusic ? (
              <div className="info_time_launch">
                <p>
                  {translate.createMusic.urlAppleMusic} <br />
                  <span>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={releases.urlAppleMusic}
                    >
                      {releases.urlAppleMusic}
                    </a>
                  </span>
                </p>
              </div>
            ) : null}
            {this.state.releases.codeUPC ? (
              <div className="info_code_upc">
                <p>
                  {translate.createMusic.codeUPC} <br />
                  <span>{releases.codeUPC}</span>
                </p>
              </div>
            ) : null}
          </div>
          <div className="songs">
            {this.state.musics.length > 0 ? (
              this.state.musics.map((music, index) => (
                <section key={index}>
                  <div className="audio_container">
                    <div className="separador_audio">
                      <label htmlFor={`audio_${index}`}>
                        {music.titleMusic} - {music.releaseMusic}
                      </label>
                      <audio controls id={`audio_${index}`}>
                        <source
                          src={`http://localhost:5000/uploads/${music.addMusic}`}
                          type="audio/wav"
                        />
                        Your browser does not support the audio element.
                      </audio>
                      <div className="artist_secondary">
                        <p>
                          {music.addArtistSecondary
                            ? `Artista secundario: ${music.addArtistSecondary}`
                            : null}
                        </p>
                        <p>{translate.createMusic.typeMusic} {music.typeContent}</p>
                      </div>
                    </div>
                    <div className="card_info_icons">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        onClick={() => this.handleEditClick(music)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => this.handleDeleteClick(music.id)}
                      />
                    </div>
                  </div>
                </section>
              ))
            ) : (
              <div className="no_musics">
                <p style={{ textAlign: "center", marginTop: "50px" }}>
                  {translate.createMusic.noMusic}
                </p>
              </div>
            )}
          </div>
        </div>
        {(this.state.releases.typeLaunch === "Album" &&
          this.state.musics.length !== 15) ||
        (this.state.releases.typeLaunch === "MP" &&
          this.state.musics.length !== 8) ||
        (this.state.releases.typeLaunch === "Sencillo" &&
          this.state.musics.length !== 1) ? (
          <div className="add_musics" onClick={this.openModal}>
            +
          </div>
        ) : (
          <button className="pay_button" onClick={this.handleOpenPaypal}>
            Pagar
          </button>
        )}
        {this.renderEditMusicModal()}
        {this.renderAddMusicModal()}
        {this.renderPaypalModal(this.state.releases)}
      </section>
    );
  }
}

export default CardRelease;

function InputField({ label, id, name, value, onChange, required }) {
  return (
    <div className="form_input">
      <label htmlFor={id}>
        {label} {required ? <span style={{ color: "red" }}>*</span> : null}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

function InputMusic({ id, label, name, onChange }) {
  return (
    <div className="form_input">
      <label htmlFor={id}>{label}</label>
      <input
        required
        type="file"
        id={id}
        name={name}
        onChange={onChange}
        accept="audio/wav"
      />
    </div>
  );
}

function SelectField({ label, id, name, value, options, onChange, required }) {
  return (
    <div className="form_input">
      <label htmlFor={id}>
        {label} {required ? <span style={{ color: "red" }}>*</span> : null}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option disabled selected>
          Seleccione uno
        </option>
        {options.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
    </div>
  );
}

function SelectDate({ label, id, name, value, onChange }) {
  return (
    <div className="form_input">
      <label htmlFor={id}>
        {label} <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="date"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
