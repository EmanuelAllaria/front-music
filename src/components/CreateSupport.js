import React, { useState } from "react";
import { getTranslate } from "../utils/i18nHelpers";
import { InputField, SelectField, TextArea } from "./Inputs_Selects_etc";

function CreateSupport() {
  const translate = getTranslate();

  const [typeSupport, setTypeSupport] = useState(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleTypeSupportChange = (event) => {
    setTypeSupport(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleAudioChange = (event) => {
    setAudio(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(typeSupport);
    console.log(subject);
    console.log(message);
    console.log(image);
    console.log(audio);
  };

  return (
    <section id="CreateSupport">
      <div className="container_support">
        <div className="title_support">
          <h2>Nuevo Boleto</h2>
        </div>
        <div className="container_form_support">
          <form onSubmit={handleSubmit}>
            <SelectField
              label={translate.createRelease.addTypeLaunch.label}
              id="typeSupport"
              name="typeSupport"
              value={typeSupport}
              options={["Option 1", "Option 2", "Option 3"]}
              onChange={handleTypeSupportChange}
              required={true}
            />
            <InputField
              label={translate.support.subject}
              id="subject"
              name="subject"
              value={subject}
              onChange={handleSubjectChange}
              required={true}
            />
            <TextArea
              label={translate.support.message}
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              required={true}
            />
            <div className="image">
              <label htmlFor="image">{translate.support.image}</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/jpg, image/tiff, image/png"
                onChange={handleImageChange}
              />
            </div>
            <div className="audio">
              <label htmlFor="audio">{translate.support.audio}</label>
              <input
                type="file"
                id="audio"
                name="audio"
                accept="audio/wav"
                onChange={handleAudioChange}
              />
            </div>
            <input type="submit" value={translate.support.send} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateSupport;
