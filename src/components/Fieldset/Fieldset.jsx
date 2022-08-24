import React from "react";
import S from "./Fieldset.module.css";

const Fieldset = (props) => {

  return (
    <fieldset className={S.container}>
      <label>{props.title}</label>
      <input
        className={S.formInput}
        type={props.type}
        onChange={props.onchange}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
      />
    </fieldset>
  );
};

export default Fieldset;
