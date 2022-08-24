import React, { useEffect, useState } from "react";
import S from "./Clientes.module.css";

const Clients = () => {
  const [client, setClient] = useState({
    name: "",
    last: "",
    email: "",
    cep: "",
    address: "",
    tel: "",
  });

  async function handleClients() {
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json();
    const results = json.results[0];
    setClient([
      {
        name: results.name.first,
        last: results.name.last,
        email: results.email,
        cep: results.location.postcode,
        address: results.location.street,
        tel: results.cell,
      },
    ]);
  }

  useEffect(() => {
    handleClients();
  }, []);

  return (
    <div className={S.container}>
      <div>
        <article>
          <small>Nome:</small>
          <p>
            {!client && client.nome} {!!client && client.last}
          </p>
        </article>
        <article>
          <small>Email:</small>
          <p>{!client && client.email}</p>
        </article>
        <article>
          <small>CEP:</small>
          <p>{!client && client.cep}</p>
        </article>
        <article>
          <small>Endereço:</small>
          <p>{!client && client.address}</p>
        </article>
        <article>
          <small>Telefone:</small>
          <p>{!client && client.cell}</p>
        </article>
      </div>
    </div>
  );
};

export default Clients;
