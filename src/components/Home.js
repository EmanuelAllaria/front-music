import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import Modal from "react-modal";
import music from "../img/music.png";
import noImage from "../img/no-image.png";
import {
  getMysql,
  putMysql,
  deleteMysql,
  getMysqlMusics,
} from "../db/DatabaseComponent";
import { resources } from "../i18n";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releases: [],
      editReleases: [],
      musics: [],
      selectedRelease: null,
      addImageLaunch: "",
      showModal: false,
      showPaypal: false,
      paymentComplete: false,
      language: localStorage.getItem("language") || "es",
    };
    this.paypalButtonRef = React.createRef();
    this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
  }

  componentDidMount() {
    this.getReleases();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.releases.length > 0 &&
      this.state.releases !== prevState.releases
    ) {
      this.getMusics();
    }
  }

  getReleases = () => {
    const user_id = parseInt(localStorage.getItem("user_id"));
    getMysql(user_id)
      .then((response) => {
        this.setState({
          releases: response,
        });
      })
      .catch((error) => {
        console.error("Error getting releases:", error);
      });
  };

  handleSubmitEmail = (release) => {
    const emailData = {
      to_email: "allariaemanuel19@gmail.com",
      subject: "Email Prueba",
      id: release.id,
      titulo: release.title,
      artista: release.addArtist,
      image: `http://localhost:5000/uploads/${release.addImage}`,
      audio: `http://localhost:5000/uploads/${release.addMusic}`,
      prodAnio: release.prodYear,
      genero_primaro: release.addGenresPrimary,
      genero_secundario: release.addGenresSecondary,
      lenguaje: release.addLanguage,
    };

    const {
      to_email,
      subject,
      id,
      titulo,
      artista,
      image,
      audio,
      prodAnio,
      genero_primaro,
      genero_secundario,
      lenguaje,
    } = emailData;

    emailjs
      .send(
        "service_y3iv04r",
        "template_fv1o4o9",
        {
          to_email,
          subject,
          id,
          titulo,
          artista,
          image,
          audio,
          prodAnio,
          genero_primaro,
          genero_secundario,
          lenguaje,
        },
        "8sYcUQAoCMWibNu7S"
      )
      .then(
        (result) => {
          console.log("Correo electrónico enviado con éxito", result.text);
        },
        (error) => {
          console.error("Error al enviar el correo electrónico", error);
        }
      );
  };

  getMusics = () => {
    const { releases } = this.state;
    const musicPromises = releases.map(async (release) => {
      try {
        return await getMysqlMusics(release.id);
      } catch (error) {
        console.error("Error getting musics:", error);
        return [];
      }
    });

    Promise.all(musicPromises)
      .then((responses) => {
        const allMusics = responses.flat();
        this.setState({
          musics: allMusics,
        });
      })
      .catch((error) => {
        console.error("Error getting musics:", error);
      });
  };

  sendReleases = async (id, event) => {
    const { editReleases } = this.state;
    const formData = new FormData();

    for (const key in editReleases) {
      if (editReleases[key] instanceof File) {
        formData.append(key, editReleases[key]);
      } else {
        formData.append(key, editReleases[key] || "");
      }
    }

    try {
      await putMysql(id, formData);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error sending releases:", error);
    }
  };

  handleDeleteClick = (id) => {
    const { language } = this.state;
    const translate = resources[language].translation;
    const deleteConfirmed = window.confirm(translate.deleteRelease.alert);
    if (deleteConfirmed) {
      deleteMysql(id);
      window.location.reload();
    }
  };

  handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (!files) {
      this.setState((prevState) => ({
        editReleases: {
          ...prevState.editReleases,
          [name]: value,
        },
      }));
    } else {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);

      this.setState((prevState) => ({
        editReleases: {
          ...prevState.editReleases,
          [name]: file,
        },
        [name]: fileUrl,
      }));
    }
  };

  handleEditClick = (release) => {
    this.setState({
      showModal: true,
      selectedRelease: release,
      editReleases: release,
    });
  };

  closeEditModal = () => {
    this.setState({
      showModal: false,
      selectedRelease: null,
    });
  };

  handleAddMusics = (release) => {
    window.location.href = `/edit-release/${release.id}`;
  };

  noImage() {
    if (this.state.releases.image) {
      return this.state.releases.image;
    } else {
      return noImage;
    }
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal, editReleases, addImageLaunch, language } = this.state;
    const translate = resources[language].translation;
    const typeLaunch = this.state.releases.map((release) =>
      release.typeLaunch === "Album"
        ? translate.createRelease.addTypeLaunch.optionQuarter
        : release.typeLaunch === "EP"
        ? translate.createRelease.addTypeLaunch.optionTertiary
        : release.typeLaunch === "Sencillo"
        ? translate.createRelease.addTypeLaunch.optionSecondary
        : null
    );
    return (
      <section>
        <div className="text_dashboard">
          <h2>
            {translate.home.title[0]} <strong>{translate.home.title[1]}</strong>
          </h2>
          <br />
          <p style={{ fontWeight: 700, fontSize: "20px" }}>
            {translate.home.subtitle[0]} <br />
            <br />
            {translate.home.subtitle[1]}
          </p>
        </div>
        <div className="cards_create_music">
          <div className="card left">
            <p>{translate.home.titleReleaseCreate}</p>
            <br />
            <img src={music} alt={music} />
            <br />
            <Link to="/create-new-version">
              {translate.home.buttonReleaseCreate}
            </Link>
          </div>
        </div>
        <br />
        <br />
        <div className="my_releases">
          <div className="title_releases">
            <h2>
              {translate.home.titleSectionRelease[0]}{" "}
              <strong>{translate.home.titleSectionRelease[1]}</strong>
            </h2>
          </div>
          <div className="cards_releases">
            {this.state.releases.length > 0 ? (
              this.state.releases.map((release, index) => (
                <div className="card_release" key={index}>
                  <div className="card_img">
                    <span>{typeLaunch}</span>
                    <div className="img_card">
                      <img
                        key={index}
                        src={`http://localhost:5000/uploads/${release.addImageLaunch}`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card_info">
                    <div className="card_info_text">
                      <h3>{release.titleRelease}</h3>
                      <p>
                        {typeLaunch} {translate.home.typeCard}
                        <br /> <strong>{release.addArtist}</strong>
                      </p>
                      <span>{release.dateLauch} </span>
                    </div>
                    <div className="card_info_icons">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        onClick={() => this.handleEditClick(release)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() =>
                          this.handleDeleteClick(release.id, release)
                        }
                      />
                    </div>
                  </div>
                  <div
                    className="no_pagado"
                    onClick={() => this.handleAddMusics(release)}
                  >
                    <p>{translate.home.butonAddMusics}</p>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                  {this.state.showModal ? (
                    <Modal
                      isOpen={showModal}
                      onRequestClose={this.closeEditModal}
                      contentLabel="Edit Modal"
                    >
                      <div className="component1"></div>
                      <div className="edit_modal">
                        <h2>{translate.editRelease.title}</h2>
                        <InputField
                          label={translate.createRelease.titleRelease}
                          id="titleRelease"
                          name="titleRelease"
                          value={editReleases.titleRelease || null}
                          onChange={(event) => this.handleInputChange(event)}
                          required={true}
                        />
                        <div className="copy">
                          <InputField
                            label={translate.createRelease.addArtist}
                            id="addArtist"
                            name="addArtist"
                            value={editReleases.addArtist || null}
                            onChange={(event) => this.handleInputChange(event)}
                            required={true}
                          />
                          <InputField
                            label={translate.createRelease.addGenres}
                            id="addGenres"
                            name="addGenres"
                            value={editReleases.addGenres || ""}
                            onChange={(event) => this.handleInputChange(event)}
                            required={true}
                          />
                        </div>
                        <div className="prod">
                          <SelectDate
                            label={translate.createRelease.addDate}
                            id="dateLaunch"
                            name="dateLaunch"
                            value={editReleases.dateLaunch || null}
                            onChange={(event) => this.handleInputChange(event)}
                          />
                          <SelectTime
                            label={translate.createRelease.addTime}
                            id="timeLaunch"
                            name="timeLaunch"
                            value={editReleases.timeLaunch || null}
                            onChange={(event) => this.handleInputChange(event)}
                          />
                        </div>
                        <div className="container_image">
                          <p>{translate.createRelease.messageImage}</p>
                          <div className="form_artwork">
                            <img
                              src={addImageLaunch ? addImageLaunch : noImage}
                              alt="Imagen de la versión"
                            />
                            <InputImage
                              id="addImageLaunch"
                              name="addImageLaunch"
                              onChange={(event) =>
                                this.handleInputChange(event)
                              }
                            />
                          </div>
                        </div>
                        <div className="form_genres">
                          <InputField
                            label={translate.createRelease.addUrlSpotify}
                            id="urlSpotify"
                            name="urlSpotify"
                            value={editReleases.urlSpotify || null}
                            onChange={(event) => this.handleInputChange(event)}
                            required={false}
                          />
                          <InputField
                            label={translate.createRelease.addUrlAppleMusic}
                            id="urlAppleMusic"
                            name="urlAppleMusic"
                            value={editReleases.urlAppleMusic || null}
                            onChange={(event) => this.handleInputChange(event)}
                            required={false}
                          />
                          <InputField
                            label={translate.createRelease.addRecordLabel}
                            id="recordLabel"
                            name="recordLabel"
                            value={editReleases.recordLabel || null}
                            onChange={(event) => this.handleInputChange(event)}
                            required={false}
                          />
                          <SelectField
                            label={translate.createRelease.addTypeLaunch.label}
                            id="typeLaunch"
                            name="typeLaunch"
                            value={editReleases.typeLaunch || null}
                            options={[
                              translate.createRelease.addTypeLaunch
                                .optionSecondary,
                              translate.createRelease.addTypeLaunch
                                .optionTertiary,
                              translate.createRelease.addTypeLaunch
                                .optionQuarter,
                            ]}
                            onChange={(event) => this.handleInputChange(event)}
                            required={true}
                          />
                          <InputField
                            label={translate.createRelease.addCodeUPC}
                            id="codeUPC"
                            name="codeUPC"
                            value={editReleases.codeUPC || null}
                            onChange={(event) => this.handleInputChange(event)}
                            required={false}
                          />
                        </div>
                        <button onClick={() => this.sendReleases(release.id)}>
                          {translate.editRelease.button}
                        </button>
                      </div>
                    </Modal>
                  ) : null}
                </div>
              ))
            ) : (
              <div className="no_releases">
                <p>
                  <strong>{translate.home.noReleases}</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

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

function InputImage({ id, name, onChange }) {
  return (
    <div className="form_input">
      <input
        required
        type="file"
        id={id}
        name={name}
        onChange={onChange}
        accept="image/png,image/jpg,image/jpeg"
      />
    </div>
  );
}

function SelectField({ label, id, name, value, options, onChange, required }) {
  const language = localStorage.getItem("language") || "es";
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
          {resources[language].translation.createRelease.addTypeLaunch.label}
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

function SelectTime({ label, id, name, value, onChange }) {
  return (
    <div className="form_input">
      <label htmlFor={id}>{label}</label>
      <input
        type="time"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
