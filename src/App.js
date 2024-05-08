import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return <div className="conteiner"></div>;
  <Header />;
  <Body />;
  <Footer />;
}
function Header() {
  return (
    <header className="header">
      <h1>Meu Perfil </h1>
    </header>
  );
}

function Body() {
  return (
    <header className="header">
      <h1>Detalhes do Perfil </h1>
    </header>
  );
}

function Footer() {
  return (
    <header className="header">
      <h1>Detalhes de Contato do Meu Perfil </h1>
    </header>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
