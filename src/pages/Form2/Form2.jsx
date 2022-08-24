import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fieldset from "../../components/Fieldset/Fieldset";
import Button from "../../components/Button/Button";
import S from "./Form2.module.css";

const FormTwo = () => {
  const [values, setValues] = useState({
    cep: "",
    address: "",
    complement: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    type: "",
    message: "",
  });

  const handleChange = (target, key) => {
    const value = target.value;
    setValues({
      ...values,
      [key]: value,
    });
    console.log(values);
    validate(setErrors({ type: "success", message: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setValues({
      cep: values.cep,
      address: values.address,
      complement: values.complement,
    });

    console.log(values);
    console.log(errors);

    navigate("/dados-finalizar");
  };

  function validate() {
    if (!values.cep.trim()) {
      return setErrors({
        type: "error",
        message: "Por favor, preencha o CEP!",
      });
    } else if (values.cep.length != 8) {
      return setErrors({
        type: "error",
        message: "CEP inválido!",
      });
    }

    if (!values.address.trim()) {
      return setErrors({
        type: "error",
        message: "Por favor, preencha o endereço!",
      });
    }

    if (!values.complement) {
      return setErrors({
        type: "error",
        message: "Por favor, preencha o complemento!",
      });
    }

    return true;
  }

  return (
    <div className={S.container}>
      <div className={S.fieldContainer}>
        <Fieldset
          title="CEP:"
          type="number"
          name="cep"
          placeholder="Escreva seu CEP"
          value={values.cep}
          onchange={({ target }) => handleChange(target, "cep")}
        />
        {errors.type === "error" && <p>{errors.message}</p>}
      </div>
      <div className={S.fieldContainer}>
        <Fieldset
          title="Endereço:"
          type="text"
          name="address"
          placeholder="Escreva seu endereço"
          value={values.address}
          onchange={({ target }) => handleChange(target, "address")}
        />
        {errors.type === "error" && <p>{errors.message}</p>}
      </div>
      <div className={S.fieldContainer}>
        <Fieldset
          title="Complemento:"
          type="text"
          name="complement"
          placeholder="Escreva o complemento"
          value={values.complement}
          onchange={({ target }) => handleChange(target, "complement")}
        />
        {errors.type === "error" && <p>{errors.message}</p>}
      </div>
      <Button text="Próximo" onclick={handleSubmit} />
    </div>
  );
};

export default FormTwo;
