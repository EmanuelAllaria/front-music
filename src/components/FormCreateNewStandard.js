import React, { Component } from "react";
import noImage from "../img/no-image.png";
import { postMysql } from "../db/DatabaseComponent";

class FormCreateNewStandard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releases: [],
    };
  }

  handleInputChange = (event) => {
    const { name, value, files } = event.target;
    this.setState(
      (prevState) => ({
        releases: {
          ...prevState.releases,
          [name]: files ? files[0] : value,
        },
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  addNewRelease = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      releases: {
        ...prevState.releases,
        [Object.keys(prevState.releases).length + 1]: {
          title: "",
          copyHolder: "",
          copyYear: "",
          prodHolder: "",
          prodYear: "",
          addArtist: "",
          addGenresPrimary: "",
          addGenresSecondary: "",
          addLanguage: "",
          addImage: null,
        },
      },
    }));
    console.log(this.state);
    postMysql(this.state.releases)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // addNewrelease = (event) => {
  //   event.preventDefault();
  //   this.setState((prevState) => ({
  //     releases: [
  //       ...prevState.releases,
  //       {
  //         title: "",
  //         copyHolder: "",
  //         copyYear: "",
  //         prodHolder: "",
  //         prodYear: "",
  //         addArtist: "",
  //         addGenresPrimary: "",
  //         addGenresSecondary: "",
  //         addLanguage: "",
  //         addImage: null,
  //       },
  //     ],
  //   }));
  //   console.log(this.state.releases);
  // };

  render() {
    const currentYear = new Date().getFullYear();
    const allDates = currentYear - 1969;

    return (
      <div className="form_create_standard">
        <div className="title_create_release">
          <h2>
            <strong>Create the release</strong>
          </h2>
        </div>
        <form onSubmit={this.addNewRelease}>
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
                  fontWeight: "400",
                }}
              >
                Release
              </span>{" "}
              Information
            </h2>
          </div>
          <div className="form_information">
            <InputField
              label="Title of album, EP or single"
              id="title"
              name="title"
              value={this.state.releases.title || ""}
              onChange={(event) => this.handleInputChange(event)}
            />
            <div className="copy">
              <InputField
                label="Copyright Holder"
                id="copy_holder"
                name="copyHolder"
                value={this.state.releases.copyHolder || ""}
                onChange={(event) => this.handleInputChange(event)}
              />
              <SelectField
                label="Copyright Year"
                id="copy_year"
                name="copyYear"
                value={this.state.releases.copyYear || ""}
                options={Array.from(
                  { length: allDates },
                  (_, i) => currentYear - i
                )}
                onChange={(event) => this.handleInputChange(event)}
              />
            </div>
            <div className="prod">
              <InputField
                label="Production Holder"
                id="prod_holder"
                name="prodHolder"
                value={this.state.releases.prodHolder || ""}
                onChange={(event) => this.handleInputChange(event)}
              />
              <SelectField
                label="Production Year"
                id="prod_year"
                name="prodYear"
                value={this.state.releases.prodYear || ""}
                options={Array.from(
                  { length: allDates },
                  (_, i) => currentYear - i
                )}
                onChange={(event) => this.handleInputChange(event)}
              />
            </div>
            <InputField
              label="Add release artists"
              id="add_art"
              name="addArtist"
              value={this.state.releases.addArtist || ""}
              onChange={(event) => this.handleInputChange(event)}
            />
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
                  fontWeight: "400",
                }}
              >
                Release
              </span>{" "}
              Artwork
            </h2>
          </div>
          <div className="form_artwork">
            <img
              src={
                this.state.releases.addImage
                  ? URL.createObjectURL(this.state.releases.addImage)
                  : noImage
              }
              alt=""
            />
            <InputFile
              id="add_img"
              name="addImage"
              onChange={(event) => this.handleInputChange(event)}
            />
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
                  fontWeight: "400",
                }}
              >
                Release
              </span>{" "}
              Genres
            </h2>
          </div>
          <div className="form_genres">
            <div className="form_input">
              <label htmlFor="add_genres_primary">Primary genre</label>
              <select
                id="add_genres_primary"
                name="addGenresPrimary"
                value={this.state.releases.addGenresPrimary || ""}
                onChange={(event) => this.handleInputChange(event)}
              >
                <option key="" value="Option1">
                  Opcion 1
                </option>
                <option key="" value="Option2">
                  Opcion 2
                </option>
                <option key="" value="Option3">
                  Opcion 3
                </option>
              </select>
            </div>
            <div className="form_input">
              <label htmlFor="add_genres_secondary">Secondary genre</label>
              <select
                id="add_genres_secondary"
                name="addGenresSecondary"
                value={this.state.releases.addGenresSecondary || ""}
                onChange={(event) => this.handleInputChange(event)}
              >
                <option key="" value="Option1">
                  Opcion 1
                </option>
                <option key="" value="Option2">
                  Opcion 2
                </option>
                <option key="" value="Option3">
                  Opcion 3
                </option>
              </select>
            </div>
            <div className="form_input">
              <label htmlFor="add_language">Language</label>
              <select
                id="add_language"
                name="addLanguage"
                value={this.state.releases.addLanguage || ""}
                onChange={(event) => this.handleInputChange(event)}
              >
                <option key="" value="Option1">
                  Opcion 1
                </option>
                <option key="" value="Option2">
                  Opcion 2
                </option>
                <option key="" value="Option3">
                  Opcion 3
                </option>
              </select>
            </div>
          </div>
          <div className="form_input form_submit">
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    );
  }
}

export default FormCreateNewStandard;

function InputField({ label, id, name, value, onChange }) {
  return (
    <div className="form_input">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function InputFile({ id, name, onChange }) {
  return (
    <div className="form_input">
      <input type="file" id={id} name={name} onChange={onChange} />
    </div>
  );
}

function SelectField({ label, id, name, value, options, onChange }) {
  return (
    <div className="form_input">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {options.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
    </div>
  );
}
