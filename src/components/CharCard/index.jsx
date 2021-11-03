import "./styles.css";
const CharCard = ({ char }) => {
  const { name, image, species, status } = char;

  return (
    <div className={status + " " + "char__card"}>
      <h2>
        {name.length >= 15
          ? name
              .split("")
              .filter((e, i) => i < 15)
              .join("") + "..."
          : name}
      </h2>
      <img src={image} alt="ImageChar" />
      <span>{species}</span>
    </div>
  );
};
export default CharCard;
