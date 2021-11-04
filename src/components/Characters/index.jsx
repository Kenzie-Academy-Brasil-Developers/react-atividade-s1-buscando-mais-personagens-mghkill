import CharCard from "../CharCard";
import "./styles.css";
const Characters = ({ characterList, handleNext, handleBack }) => {
  return (
    <div>
      <h1>Meus personagens</h1>
      <div className="App-Button">
        <button onClick={handleBack}>Voltar</button>
        <button onClick={handleNext}>Avançar</button>
      </div>
      <div className="conteiner__char">
        {characterList.map((char) => {
          const { id } = char;
          return <CharCard key={id} char={char} />;
        })}
      </div>
    </div>
  );
};
export default Characters;
