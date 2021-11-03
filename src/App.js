import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(0);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next + 1}`)
      .then((res) => res.json())
      .then((res) => {
        setCharacterList([...characterList, ...res.results]);
        if (res.info.next !== null) {
          setNext(next + 1);
        }
      })
      .catch((error) => console.error(error));
  }, [next]);
  console.log(characterList);
  return (
    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList} />
      </header>
    </div>
  );
}

export default App;
