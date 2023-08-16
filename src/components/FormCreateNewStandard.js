import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Modal from "react-modal";
import noImage from "../img/no-image.png";
import {
  postMysql,
  putMysqlPago,
  getMysql,
  checkDuplicateReleaseTitle,
} from "../db/DatabaseComponent";
import { resources } from "../i18n";

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
      language: localStorage.getItem("language") || "es",
    };
    this.paypalButtonRef = React.createRef();
    this.fileInputRef = React.createRef();
  }

  componentDidMount() {
    this.getReleases();
  }

  sendReleases = async (event) => {
    event.preventDefault();
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

  validateImage = () => {
    const fileInput = this.fileInputRef.current;
    const maxFileSizeMB = 36;
    const maxImageSize = 3000;
    const allowedExtensions = ["jpg", "jpeg", "png", "tiff"];

    const file = fileInput.files[0];

    if (file) {
      const fileSizeMB = file.size / (1024 * 1024);
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (fileSizeMB > maxFileSizeMB) {
        this.setState({
          errorMessage: "La imagen excede el tamaño máximo permitido.",
        });
        fileInput.value = "";
        return;
      }

      if (!allowedExtensions.includes(fileExtension)) {
        this.setState({
          errorMessage: `Formato de archivo no permitido. Por favor, elija una imagen en formato ${allowedExtensions.join(
            ", "
          )}`,
        });
        fileInput.value = "";
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (img.width > maxImageSize || img.height > maxImageSize) {
          this.setState({
            errorMessage: `La imagen debe tener un tamaño máximo de ${maxImageSize}x${maxImageSize} píxeles.`,
          });
          fileInput.value = "";
          return;
        }

        this.setState({ errorMessage: "" });
      };
      img.src = URL.createObjectURL(file);
    }
  };

  handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (!files) {
      this.setState((prevState) => ({
        releases: {
          ...prevState.releases,
          [name]: value,
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
      >
        <h2>Pagar con PayPal</h2>
        <PayPalButton
          id="paypal"
          amount="10.00"
          currency="USD"
          onSuccess={this.handlePaymentSuccess}
          onError={(err) => console.log("error" + err)}
          options={{
            clientId:
              "AYSWUWk3WY0kjWfvWAvyxXUwa_25hULgufIV8vMz6_bekBfp-Ew8x-qMgLc2ZHcBTXWFuSUsMf4Azcj-",
          }}
          ref={this.paypalButtonRef}
        />
        <button onClick={this.closeModal}>Cerrar</button>
      </Modal>
    );
  }

  render() {
    const { language } = this.state;
    const translate = resources[language].translation;
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
                    ref={this.fileInputRef}
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
                  options={[
                    translate.createRelease.addTypeLaunch.optionSecondary,
                    translate.createRelease.addTypeLaunch.optionTertiary,
                    translate.createRelease.addTypeLaunch.optionQuarter,
                  ]}
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
                <input
                  required
                  type="submit"
                  value={translate.createRelease.buttonNext}
                  onClick={this.validateImage}
                />
                {this.state.errorMessage && (
                  <p style={{ color: "red" }}>{this.state.errorMessage}</p>
                )}
              </div>
              {/* {this.renderPaypalModal(this.state.releases.addImage)} */}
            </form>
          </>
        )}
      </div>
    );
  }
}

export default FormCreateNewStandard;

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

function InputImage({ id, name, onChange, ref }) {
  return (
    <div className="form_input">
      <input
        required
        type="file"
        id={id}
        name={name}
        onChange={onChange}
        accept="image/png,image/jpg,image/tiff"
        ref={ref}
        title="Hola"
        placeholder="hola que tal"
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
