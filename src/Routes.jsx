import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Clientes from "./pages/Clientes/Clientes";
import Form1 from "./pages/Form1/Form1";
import Form3 from "./pages/Form3/Form3";
import Form2 from "./pages/Form2/Form2";
import Sucesso from "./pages/Sucesso/Sucesso";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" element={<Form1 />} />
        <Route path="/dados-2" element={<Form2 />} />
        <Route path="/dados-finalizar" element={<Form3 />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
