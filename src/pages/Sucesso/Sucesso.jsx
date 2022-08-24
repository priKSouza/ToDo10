import React from "react";
import S from "./Sucesso.module.css";
import { FiUserCheck } from "react-icons/fi"

const Success = () => {

  return (
    <div className={S.container}>
      <h3 className={S.sucesso}>Cadastro finalizado!</h3>
      <FiUserCheck size="40px" color="#FFF000"/>
    </div>
  );
};

export default Success;
