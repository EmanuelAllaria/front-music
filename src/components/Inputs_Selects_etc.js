import { getTranslate } from "../utils/i18nHelpers";

export function InputField({ label, id, name, value, onChange, required }) {
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

export function InputImage({ id, name, onChange }) {
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

export function SelectField({
  label,
  id,
  name,
  value,
  options,
  onChange,
  required,
}) {
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
          {getTranslate().createRelease.addTypeLaunch.optionPrimary}
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

export function SelectDate({ label, id, name, value, onChange }) {
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

export function SelectTime({ label, id, name, value, onChange }) {
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

export function InputMusic({ id, label, name, onChange }) {
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

export function TextArea({ label, id, name, value, onChange, required }) {
  return (
    <div className="form_input">
      <label htmlFor={id}>
        {label} <span style={{ color: "red" }}>*</span>
      </label>
      <textarea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
}
