import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);
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
    next >= 2 && setNext(next - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Characters
          characterList={characterList}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </header>
    </div>
  );
}

export default App;
