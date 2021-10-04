//yarn start

import React, { useEffect, useState } from "react";

import "./global.css";
import "./Cadastro.css";
import "./Sidebar.css";
import "./Main.css";
import FarmItem from "./components/FarmItem";
import FarmForm from "./components/FarmForm";
//import "./services/api";
import api from "./services/api";

function App() {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    async function loadFazendas() {
      const response = await api.get("/farms");

      setFarms(response.data);
    }

    loadFazendas();
  }, []);

  async function handleAddFazenda(data) {
  
    const response = await api.post("/farms", data);

    setFarms([...farms, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong> Cadastro de Fazenda </strong>
        <FarmForm onSubmit={handleAddFazenda} />
      </aside>
      <main>
        <ul>
          {farms.map((farm) => (
            <FarmItem key={farm._id} farm={farm} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
