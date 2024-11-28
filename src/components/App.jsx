import "../scss/App.scss";
import CharacterList from "./CharacterList";
//import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../services/getCharactersFromApi";
import Filters from "./filters/Filters";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharactersFromApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilterName = (valueInput) => {
    console.log(valueInput);
  };

  return (
    <>
      <header>
        <h1>Rick And Morty</h1>
      </header>
      <main>
        <Filters onChangeName={handleFilterName} />
        <CharacterList characters={characters} />
      </main>
    </>
  );
}

export default App;
