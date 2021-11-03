import CharCard from "../CharCard";
import "./styles.css";
const Characters = ({ characterList }) => {
  return (
    <div>
      <h1>Meus personagens</h1>
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
