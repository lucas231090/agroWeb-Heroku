import React from "react";
import "./styles.css";

function FarmItem({farm}) {
  return (
    <li className="fazenda-item">
      <header>
        <img src={farm.avatar_url} alt={farm.fazenda}/>
        <div className="fazenda-info">
          <strong>{farm.fazenda}</strong>
          <span>{farm.cultivos.join(", ")}</span>
        </div>
      </header>
      <p>{farm.bio}</p>
      <a href="https://dadosagrocgti.shinyapps.io/indicadoresAgro/">
        Acessar Indicadores
      </a>
    </li>
  );
}

export default FarmItem;
