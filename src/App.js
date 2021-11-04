import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);
  const [isNext, setIsNext] = useState(true);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((res) => res.json())
      .then((res) => {
        setCharacterList(res.results);
        res.info.next === null && setIsNext(false);
      })
      .catch((error) => console.error(error));
  }, [next]);
  const handleNext = () => {
    isNext && setNext(next + 1);
  };
  const handleBack = () => {
    next >= 2 && setNext(next - 1);
    isNext === false && setIsNext(true);
  };
  console.log(next);
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
