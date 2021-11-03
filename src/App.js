import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(0);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results))
      .catch((error) => console.error(error));
  }, [next]);
  const handleNext = () => {
    next !== null && setNext(next + 1);
  };
  const handleBack = () => {
    next >= 0 && setNext(next - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleNext}>Avançar</button>
        <button onClick={handleBack}>Voltar</button>
        <Characters characterList={characterList} />
      </header>
    </div>
  );
}

export default App;
