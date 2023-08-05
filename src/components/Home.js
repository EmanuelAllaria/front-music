import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import music from "../img/music.png";
import boombox from "../img/boombox.png";
import noImage from "../img/no-image.png";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releases: [
        {
          id: 555,
          image: noImage,
          title: "fff",
          author: "yo",
          year: 2023,
        },
        {
          id: 658,
          image: noImage,
          title: "ggg",
          author: "el",
          year: 2022,
        },
      ],
    };
  }

  componentDidMount() {}

  noImage() {
    if (this.state.releases.image) {
      return this.state.releases.image;
    } else {
      return noImage;
    }
  }

  render() {
    return (
      <section>
        <div className="text_dashboard">
          <h2>
            My <strong>Music</strong>
          </h2>
          <br />
          <p>
            Ready to get your music out there? <br />
            We've got you covered. Just select a release type to get started:
          </p>
        </div>
        <div className="cards_create_music">
          <div className="card left">
            <p>Standard Release</p>
            <br />
            <img src={music} alt={music} />
            <br />
            <Link to="/create-new-standard">Create New</Link>
          </div>
          <div className="card right">
            <p>Electronic / Dance Music Release</p>
            <br />
            <img src={boombox} alt={boombox} />
            <br />
            <Link to="/create-new-electronic">Create New</Link>
          </div>
        </div>
        <br />
        <br />
        <div className="my_releases">
          <div className="title_releases">
            <h2>
              My <strong>Releases</strong>
            </h2>
          </div>
          <div className="cards_releases">
            {this.state.releases ? (
              this.state.releases.map((release) => (
                <div className="card_release" key={release.id}>
                  <div className="card_img">
                    {/* <span>{release.complete ? "Complete" : "Incomplete"}</span> */}
                    <img src={release.image} alt="" />
                  </div>
                  <div className="card_info">
                    <div className="card_info_text">
                      <h3>{release.title}</h3>
                      <p>
                        Single by <strong>{release.author}</strong>
                      </p>
                      <span>{release.year}</span>
                    </div>
                    <div className="card_info_icons">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <FontAwesomeIcon icon={faTrash} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No releases</p>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
