import React from "react";
import "./Input.css";

function isInvalid(props) {
  const { valid, touched, shouldValidate } = props;
  return !valid && shouldValidate && touched;
}

const Input = (props) => {
  const { type = "text", label, value, errorMessage, onChange } = props;
  const cls = ["Input"];
  const htmlFor = `${type} - ${Math.random()}`;

  if (isInvalid(props)) {
    cls.push("invalid");
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={htmlFor} value={value} onChange={onChange} />

      {isInvalid(props) ? (
        <span>{errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};

export default Input;
