import React, { Component } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Modal from "react-modal";
import noImage from "../img/no-image.png";
import {
  postMysql,
  putMysqlPago,
  getMysql,
  checkDuplicateReleaseTitle,
} from "../db/DatabaseComponent";
import { getTranslate } from "../utils/i18nHelpers";
import {
  InputField,
  InputImage,
  SelectField,
  SelectDate,
  SelectTime,
} from "./Inputs_Selects_etc";
import "./css/FormCreateNewStandard.css";

class FormCreateNewStandard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getReleases: [],
      releases: {},
      showPaypal: false,
      paymentComplete: false,
      showModal: false,
      addImageLaunch: "",
      errorMessage: "",
      errors: {},
      isSubmitting: false,
    };
    this.paypalButtonRef = React.createRef();
    // this.fileInputRef = React.createRef();
  }

  componentDidMount() {
    this.getReleases();
  }

  sendReleases = async (event) => {
    event.preventDefault();
    const isValid = this.validateForm();
    if (!isValid) return;
    this.setState({ isSubmitting: true });
    console.log(this.state);

    const { releases } = this.state;
    const duplicateTitle = await checkDuplicateReleaseTitle(
      releases.titleRelease
    );

    if (duplicateTitle) {
      alert(
        "Ya existe un release con el mismo título. No se puede crear otro."
      );
      return;
    }

    const formData = new FormData();
    formData.append("user_id", parseInt(localStorage.getItem("user_id")));
    formData.append("version", "estandar");
    formData.append("pagado", 0);

    for (const key in releases) {
      if (Array.isArray(releases[key])) {
        releases[key].forEach((item) => {
          formData.append(key, item.file);
        });
      } else {
        formData.append(key, releases[key] || "");
      }
    }

    try {
      const response = await postMysql(formData);
      window.location.href = `/edit-release/${response.data.id}`;
    } catch (error) {
      console.error("Error sending releases:", error);
      this.setState({
        errorMessage: "Ocurrió un error al enviar.",
        isSubmitting: false,
      });
    }
  };

  getReleases = () => {
    const user_id = parseInt(localStorage.getItem("user_id"));
    getMysql(user_id)
      .then((response) => {
        this.setState({
          getReleases: response,
        });
      })
      .catch((error) => {
        console.error("Error getting releases:", error);
      });
  };

  handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (!files) {
      this.setState((prevState) => ({
        releases: {
          ...prevState.releases,
          [name]: value,
        },
        errors: {
          ...prevState.errors,
          [name]: "",
        },
      }));
    } else {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);

      this.setState((prevState) => ({
        releases: {
          ...prevState.releases,
          [name]: file,
        },
        [name]: fileUrl,
        errors: {
          ...prevState.errors,
          [name]: "",
        },
      }));
    }
  };

  removeImage = (index) => {
    this.setState((prevState) => ({
      images: prevState.images.filter((_, i) => i !== index),
    }));
  };

  handlePaymentSuccess = (details) => {
    console.log("Pago completado:", details);
    this.setState({
      paymentComplete: true,
    });
    putMysqlPago(this.state.releases.addImage, { pagado: 1 })
      .then(() => {
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.error("Error al actualizar release:", error);
      });
  };

  resetForm = () => {
    this.setState({
      releases: {},
      addImageLaunch: "",
      errors: {},
      errorMessage: "",
    });
  };

  validateForm = () => {
    const { releases } = this.state;
    const requiredFields = [
      "titleRelease",
      "addArtist",
      "addGenres",
      "dateLaunch",
      "timeLaunch",
      "typeLaunch",
    ];
    const errors = {};
    requiredFields.forEach((field) => {
      if (!releases[field]) {
        errors[field] = "Este campo es obligatorio";
      }
    });
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  getPriceByType = () => {
    const type = this.state.releases.typeLaunch;
    if (type === "Single") return 10;
    if (type === "EP") return 25;
    if (type === "Album") return 40;
    return 0;
  };

  openModal = () => {
    this.setState({ showModal: true });
    console.log(this.state);
  };

  closeModal = () => {
    this.setState({ showModal: false });
    console.log(this.state);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.openModal();
  };

  renderPaypalModal() {
    return (
      <Modal
        isOpen={this.state.showModal}
        onRequestClose={this.closeModal}
        contentLabel="PayPal Modal"
        className="paypal-modal"
        overlayClassName="paypal-overlay"
      >
        <h2>Pagar con PayPal</h2>
        <span className="paypal-close" onClick={this.closeModal}>
          ✕
        </span>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AYSWUWk3WY0kjWfvWAvyxXUwa_25hULgufIV8vMz6_bekBfp-Ew8x-qMgLc2ZHcBTXWFuSUsMf4Azcj-",
            currency: "USD",
          }}
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: String(this.getPriceByType().toFixed(2)),
                      currency_code: "USD",
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                this.handlePaymentSuccess(details);
              });
            }}
            onError={(err) => console.log("error" + err)}
          />
        </PayPalScriptProvider>
        <button onClick={this.closeModal}>Cerrar</button>
      </Modal>
    );
  }

  render() {
    const translate = getTranslate();
    return (
      <div className="form_create_standard">
        {this.state.paymentComplete ? (
          <div>
            <h2>Pago Completado</h2>
          </div>
        ) : (
          <>
            <div className="title_create_release">
              <h2>
                <strong>{translate.createRelease.title}</strong>
              </h2>
            </div>
            <div className="form-card">
              <form onSubmit={this.sendReleases}>
                <div className="title_form_info">
                  <h2>
                    <span
                      style={{
                        padding: "2px 10px",
                        background: "#12c1ae",
                        color: "#fff",
                      }}
                    >
                      1
                    </span>{" "}
                    <span
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      {translate.createRelease.subtitlePrimary}
                    </span>
                  </h2>
                </div>
                <div className="form_information">
                  <InputField
                    label={translate.createRelease.titleRelease}
                    id="titleRelease"
                    name="titleRelease"
                    value={this.state.releases.titleRelease || null}
                    onChange={(event) => this.handleInputChange(event)}
                    required={true}
                  />
                  <div className="copy">
                    <InputField
                      label={translate.createRelease.addArtist}
                      id="addArtist"
                      name="addArtist"
                      value={this.state.releases.addArtist || null}
                      onChange={(event) => this.handleInputChange(event)}
                      required={true}
                    />
                    <InputField
                      label={translate.createRelease.addGenres}
                      id="addGenres"
                      name="addGenres"
                      value={this.state.releases.addGenres || ""}
                      onChange={(event) => this.handleInputChange(event)}
                      required={true}
                    />
                  </div>
                  <div className="prod">
                    <SelectDate
                      label={translate.createRelease.addDate}
                      id="dateLaunch"
                      name="dateLaunch"
                      value={this.state.releases.dateLaunch || null}
                      onChange={(event) => this.handleInputChange(event)}
                    />
                    <SelectTime
                      label={translate.createRelease.addTime}
                      id="timeLaunch"
                      name="timeLaunch"
                      value={this.state.releases.timeLaunch || null}
                      onChange={(event) => this.handleInputChange(event)}
                    />
                  </div>
                </div>
                <div className="title_form_info">
                  <h2>
                    <span
                      style={{
                        padding: "2px 10px",
                        background: "#12c1ae",
                        color: "#fff",
                      }}
                    >
                      2
                    </span>{" "}
                    <span
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      {translate.createRelease.subtitleSecondary}{" "}
                      <span style={{ color: "red" }}>*</span>
                    </span>
                  </h2>
                </div>
                <div className="container_image">
                  <p>{translate.createRelease.messageImage}</p>
                  <div className="form_artwork">
                    <img
                      src={
                        this.state.addImageLaunch
                          ? this.state.addImageLaunch
                          : noImage
                      }
                      alt="Imagen de la versión"
                    />
                    <InputImage
                      id="addImageLaunch"
                      name="addImageLaunch"
                      onChange={(event) => this.handleInputChange(event)}
                      // ref={this.fileInputRef}
                    />
                  </div>
                </div>
                <div className="title_form_info">
                  <h2>
                    <span
                      style={{
                        padding: "2px 10px",
                        background: "#12c1ae",
                        color: "#fff",
                      }}
                    >
                      3
                    </span>{" "}
                    <span
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      {translate.createRelease.subtitleTertiary}
                    </span>
                  </h2>
                </div>
                <div className="form_genres">
                  <InputField
                    label={translate.createRelease.addUrlSpotify}
                    id="urlSpotify"
                    name="urlSpotify"
                    value={this.state.releases.urlSpotify || null}
                    onChange={(event) => this.handleInputChange(event)}
                    required={false}
                  />
                  <InputField
                    label={translate.createRelease.addUrlAppleMusic}
                    id="urlAppleMusic"
                    name="urlAppleMusic"
                    value={this.state.releases.urlAppleMusic || null}
                    onChange={(event) => this.handleInputChange(event)}
                    required={false}
                  />
                  <InputField
                    label={translate.createRelease.addRecordLabel}
                    id="recordLabel"
                    name="recordLabel"
                    value={this.state.releases.recordLabel || null}
                    onChange={(event) => this.handleInputChange(event)}
                    required={false}
                  />
                  <SelectField
                    label={translate.createRelease.addTypeLaunch.label}
                    id="typeLaunch"
                    name="typeLaunch"
                    value={this.state.releases.typeLaunch || null}
                    options={["Single", "EP", "Album"]}
                    onChange={(event) => this.handleInputChange(event)}
                    required={true}
                  />
                  <InputField
                    label={translate.createRelease.addCodeUPC}
                    id="codeUPC"
                    name="codeUPC"
                    value={this.state.releases.codeUPC || null}
                    onChange={(event) => this.handleInputChange(event)}
                    required={false}
                  />
                </div>
                <div className="form_input form_submit">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={this.resetForm}
                  >
                    Limpiar
                  </button>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={this.state.isSubmitting}
                  >
                    {this.state.isSubmitting ? (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span className="loader" /> Enviando...
                      </span>
                    ) : (
                      translate.createRelease.buttonNext
                    )}
                  </button>
                  {this.state.errorMessage && (
                    <p className="error">{this.state.errorMessage}</p>
                  )}
                  <button
                    className="btn"
                    type="button"
                    onClick={this.openModal}
                  >
                    Pagar ahora
                  </button>
                </div>
                {/* {this.renderPaypalModal(this.state.releases.addImage)} */}
              </form>
            </div>
            <aside className="summary-panel">
              <h3>Resumen</h3>
              <div className="summary-row">
                <span>Tipo</span>
                <span>{this.state.releases.typeLaunch || "—"}</span>
              </div>
              <div className="summary-row">
                <span>Artista</span>
                <span>{this.state.releases.addArtist || "—"}</span>
              </div>
              <div className="summary-row">
                <span>Título</span>
                <span>{this.state.releases.titleRelease || "—"}</span>
              </div>
              <div className="summary-total">
                Total: ${this.getPriceByType().toFixed(2)} USD
              </div>
            </aside>
            {this.renderPaypalModal()}
          </>
        )}
      </div>
    );
  }
}

export default FormCreateNewStandard;
